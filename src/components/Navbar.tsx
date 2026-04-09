"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home",        href: "#" },
  { label: "O Método",   href: "#metodo" },
  { label: "Pilares",    href: "#pilares" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Contato",    href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header
      className="w-full bg-white relative"
      style={{ borderBottom: "1px solid rgba(15,13,12,0.07)", zIndex: 9999 }}
    >
      <nav className="w-full max-w-5xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" aria-label="Two do Design — página inicial" className="flex items-center">
          <Logo style={{ color: "var(--color-primary)", width: "64px", height: "auto" }} />
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link inline-flex items-center px-4 py-2 text-xs uppercase font-bold"
                style={{
                  color: "var(--color-primary)",
                  letterSpacing: "0.18em",
                  transition: "letter-spacing 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.letterSpacing = "0.28em";
                  el.style.color = "var(--color-secondary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.letterSpacing = "0.18em";
                  el.style.color = "var(--color-primary)";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile — hamburguer + dropdown */}
        <div ref={menuRef} className="md:hidden relative">
          <button
            className="flex flex-col justify-center gap-[5px] p-2 rounded-md"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="w-6 h-0.5 block rounded-full transition-all duration-300"
              style={{
                backgroundColor: "var(--color-primary)",
                transform: open ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="w-6 h-0.5 block rounded-full transition-all duration-300"
              style={{
                backgroundColor: "var(--color-primary)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-0.5 block rounded-full transition-all duration-300"
              style={{
                backgroundColor: "var(--color-primary)",
                transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>

          {/* Dropdown mobile */}
          <div
            className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-white shadow-lg overflow-hidden"
            style={{
              border: "1px solid rgba(15,13,12,0.07)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
              pointerEvents: open ? "auto" : "none",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
          >
            <ul className="flex flex-col py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3 text-xs uppercase font-bold tracking-widest"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </nav>
    </header>
  );
}
