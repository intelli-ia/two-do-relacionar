"use client";

import { useEffect, useRef } from "react";
import { SplitText } from "./SplitText";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealItem({ children, delay = 0, className }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: 0,
      transform: "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

export default function ProductAccess() {
  return (
    <section id="metodo" className="relative bg-[#fafafa]" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="w-full max-w-5xl mx-auto px-8 md:px-12 flex flex-col items-center gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <RevealItem delay={0} className="w-full">
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--color-secondary)", fontWeight: 700 }}
            >
              Acesso Exclusivo
            </p>
            <SplitText
              segments={[
                { text: "Muito mais que um\n" },
                { text: "simples questionário.", italic: true, primary: true },
              ]}
              as="h2"
              className="text-4xl md:text-7xl lg:text-8xl font-normal leading-[1.1]"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
              charDelay={28}
            />
          </RevealItem>

          <RevealItem delay={150} className="max-w-2xl">
            <p className="text-sm md:text-xl font-light leading-relaxed text-center" style={{ color: "var(--color-dark)", opacity: 0.65 }}>
              O Método RELACIONAR entrega uma visão precisa de onde você está e o passo a passo claro de onde precisa chegar.
            </p>
          </RevealItem>
        </div>

        {/* Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Questionário */}
          <RevealItem delay={300} className="w-full h-full">
            <div 
              className="group relative flex flex-col h-full bg-white rounded-3xl p-8 md:p-10 overflow-hidden"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 30px 60px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.03)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)";
              }}
            >
              <div 
                className="absolute top-0 right-0 w-40 h-40 rounded-bl-[100px] pointer-events-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08]"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl" style={{ backgroundColor: "rgba(228,90,83,0.1)", color: "var(--color-primary)" }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </span>
                <h3 className="text-xl md:text-2xl font-normal" style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}>Diagnóstico 360º</h3>
              </div>
              
              <ul className="flex flex-col gap-4 flex-1">
                {[
                  "10 pilares estratégicos mapeados",
                  "Sistema de pontuação exclusivo (0 a 140)",
                  "Identificação imediata de gargalos",
                  "Mede a realidade atual, não o plano futuro"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base opacity-75">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--color-primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>

          {/* Card 2: Aulas/Módulos */}
          <RevealItem delay={450} className="w-full h-full">
            <div 
              className="group relative flex flex-col h-full bg-white rounded-3xl p-8 md:p-10 overflow-hidden"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 30px 60px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.03)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)";
              }}
            >
              <div 
                className="absolute top-0 right-0 w-40 h-40 rounded-bl-[100px] pointer-events-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08]"
                style={{ backgroundColor: "var(--color-secondary)" }}
              />

              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl" style={{ backgroundColor: "rgba(75,143,135,0.1)", color: "var(--color-secondary)" }}>
                  <svg className="w-6 h-6 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h3 className="text-xl md:text-2xl font-normal" style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}>Aulas Explicativas</h3>
              </div>
              
              <ul className="flex flex-col gap-4 flex-1">
                {[
                  "Vídeos profundos dissecando cada fase",
                  "Exemplos práticos de onde está a falha",
                  "Mentalidade para correção dos pontos francos",
                  "Acesso irrestrito a todo o conteúdo"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base opacity-75">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--color-secondary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>

        </div>

        {/* Botão Call to Action */}
        <RevealItem delay={600} className="mt-8">
          <a
            href="#diagnostico"
            className="btn-premium px-10 py-5 text-sm"
          >
            <span className="btn-shimmer" aria-hidden="true" />
            <span className="relative z-10">Acessar Questionário & Aulas</span>
            <svg
              className="relative z-10 w-4 h-4 ml-3 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </RevealItem>

      </div>
    </section>
  );
}
