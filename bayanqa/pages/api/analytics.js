function getTopService(serviceCounts = {}) {
  return Object.entries(serviceCounts).sort((a, b) => b[1] - a[1])[0] || ["Document", 0];
}

function buildFallbackSummary(payload = {}) {
  const totalFeedback = Number(payload.totalFeedback || 0);
  const [topService, topCount] = getTopService(payload.serviceCounts || {});
  const averageRatings = payload.averageRatings || {};
  const bestRated = Object.entries(averageRatings).sort((a, b) => b[1] - a[1])[0] || ["Document", 0];

  return [
    `Total feedback entries analyzed: ${totalFeedback}.`,
    `Most requested service: ${topService} (${topCount} entries).`,
    `Best rated service: ${bestRated[0]} (${bestRated[1] || 0}/3).`,
    `Recommendation: prioritize improvements in ${topService} and keep reinforcing what is working in ${bestRated[0]}.`,
  ].join(" ");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { totalFeedback = 0, serviceCounts = {}, averageRatings = {}, feedbackSamples = [] } = req.body || {};

  const payload = {
    totalFeedback: Number(totalFeedback) || 0,
    serviceCounts,
    averageRatings,
    feedbackSamples: Array.isArray(feedbackSamples) ? feedbackSamples.slice(0, 10) : [],
  };

  const fallbackSummary = buildFallbackSummary(payload);

  try {
    const [topService, topCount] = getTopService(payload.serviceCounts);
    const topRated = Object.entries(payload.averageRatings).sort((a, b) => b[1] - a[1])[0] || ["Document", 0];

    const response = await fetch("https://api.fanar.qa/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FANAR_API_KEY}`,
      },
      body: JSON.stringify({
        model: "Fanar-C-2-27B",
        messages: [
          {
            role: "system",
            content:
              "You are a concise analytics assistant for a government-services dashboard. Summarize the provided feedback statistics in 3 short bullet points. Mention the most requested service, the best-rated service, and one clear recommendation. Keep it under 120 words. Return plain text only.",
          },
          {
            role: "user",
            content: JSON.stringify({
              totalFeedback: payload.totalFeedback,
              topService: { name: topService, count: topCount },
              topRatedService: { name: topRated[0], average: topRated[1] },
              serviceCounts: payload.serviceCounts,
              averageRatings: payload.averageRatings,
              feedbackSamples: payload.feedbackSamples,
            }, null, 2),
          },
        ],
        max_tokens: 250,
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      return res.status(200).json({ summary: fallbackSummary, source: "fallback" });
    }

    const data = await response.json();
    const summary = data.choices?.[0]?.message?.content?.trim() || fallbackSummary;

    return res.status(200).json({ summary, source: "fanar" });
  } catch (error) {
    return res.status(200).json({ summary: fallbackSummary, source: "fallback", error: error.message });
  }
}