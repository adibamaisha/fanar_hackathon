import Head from "next/head";
import Link from "next/link";
import { Bot, Zap, ClipboardList, FileText, Car, Briefcase, MessageCircleWarning, IdCard, PiggyBank, Building2, HeartPulse, ArrowRight } from "lucide-react";

const featureCards = [
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Ask questions in plain Arabic or English and receive clear, step-by-step guidance tailored to your situation. No jargon, no confusion.",
  },
  {
    icon: Zap,
    title: "Instant Translation",
    description:
      "All guides and chatbot responses are available in both Arabic and English. Toggle languages instantly — no separate searches needed.",
  },
  {
    icon: ClipboardList,
    title: "Service Guides",
    description:
      "Easy-to-follow instructions for every government procedure, including required documents, relevant offices, and links to official portals.",
  },
];

const quickNavItems = [
  {
    title: "Traffic & Accidents",
    description: "Get help with fines, reports, insurance claims, and accident procedures.",
    href: "/services/traffic-accidents",
    icon: Car,
  },
  {
    title: "Business & Startups",
    description: "Register your company, navigate licenses, and launch your new venture with confidence.",
    href: "/services/business-startup",
    icon: Briefcase,
  },
  {
    title: "Violations & Reports",
    description: "Report issues, appeal violations, or learn how to handle government complaints properly.",
    href: "/services/violations-reports",
    icon: MessageCircleWarning,
  },
  {
    title: "Document Renewals",
    description: "Renew passports, IDs, residency documents, and other essential papers without the guesswork.",
    href: "/services/document-renewals",
    icon: IdCard,
  },
  {
    title: "Student Banking",
    description: "Open accounts, access student benefits, and understand banking options for students.",
    href: "/services/student-banking",
    icon: PiggyBank,
  },
  {
    title: "AI Virtual Advisor",
    description: "Ask the virtual advisor for tailored guidance across services and procedures.",
    href: "/services/ai-advisor",
    icon: Bot,
  },
  {
    title: "Healthcare & Insurance",
    description: "Register for health insurance, find approved providers, and access public healthcare services.",
    href: "/services/healthcare-insurance",
    icon: Building2,
  },
  {
    title: "Wills & Estate Planning",
    description: "Prepare a will, protect your assets, and ensure your bank accounts are properly managed.",
    href: "/services/wills-estate",
    icon: FileText,
  },
];

export default function Example() {
  return (
    <>
      <Head>
        <title>Bayan QA</title>
      </Head>

      <main className="page-shell">
        <section className="hero-section">
          <p className="eyebrow">Bayan QA</p>
          <h1>Fast, clear government guidance in Arabic and English</h1>
          <p className="hero-text">
            Navigate procedures, documents, and public services with confidence using a single platform built for your everyday needs.
          </p>
        </section>

        <section className="core-features-section">
          <div className="section-header">
           
            <h2>Everything You Need, in One Place</h2>
          </div>
          <div className="feature-grid">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="quick-nav-section section-spacing">
          <div className="section-header">
            <span className="section-badge">SERVICES</span>
            <h2>Find What You Need</h2>
            <p className="section-description centered-description">
              Choose a topic and jump straight to the service area that helps you move forward.
            </p>
          </div>
          <div className="quick-nav-grid">
            {quickNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href} legacyBehavior>
                  <a className="quick-nav-card group" aria-label={`Open ${item.title}`}>
                    <div className="quick-nav-icon" aria-hidden="true">
                      <Icon size={35} />
                    </div>
                    <div className="quick-nav-content">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="quick-nav-arrow" aria-hidden="true">
                      <ArrowRight size={20} strokeWidth={2} />
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <style jsx>{`
        .page-shell {
          padding: 3rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #111827;
        }

        .hero-section {
          position: relative;
          left: 50%;
          right: 50%;
          width: 100vw;
          max-width: 100vw;
          margin-left: -50vw;
          margin-right: -50vw;
          margin-bottom: 3rem;
          text-align: center;
          padding: 5rem 1.5rem;
          background-image: linear-gradient(180deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.4)), url('/main.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: #ffffff;
          overflow: hidden;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #c7d2fe;
          font-weight: 700;
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }

        .hero-section h1 {
          font-size: clamp(2.5rem, 4vw, 4rem);
          line-height: 1.05;
          margin: 0;
          color: #ffffff;
          text-shadow: 0 16px 32px rgba(15, 23, 42, 0.35);
        }

        .hero-text {
          margin-top: 1.25rem;
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.88);
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .section-badge {
          display: inline-flex;
          padding: 0.45rem 0.8rem;
          border-radius: 9999px;
          background: rgba(37, 99, 235, 0.12);
          color: #1d4ed8;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .core-features-section h2,
        .quick-nav-section h2 {
          font-size: 2rem;
          margin: 0;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .feature-card {
          display: grid;
          gap: 1rem;
          padding: 1.25rem 0;
        }

        .feature-icon {
          width: 2.75rem;
          height: 2.75rem;
          display: grid;
          place-items: center;
          border-radius: 0.85rem;
          background: rgba(59, 130, 246, 0.12);
          color: #1d4ed8;
        }

        .feature-card h3 {
          margin: 0;
          font-size: 1.125rem;
        }

        .feature-card p {
          margin: 0;
          color: #4b5563;
          line-height: 1.8;
        }

        .quick-nav-section {
          margin-top: 4rem;
        }

        .section-spacing {
          padding: 5rem 0;
        }

        .section-description {
          color: #6b7280;
          max-width: 40rem;
          margin: 0 auto;
        }

        .quick-nav-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .quick-nav-card {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.3rem;
          width: 100%;
          background: #d9daf5;
          border: 1px solid #c7d2fe;
          border-radius: 1.5rem;
          padding: 0.9rem;
          text-decoration: none;
          color: inherit;
          transition: background 200ms ease, box-shadow 200ms ease, transform 200ms ease;
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
          cursor: pointer;
          min-height: 60px;
          align-items: start;
          box-sizing: border-box;
        }

        .quick-nav-card:hover,
        .quick-nav-card:focus-visible {
          background: #c7d2fe;
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
          transform: translateY(-1px);
        }

        .quick-nav-icon {
          width: 3.75rem;
          height: 3.75rem;
          display: grid;
          place-items: center;
          border-radius: 9999px;
          background: #4f46e5;
          color: #ffffff;
          margin-bottom: 0.9rem;
        }

        .quick-nav-content {
          min-width: 0;
          display: grid;
          gap: 0.45rem;
        }

        .quick-nav-arrow {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 2.5rem;
          height: 2.5rem;
          display: grid;
          place-items: center;
          border-radius: 9999px;
          background: #e0f2fe;
          color: #4f46e5;
          transition: transform 200ms ease;
        }

        .quick-nav-card:hover,
        .quick-nav-card:focus-visible {
          background: #c7d2fe;
          box-shadow: 0 18px 36px rgba(15, 23, 42, 0.12);
          transform: translateY(-1px);
        }

        .quick-nav-icon {
          width: 3.75rem;
          height: 3.75rem;
          display: grid;
          place-items: center;
          border-radius: 9999px;
          background: #4f46e5;
          color: #ffffff;
          margin-bottom: 1.25rem;
        }

        .quick-nav-content {
          min-width: 0;
          display: grid;
          gap: 0.5rem;
        }

        .quick-nav-content h3 {
          margin: 0;
          font-size: 1.28rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }

        .quick-nav-content p {
          margin: 0;
          color: #4b5563;
          line-height: 1.75;
          font-size: 0.95rem;
        }

        .quick-nav-arrow {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          display: grid;
          place-items: center;
          background: transparent;
          color: #4f46e5;
          transition: transform 200ms ease;
        }

        .quick-nav-card:hover .quick-nav-arrow,
        .quick-nav-card:focus-visible .quick-nav-arrow {
          transform: translateX(4px);
        }

        @media (min-width: 900px) {
          .feature-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .quick-nav-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}
