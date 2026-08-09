import type { ReactNode } from "react";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";

const icons: Record<string, ReactNode> = {
  "sites-apps": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ti: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  instalacao: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  ),
  gestao: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  unificacao: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8 7.5l6.5 8M16 7.5l-6.5 8M8.5 6h7" strokeLinecap="round" />
    </svg>
  ),
  dashboards: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 19V5h12l4 4v10H4z" strokeLinejoin="round" />
      <path d="M16 5v4h4M8 13h8M8 16h5" strokeLinecap="round" />
    </svg>
  ),
  treinamento: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M2 8l10-4 10 4-10 4L2 8z" strokeLinejoin="round" />
      <path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" strokeLinecap="round" />
    </svg>
  ),
  inclusao: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" strokeLinecap="round" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="servicos" className="relative border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">Serviços</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
            O que a RJ TECH resolve no seu negócio
          </h2>
          <p className="mt-4 max-w-2xl text-fog/80">
            Do suporte técnico à construção de sistemas — sempre com foco em resultado prático.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 40}>
              <li className="flex gap-4 border-t border-white/10 py-6">
                <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                  {icons[service.id]}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fog/75">{service.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
