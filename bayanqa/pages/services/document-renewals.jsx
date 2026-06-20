// document-validity.jsx
import React from 'react';


const documents = [
  {
    id: 'qid',
    modifier: 'dvg-card--qid',
    icon: '🪪',
    title: 'Qatari ID (QID)',
    desc: 'Valid for 5 years (citizens) or tied to residency (residents). Renew 30 days before expiry via MOI.',
    cta: 'Renew QID',
    href: 'https://portal.moi.gov.qa/wps/portal/MOIInternet/services/inquiries/others/officialdocuments',
  },
  {
    id: 'rp',
    modifier: 'dvg-card--rp',
    icon: '📄',
    title: 'Residency Permit (RP)',
    desc: 'Must be renewed annually. Your sponsor initiates the process. Check status on the MOI website.',
    cta: 'Check RP Status',
    href: 'https://portal.moi.gov.qa/wps/portal/MOIInternet/services/inquiries/residencypermits',
  },
  {
    id: 'visa',
    modifier: 'dvg-card--visa',
    icon: '✈️',
    title: 'Visa Status',
    desc: 'Visit, work, and family visas have varying validity. Apply for extensions before expiry through MOI e-services.',
    cta: 'Extend Visa',
    href: 'https://portal.moi.gov.qa/wps/portal/MOIInternet/services/inquiries/visaservices',
  },
];

export default function DocumentValidityGuide() {
  return (
    <section className="dvg-section">
      <div className="dvg-inner">
        {/* Header */}
        <h1 className="dvg-title">Document Validity Guide</h1>
        <p className="dvg-subtitle">
          Track your key documents and know exactly when and how to renew —
          with direct links to the official Ministry of Interior portal.
        </p>

        {/* Cards */}
        <div className="dvg-grid">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`dvg-card ${doc.modifier}`}
              aria-label={doc.title}
            >
              <div className="dvg-card-icon" aria-hidden="true">
                {doc.icon}
              </div>
              <h2 className="dvg-card-title">{doc.title}</h2>
              <p className="dvg-card-desc">{doc.desc}</p>
              <span className="dvg-card-cta">
                {doc.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
      </div>
    </section>
  );
}