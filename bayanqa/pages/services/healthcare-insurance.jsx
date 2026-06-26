import Head from "next/head";
import Link from "next/link";

export default function HealthcareInsurance() {
  return (
    <>
      <Head>
        <title>Healthcare & Insurance — Bayan QA</title>
      </Head>
      <main style={styles.page}>
        <div style={styles.card}>
          <span style={styles.emoji}>🏥</span>
          <h1 style={styles.heading}>Work in Progress</h1>
          <p style={styles.sub}>
            The <strong>Healthcare &amp; Insurance</strong> section is currently
            being built. Thank you for your patience — we'll have it ready soon!
          </p>
          <Link href="/" style={styles.link}>
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9fafb",
    padding: "2rem",
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
  },
  card: {
    background: "#fff",
    borderRadius: "1.5rem",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
    padding: "3rem 2.5rem",
    maxWidth: "460px",
    width: "100%",
    textAlign: "center",
  },
  emoji: {
    fontSize: "4rem",
    display: "block",
    marginBottom: "1.25rem",
  },
  heading: {
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "#111827",
    margin: "0 0 1rem",
  },
  sub: {
    fontSize: "1rem",
    color: "#6b7280",
    lineHeight: 1.6,
    margin: "0 0 2rem",
  },
  link: {
    display: "inline-block",
    padding: "0.65rem 1.5rem",
    borderRadius: "9999px",
    background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    color: "#fff",
    fontWeight: 600,
    fontSize: "0.95rem",
    textDecoration: "none",
  },
};
