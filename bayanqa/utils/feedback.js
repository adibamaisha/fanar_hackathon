export const FEEDBACK_STORAGE_KEY = "bayan_feedback_data";
export const CHAT_FEEDBACK_STORAGE_KEY = "bayan_chat_feedback";
export const FEEDBACK_UPDATED_EVENT = "bayan-feedback-updated";

export const SERVICE_CATEGORIES = [
  "Traffic",
  "Business",
  "Report",
  "Banking",
  "Document",
  "Healthcare",
  "Wills & Estate",
];

const LEGACY_SERVICE_MAP = {
  "traffic violations": "Traffic",
  "business registration": "Business",
  "qid services": "Document",
  documents: "Document",
};

const SERVICE_KEYWORD_MAP = [
  {
    service: "Traffic",
    keywords: ["traffic", "violation", "violations", "fine", "accident", "car", "ticket"],
  },
  {
    service: "Business",
    keywords: ["business", "startup", "company", "license", "licence", "moci", "commercial"],
  },
  {
    service: "Report",
    keywords: ["report", "complaint", "appeal", "issue", "violation report", "grievance"],
  },
  {
    service: "Banking",
    keywords: ["bank", "banking", "account", "student account", "cbq", "qib", "qnb"],
  },
  {
    service: "Document",
    keywords: ["document", "documents", "passport", "renewal", "certificate", "qid", "residency", "id card", "permit"],
  },
  {
    service: "Healthcare",
    keywords: ["health", "healthcare", "insurance", "hospital", "clinic", "medical"],
  },
  {
    service: "Wills & Estate",
    keywords: ["will", "estate", "inheritance", "asset", "probate"],
  },
];

function isBrowser() {
  return typeof window !== "undefined";
}

export function normalizeService(service) {
  if (typeof service !== "string") return "Document";
  const trimmed = service.trim();
  const legacyMapped = LEGACY_SERVICE_MAP[trimmed.toLowerCase()];
  if (legacyMapped) return legacyMapped;
  return SERVICE_CATEGORIES.includes(trimmed) ? trimmed : "Document";
}

export function detectServiceFromText(text) {
  if (typeof text !== "string") return "Document";

  const normalizedText = text.toLowerCase();
  const matched = SERVICE_KEYWORD_MAP.find((entry) =>
    entry.keywords.some((keyword) => normalizedText.includes(keyword))
  );

  return matched ? matched.service : "Document";
}

function readArrayFromStorage(key) {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function isValidRating(rating) {
  return Number.isInteger(rating) && rating >= 1 && rating <= 3;
}

function notifyFeedbackUpdated() {
  if (!isBrowser()) return;
  window.dispatchEvent(new Event(FEEDBACK_UPDATED_EVENT));
}

async function postFeedbackToApi(type, data) {
  if (!isBrowser()) return;

  try {
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, data }),
    });
  } catch {
    // Keep localStorage as the source of truth on client even if API persistence fails.
  }
}

export function getFeedbackData() {
  const rawData = readArrayFromStorage(FEEDBACK_STORAGE_KEY);
  return rawData.filter((item) => {
    const service = normalizeService(item?.service);
    const rating = Number(item?.rating);
    return SERVICE_CATEGORIES.includes(service) && isValidRating(rating);
  }).map((item) => ({
    service: normalizeService(item.service),
    rating: Number(item.rating),
  }));
}

export async function saveSurveyFeedback(entry) {
  if (!isBrowser()) return [];

  const nextEntry = {
    service: normalizeService(entry.service),
    rating: Number(entry.rating),
  };

  if (!isValidRating(nextEntry.rating)) {
    return getFeedbackData();
  }

  const existing = getFeedbackData();
  const next = [...existing, nextEntry];
  window.localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(next));
  notifyFeedbackUpdated();

  await postFeedbackToApi("survey", nextEntry);
  return next;
}

export async function saveChatFeedback(entry) {
  if (!isBrowser()) return [];

  const nextEntry = {
    service: normalizeService(entry.service),
    helpful: Boolean(entry.helpful),
  };

  const existing = readArrayFromStorage(CHAT_FEEDBACK_STORAGE_KEY);
  const next = [...existing, nextEntry];
  window.localStorage.setItem(CHAT_FEEDBACK_STORAGE_KEY, JSON.stringify(next));

  await postFeedbackToApi("chat", nextEntry);
  return next;
}

export async function resetFeedbackData() {
  if (!isBrowser()) return;

  window.localStorage.removeItem(FEEDBACK_STORAGE_KEY);
  window.localStorage.removeItem(CHAT_FEEDBACK_STORAGE_KEY);

  try {
    await fetch("/api/feedback", { method: "DELETE" });
  } catch {
    // Ignore server reset failures; local state has still been cleared.
  }

  notifyFeedbackUpdated();
}

export function getServiceCounts(data = getFeedbackData()) {
  const counts = SERVICE_CATEGORIES.reduce((acc, service) => {
    acc[service] = 0;
    return acc;
  }, {});

  data.forEach((item) => {
    const service = item?.service;
    if (typeof service !== "string") return;
    if (counts[service] === undefined) {
      counts[service] = 0;
    }
    counts[service] += 1;
  });

  return counts;
}

export function getAverageRatings(data = getFeedbackData()) {
  const totals = {};
  const counts = {};

  SERVICE_CATEGORIES.forEach((service) => {
    totals[service] = 0;
    counts[service] = 0;
  });

  data.forEach((item) => {
    const service = item?.service;
    const rating = Number(item?.rating);
    if (!service || Number.isNaN(rating)) return;

    if (totals[service] === undefined) {
      totals[service] = 0;
      counts[service] = 0;
    }

    totals[service] += rating;
    counts[service] += 1;
  });

  const averages = {};
  Object.keys(totals).forEach((service) => {
    averages[service] = counts[service] > 0 ? Number((totals[service] / counts[service]).toFixed(2)) : 0;
  });

  return averages;
}
