import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Two do Design — Papelaria de Luxo & Marketing de Relacionamento",
  description:
    "Papelaria de luxo para eventos inesquecíveis e marketing de relacionamento que transforma marcas em experiências.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
