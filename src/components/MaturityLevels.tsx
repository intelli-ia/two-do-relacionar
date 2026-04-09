"use client";

import { useRef } from "react";
import { SplitText } from "./SplitText";

const LEVELS = [
  {
    range: "0–40",
    name: "Operacional",
    description: "A empresa atua de forma predominantemente operacional na construção de relacionamento. As ações acontecem de maneira isolada, com baixa intencionalidade&nbsp;estratégica.",
    color: "#e45a53", // Primary (Red)
  },
  {
    range: "41–70",
    name: "Reativo",
    description: "A empresa já reconhece a importância do relacionamento, mas atua de forma reativa. As decisões são tomadas em resposta a demandas&nbsp;pontuais.",
    color: "#f59e0b", // Orange
  },
  {
    range: "71–100",
    name: "Estruturado",
    description: "Há processos e consciência estratégica, porém ainda existem inconsistências que limitam o impacto e a previsibilidade dos&nbsp;resultados.",
    color: "#10b981", // Green
  },
  {
    range: "101–120",
    name: "Estratégico",
    description: "O relacionamento é tratado como parte da estratégia do negócio. Existe alinhamento entre áreas e intencionalidade nas&nbsp;ações.",
    color: "#3b82f6", // Blue
  },
  {
    range: "121–140",
    name: "Referência",
    description: "A empresa opera o relacionamento como um ativo estratégico central. Marca que não compete por preço e gera diferenciação&nbsp;real.",
    color: "#4b8f87", // Secondary (Teal)
  },
];

export default function MaturityLevels() {
  return (
    <section
      id="diagnostico"
      className="relative bg-[#fafafa] py-28 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        
        <div className="flex flex-col items-center text-center mb-20">
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-3 text-center"
            style={{ color: "var(--color-secondary)", fontWeight: 700 }}
          >
            Níveis de Maturidade
          </p>
          <SplitText
            segments={[
              { text: "Onde sua empresa\n" },
              { text: "se encontra?", italic: true, primary: true },
            ]}
            as="h2"
            className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] mb-8 text-center"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
          />
          <p
            className="text-sm md:text-xl font-light leading-relaxed max-w-2xl"
            style={{ color: "var(--color-dark)", opacity: 0.6 }}
          >
            Através do sistema de pontuação do Método RELACIONAR, você terá clareza sobre o estágio atual do seu negócio e o caminho para se tornar uma&nbsp;referência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {LEVELS.map((level, i) => (
            <div
              key={i}
              className="group relative flex flex-col p-8 rounded-2xl bg-white border border-black/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ minHeight: "320px" }}
            >
              <div 
                className="text-3xl font-bold mb-4"
                style={{ color: level.color }}
              >
                {level.range}
                <span className="block text-xs uppercase tracking-widest mt-1 opacity-50">pontos</span>
              </div>
              
              <h3 
                className="text-2xl mb-4 font-normal"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
              >
                {level.name}
              </h3>

              <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                {level.description}
              </p>

              <div 
                className="absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: level.color, width: "20px" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
            <a
              href="#contato"
              className="btn-premium px-10 py-5 text-xs shadow-lg"
            >
              <span className="btn-shimmer" aria-hidden="true" />
              <span className="relative z-10">Solicitar Diagnóstico Personalizado</span>
              <svg
                className="relative z-10 w-4 h-4 ml-3 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
            <p className="mt-6 text-xs italic opacity-40">
                Respostas honestas geram retratos fiéis. Cresça com estratégia.
            </p>
        </div>
      </div>
    </section>
  );
}
