import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rjtechnology.store";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RJ TECH | Soluções em Tecnologia & Desenvolvimento",
    template: "%s | RJ TECH",
  },
  description:
    "Criação de sites e apps, unificação de sistemas, dashboards, automação de atendimento e gestão de tecnologia para marcas e empresas.",
  keywords: [
    "RJ TECH",
    "tecnologia",
    "criação de sites",
    "automação WhatsApp",
    "unificação de sistemas",
    "Power BI",
    "suporte TI remoto",
  ],
  authors: [{ name: "RJ TECH" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "RJ TECH",
    title: "RJ TECH | Soluções em Tecnologia & Desenvolvimento",
    description:
      "Soluções completas em tecnologia e desenvolvimento. Cases reais de negócio — do chatbot ao portal unificado.",
    images: [
      {
        url: "/images/banner-rj-tech.png",
        width: 1200,
        height: 630,
        alt: "RJ TECH — Soluções completas em tecnologia e desenvolvimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ TECH | Soluções em Tecnologia & Desenvolvimento",
    description:
      "Sites, apps, unificação de sistemas, dashboards e automação de atendimento.",
    images: ["/images/banner-rj-tech.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${syne.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-foreground">{children}</body>
    </html>
  );
}
