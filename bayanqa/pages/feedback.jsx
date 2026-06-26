import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SERVICE_CATEGORIES, saveSurveyFeedback } from "@/utils/feedback";

const RATING_OPTIONS = [
  { label: "Satisfied", value: 3 },
  { label: "Neutral", value: 2 },
  { label: "Dissatisfied", value: 1 },
];

export default function FeedbackPage() {
  const router = useRouter();
  const [service, setService] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (!router.isReady) return;

    const serviceFromQuery = router.query.service;
    if (typeof serviceFromQuery === "string" && SERVICE_CATEGORIES.includes(serviceFromQuery)) {
      setService(serviceFromQuery);
    }
  }, [router.isReady, router.query.service]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!service || !rating) return;

    await saveSurveyFeedback({ service, rating });
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Feedback - Bayan QA</title>
      </Head>

      <main className="feedback-page">
        <div className="feedback-card">
          <h1>Help Us Improve</h1>
          <p className="feedback-subtitle">Answer 2 quick questions to improve Bayan QA services.</p>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Which service did you ask about?</legend>
              {SERVICE_CATEGORIES.map((option) => (
                <label key={option} className="option-row">
                  <input
                    type="radio"
                    name="service"
                    value={option}
                    checked={service === option}
                    onChange={(event) => setService(event.target.value)}
                    required
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>

            <fieldset>
              <legend>How satisfied are you with this service?</legend>
              {RATING_OPTIONS.map((option) => (
                <label key={option.value} className="option-row">
                  <input
                    type="radio"
                    name="rating"
                    value={option.value}
                    checked={rating === option.value}
                    onChange={(event) => setRating(Number(event.target.value))}
                    required
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </fieldset>

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </main>

      <style jsx>{`
        .feedback-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          background: #f8fafc;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .feedback-card {
          width: min(100%, 640px);
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
          padding: 1.75rem;
        }

        h1 {
          margin: 0;
          font-size: 1.65rem;
          color: #111827;
        }

        .feedback-subtitle {
          margin: 0.6rem 0 1.4rem;
          color: #4b5563;
        }

        fieldset {
          border: none;
          padding: 0;
          margin: 0 0 1.25rem;
        }

        legend {
          font-weight: 700;
          margin-bottom: 0.65rem;
          color: #111827;
        }

        .option-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0;
          color: #1f2937;
        }

        .submit-btn {
          border: none;
          border-radius: 999px;
          padding: 0.7rem 1.35rem;
          background: #4f46e5;
          color: #ffffff;
          font-weight: 600;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #4338ca;
        }
      `}</style>
    </>
  );
}
