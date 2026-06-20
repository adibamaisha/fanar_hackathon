// reporting-violations.jsx
import React from 'react';


const cards = [
  {
    id: 'dress',
    modifier: 'rpv-card--dress',
    cta: 'Report to MOI',
    href: 'https://thepeninsulaqatar.com/article/24/06/2024/ministry-announces-dress-code-regulations-for-qatar-public-sector',
    title: 'Dress Code Violations',
    desc: (
      <>
        Report public decency violations through the Ministry of Interior's
        e-services portal or call <strong>909</strong>.
      </>
    ),
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5l-2 5h18l-2-5h-4" />
        <path d="M9 3a3 3 0 0 0 6 0" />
        <path d="M3 8v13h18V8" />
      </svg>
    ),
  },
  {
    id: 'cyber',
    modifier: 'rpv-card--cyber',
    cta: 'Report to NCSA',
    href: 'https://www.ncsa.gov.qa/en/reporting',
    title: 'Cybersecurity Breaches',
    desc: 'Report digital crimes, fraud, or data breaches to the National Cyber Security Agency via their official portal.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'service',
    modifier: 'rpv-card--service',
    cta: 'Submit via Tawasal',
    href: 'https://www.iloveqatar.net/guide/living/where-to-report-and-make-a-complaint-in-qatar',
    title: 'Public Service Complaints',
    desc: "Submit service quality complaints through the Tawasal platform or the relevant ministry's feedback channel.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 11h6M19 8v6" />
      </svg>
    ),
  },
];

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReportingViolations() {
  return (
    <section className="rpv-section">
      <div className="rpv-inner">

        {/* Header */}
        <h1 className="rpv-title">Reporting Public Violations: Where to Go</h1>
        <p className="rpv-subtitle">
          Qatar maintains clear regulations on public conduct, cybersecurity,
          and service standards. Use the right channel to submit your report —
          anonymously or openly.
        </p>

        {/* Cards */}
        <div className="rpv-grid">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rpv-card ${card.modifier}`}
              aria-label={card.title}
            >
              {/* Icon banner */}
              <div className="rpv-card-banner" aria-hidden="true">
                {card.icon}
              </div>

              {/* Body */}
              <div className="rpv-card-body">
                <h2 className="rpv-card-title">{card.title}</h2>
                <p className="rpv-card-desc">{card.desc}</p>
                <span className="rpv-card-cta">
                  {card.cta}
                  <ArrowRight />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Info banner */}
        <div className="rpv-info-banner" role="note">
          <svg className="rpv-info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p className="rpv-info-text">
            <strong>Anonymous Reporting:</strong> Most platforms allow anonymous
            submissions. Your identity is protected under Qatari law.
          </p>
        </div>

      </div>
    </section>
  );
}