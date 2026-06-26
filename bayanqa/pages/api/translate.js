// pages/api/translate.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { texts } = req.body;

  if (!Array.isArray(texts) || texts.length === 0) {
    return res.status(400).json({ error: "texts must be a non-empty array" });
  }

  try {
    // Send all strings in ONE call as a numbered list
    const numbered = texts.map((t, i) => `${i + 1}. ${t}`).join("\n");

    const response = await fetch("https://api.fanar.qa/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FANAR_API_KEY}`,
      },
      body: JSON.stringify({
        model:  "Fanar-C-2-27B",
        messages: [
          {
            role: "system",
            content: `You are a translation engine. The user will give you a numbered list of English strings. Translate each one to Arabic. 
Return ONLY a numbered list in the exact same format, like:
1. [arabic translation]
2. [arabic translation]
...
No explanations, no extra text, just the numbered translations.`,
          },
          {
            role: "user",
            content: numbered,
          },
        ],
        max_tokens: 2000,
        temperature: 0.1,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Fanar error:", err);
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content?.trim() ?? "";

    //console.log("Fanar raw translation response:\n", raw);

    // Parse "1. translation\n2. translation\n..." back into an array
    const lines = raw.split("\n").filter((l) => l.trim());
    const translations = texts.map((original, i) => {
      const match = lines.find((l) => l.match(new RegExp(`^${i + 1}[.)]\s*`)));
      if (match) {
        return match.replace(new RegExp(`^${i + 1}[.)]\s*`), "").trim();
      }
      console.warn(`Missing translation for #${i + 1}: "${original}"`);
      return original; // fallback to English
    });

    res.status(200).json({ translations });
  } catch (error) {
    console.error("Translation API error:", error);
    res.status(500).json({ error: "Translation failed" });
  }
}