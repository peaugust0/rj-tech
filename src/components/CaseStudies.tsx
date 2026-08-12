import Link from "next/link";
import type { CaseStudy } from "@/lib/content";
import { cases } from "@/lib/content";
import { Reveal } from "./Reveal";

function CasePreviewFrame({ item }: { item: CaseStudy }) {
  if (!item.previewHref) return null;

  const isPortal = item.previewKind === "portal";
  const isClinica = item.previewKind === "clinica";
  const isAula = item.previewKind === "aula";

  return (
    <div className="mt-8">
      <Link
        href={item.previewHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group/preview block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`Abrir projeto: ${item.title}`}
      >
        <div className="overflow-hidden border border-white/15 bg-navy/40 transition group-hover/preview:border-accent/45">
          <div className="flex items-center justify-between border-b border-white/10 bg-ink/50 px-3 py-2">
            <span className="text-[11px] font-medium tracking-[0.12em] text-accent uppercase">
              {isAula
                ? "Preview · Aula"
                : isClinica
                  ? "Preview · Consultório"
                  : isPortal
                    ? "Preview · Portal"
                    : "Preview · WhatsApp"}
            </span>
            <span className="text-[11px] text-fog/55">somente visualização</span>
          </div>

          <div className="relative aspect-[16/11] bg-gradient-to-b from-navy to-ink p-4 sm:p-5">
            {isAula ? (
              <AulaThumb />
            ) : isClinica ? (
              <ClinicThumb />
            ) : isPortal ? (
              <PortalThumb />
            ) : (
              <WhatsAppThumb />
            )}

            <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/80 via-transparent to-transparent pb-4">
              <span className="border border-accent/50 bg-navy/90 px-3 py-1.5 text-xs font-medium text-accent transition group-hover/preview:border-accent group-hover/preview:bg-accent group-hover/preview:text-ink">
                Ver projeto
              </span>
            </div>
          </div>
        </div>
      </Link>

      {item.previewCaption ? (
        <p className="mt-2 text-xs text-fog/50">{item.previewCaption}</p>
      ) : null}
    </div>
  );
}

function WhatsAppThumb() {
  return (
    <div className="mx-auto flex h-full max-w-[280px] flex-col overflow-hidden rounded-xl border border-[#222d34] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 bg-[#1f2c34] px-3 py-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-[#00a884]/25 text-[9px] font-semibold text-[#00a884]">
          LN
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11px] text-[#e9edef]">Studio Luna Nails</p>
          <p className="text-[9px] text-[#8696a0]">online</p>
        </div>
      </div>
      <div className="wa-chat-bg flex flex-1 flex-col justify-end gap-1.5 p-2.5">
        <div className="max-w-[88%] rounded-lg rounded-tl-none bg-[#202c33] px-2 py-1.5 text-[9px] leading-snug text-[#e9edef]">
          Olá! Tabela fixa pronta. Quer que eu monte o orçamento?
        </div>
        <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#005c4b] px-2 py-1.5 text-[9px] leading-snug text-[#e9edef]">
          Quero um orçamento
        </div>
        <div className="max-w-[88%] rounded-lg rounded-tl-none bg-[#202c33] px-2 py-1.5 text-[9px] leading-snug text-[#e9edef]">
          Qual serviço? Mão + pé · R$ 70
        </div>
      </div>
    </div>
  );
}

function PortalThumb() {
  return (
    <div className="mx-auto flex h-full max-w-[320px] flex-col overflow-hidden rounded-xl border border-white/12 bg-[#071018] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0c1624] px-3 py-2">
        <span className="flex size-6 items-center justify-center rounded-md bg-accent/20 text-[9px] font-semibold text-accent">
          C+
        </span>
        <p className="truncate text-[11px] text-white">Cuidar+ Home Care</p>
      </div>
      <div className="grid flex-1 grid-cols-[56px_1fr] gap-0">
        <div className="space-y-1 border-r border-white/10 bg-[#0c1624] p-1.5">
          {["Mês", "Clientes", "Equipe", "Mapa"].map((label, i) => (
            <div
              key={label}
              className={`rounded px-1 py-1 text-[8px] ${
                i === 0 ? "bg-accent/20 text-accent" : "text-fog/50"
              }`}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="space-y-1.5 p-2">
          <div className="grid grid-cols-3 gap-1">
            <div className="border border-white/10 p-1">
              <p className="text-[7px] text-fog/50">Entrada</p>
              <p className="text-[9px] text-white">R$ 128k</p>
            </div>
            <div className="border border-white/10 p-1">
              <p className="text-[7px] text-fog/50">Saída</p>
              <p className="text-[9px] text-white">R$ 89k</p>
            </div>
            <div className="border border-white/10 p-1">
              <p className="text-[7px] text-fog/50">Taxa</p>
              <p className="text-[9px] text-accent">R$ 39k</p>
            </div>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[70%] rounded-full bg-accent/70" />
          </div>
          <p className="text-[8px] text-fog/55">Tijuca · maior concentração</p>
        </div>
      </div>
    </div>
  );
}

function ClinicThumb() {
  return (
    <div className="mx-auto flex h-full max-w-[320px] flex-col overflow-hidden rounded-xl border border-white/12 bg-[#071018] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0c1624] px-3 py-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-accent/20 text-[9px] font-semibold text-accent">
          TA
        </span>
        <p className="truncate text-[11px] text-white">Consultório · Ana</p>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-2.5">
        <div className="flex items-center justify-between border border-white/10 px-2 py-1.5">
          <span className="text-[9px] text-white">09:00 · Lucas Ferreira</span>
          <span className="text-[8px] text-emerald-300">Realizada</span>
        </div>
        <div className="flex items-center justify-between border border-white/10 px-2 py-1.5">
          <span className="text-[9px] text-white">10:00 · Maria Eduarda</span>
          <span className="text-[8px] text-accent">Agendada</span>
        </div>
        <div className="mt-auto border border-accent/30 bg-accent/10 p-2">
          <p className="text-[8px] text-accent">Visão 360º</p>
          <p className="text-[9px] text-fog/80">Sessão · valor · relatos · exercícios</p>
        </div>
      </div>
    </div>
  );
}

function AulaThumb() {
  return (
    <div className="mx-auto flex h-full max-w-[200px] flex-col overflow-hidden rounded-[1.4rem] border-2 border-[#3a3f46] bg-black shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
      <div className="relative flex flex-1 flex-col bg-[#0b141a]">
        <span className="absolute left-1/2 top-1.5 z-10 size-2 -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
        <div className="flex justify-between px-3 pb-1 pt-4 text-[8px] text-white">
          <span>09:41</span>
          <span>5G</span>
        </div>
        <div className="flex items-center gap-1 bg-[#1f2c34] px-1.5 py-1">
          <span className="text-[10px] text-[#aebac1]">‹</span>
          <span className="size-4 rounded-full bg-[#6b7c85]" />
          <span className="text-[9px] text-white">Pedro (neto)</span>
        </div>
        <div className="wa-chat-bg flex flex-1 flex-col justify-end gap-1 p-1.5">
          <div className="max-w-[80%] rounded rounded-tl-none bg-[#202c33] px-1.5 py-1 text-[8px] text-[#e9edef]">
            Oi vó!
          </div>
          <div className="ml-auto max-w-[75%] rounded rounded-tr-none bg-[#005c4b] px-1.5 py-1 text-[8px] text-[#e9edef]">
            Áudio 0:04
          </div>
        </div>
        <div className="flex h-5 items-center justify-around bg-[#0b141a] text-[8px] text-white/70">
          <span>◁</span>
          <span>○</span>
          <span>□</span>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="cases" className="relative border-t border-white/10 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 cases-atmosphere" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Casos reais, dados fictícios
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Projetos e soluções
          </h2>
          <p className="mt-4 max-w-2xl text-fog/80">
            Casos demonstrativos baseados em dores reais de negócio mostram como a RJ Technology
            estrutura problema, solução, tecnologia e resultado. Onde houver Ver projeto, você
            pode navegar.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 sm:space-y-20">
          {cases.map((item, index) => (
            <Reveal key={item.id} delayMs={60}>
              <article className="case-block group grid gap-8 border-t border-white/15 pt-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
                <div>
                  <p className="text-xs font-medium tracking-[0.14em] text-accent/90 uppercase">
                    {String(index + 1).padStart(2, "0")} · {item.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <li
                        key={tech}
                        className="border border-white/15 px-2.5 py-1 text-xs text-fog/80 transition group-hover:border-accent/35"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <CasePreviewFrame item={item} />
                </div>

                <div className="space-y-6 text-sm leading-relaxed sm:text-base">
                  <div>
                    <h4 className="font-display text-sm font-semibold tracking-wide text-accent uppercase">
                      Problema
                    </h4>
                    <p className="mt-2 text-fog/85">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold tracking-wide text-accent uppercase">
                      Solução
                    </h4>
                    <p className="mt-2 text-fog/85">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold tracking-wide text-accent uppercase">
                      Resultado
                    </h4>
                    <p className="mt-2 text-fog/85">{item.result}</p>
                  </div>

                  {item.previewHref ? (
                    <>
                      {item.previewNote ? (
                        <p className="text-[11px] leading-snug text-fog/55">{item.previewNote}</p>
                      ) : null}
                      <Link
                        href={item.previewHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-accent/40 px-4 py-2.5 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent hover:text-ink"
                      >
                        Ver projeto
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
