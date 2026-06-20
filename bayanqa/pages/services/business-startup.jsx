// business-startup.jsx
import React from 'react';


const steps = [
  {
    id: 'activity',
    title: 'Choose Your Business Activity',
    desc: 'Identify the correct commercial license category.',
    href: '#choose-activity',
  },
  {
    id: 'moci',
    title: 'Register with MOCI',
    desc: 'Complete registration through the Ministry of Commerce & Industry.',
    href: '#register-moci',
  },
  {
    id: 'permits',
    title: 'Obtain Permits & Approvals',
    desc: 'Secure all required municipal and sector-specific permits.',
    href: '#permits-approvals',
  },
];

const quickLinks = [
  { label: 'MOCI Business Portal', href: 'https://www.moci.gov.qa' },
  { label: 'Commercial Registration', href: 'https://www.moci.gov.qa/en/services/commercial-registration' },
  { label: 'Invest Qatar', href: 'https://invest.qa/en' },
  { label: 'Free Zone Options', href: 'https://qfza.qa' },
];

// Inline arrow SVG
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BusinessStartupSetup() {
  return (
    <section className="bss-section">
      <div className="bss-inner">
        <h1 className="bss-title">Business &amp; Startup Setup</h1>

        <div className="bss-body">
          {/* ── Left column ── */}
          <div className="bss-left">
            <p className="bss-intro">
              Starting a business in Qatar doesn't have to be complicated. Get
              clear guidance on licenses, permits, and government requirements —
              whether you're a local entrepreneur or an investor.
            </p>

            <div className="bss-steps">
              {steps.map((step) => (
                <a
                  key={step.id}
                  href={step.href}
                  className="bss-step"
                  aria-label={step.title}
                >
                  <div className="bss-step-arrow">
                    <ArrowRight />
                  </div>
                  <div className="bss-step-content">
                    <p className="bss-step-title">{step.title}</p>
                    <p className="bss-step-desc">{step.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right panel ── */}
          <aside className="bss-panel">
            <div className="bss-panel-header">
              <span className="bss-panel-icon" aria-hidden="true">💡</span>
              <h2 className="bss-panel-title">Quick Links</h2>
            </div>

            <ul className="bss-links">
              {quickLinks.map((link) => (
                <li key={link.label} className="bss-link-item">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#start-guide" className="bss-btn">
              Start Guide
              <ArrowRight />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
