import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const banks = [
  {
    id: "cbq",
    logo: "/cbqlogo.png",
    name: "CBQ",
    fullName: "Commercial Bank of Qatar",
    type: "Conventional",
    accountName: "CBQ Student Banking Package",
    tagline: "Modern digital banking designed for students with exclusive education-linked benefits.",
    features: [
      "Free current or savings account",
      "CBQ debit Mastercard included",
      "Full-featured CBQ mobile app",
      "Special student loan & top-up options",
      "Educational discounts & offers",
    ],
    documents: [
      "Valid Qatar ID or Passport",
      "Enrollment / acceptance letter from institution",
      "Student ID card",
      "Recent utility bill or residence proof",
    ],
    applyUrl: "https://www.cbq.qa/EN/Personal/Accounts/Pages/Savings-Accounts.aspx",
  },
  {
    id: "qib",
    logo: "/qiblogo.png",
    name: "QIB",
    fullName: "Qatar Islamic Bank",
    type: "Islamic (Shariah-compliant)",
    accountName: "QIB Youth / Student Account",
    tagline: "Qatar's leading Islamic bank — 100% Shariah-compliant with dedicated student offerings.",
    features: [
      "Shariah-compliant savings (no interest)",
      "Free QIB prepaid / debit card",
      "QIB mobile app with full digital access",
      "Profit-sharing savings structure",
      "Youth-specific promotions & rewards",
    ],
    documents: [
      "Valid Qatar ID or Passport",
      "Enrollment letter from college / university",
      "Student ID card",
      "Completed QIB account application",
    ],
    applyUrl: "https://www.qib.com.qa/en/personal/accounts",
  },
  {
    id: "qnb",
    logo: "/qnblogo.png",
    name: "QNB",
    fullName: "Qatar National Bank",
    type: "Conventional",
    accountName: "QNB Student Account",
    tagline: "Qatar's largest bank — digital-first with wide branch coverage across campus areas.",
    features: [
      "Zero monthly maintenance fees",
      "Free QNB debit card",
      "Mobile & online banking included",
      "Instant account opening via QNB app",
      "Competitive savings interest rates",
    ],
    documents: [
      "Valid Qatar ID or Passport",
      "Student ID or enrollment letter",
      "Recent proof of address",
      "Passport-size photograph",
    ],
    applyUrl: "https://www.qnb.com/sites/qnb/qnbqatar/page/en/enpersonalaccounts.html",
  },
];

export default function StudentBanking() {
  const [selectedId, setSelectedId] = useState(null);

  const selected = banks.find((b) => b.id === selectedId);

  return (
    <>
      <Head>
        <title>Student Banking in Qatar — Bayan QA</title>
      </Head>

      <div className="sb-page">
        <header className="sb-header">
          <span className="sb-badge">Student Banking</span>
          <h1 className="sb-title">Banking Options for Students in Qatar</h1>
          <p className="sb-subtitle">
            Choose one of the main student-friendly banks below to explore its account details, requirements, and application page.
          </p>
        </header>

        <div className="sb-grid">
          {banks.map((bank) => (
            <button
              key={bank.id}
              className={`sb-bank-btn${selectedId === bank.id ? " active" : ""}`}
              onClick={() => setSelectedId(selectedId === bank.id ? null : bank.id)}
              aria-pressed={selectedId === bank.id}
              aria-label={`Select ${bank.fullName}`}
            >
              <div className={`sb-bank-logo-wrap sb-bank-logo-wrap-${bank.id}`}>
                <Image
                  src={bank.logo}
                  alt={`${bank.name} logo`}
                  width={84}
                  height={84}
                  className={`sb-bank-logo sb-bank-logo-${bank.id}`}
                />
              </div>
              <span className="sb-bank-name">{bank.name}</span>
              <span className="sb-bank-type">{bank.type}</span>
              <span className="sb-bank-arrow" aria-hidden="true">↓</span>
            </button>
          ))}
        </div>

        {selected && (
          <div className="sb-detail" key={selected.id}>
            <div className="sb-detail-top">
              <div className={`sb-detail-logo-wrap sb-detail-logo-wrap-${selected.id}`}>
                <Image
                  src={selected.logo}
                  alt={`${selected.name} logo`}
                  width={72}
                  height={72}
                  className={`sb-detail-logo sb-detail-logo-${selected.id}`}
                />
              </div>
              <div className="sb-detail-heading">
                <span className="sb-account-tag">{selected.accountName}</span>
                <h2>{selected.fullName}</h2>
                <p>{selected.tagline}</p>
              </div>
            </div>

            <div className="sb-detail-cols">
              <div className="sb-detail-block">
                <h4>Key Features</h4>
                <ul>
                  {selected.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="sb-detail-block">
                <h4>Documents Required</h4>
                <ul>
                  {selected.documents.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={selected.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-apply-btn"
            >
              Visit {selected.name} Website →
            </a>
          </div>
        )}

        <Link href="/" className="sb-back-link">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
