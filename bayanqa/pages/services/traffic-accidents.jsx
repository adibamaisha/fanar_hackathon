import React from 'react';


const cards = [
  {
    id: 'accident',
    modifier: 'avp-card--accident',
    icon: '🚨',
    title: 'After an Accident',
    desc: 'Step-by-step actions to take immediately, including police reporting and documentation requirements.',
    cta: 'Read the steps',
    href: 'https://www.giggulf.qa/en/blog/what-to-do-after-a-car-accident-in-qatar-insurance-and-legal-steps',
  },
  {
    id: 'insurance',
    modifier: 'avp-card--insurance',
    icon: '📋',
    title: 'Insurance Claims',
    desc: 'How to file a claim, required documents, and what to expect from your insurer.',
    cta: 'File a claim',
    href: '/services/claims',
  },
  {
    id: 'vehicle',
    modifier: 'avp-card--vehicle',
    icon: '🚗',
    title: 'Vehicle Services',
    desc: 'Registration, renewal, transfer of ownership, and other MOI vehicle procedures.',
    cta: 'Browse services',
    href: 'https://portal.moi.gov.qa/wps/portal/MOIInternet/departmentcommittees/gatraffic/!ut/p/z1/tVNNc4IwFPwtPXjM5EEAwxFtK4LWtogfXJwIwcaagJixtr--0fHQS3U6HXN6mdm32bdvgzM8w5lie7FiWlSKbcx9nnmLJx8Cyx9BPBoHpnzoTdKuQ23wbTw9AfoBdUILrJiGQCFIxtG4M-raABbOLvdPcIazXOlav-H5Ry43YomE0rxRXCOuWrBjqOA1a7TkSueVlEJrzluw4oo3bMMKKZTY6eakuCpNUZYib0Fu-S5xjux1Lgo8Z17BObgeKplTIocUS-TnpI2YTUuvBJfarneeBn45AVybZnrNruwy_fSo10Ci8L4PJIG4N_CI8XMw7NrdFwDqngGXDL_2yNyIbP8QaUcOBOkwfuzEz2TkEpz81bW94B84VVUjTWQu0tOofVt695_00bUVmx8h1tttFpjYViaoB41nN8htCDjhapEmuJappORToPdXCuTg1vv117gM5RQFd9_SnnYD/?1dmy&urile=wcm%3Apath%3A%2Fwcmlib-internet-en%2Fsa-departmentcommittee%2Fgeneraladministrationoftraffic%2Flicensing%2Band%2Bregistration',
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
            target="_blank"
            rel="noopener noreferrer"
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
