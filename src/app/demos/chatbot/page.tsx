import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ChatbotDemo } from "@/components/demos/ChatbotDemo";

export const metadata: Metadata = {
  title: "Demo · Chatbot WhatsApp para manicure",
  description:
    "Preview estilo WhatsApp: chatbot de manicure com tabela de preços fixa e orçamento automático. Demonstração RJ TECH — somente visualização.",
  robots: { index: false, follow: false },
};

export default function ChatbotDemoPage() {
  return (
    <div className="flex min-h-full flex-col bg-ink">
      <div className="demo-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex shrink-0 items-center justify-between gap-3 border-b border-accent/25 bg-navy/90 px-4 py-2.5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.12em] text-accent uppercase sm:text-sm">
          Demo RJ TECH · somente visualização
        </p>
        <Link
          href="/#cases"
          className="shrink-0 text-xs text-fog/70 transition hover:text-white sm:text-sm"
        >
          Voltar aos cases
        </Link>
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-accent/90 uppercase">
              Situação real · beleza
            </p>
            <h1 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
              Chatbot WhatsApp — manicure
            </h1>
            <p className="mt-2 max-w-xl text-sm text-fog/75">
              Tabela de preços fixa, opções guiadas e orçamento montado na hora — sem a
              profissional precisar digitar cada resposta.
            </p>
          </div>
          <Logo className="text-base sm:text-lg" />
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="flex min-h-[min(72vh,620px)] flex-col overflow-hidden rounded-xl border border-[#222d34] shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3 bg-[#1f2c34] px-3 py-2.5">
              <Link
                href="/#cases"
                className="text-[#00a884] transition hover:text-[#06cf9c]"
                aria-label="Voltar"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  ‹
                </span>
              </Link>
              <span
                className="flex size-10 items-center justify-center rounded-full bg-[#00a884]/25 text-sm font-semibold text-[#00a884]"
                aria-hidden="true"
              >
                LN
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[#e9edef]">Studio Luna Nails</p>
                <p className="text-xs text-[#8696a0]">online · resposta automática</p>
              </div>
            </div>

            <div className="min-h-0 flex-1">
              <ChatbotDemo />
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-8">
            <h2 className="font-display text-sm font-semibold tracking-wide text-accent uppercase">
              O que você está vendo
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-fog/80">
              <div>
                <h3 className="font-display text-xs font-semibold tracking-wide text-white uppercase">
                  Solução
                </h3>
                <p className="mt-2">
                  Neste fluxo, o robô usa a <span className="text-white">tabela fixa</span>,
                  oferece <span className="text-white">opções prontas</span> conforme a resposta
                  da cliente e <span className="text-white">já calcula o orçamento</span>. A
                  manicure recebe um lead qualificado (serviço + extras + dia + valor) e só entra
                  para confirmar o horário.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xs font-semibold tracking-wide text-white uppercase">
                  Lead
                </h3>
                <p className="mt-2">
                  <span className="text-white">Lead</span> é o contato interessado que ainda não
                  fechou — por exemplo, alguém que pediu orçamento no WhatsApp. Sem resposta
                  rápida, esse lead esfria e procura outra profissional.
                </p>
              </div>
              <p className="text-xs text-fog/50">
                Simulação · dados fictícios · somente visualização · marca e preços de
                demonstração
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
