"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#about"
          className="font-semibold text-[var(--primary)] tracking-tight text-sm"
        >
          Guanyu Qu
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--card)] transition-colors"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
