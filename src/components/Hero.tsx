"use client";

import { useEffect, useRef, useState } from "react";
import { SplitText } from "./SplitText";

const TICKER_PHRASES = [
  "Relevância de Marca",
  "Experiência do Cliente",
  "Laços de Relacionamento",
  "Arquitetura de Processos",
  "Consistência de Comunicação",
  "Intencionalidade Estratégica",
  "Orquestração da Jornada",
  "Nível de Maturidade",
  "Análise de Métricas & ROI",
  "Responsabilidade Estratégica",
];

export default function Hero() {
  const tickerContent = [...TICKER_PHRASES, ...TICKER_PHRASES];

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "var(--color-dark)" }}>

      {/* ── Background Gradients ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft centered glow */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 40%, rgba(228,90,83,0.15) 0%, transparent 60%)",
          }}
        />
        {/* Top glow */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-[2/1]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(75,143,135,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Main Layout ── */}
      <div className="relative z-20 min-h-screen flex flex-col w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

        {/* ── Centered Content ── */}
        <div className="flex-1 flex flex-col justify-center items-center text-center mt-20 md:mt-24 pb-32">
          
          <div className="max-w-4xl w-full flex flex-col items-center">

            {/* Eyebrow */}
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-8" style={{ backgroundColor: "rgba(228,90,83,0.1)", border: "1px solid rgba(228,90,83,0.2)"}}>
              <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: "var(--color-primary)" }}></span>
              <p
                className="text-[9px] md:text-[11px] tracking-[0.3em] uppercase"
                style={{ color: "var(--color-light)", fontWeight: 700 }}
              >
                Diagnóstico Estratégico de Relacionamento
              </p>
            </div>

            {/* H1 Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
            >
              Método <br className="md:hidden" />
              <span
                className="italic px-2 md:px-4"
                style={{ color: "var(--color-primary)" }}
              >
                RELACIONAR
              </span>
            </h1>

            {/* Subheadline - centered and refined */}
            <h2
              className="text-base md:text-xl lg:text-2xl font-light leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Onde sua marca está perdendo <span style={{ color: "#fff", fontWeight: 500 }}>dinheiro</span> e você não vê. Descubra o nível de maturidade estratégica do seu negócio através do nosso questionário e aulas práticas.
            </h2>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <a
                href="#diagnostico"
                className="btn-premium px-10 py-5 text-sm shadow-2xl shadow-[var(--color-primary)]/20"
              >
                <span className="btn-shimmer" aria-hidden="true" />
                <span className="relative z-10 text-white shadow-none">Iniciar Diagnóstico</span>
              </a>
              <a
                href="#pilares"
                className="px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 opacity-60 hover:opacity-100 text-white"
              >
                Conhecer a Metodologia
              </a>
            </div>

          </div>
        </div>

      </div>


      {/* ── Ticker / Fita em looping ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50 overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.1)]"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="ticker-track flex whitespace-nowrap">
          {tickerContent.map((phrase, i) => (
            <span
              key={i}
              className="inline-flex items-center justify-center gap-4 px-6 lg:px-8 py-3 lg:py-4 text-[10px] lg:text-xs tracking-widest uppercase font-bold"
              style={{ color: "#fff", opacity: 0.95 }}
            >
              {phrase}
              <span style={{ opacity: 0.4, fontSize: "0.5rem", transform: "translateY(-1px)" }}>●</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Ticker ── */
        .ticker-track {
          animation: ticker-scroll 24s linear infinite;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}
