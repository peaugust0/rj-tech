import { WHATSAPP_URL } from "@/lib/content";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:justify-center sm:pb-24 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 hero-atmosphere" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[100px] hero-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-navy-light/40 blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="hero-enter font-display text-5xl leading-none tracking-tight sm:text-7xl md:text-8xl">
          <Logo className="text-[1em]" />
        </p>

        <h1 className="hero-enter hero-enter-delay-1 mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
          Soluções completas em{" "}
          <span className="text-accent">tecnologia &amp; desenvolvimento</span>
        </h1>

        <p className="hero-enter hero-enter-delay-2 mt-5 max-w-xl text-base leading-relaxed text-fog/85 sm:text-lg">
          Freelancer de TI que une sistemas, automatiza atendimento e organiza a operação
          do seu negócio — do suporte do dia a dia ao portal sob medida.
        </p>

        <div className="hero-enter hero-enter-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-ink transition hover:bg-accent-bright"
          >
            Fale comigo agora
          </a>
          <a
            href="#cases"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3.5 text-base font-medium text-white transition hover:border-accent/60 hover:text-accent"
          >
            Ver estudos de caso
          </a>
        </div>
      </div>
    </section>
  );
}
