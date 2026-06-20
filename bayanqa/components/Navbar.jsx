import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="site-navbar-inner">
        <Link href="/" className="site-logo-link">
          <Image src="/logo.png" alt="Bayan QA" width={81} height={44} priority />
        </Link>
      </div>
    </header>
  );
}
