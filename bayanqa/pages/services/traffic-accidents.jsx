import React from 'react';


const cards = [
  {
    id: 'accident',
    modifier: 'avp-card--accident',
    icon: '🚨',
    title: 'After an Accident',
    desc: 'Step-by-step actions to take immediately, including police reporting and documentation requirements.',
    cta: 'Read the steps',
    href: '#after-accident',
  },
  {
    id: 'insurance',
    modifier: 'avp-card--insurance',
    icon: '📋',
    title: 'Insurance Claims',
    desc: 'How to file a claim, required documents, and what to expect from your insurer.',
    cta: 'File a claim',
    href: '#insurance-claims',
  },
  {
    id: 'vehicle',
    modifier: 'avp-card--vehicle',
    icon: '🚗',
    title: 'Vehicle Services',
    desc: 'Registration, renewal, transfer of ownership, and other MOI vehicle procedures.',
    cta: 'Browse services',
    href: '#vehicle-services',
  },
];

export default function AccidentVehicleProcedures() {
  return (
    <section className="avp-section">
      {/* Header */}
      <header className="avp-header">
        <span ></span>
        <h1 className="avp-title">Accident &amp; Vehicle Procedures</h1>
        <p className="avp-subtitle">
          Everything you need to know - from the moment of an incident through
          to registration and renewal.
        </p>
      </header>

      {/* Card Grid */}
      <div className="avp-grid">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            className={`avp-card ${card.modifier}`}
            aria-label={card.title}
          >
            <div className="avp-card-icon" aria-hidden="true">
              {card.icon}
            </div>
            <h2 className="avp-card-title">{card.title}</h2>
            <p className="avp-card-desc">{card.desc}</p>
            <span className="avp-card-cta">
              {card.cta}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="avp-actions">
        <a href="#full-guide" className="avp-btn avp-btn--primary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 4h12M2 8h8M2 12h10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          View Full Guide
        </a>
        <a href="#ask-ai" className="avp-btn avp-btn--ghost">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M8 5.5v3M8 10.5v.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          Ask AI About This
        </a>
      </div>
    </section>
  );
}
