// business-startup.jsx
import React, { useState } from 'react';
import Link from 'next/link';
// ─── Step detail content ───────────────────────────────────────────────────
const stepDetails = {
  activity: {
    emoji: '🏷️',
    heading: 'Choose Your Business Activity',
    summary:
      'Defining your activity type is the foundation of everything — it determines your license category, ownership rules, and which ministry approvals you need.',
    sections: [
      {
        title: 'What to decide first',
        items: [
          'What product or service will you offer? (e.g. retail, consulting, F&B, tech)',
          'Will you operate physically, online (e-commerce), or both?',
          'Is your chosen activity legally permitted in Qatar?',
          'Does it align with Qatar National Vision 2030 priority sectors?',
        ],
      },
      {
        title: 'Priority sectors the government actively supports',
        items: [
          'Information Technology & Digital Services',
          'Healthcare & Medical Services',
          'Tourism & Hospitality',
          'Agriculture & Food Security',
          'Financial & Professional Services',
        ],
      },
      {
        title: 'Legal structures available',
        items: [
          'Limited Liability Company (LLC) — most common for SMEs',
          'Shareholding Company — for larger, publicly traded entities',
          'Private Shareholding Company',
          'Holding Company',
          'Foreign Branch — exempted by Ministerial Order',
        ],
      },
      {
        title: 'Mainland vs Free Zone — key difference',
        items: [
          'Mainland: registered via MOCI; expats may own up to 49% (some sectors allow 100% under Law No. 1 of 2019)',
          'Qatar Financial Centre (QFC): 100% foreign ownership; ideal for finance & consulting',
          'Qatar Free Zone (QFZ): 100% foreign ownership; ideal for logistics, tech & manufacturing',
          'Qatar Science & Technology Park (QSTP): focused on R&D and innovation',
        ],
      },
    ],
    tip: 'Qatar ranked 5th globally in the 2023 National Entrepreneurship Context Index for ease of doing business — a strong signal that the government actively removes barriers for new companies.',
    links: [
      { label: 'Qatar Single Window Portal', href: 'https://investor.sw.gov.qa/wps/portal/investors/services/service-details/startyourbusiness' },
      { label: 'QFC Portal', href: 'https://www.qfc.qa/' },
      { label: 'QFZA Portal', href: 'https://qfz.gov.qa/' },
    ],
  },

  moci: {
    emoji: '🏛️',
    heading: 'Register with MOCI',
    summary:
      'The Ministry of Commerce & Industry (MOCI) is your primary registration authority for mainland businesses. Everything flows through their online portal or Single Window.',
    sections: [
      {
        title: 'Step 1 — Reserve a Trade Name',
        items: [
          'Log into the MOCI portal or visit their Lusail HQ (Phone: +974 6 611 1400)',
          'Search for availability — name must not be misleading, offensive, or already registered',
          '3-day reservation: Free  |  6-month reservation: QAR 1,000',
        ],
      },
      {
        title: 'Step 2 — Prepare a Memorandum of Association (MOA)',
        items: [
          'Draft the MOA covering: owner names, business address, share capital, share types & value, company activities and objectives',
          'All partners must sign before a notary approved by MOCI',
          'Submit to the Ministry of Justice for final approval',
        ],
      },
      {
        title: 'Step 3 — Apply for Commercial Registration (CR)',
        items: [
          'The CR is your company\'s legal birth certificate, issued by MOCI',
          'Required documents: residency permits (expats), two copies of MOA, filled application form, Ministry of Labour registration',
          'Fees — Single activity: QAR 500  |  Branch registration: QAR 100  |  Additional activity: QAR 300',
          'The CR is mandatory before opening a corporate bank account',
        ],
      },
      {
        title: 'Step 4 — Register with Chamber of Commerce',
        items: [
          'Mandatory for mainland companies after obtaining the CR',
          'Membership fees range from QAR 200 to QAR 5,000 depending on business activity',
        ],
      },
      {
        title: 'Step 5 — Register with Ministry of Labour',
        items: [
          'Register your company to legally employ staff in Qatar',
          'This enables you to sponsor work visas and residence permits for employees',
          'Also obtain the Establishment Card (Computer Card) from the Ministry of Interior (MoI)',
        ],
      },
    ],
    tip: 'The entire registration process can be completed electronically via the Qatar Single Window Portal — no need to queue at multiple ministries.',
    links: [
      { label: 'MOCI Official Portal', href: 'https://www.moci.gov.qa' },
      { label: 'Qatar Single Window', href: 'https://investor.sw.gov.qa/wps/portal/investors/services/service-details/startyourbusiness' },
      { label: 'Commercial Registration Guide', href: 'https://www.moci.gov.qa/en/about-the-ministry/departments/departments-under-the-assistant-deputy-of-commerce-affairs/the-commercial-registration-and-licenses-department/' },
    ],
  },

  permits: {
    emoji: '📋',
    heading: 'Obtain Permits & Approvals',
    summary:
      'Once your CR is in hand, you need a Trade License (Rukhsa) to physically operate — plus any sector-specific clearances your business activity requires.',
    sections: [
      {
        title: 'Trade License (Commercial Permit / Baladiya)',
        items: [
          'Issued by your local municipality — this authorises physical operations',
          'Requires a legally leased, municipality-approved office or commercial space',
          'Documents: MOA, signed rental agreement + photographs, CR, copies of QID for all partners',
          'Fees — Physical premises: QAR 500  |  Home-based business: QAR 300',
        ],
      },
      {
        title: 'Establishment Card (Computer Card)',
        items: [
          'Issued by the Ministry of Interior (MoI)',
          'Links your company to the immigration system',
          'Required to hire employees, sponsor work visas, and process residency permits',
        ],
      },
      {
        title: 'Tax Registration (automatic)',
        items: [
          'Upon receiving your CR, your business is automatically registered for a Tax ID Number (TIN) with the General Tax Authority (GTA)',
          'Corporate tax rate in Qatar: a flat 10% — among the lowest globally',
          'If annual income exceeds the taxable threshold, VAT registration via the Dhareeba portal is compulsory',
        ],
      },
      {
        title: 'Sector-specific clearances (if applicable)',
        items: [
          'Civil Defense Approval — mandatory for shops, offices & warehouses (fire safety)',
          'Ministry of Public Health — required for F&B venues and medical/health facilities',
          'Ministry of Municipality — required for environmental or construction-related activities',
          'Ministry of Education — required for educational institutions and training centers',
        ],
      },
      {
        title: 'Open your corporate bank account',
        items: [
          'Required documents: Commercial Registration, Trade License, Establishment Card, QID of all partners, passport + residency permit (expats)',
          'Account is needed for all business transactions and payroll',
          'Most major Qatar banks (QNB, CBQ, QIB) offer business accounts tailored to new companies',
        ],
      },
    ],
    tip: 'Apply for Civil Defense approval early — it runs in parallel with your trade license application and can add 1–2 weeks if left to the last minute.',
    links: [
      { label: 'Invest Qatar', href: 'https://invest.qa/en' },
      { label: 'Free Zone Options', href: 'https://qfz.gov.qa/' },
      { label: 'Dhareeba Tax Portal', href: 'https://dhareeba.gov.qa' },
    ],
  },
};

// ─── Full guide steps ──────────────────────────────────────────────────────
const guideSteps = [
  {
    num: '01',
    title: 'Define your business idea & draft a plan',
    body: 'Choose a legally permitted activity aligned with Qatar\'s priority sectors (tech, healthcare, tourism, F&B). Draft a 5-year plan covering capital, expected returns, and competition analysis. Decide if you\'ll operate on the mainland or in a free zone.',
  },
  {
    num: '02',
    title: 'Choose your legal structure',
    body: 'Most SMEs register as an LLC. Foreign investors on the mainland can own up to 49% (100% in select sectors under Law No. 1 of 2019). Free zones (QFC, QFZ, QSTP) allow 100% foreign ownership without a local sponsor.',
  },
  {
    num: '03',
    title: 'Reserve your trade name with MOCI',
    body: 'Log into the MOCI portal and check name availability. A 3-day hold is free; a 6-month reservation costs QAR 1,000. The name must not be misleading or duplicate an existing entity.',
  },
  {
    num: '04',
    title: 'Prepare & notarise your MOA',
    body: 'Draft the Memorandum of Association covering ownership, share capital, and activities. All partners sign before a MOCI-approved notary, then submit to the Ministry of Justice for approval.',
  },
  {
    num: '05',
    title: 'Secure your office space',
    body: 'Physical businesses need a municipally approved, legally leased premises before the Trade License can be issued. Browse commercial offices in Qatar early — approval depends on a valid rental agreement.',
  },
  {
    num: '06',
    title: 'Apply for Commercial Registration (CR)',
    body: 'Submit via the Qatar Single Window Portal: MOA (×2), application form, residency permits. Fees: QAR 500 for one activity. The CR is your company\'s legal certificate — needed for a bank account.',
  },
  {
    num: '07',
    title: 'Apply for Trade License (Rukhsa)',
    body: 'Submit via MOCI portal: MOA, rental agreement + photos, CR, partner QIDs. Fees: QAR 500 (physical) or QAR 300 (home-based). This authorises you to begin operations.',
  },
  {
    num: '08',
    title: 'Obtain sector-specific permits',
    body: 'Depending on your activity: Civil Defense approval (shops/offices), Ministry of Public Health (F&B/medical), Ministry of Municipality (construction/environment). Start these early — they run in parallel.',
  },
  {
    num: '09',
    title: 'Register with Chamber of Commerce & Labour',
    body: 'Register with the Chamber of Commerce (QAR 200–5,000 depending on activity) and the Ministry of Labour. Obtain your Establishment Card (Computer Card) from the Ministry of Interior to sponsor employees.',
  },
  {
    num: '10',
    title: 'Open your corporate bank account & start',
    body: 'Bring your CR, Trade License, Establishment Card, and partner QIDs to your chosen bank. Your Tax ID is automatically issued with the CR. Register on the Dhareeba portal if VAT-liable. Hire staff and launch!',
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.22s ease' }}
    >
      <path d="M3 6l5 5 5-5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepDetail({ detail, onClose }) {
  return (
    <div className="bss-detail-panel" role="region" aria-label={detail.heading}>
      <div className="bss-detail-header">
        <span className="bss-detail-emoji" aria-hidden="true">{detail.emoji}</span>
        <div>
          <h3 className="bss-detail-title">{detail.heading}</h3>
          <p className="bss-detail-summary">{detail.summary}</p>
        </div>
        <button className="bss-detail-close" onClick={onClose} aria-label="Close details">✕</button>
      </div>

      <div className="bss-detail-sections">
        {detail.sections.map((sec) => (
          <div key={sec.title} className="bss-detail-section">
            <h4 className="bss-detail-section-title">{sec.title}</h4>
            <ul className="bss-detail-list">
              {sec.items.map((item) => (
                <li key={item} className="bss-detail-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {detail.tip && (
        <div className="bss-tip">
          <span className="bss-tip-icon" aria-hidden="true">💡</span>
          <p>{detail.tip}</p>
        </div>
      )}

      {detail.links && detail.links.length > 0 && (
        <div className="bss-detail-links">
          <span className="bss-detail-links-label">Useful links</span>
          {detail.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="bss-detail-link">
              {l.label} <ArrowRight />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function GuideModal({ onClose }) {
  return (
    <div className="bss-modal-overlay" role="dialog" aria-modal="true" aria-label="Start Guide">
      <div className="bss-modal">
        <div className="bss-modal-header">
          <div>
            <h2 className="bss-modal-title">Complete Startup Guide</h2>
            <p className="bss-modal-subtitle">10 steps to launch your business in Qatar</p>
          </div>
          <button className="bss-detail-close" onClick={onClose} aria-label="Close guide">✕</button>
        </div>
        <div className="bss-modal-body">
          {guideSteps.map((step) => (
            <div key={step.num} className="bss-guide-step">
              <div className="bss-guide-num" aria-hidden="true">{step.num}</div>
              <div className="bss-guide-content">
                <h4 className="bss-guide-step-title">{step.title}</h4>
                <p className="bss-guide-step-body">{step.body}</p>
              </div>
            </div>
          ))}
          <div className="bss-guide-footer">
            <a href="https://investor.sw.gov.qa/wps/portal/investors/services/service-details/startyourbusiness"
              target="_blank" rel="noopener noreferrer" className="bss-btn" style={{ display: 'inline-flex', width: 'auto' }}>
              Open Qatar Single Window Portal <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
const steps = [
  { id: 'activity', title: 'Choose Your Business Activity', desc: 'Identify the correct license category, legal structure, and ownership rules.' },
  { id: 'moci',     title: 'Register with MOCI',           desc: 'Reserve a trade name, prepare your MOA, and obtain your Commercial Registration.' },
  { id: 'permits',  title: 'Obtain Permits & Approvals',   desc: 'Secure your Trade License and any sector-specific municipal clearances.' },
];

const quickLinks = [
  { label: 'MOCI Business Portal',      href: 'https://www.moci.gov.qa' },
  { label: 'Commercial Registration',   href: 'https://www.moci.gov.qa/en/about-the-ministry/departments/departments-under-the-assistant-deputy-of-commerce-affairs/the-commercial-registration-and-licenses-department/' },
  { label: 'Invest Qatar',              href: 'https://invest.qa/en' },
  { label: 'Free Zone Options',         href: 'https://qfz.gov.qa/' },
  { label: 'Qatar Single Window',       href: 'https://investor.sw.gov.qa/wps/portal/investors/services/service-details/startyourbusiness' },
  { label: 'Dhareeba Tax Portal',       href: 'https://dhareeba.gov.qa' },
];

export default function BusinessStartupSetup() {
  const [activeStep, setActiveStep] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  const handleStepClick = (e, id) => {
    e.preventDefault();
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <>
      <section className="bss-section">
        <div className="bss-inner">
          <h1 className="bss-title">Business &amp; Startup Setup</h1>

          <div className="bss-body">
            {/* ── Left column ── */}
            <div className="bss-left">
              <p className="bss-intro">
                Starting a business in Qatar doesn't have to be complicated. Get clear guidance on
                licenses, permits, and government requirements — whether you're a local entrepreneur
                or a foreign investor. Click any step below to explore the details.
              </p>

              <div className="bss-steps">
                {steps.map((step) => {
                  const isOpen = activeStep === step.id;
                  return (
                    <div key={step.id} className="bss-step-wrapper">
                      <a
                        href={`#${step.id}`}
                        className={`bss-step${isOpen ? ' bss-step--open' : ''}`}
                        onClick={(e) => handleStepClick(e, step.id)}
                        aria-expanded={isOpen}
                        aria-label={step.title}
                      >
                        <div className="bss-step-arrow">
                          <ArrowRight />
                        </div>
                        <div className="bss-step-content">
                          <p className="bss-step-title">{step.title}</p>
                          <p className="bss-step-desc">{step.desc}</p>
                        </div>
                        <div className="bss-step-chevron">
                          <ChevronDown open={isOpen} />
                        </div>
                      </a>

                      {isOpen && (
                        <StepDetail
                          detail={stepDetails[step.id]}
                          onClose={() => setActiveStep(null)}
                        />
                      )}
                    </div>
                  );
                })}
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

              <button className="bss-btn" onClick={() => setShowGuide(true)}>
                Start Guide
                <ArrowRight />
              </button>
            </aside>
          </div>
                  <Link href="/" className="sb-back-link">
          ← Back to Home
        </Link>
        </div>
      </section>

      {showGuide && <GuideModal onClose={() => setShowGuide(false)} />}

      <style>{`
        /* ── Step open state ── */
        .bss-step--open {
          background: #f0f0ff;
          transform: translateX(6px);
          box-shadow: 0 4px 16px rgba(79, 70, 229, 0.1);
        }
        .bss-step--open .bss-step-arrow {
          background: #4f46e5;
        }
        .bss-step--open .bss-step-arrow svg path {
          stroke: #ffffff;
        }
        .bss-step-chevron {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          color: #9ca3af;
          margin-left: auto;
          padding-left: 10px;
        }
        .bss-step--open .bss-step-chevron {
          color: #4f46e5;
        }

        /* ── Detail panel ── */
        .bss-detail-panel {
          background: #ffffff;
          border: 1px solid #e0e7ff;
          border-radius: 16px;
          padding: 24px;
          margin-top: 4px;
          margin-bottom: 4px;
          box-shadow: 0 8px 28px rgba(79, 70, 229, 0.08);
          animation: bss-slide-in 0.22s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        @keyframes bss-slide-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .bss-detail-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }
        .bss-detail-emoji {
          font-size: 28px;
          line-height: 1;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .bss-detail-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f0f1a;
          margin: 0 0 4px;
        }
        .bss-detail-summary {
          font-size: 0.88rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.55;
        }
        .bss-detail-close {
          margin-left: auto;
          flex-shrink: 0;
          background: #f3f4f6;
          border: none;
          border-radius: 8px;
          width: 30px;
          height: 30px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          color: #6b7280;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .bss-detail-close:hover {
          background: #fee2e2;
          color: #ef4444;
        }

        .bss-detail-sections {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 18px;
        }
        .bss-detail-section-title {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #4f46e5;
          margin: 0 0 8px;
        }
        .bss-detail-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .bss-detail-item {
          font-size: 0.88rem;
          color: #374151;
          line-height: 1.5;
          padding-left: 16px;
          position: relative;
        }
        .bss-detail-item::before {
          content: '›';
          position: absolute;
          left: 0;
          color: #4f46e5;
          font-weight: 700;
        }

        .bss-tip {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          background: #fefce8;
          border: 1px solid #fde68a;
          border-radius: 10px;
          padding: 12px 14px;
          margin-bottom: 16px;
        }
        .bss-tip-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
        .bss-tip p {
          font-size: 0.83rem;
          color: #92400e;
          margin: 0;
          line-height: 1.5;
        }

        .bss-detail-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }
        .bss-detail-links-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-right: 2px;
        }
        .bss-detail-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #4f46e5;
          text-decoration: none;
          background: #eef2ff;
          padding: 4px 10px;
          border-radius: 9999px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .bss-detail-link:hover {
          background: #4f46e5;
          color: #fff;
        }

        /* ── Guide Modal ── */
        .bss-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 15, 26, 0.55);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: bss-fade 0.2s ease;
        }
        @keyframes bss-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .bss-modal {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          max-width: 640px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 32px 80px rgba(15, 15, 26, 0.22);
          animation: bss-modal-in 0.25s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        @keyframes bss-modal-in {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .bss-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 24px 0;
          flex-shrink: 0;
        }
        .bss-modal-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f0f1a;
          margin: 0 0 4px;
        }
        .bss-modal-subtitle {
          font-size: 0.88rem;
          color: #6b7280;
          margin: 0;
        }
        .bss-modal-body {
          overflow-y: auto;
          padding: 20px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Guide steps ── */
        .bss-guide-step {
          display: flex;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        .bss-guide-step:last-of-type { border-bottom: none; }
        .bss-guide-num {
          font-size: 0.72rem;
          font-weight: 800;
          color: #4f46e5;
          background: #eef2ff;
          border-radius: 7px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          letter-spacing: 0.04em;
          margin-top: 2px;
        }
        .bss-guide-step-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f0f1a;
          margin: 0 0 4px;
        }
        .bss-guide-step-body {
          font-size: 0.85rem;
          color: #4b5563;
          margin: 0;
          line-height: 1.6;
        }
        .bss-guide-footer {
          padding-top: 20px;
          border-top: 1px solid #f3f4f6;
          margin-top: 4px;
        }

        /* ── Step wrapper (for divider override) ── */
        .bss-step-wrapper { position: relative; }
      `}</style>
    </>
  );
}
