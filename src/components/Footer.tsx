"use client";

import Logo from "./Logo";

const WHATSAPP_NUMBER = "5571983274186";

export default function Footer() {
  return (
    <footer
      id="contato"
      style={{ backgroundColor: "var(--color-dark)", color: "#fff" }}
    >
      {/* ── CTA principal ── */}
      <div
        className="w-full flex flex-col items-center justify-center gap-6 text-center"
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p
          className="text-xs tracking-[0.35em] uppercase"
          style={{ color: "var(--color-primary)" }}
        >
          Vamos conversar?
        </p>

        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-normal leading-[1.1] max-w-2xl px-6"
          style={{ fontFamily: "var(--font-display)", color: "#fff" }}
        >
          Quer descobrir o nível de{" "}
          <span className="italic" style={{ color: "var(--color-primary)" }}>
            maturidade
          </span>{" "}
          da sua marca?
        </h2>
        <a
          href="https://pay.hotmart.com/U105311633U"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium px-10 py-5 text-sm uppercase tracking-[0.2em] mt-2 group"
        >
          <span className="btn-shimmer" aria-hidden="true" />
          <span className="relative z-10 font-bold">Conheça o Relacionar</span>
          <svg 
            className="relative z-10 w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>

      {/* ── Rodapé inferior ── */}
      <div
        className="w-full max-w-6xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
      >
        {/* Logo */}
        <a href="#" aria-label="Two do Design">
          <Logo style={{ color: "var(--color-primary)", width: "56px", height: "auto" }} />
        </a>

        {/* Copyright */}
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Two do Design. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
