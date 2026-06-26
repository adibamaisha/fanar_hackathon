import fs from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");
const SURVEY_FILE = path.join(DATA_DIR, "survey-feedback.json");
const CHAT_FILE = path.join(DATA_DIR, "chat-feedback.json");

async function ensureFile(filePath) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "[]\n", "utf8");
  }
}

async function readJsonArray(filePath) {
  await ensureFile(filePath);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function appendJsonEntry(filePath, entry) {
  const current = await readJsonArray(filePath);
  current.push(entry);
  await fs.writeFile(filePath, `${JSON.stringify(current, null, 2)}\n`, "utf8");
}

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
      await fs.writeFile(SURVEY_FILE, "[]\n", "utf8");
      await fs.writeFile(CHAT_FILE, "[]\n", "utf8");
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ error: "Failed to clear feedback data", details: error.message });
    }
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { type, data } = req.body || {};
  if (!data || typeof data !== "object") {
    return res.status(400).json({ error: "Missing data payload" });
  }

  try {
    if (type === "survey") {
      const entry = {
        service: String(data.service || "").trim(),
        rating: Number(data.rating),
      };
      await appendJsonEntry(SURVEY_FILE, entry);
      return res.status(200).json({ ok: true });
    }

    if (type === "chat") {
      const entry = {
        service: String(data.service || "").trim(),
        helpful: Boolean(data.helpful),
      };
      await appendJsonEntry(CHAT_FILE, entry);
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: "Unsupported feedback type" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to save feedback", details: error.message });
  }
}
