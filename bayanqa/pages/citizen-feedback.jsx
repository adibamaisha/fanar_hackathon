import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const CitizenInsightsDashboard = dynamic(() => import("@/components/CitizenInsightsDashboard"), {
  ssr: false,
});

export default function CitizenFeedbackPage() {
  return (
    <>
      <Head>
        <title>Citizen Feedback - Bayan QA</title>
      </Head>

      <main className="citizen-feedback-page">
        <section className="citizen-feedback-hero">
          <span className="citizen-feedback-badge">ANALYTICS</span>
          <h1>Citizen Feedback</h1>
          <p>
            Live insights from the questions citizens ask and the feedback they share after using Bayan QA.
          </p>
          <Link href="/" className="citizen-feedback-back">
            ← Back to Home
          </Link>
        </section>

        <CitizenInsightsDashboard />
      </main>

      <style jsx>{`
        .citizen-feedback-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #111827;
        }

        .citizen-feedback-hero {
          display: grid;
          gap: 0.9rem;
          margin-bottom: 1.75rem;
        }

        .citizen-feedback-badge {
          display: inline-flex;
          width: fit-content;
          padding: 0.4rem 0.75rem;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.12);
          color: #1d4ed8;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
        }

        p {
          margin: 0;
          color: #4b5563;
          max-width: 720px;
          line-height: 1.7;
        }

        .citizen-feedback-back {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
          width: fit-content;
        }

        .citizen-feedback-back:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
