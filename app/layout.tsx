import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minutos PG - Grupo WhatsApp",
  description: "Entre para o grupo exclusivo do Minutos PG",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}

