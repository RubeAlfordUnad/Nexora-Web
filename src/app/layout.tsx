import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nexora",
    template: "%s | Nexora",
  },
  description:
    "Nexora es una app de finanzas personales para organizar ingresos, gastos, historial, deudas, transferencias y pagos fijos en una experiencia más clara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#050505] text-white antialiased">{children}</body>
    </html>
  );
}