"use client";

import { RevealItem } from "./About"; // Reusing the animation logic

const INCLUDED_ITEMS = [
  "Diagnóstico Estratégico Completo",
  "Mapa de Maturidade de Relacionamento",
  "Acesso Imediato às Aulas Práticas",
  "Plano de Ação para os 10 Pilares",
  "Consultoria GRATUITA com a especialista Vanessa Lessa",
  "Guia de Implementação de Ações em consultoria"
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 px-6 md:py-32">
      <div className="max-w-4xl mx-auto">

        {/* Main Pricing Card */}
        <div className="bg-[#0f0d0c] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
          {/* Accent bar at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-2 bg-[#e45a53] rounded-b-xl" />

          <RevealItem delay={0}>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-12"
              style={{ fontFamily: "var(--font-display)", color: "#e45a53" }}
            >
              É isso tudo que você <br className="hidden md:block" /> irá receber:
            </h2>
          </RevealItem>

          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-12 flex items-center justify-center">
            <span className="text-[10px] bg-[#0f0d0c] px-2 opacity-40">★</span>
          </div>

          {/* Items List */}
          <div className="flex flex-col items-center gap-4 mb-12">
            {INCLUDED_ITEMS.map((item, i) => (
              <RevealItem key={i} delay={i * 50} className="flex items-center gap-3 text-white/80 text-sm md:text-base font-light">
                <div className="w-5 h-5 rounded-full bg-[#4b8f87] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={4}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                {item}
              </RevealItem>
            ))}
          </div>

          <div className="w-full h-[1px] bg-white/10 mb-12 flex items-center justify-center">
            <span className="text-[10px] bg-[#0f0d0c] px-2 opacity-40">★</span>
          </div>

          {/* Pricing Details */}
          <RevealItem delay={400} className="mb-10">
            <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-4">
              Acesso vitalício por apenas 12x de
            </p>
            <div className="flex items-center justify-center gap-2">
              <span
                className="text-6xl md:text-8xl font-normal"
                style={{ fontFamily: "var(--font-display)", color: "#e45a53" }}
              >
                R$ 3,90
              </span>
            </div>
            <p className="text-white/60 text-sm mt-4">
              ou <span className="font-bold text-white">R$ 39,90</span> à vista
            </p>
          </RevealItem>

          {/* CTA Button */}
          <RevealItem delay={500} className="flex justify-center mb-10">
            <a
              href="https://pay.hotmart.com/YOUR_HOTMART_LINK" // Placeholder for checkout
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-12 py-5 text-sm md:text-base w-full md:w-auto"
            >
              <span className="btn-shimmer" aria-hidden="true" />
              <span className="relative z-10 font-bold tracking-[0.2em] uppercase">QUERO GARANTIR MEU ACESSO</span>
            </a>
          </RevealItem>

          <div className="pt-8 border-t border-white/10 uppercase tracking-[0.15em] text-[10px] md:text-xs">
            <p style={{ color: "#e45a53" }} className="font-bold opacity-80">
              Compra Segura | 7 Dias de Garantia
            </p>
          </div>
        </div>

        {/* Guarantee Badge Block */}
        <RevealItem delay={600} className="mt-8 bg-[#f9f9f9] border border-black/5 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Seven Days Stamp */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <div className="absolute inset-0 border-[3px] border-black rounded-full flex flex-col items-center justify-center text-center p-4">
              <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-tighter leading-tight">Garantia</span>
              <span className="text-4xl md:text-5xl font-bold leading-none my-1">7</span>
              <span className="text-sm md:text-base font-bold uppercase">Dias</span>
            </div>
            {/* Simple decorative stamp effect */}
            <div className="absolute inset-0 border-4 border-dashed border-black/10 rounded-full -m-2" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3
              className="text-xl md:text-2xl mb-4 font-normal"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}
            >
              VOCÊ TEM 7 DIAS PARA TESTAR AS ESTRATÉGIAS DO PRODUTO
            </h3>
            <p className="text-sm md:text-base text-black/60 font-light leading-relaxed">
              O amadorismo exige esforço constante — mas aqui, seu primeiro passo é livre de riscos. Se você não sentir que o diagnóstico transformou sua visão de negócio, devolvemos 100% do seu investimento.
            </p>
          </div>
        </RevealItem>

      </div>
    </section>
  );
}
