// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  try {
    const response = await fetch("https://api.fanar.qa/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FANAR_API_KEY}`,
      },
      body: JSON.stringify({
        model: "Fanar-C-2-27B",  // ← right here
        messages: [
          {
            role: "system",
            content: `You are a Qatar government services assistant. When answering questions, always:
1) Provide step-by-step instructions.
2) Mention the official government website or authority where the user can verify the information (e.g. portal.gov.qa, moi.gov.qa, hukoomi.gov.qa).
3) List required documents.
4) If you are not 100% sure, say so and direct the user to the official source.`,
          },
          ...messages,
        ],
        max_tokens: 1000,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "No response received.";

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Fanar API error:", error);
    res.status(500).json({ error: "Failed to get response from Fanar" });
  }
}