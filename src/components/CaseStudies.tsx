import { cases } from "@/lib/content";
import { Reveal } from "./Reveal";

export function CaseStudies() {
  return (
    <section id="cases" className="relative border-t border-white/10 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 cases-atmosphere" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Estudos de caso
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Projetos e soluções
          </h2>
          <p className="mt-4 max-w-2xl text-fog/80">
            Cases demonstrativos baseados em dores reais de negócio — mostram como a RJ TECH
            estrutura problema, solução, tecnologia e resultado.
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
