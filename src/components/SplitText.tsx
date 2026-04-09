"use client";

import { useEffect, useRef, useState } from "react";

export type Segment = { text: string; italic?: boolean; primary?: boolean };

export function SplitText({
  segments,
  as: Tag = "h2",
  className,
  style,
  charDelay = 28,
  dataAttr,
}: {
  segments: Segment[];
  as?: "h2" | "h3";
  className?: string;
  style?: React.CSSProperties;
  charDelay?: number;
  dataAttr?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let charIndex = 0;
  const rendered = segments.map((seg, si) => {
    // Split text by spaces and newlines, but keep the space to preserve them
    const words = seg.text.split(/(\s+)/);
    
    return (
      <span
        key={si}
        className={seg.italic ? "italic" : undefined}
        style={{ color: seg.primary ? "var(--color-primary)" : undefined }}
      >
        {words.map((word, wi) => {
          if (word === "\n") {
            charIndex++; // Still counts for delay logic
            return <br key={`br-${si}-${wi}`} />;
          }

          // If it's a space or multiple spaces
          if (/^\s+$/.test(word)) {
            const spaces = [...word].map((space, sIdx) => {
              const delay = (charIndex + sIdx) * charDelay;
              return (
                <span
                  key={`space-${si}-${wi}-${sIdx}`}
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: visible ? 1 : 0,
                    transition: visible ? `opacity 0.35s ease ${delay}ms` : "none",
                  }}
                >
                  {space}
                </span>
              );
            });
            charIndex += word.length;
            return spaces;
          }

          // Normal word: wrap it in inline-block to prevent mid-word breaking
          const chars = [...word].map((char, ci) => {
            const delay = (charIndex + ci) * charDelay;
            return (
              <span
                key={`char-${si}-${wi}-${ci}`}
                style={{
                  display: "inline-block",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
                  transition: visible
                    ? `opacity 0.35s ease ${delay}ms, transform 0.35s ease ${delay}ms`
                    : "none",
                }}
              >
                {char}
              </span>
            );
          });
          charIndex += word.length;
          return (
            <span key={`word-${si}-${wi}`} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {chars}
            </span>
          );
        })}
      </span>
    );
  });

  const tagProps = {
    ref,
    className,
    style,
    ...(dataAttr ? { "data-text": dataAttr } : {}),
  };

  return <Tag {...(tagProps as React.ComponentProps<typeof Tag>)}>{rendered}</Tag>;
}
