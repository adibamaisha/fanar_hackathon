import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <header className="site-navbar">
      <div className="site-navbar-inner">
        <Link href="/" className="site-logo-link">
          <Image
            src="/logo.png"
            alt="Bayan QA"
            width={100}
            height={120}
            priority
            style={{ height: 120, width: "auto" }}
          />
        </Link>

        <div className="language-selector">
          <button
            type="button"
            className="language-button"
            onClick={() => setIsLangOpen((open) => !open)}
            aria-haspopup="listbox"
            aria-expanded={isLangOpen}
          >
            <Globe size={18} />
            <span>{language}</span>
            <ChevronDown size={16} />
          </button>

          {isLangOpen ? (
            <ul role="listbox" className="language-menu">
              {[
                { label: "English", value: "English" },
                { label: "Arabic", value: "Arabic" },
              ].map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    className="language-item"
                    onClick={() => {
                      setLanguage(option.label);
                      setIsLangOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </header>
  );
}
