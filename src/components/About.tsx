"use client";

import { useEffect, useRef, useState } from "react";
import { SplitText } from "./SplitText";

const PILLARS = [
  {
    number: "R",
    title: "Relevância de Marca",
    description: "Por que sua marca é escolhida? Avaliamos diferencial, autoridade e dependência de preço.",
  },
  {
    number: "E",
    title: "Experiência do Cliente",
    description: "A experiência é desenhada ou acontece por acaso? Focamos em encantamento e pós-venda.",
  },
  {
    number: "L",
    title: "Laços de Relacionamento",
    description: "O cliente lembra de você depois da venda? Estratégias de fidelização e recorrência.",
  },
  {
    number: "A",
    title: "Arquitetura de Processos",
    description: "O relacionamento depende de pessoas ou de sistema? Escalabilidade e padronização.",
  },
  {
    number: "C",
    title: "Consistência Comunicativa",
    description: "Sua marca fala a mesma língua? Tom de voz, mensagem e coerência visual.",
  },
  {
    number: "I",
    title: "Intencionalidade Estratégica",
    description: "As ações têm propósito ou são reativas? Planejamento e conexão com metas.",
  },
  {
    number: "O",
    title: "Orquestração da Jornada",
    description: "As áreas atuam juntas? Integração entre marketing, vendas e pós-venda.",
  },
  {
    number: "N",
    title: "Nível de Maturidade",
    description: "Em que estágio estratégico sua empresa está? Visão de longo prazo e sustentabilidade.",
  },
  {
    number: "A",
    title: "Análise de Métricas & ROI",
    description: "Relacionamento é custo ou investimento? Indicadores de retenção e LTV.",
  },
  {
    number: "R",
    title: "Responsabilidade Estratégica",
    description: "Quem responde pelo relacionamento? Liderança, processos e governança.",
  },
];

function useReveal() {
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
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function RevealItem({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function MobileRevealItem({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Desktop: sempre visível, sem animação
    if (window.matchMedia("(min-width: 768px)").matches) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(36px)";
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
export default function About() {
  return (
    <section
      id="pilares"
      className="relative bg-white py-14 md:py-28"
    >
      {/* Linha tênue topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-10"
        style={{ backgroundColor: "var(--color-dark)" }}
      />

      {/* Acento gradiente canto superior direito */}
      <div
        className="absolute top-0 right-0 w-[40%] h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 100% 0%, rgba(228,90,83,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

        {/* ── Topo da seção ── */}
        <div className="flex flex-col items-center text-center gap-6 mb-12 md:mb-20">

          <RevealItem delay={0} className="w-full">
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-3 text-center"
              style={{ color: "var(--color-secondary)", fontWeight: 700 }}
            >
              Os 10 Pilares da Maturidade
            </p>
            <SplitText
              segments={[
                { text: "Estrutura do Método\n" },
                { text: "RELACIONAR.", italic: true, primary: true },
              ]}
              as="h2"
              className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] mb-8 text-center"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
            />
          </RevealItem>

          <RevealItem delay={150} className="max-w-2xl">
            <p
              className="text-sm md:text-xl font-light leading-relaxed mb-4"
              style={{ color: "var(--color-dark)", opacity: 0.7 }}
            >
              Este diagnóstico foi criado para empresas que desejam crescer com consistência e transformar relacionamento em um ativo estratégico. Avaliamos a <span style={{ fontWeight: 600, color: "var(--color-dark)" }}>estrutura, clareza e intencionalidade </span>da sua&nbsp;marca para que ela se torne mais relevante e conectada com seus clientes.
            </p>
          </RevealItem>
        </div>

        {/* ── Divisor ── */}
        <RevealItem delay={200}>
          <div
            className="w-full h-px mb-12 opacity-10"
            style={{ backgroundColor: "var(--color-dark)" }}
          />
        </RevealItem>

        {/* ── Sticky Scroll Pilares (Desktop) ── */}
        <div className="hidden lg:block relative">
          <StickyScrollPillars />
        </div>

        {/* ── Pilares (Mobile/Tablet) ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          {PILLARS.map((pillar, i) => (
            <MobileRevealItem key={pillar.number + i} delay={i * 100}>
              <div
                className="pillar-card group relative flex flex-col items-center gap-6 p-6 md:p-8 rounded-sm cursor-default h-full"
                style={{
                  backgroundColor: "rgba(75,143,135,0.08)",
                  border: "1px solid rgba(75,143,135,0.15)",
                }}
              >
                <span
                  className="text-sm tracking-[0.3em] font-bold"
                  style={{ color: "var(--color-primary)", opacity: 0.5 }}
                >
                  {pillar.number}
                </span>

                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                />

                <h3
                  className="text-2xl font-normal"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
                >
                  {pillar.title}
                </h3>

                <p
                  className="text-base font-light opacity-60"
                  style={{ color: "var(--color-dark)" }}
                >
                  {pillar.description}
                </p>
              </div>
            </MobileRevealItem>
          ))}
        </div>

        {/* ── Texto de Urgência ── */}
        <div className="relative flex flex-col items-center mt-32 md:mt-48 text-center px-4 py-40 md:py-64 overflow-hidden rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-8">
          {/* Background Image com Máscaras Suaves (Fading to White) */}
          <div className="absolute inset-0 z-0 scale-110">
            <img
              src="/images/urgency-bg.png"
              alt=""
              className="w-full h-full object-cover grayscale opacity-90"
            />
            {/* Máscaras de Gradiente para suavizar bordas (para preto/escuro para combinar com bg-black se necessário, ou manter transparente) */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.8) 100%),
                  radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 90%)
                `
              }}
            />
          </div>

          <RevealItem delay={100} className="relative z-10 max-w-4xl px-6">
            <h4
              className="text-4xl md:text-6xl font-normal mb-10 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "#fff" }}
            >
              Negligenciar esses pilares é o caminho mais curto para a{" "}
              <span className="relative inline-block">
                irrelevância
                <span 
                  className="absolute bottom-1 left-0 w-full h-1 md:h-2 opacity-80" 
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
              </span>.
            </h4>
            <p
              className="text-xl md:text-2xl font-light opacity-90 leading-relaxed max-w-3xl mx-auto mb-16"
              style={{ color: "#fff" }}
            >
              No cenário atual, não saber exatamente como sua marca se relaciona é deixar dinheiro na mesa todos os dias. Este diagnóstico é o seu ponto de virada para a previsibilidade e o lucro sustentável.
            </p>

            {/* ── Botão (Movido para dentro) ── */}
            <div className="flex justify-center">
              <a
                href="#pricing"
                className="btn-premium px-10 py-5 text-sm md:text-base"
              >
                <span className="btn-shimmer" aria-hidden="true" />
                <span className="relative z-10 font-bold tracking-[0.2em] uppercase">QUERO MEU DIAGNÓSTICO</span>
                <svg
                  className="relative z-10 w-5 h-5 ml-3 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </RevealItem>
        </div>

      </div>
    </section>
  );
}

function StickyScrollPillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.6,
        }
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Visual Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pointer-events-none">

        {/* Left Side: Large Letter */}
        <div className="w-1/2 h-full flex items-center justify-center p-12">
          <div className="relative w-full h-full flex items-center justify-center">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.number + i}
                className="absolute transition-all duration-500 ease-in-out flex flex-col items-center"
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i
                    ? "scale(1)"
                    : "scale(0.9)",
                  pointerEvents: activeIndex === i ? "auto" : "none",
                }}
              >
                <span
                  className="text-[28rem] font-normal leading-none select-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-primary)",
                    opacity: 1
                  }}
                >
                  {pillar.number}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-1/2 h-full flex flex-col justify-center p-20 pr-32">
          <div className="relative h-64 w-full">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title + i}
                className="absolute top-0 left-0 w-full transition-all duration-700 ease-in-out"
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  transform: activeIndex === i ? "translateX(0)" : "translateX(20px)",
                  pointerEvents: activeIndex === i ? "auto" : "none",
                }}
              >
                <div className="flex flex-col gap-6">
                  <div
                    className="w-12 h-1 mb-2"
                    style={{ backgroundColor: "var(--color-secondary)", opacity: 0.6 }}
                  />
                  <h3
                    className="text-5xl lg:text-6xl font-normal leading-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-xl font-light leading-relaxed max-w-lg"
                    style={{ color: "var(--color-dark)", opacity: 0.6 }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Invisible Scroll Triggers */}
      <div className="relative">
        {PILLARS.map((_, i) => (
          <div
            key={i}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="h-screen w-full pointer-events-none"
          />
        ))}
      </div>
    </div>
  );
}
