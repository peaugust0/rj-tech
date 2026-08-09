import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { HomeCarePortalDemo } from "@/components/demos/HomeCarePortalDemo";

export const metadata: Metadata = {
  title: "Demo · Portal home care unificado",
  description:
    "Preview navegável: portal que unifica financeiro, prestadores, escala, concentração de clientes e contratos de uma empresa de home care. Demonstração RJ TECH — somente visualização.",
  robots: { index: false, follow: false },
};

export default function HomeCarePortalDemoPage() {
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
              Situação real · home care
            </p>
            <h1 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
              Portal unificado — cuidados em casa
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-fog/75">
              Financeiro, prestadores, escala, mapa de clientes e contratos no mesmo lugar —
              no lugar de planilhas e sistemas espalhados.
            </p>
          </div>
          <Logo className="text-base sm:text-lg" />
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">
          <div className="flex min-h-[min(75vh,680px)] flex-col overflow-hidden rounded-xl border border-white/12 bg-navy/40 shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-[#0c1624] px-3 py-2.5">
              <span
                className="flex size-9 items-center justify-center rounded-md bg-accent/20 text-xs font-semibold text-accent"
                aria-hidden="true"
              >
                C+
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">Cuidar+ Home Care</p>
                <p className="text-xs text-fog/55">Portal interno · demo navegável</p>
              </div>
              <span className="hidden text-[11px] text-fog/45 sm:inline">somente leitura</span>
            </div>
            <div className="min-h-0 flex-1">
              <HomeCarePortalDemo />
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-8">
            <h2 className="font-display text-sm font-semibold tracking-wide text-accent uppercase">
              O que você está vendo
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-fog/80">
              <div>
                <h3 className="font-display text-xs font-semibold tracking-wide text-white uppercase">
                  Antes
                </h3>
                <p className="mt-2">
                  Planilha do que o cliente paga, planilha do que a empresa paga ao prestador
                  (com a taxa administrativa), escala em outro arquivo, contratos em outro
                  sistema — e nenhuma visão do fluxo do mês, da disponibilidade da equipe nem
                  de onde estão os clientes na cidade.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xs font-semibold tracking-wide text-white uppercase">
                  Solução
                </h3>
                <p className="mt-2">
                  Tudo unificado num <span className="text-white">portal</span>: fluxo financeiro
                  do mês, custo e receita por cliente, prestadores (função, região, horário,
                  disponibilidade), concentração por bairro, escala da semana e contratos para
                  assinar — uma só fonte da verdade.
                </p>
              </div>
              <p className="text-xs text-fog/50">
                Simulação · dados fictícios · somente visualização · marca de demonstração
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
