import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ElderlyLessonDemo } from "@/components/demos/ElderlyLessonDemo";

export const metadata: Metadata = {
  title: "Demo · Inclusão digital para idosos",
  description:
    "Preview de aula guiada: ensino de WhatsApp para idosos, no ritmo deles, com segurança. Demonstração RJ Technology — somente visualização.",
  robots: { index: false, follow: false },
};

export default function InclusaoIdososDemoPage() {
  return (
    <div className="flex min-h-full flex-col bg-ink">
      <div className="demo-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex shrink-0 items-center justify-between gap-3 border-b border-accent/25 bg-navy/90 px-4 py-2.5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.12em] text-accent uppercase sm:text-sm">
          Demo RJ Technology · somente visualização
        </p>
        <Link
          href="/#cases"
          className="shrink-0 text-xs text-fog/70 transition hover:text-white sm:text-sm"
        >
          Voltar aos projetos
        </Link>
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-accent/90 uppercase">
              Situação real · inclusão digital
            </p>
            <h1 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
              Aula guiada para idosos
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-fog/75">
              Dona Célia quer falar com o neto no WhatsApp. A aula avança no ritmo dela — um passo
              por vez, com calma e segurança.
            </p>
          </div>
          <Logo className="text-base sm:text-lg" />
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10">
          <div className="flex min-h-[min(78vh,720px)] flex-col overflow-hidden rounded-xl border border-white/12 bg-navy/40 shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
            <ElderlyLessonDemo />
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
                  Medo de errar, letras pequenas, pressa de quem explica rápido demais — o celular
                  vira barreira em vez de ponte com a família.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xs font-semibold tracking-wide text-white uppercase">
                  Método
                </h3>
                <p className="mt-2">
                  Encontros com <span className="text-white">um objetivo claro</span>, linguagem
                  simples, prática repetida e{" "}
                  <span className="text-white">segurança contra golpes</span> em todo passo. A
                  família acompanha o progresso sem precisar virar professor.
                </p>
              </div>
              <p className="text-xs text-fog/50">
                Simulação · personagem fictício · somente visualização
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
