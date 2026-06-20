// footer.jsx
import React from 'react';


const quickLinks = [
  { label: 'Home',                href: '/' },
  { label: 'AI Assistant',        href: '/assistant' },
  { label: 'Government Services', href: '/services' },
  { label: 'About',               href: '/about' },
  { label: 'Contact',             href: '/contact' },
];

const trustedSources = [
  { label: 'Hukoomi',                   href: 'https://hukoomi.gov.qa' },
  { label: 'Ministry of Interior',      href: 'https://portal.moi.gov.qa' },
  { label: 'Ministry of Justice',       href: 'https://www.moj.gov.qa' },
  { label: 'Ministry of Public Health', href: 'https://www.moph.gov.qa' },
];

export default function Footer() {
  return (
    <footer className="qca-footer">
      <div className="qca-footer-inner">

        {/* ── Top grid ── */}
        <div className="qca-footer-grid">

          {/* Brand */}
          <div>
            <p className="qca-brand-name">
              <span className="qca-brand-dot" aria-hidden="true" />
              bayan QA
            </p>
            <p className="qca-brand-desc">
              Simplifying access to government services and information for
              residents and citizens of Qatar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="qca-col-title">Quick Links</p>
            <ul className="qca-link-list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trusted Sources */}
          <div>
            <p className="qca-col-title">Trusted Sources</p>
            <ul className="qca-link-list">
              {trustedSources.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <p className="qca-col-title">Disclaimer</p>
            <div className="qca-disclaimer">
              <p>
                This platform provides <strong>AI-assisted guidance</strong> based
                on publicly available government information. Always verify
                important information with the official government authority before
                taking action.
              </p>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="qca-footer-bottom">
          <p className="qca-copyright">
            © 2026 <span>bayan QA</span>. All rights reserved.
          </p>
          <div className="qca-badges">
            <span className="qca-badge">AI Powered</span>
            <span className="qca-badge">Gov Verified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}