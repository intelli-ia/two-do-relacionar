"use client";

import { useEffect, useRef } from "react";
import { SplitText } from "./SplitText";

const PILLARS = [
  {
    number: "R",
    title: "Relevância de Marca",
    description: "Por que sua marca é escolhida? Avaliamos diferencial, autoridade e dependência de&nbsp;preço.",
  },
  {
    number: "E",
    title: "Experiência do Cliente",
    description: "A experiência é desenhada ou acontece por acaso? Focamos em encantamento e&nbsp;pós-venda.",
  },
  {
    number: "L",
    title: "Laços de Relacionamento",
    description: "O cliente lembra de você depois da venda? Estratégias de fidelização e&nbsp;recorrência.",
  },
  {
    number: "A",
    title: "Arquitetura de Processos",
    description: "O relacionamento depende de pessoas ou de sistema? Escalabilidade e&nbsp;padronização.",
  },
  {
    number: "C",
    title: "Consistência de Comunicação",
    description: "Sua marca fala a mesma língua? Tom de voz, mensagem e coerência&nbsp;visual.",
  },
  {
    number: "I",
    title: "Intencionalidade Estratégica",
    description: "As ações têm propósito ou são reativas? Planejamento e conexão com&nbsp;metas.",
  },
  {
    number: "O",
    title: "Orquestração da Jornada",
    description: "As áreas atuam juntas? Integração entre marketing, vendas e&nbsp;pós-venda.",
  },
  {
    number: "N",
    title: "Nível de Maturidade",
    description: "Em que estágio estratégico sua empresa está? Visão de longo prazo e&nbsp;sustentabilidade.",
  },
  {
    number: "A",
    title: "Análise de Métricas & ROI",
    description: "Relacionamento é custo ou investimento? Indicadores de retenção e&nbsp;LTV.",
  },
  {
    number: "R",
    title: "Responsabilidade Estratégica",
    description: "Quem responde pelo relacionamento? Liderança, processos e&nbsp;governança.",
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

function RevealItem({
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
            {/* Badge propósito */}
            <p
              className="text-sm tracking-widest uppercase font-bold"
              style={{ color: "var(--color-secondary)" }}
            >
              📊 Diagnóstico 360º
            </p>
          </RevealItem>

          <RevealItem delay={150} className="max-w-2xl">
            <p
              className="text-sm md:text-xl font-light leading-relaxed mb-4"
              style={{ color: "var(--color-dark)", opacity: 0.7 }}
            >
              Este diagnóstico foi criado para empresas que desejam crescer com consistência e transformar relacionamento em um ativo estratégico. Avaliamos a <span style={{ fontWeight: 600, color: "var(--color-dark)" }}>estrutura, clareza e intencionalidade</span> da sua&nbsp;marca.
            </p>
          </RevealItem>
        </div>

        {/* ── Divisor ── */}
        <RevealItem delay={200}>
          <div
            className="w-full h-px mb-20 opacity-10"
            style={{ backgroundColor: "var(--color-dark)" }}
          />
        </RevealItem>

        {/* ── Pilares ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
          {PILLARS.map((pillar, i) => (
            <MobileRevealItem key={pillar.number} delay={i * 120}>
              <div
                className="pillar-card group relative flex flex-col items-center gap-6 p-6 md:p-8 rounded-sm cursor-default h-full"
                style={{
                  backgroundColor: "rgba(75,143,135,0.10)",
                  border: "1px solid rgba(75,143,135,0.18)",
                  transition:
                    "transform 0.4s ease, background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "scale(1.03)";
                  el.style.backgroundColor = "var(--color-secondary)";
                  el.style.borderColor = "var(--color-secondary)";
                  el.style.boxShadow = "0 12px 40px rgba(75,143,135,0.25)";
                  el.querySelectorAll<HTMLElement>("[data-text]").forEach((t) => {
                    t.style.color = "#fff";
                    t.style.opacity = "1";
                  });
                  const h3 = el.querySelector<HTMLElement>("[data-text='title']");
                  if (h3) h3.style.color = "#fff";
                  const line = el.querySelector<HTMLElement>("[data-line]");
                  if (line) line.style.backgroundColor = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "scale(1)";
                  el.style.backgroundColor = "rgba(75,143,135,0.10)";
                  el.style.borderColor = "rgba(75,143,135,0.18)";
                  el.style.boxShadow = "none";
                  el.querySelectorAll<HTMLElement>("[data-text='number']").forEach((t) => {
                    t.style.color = "var(--color-primary)";
                    t.style.opacity = "0.5";
                  });
                  el.querySelectorAll<HTMLElement>("[data-text='title']").forEach((t) => {
                    t.style.color = "var(--color-dark)";
                    t.style.opacity = "1";
                  });
                  const h3 = el.querySelector<HTMLElement>("[data-text='title']");
                  if (h3) h3.style.color = "var(--color-dark)";
                  el.querySelectorAll<HTMLElement>("[data-text='desc']").forEach((t) => {
                    t.style.color = "var(--color-dark)";
                    t.style.opacity = "0.55";
                  });
                  const line = el.querySelector<HTMLElement>("[data-line]");
                  if (line) line.style.backgroundColor = "var(--color-secondary)";
                }}
              >
                <span
                  data-text="number"
                  className="text-sm tracking-[0.3em] font-bold"
                  style={{ color: "var(--color-primary)", opacity: 0.5, transition: "color 0.4s, opacity 0.4s" }}
                >
                  {pillar.number}
                </span>

                <div
                  data-line
                  className="w-8 h-px"
                  style={{
                    backgroundColor: "var(--color-secondary)",
                    transition: "width 0.5s ease, background-color 0.4s ease",
                  }}
                />

                <SplitText
                  segments={[{ text: pillar.title }]}
                  as="h3"
                  className="text-2xl font-normal"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)", transition: "color 0.4s" }}
                  charDelay={40}
                  dataAttr="title"
                />

                <p
                  data-text="desc"
                  className="text-base font-light leading-relaxed"
                  style={{ color: "var(--color-dark)", opacity: 0.55, transition: "color 0.4s, opacity 0.4s" }}
                >
                  {pillar.description.split("—").flatMap((part, i) =>
                    i === 0 ? [part] : [<span key={i} className="hidden md:inline">—</span>, part]
                  )}
                </p>
              </div>
            </MobileRevealItem>
          ))}
        </div>

        {/* ── Botão ── */}
        <RevealItem delay={700} className="flex justify-center mt-16">
          <a
            href="#pilares"
            className="btn-premium px-8 py-4 text-sm"
          >
            <span className="btn-shimmer" aria-hidden="true" />
            <span className="relative z-10">Conhecer estrutura</span>
            <svg
              className="relative z-10 w-4 h-4 ml-3 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
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
