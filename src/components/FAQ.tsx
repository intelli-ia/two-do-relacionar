"use client";

import { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.12) {
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
      transform: "translateY(24px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const FAQS = [
  {
    question: "O QUE É O MÉTODO RELACIONAR?",
    answer: "É um diagnóstico estratégico que avalia 10 pilares fundamentais da sua empresa: Relevância, Experiência, Laços, Arquitetura, Consistência, Intencionalidade, Orquestração, Maturidade, Análise e&nbsp;Responsabilidade.",
  },
  {
    question: "PARA QUEM É ESTE DIAGNÓSTICO?",
    answer: "Para empresas e marcas que desejam crescer com consistência, fortalecer sua percepção de valor e transformar relacionamento em um ativo estratégico — e não apenas em ações&nbsp;isoladas.",
  },
  {
    question: "O QUE EU RECEBO AO FINAL?",
    answer: "Você terá uma leitura clara do seu estágio atual (0 a 140 pontos), identificando fragilidades invisíveis e quais pilares estão limitando o seu crescimento no&nbsp;momento.",
  },
  {
    question: "O DIAGNÓSTICO ENTREGA UM PLANO DE AÇÃO?",
    answer: "O método RELACIONAR entrega clareza e interpretação guiada sobre o retrato fiel da sua empresa hoje. Ele antecede a decisão e o planejamento estratégico&nbsp;personalizado.",
  },
  {
    question: "QUAL O TEMPO DE RESPOSTA?",
    answer: "O diagnóstico é composto por perguntas que provocam reflexão estratégica. O tempo de preenchimento depende da sua familiaridade com os processos internos, variando entre 15 a 30&nbsp;minutos.",
  },
  {
    question: "EXISTEM RESPOSTAS CERTAS OU ERRADAS?",
    answer: "Não. Existe apenas o retrato fiel do estágio atual da sua empresa. A utilidade do resultado depende da total honestidade ao considerar o que acontece na prática, e não o que deveria&nbsp;acontecer.",
  },
];

function AccordionItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <RevealItem delay={delay}>
      <div style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <button
          className="w-full flex items-center justify-between gap-4 py-5 text-left"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span
            className="text-xs md:text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--color-dark)" }}
          >
            {question}
          </span>
          <span
            className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300"
            style={{
              borderColor: open ? "var(--color-primary)" : "rgba(0,0,0,0.2)",
              backgroundColor: open ? "var(--color-primary)" : "transparent",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6h10" stroke={open ? "#fff" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </button>

        <div
          ref={contentRef}
          style={{
            overflow: "hidden",
            maxHeight: open ? contentRef.current?.scrollHeight + "px" : "0px",
            transition: "max-height 0.4s ease, opacity 0.3s ease",
            opacity: open ? 1 : 0,
          }}
        >
          <p
            className="text-sm font-light leading-relaxed pb-5"
            style={{ color: "#555", maxWidth: "72ch" }}
          >
            {answer.split("—").flatMap((part, i) =>
              i === 0 ? [part] : [<span key={i} className="hidden md:inline">—</span>, part]
            )}
          </p>
        </div>
      </div>
    </RevealItem>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-white"
      style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      <div className="w-full max-w-4xl mx-auto px-8 md:px-16">

        {/* Cabeçalho */}
        <RevealItem delay={0}>
          <h2
            className="text-5xl md:text-6xl font-normal leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
          >
            Perguntas Frequentes
          </h2>
        </RevealItem>

        <RevealItem delay={100}>
          <p className="text-xl md:text-2xl font-light leading-snug mb-8" style={{ color: "var(--color-dark)", opacity: 0.55 }}>
            Caso ainda tenha alguma dúvida, chame nosso suporte no link abaixo.
          </p>
        </RevealItem>

        {/* Botão WhatsApp */}
        <RevealItem delay={180}>
          <a
            href="https://wa.me/5571983274186"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium px-7 py-4 text-sm gap-3 mb-14"
          >
            <span className="btn-shimmer" aria-hidden="true" />
            <svg className="relative z-10 w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="relative z-10">Entre em contato</span>
          </a>
        </RevealItem>

        {/* Accordion */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              delay={260 + i * 80}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
