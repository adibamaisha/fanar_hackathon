// car-accident-claims.jsx
import React from 'react';


const steps = [
  {
    number: 1,
    icon: '🚨',
    title: 'Report the Incident',
    items: [
      'Do not move vehicles unless it is a minor accident causing traffic congestion.',
      <>Call <strong>999</strong> for serious accidents or injuries.</>,
      <>For minor accidents, both drivers should use the <strong>Metrash app</strong>: Traffic → Accidents → Registration.</>,
      'Record accident details and upload photos of the damage.',
      'Obtain the accident file number.',
    ],
  },
  {
    number: 2,
    icon: '📄',
    title: 'Obtain the Accident Report',
    items: [
      'Download the traffic accident report and repair permit through the Metrash app if available.',
      'If police attended the accident, collect documents from the Traffic Department after 24–48 hours.',
    ],
  },
  {
    number: 3,
    icon: '📞',
    title: 'Notify Your Insurer',
    items: [
      <>Inform your insurance provider <strong>within 72 hours</strong> of the accident.</>,
    ],
  },
  {
    number: 4,
    icon: '📤',
    title: 'Submit Required Documents',
    items: [
      'Upload or submit all required claim documentation through the insurer\'s online portal, email, mobile app, or branch office.',
    ],
  },
];

const documents = [
  { icon: '📋', label: 'Police Accident Report' },
  { icon: '🔧', label: 'Vehicle Repair Permit' },
  { icon: '🪪', label: "Driver's License Copy" },
  { icon: '🚗', label: 'Vehicle Registration (Istimara) Copy' },
  { icon: '🆔', label: 'Qatar ID (QID) Copy' },
  { icon: '📸', label: 'Accident Scene Photos' },
];

const insurerCards = [
  {
    modifier: 'cac-insurer-card--blue',
    icon: '🔍',
    title: 'Claim Assessment',
    desc: 'An insurance adjuster reviews the documents and determines liability and damage coverage.',
  },
  {
    modifier: 'cac-insurer-card--sky',
    icon: '🏪',
    title: 'Repair Referrals',
    desc: 'The insurer directs the vehicle owner to approved garages or dealerships for repairs.',
  },
  {
    modifier: 'cac-insurer-card--green',
    icon: '💰',
    title: 'Settlement Options',
    desc: (
      <>
        <strong>Comprehensive Insurance:</strong> Covers vehicle repairs, subject to policy terms and deductibles.
        <br /><br />
        <strong>Third-Party Insurance:</strong> Claims are processed through the at-fault driver's insurer.
      </>
    ),
  },
  {
    modifier: 'cac-insurer-card--violet',
    icon: '📱',
    title: 'Digital Claim Processing',
    desc: 'Many insurers offer digital claim submission and tracking through mobile apps and online portals.',
  },
];

const noticeItems = [
  'Notify your insurer as soon as possible after an accident.',
  'Keep copies of all submitted documents.',
  'Follow the instructions provided by your insurer and the Traffic Department.',
  'Requirements and procedures may vary between insurance providers.',
];

export default function CarAccidentClaims() {
  return (
    <div className="cac-page">

      {/* ── Hero ── */}
      <section className="cac-hero">
        <div className="cac-hero-inner">
          <div className="cac-hero-text">
            <span className="cac-hero-eyebrow">🚗 Insurance Guide</span>
            <h1>Car Accident Insurance Claims in Qatar</h1>
            <p className="cac-hero-subtitle">
              Step-by-step guidance for filing an insurance claim after a traffic
              accident — from reporting the incident to settlement.
            </p>
          </div>
          <div className="cac-hero-icon-wrap" aria-hidden="true">🛡️</div>
        </div>
      </section>

      <div className="cac-inner">

        {/* ── Step-by-step process ── */}
        <section>
          <span className="cac-section-label">📋 Process</span>
          <h2 className="cac-section-title">Step-by-Step Claim Process</h2>
          <div className="cac-steps">
            {steps.map((step) => (
              <div key={step.number} className="cac-step">
                <div className="cac-step-number">{step.number}</div>
                <div className="cac-step-card">
                  <div className="cac-step-header">
                    <div className="cac-step-icon" aria-hidden="true">{step.icon}</div>
                    <h3 className="cac-step-title">{step.title}</h3>
                  </div>
                  <ul className="cac-step-list">
                    {step.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Required documents ── */}
        <section>
          <span className="cac-section-label">📁 Documents</span>
          <h2 className="cac-section-title">Required Documents</h2>
          <div className="cac-docs-grid">
            {documents.map((doc) => (
              <div key={doc.label} className="cac-doc-item">
                <div className="cac-doc-icon" aria-hidden="true">{doc.icon}</div>
                <span className="cac-doc-label">{doc.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── What to expect ── */}
        <section>
          <span className="cac-section-label">🏦 Insurer</span>
          <h2 className="cac-section-title">What to Expect from Your Insurer</h2>
          <div className="cac-insurer-grid">
            {insurerCards.map((card) => (
              <div key={card.title} className={`cac-insurer-card ${card.modifier}`}>
                <div className="cac-insurer-card-icon" aria-hidden="true">{card.icon}</div>
                <h3 className="cac-insurer-card-title">{card.title}</h3>
                <p className="cac-insurer-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Important notice ── */}
        <section>
          <div className="cac-notice" role="note">
            <div className="cac-notice-header">
              <span className="cac-notice-header-icon" aria-hidden="true">⚠️</span>
              <h3 className="cac-notice-header-title">Important</h3>
            </div>
            <ul className="cac-notice-list">
              {noticeItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <div className="cac-disclaimer">
          <span className="cac-disclaimer-icon" aria-hidden="true">ℹ️</span>
          <p>
            This page provides general guidance based on publicly available information.
            Insurance requirements, claim procedures, and coverage terms may differ depending
            on your insurance provider and policy. Always verify details directly with your insurer.
          </p>
        </div>

      </div>
    </div>
  );
}