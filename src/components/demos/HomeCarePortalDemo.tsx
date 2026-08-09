"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/content";

type TabId =
  | "mes"
  | "clientes"
  | "prestadores"
  | "mapa"
  | "escala"
  | "contratos";

const TABS: { id: TabId; label: string }[] = [
  { id: "mes", label: "Fluxo do mês" },
  { id: "clientes", label: "Clientes" },
  { id: "prestadores", label: "Prestadores" },
  { id: "mapa", label: "Concentração" },
  { id: "escala", label: "Escala" },
  { id: "contratos", label: "Contratos" },
];

const MONTH = {
  recebido: 128450,
  pagoPrestadores: 89420,
  taxaAdmin: 39030,
  ticketMedio: 3211,
  clientesAtivos: 40,
  plantoes: 312,
};

const CLIENTS = [
  {
    name: "Dona Helena M.",
    bairro: "Tijuca",
    services: "Cuidador 12h + enfermagem 2x/sem",
    paga: 4800,
    custoPrestador: 3200,
    taxa: 1600,
  },
  {
    name: "Sr. Paulo R.",
    bairro: "Barra",
    services: "Técnico enfermagem 24h",
    paga: 9200,
    custoPrestador: 6800,
    taxa: 2400,
  },
  {
    name: "Família Costa",
    bairro: "Botafogo",
    services: "Fono + fisioterapia 3x/sem",
    paga: 3600,
    custoPrestador: 2400,
    taxa: 1200,
  },
  {
    name: "Sra. Lúcia A.",
    bairro: "Méier",
    services: "Cuidador 6h diárias",
    paga: 2900,
    custoPrestador: 1950,
    taxa: 950,
  },
  {
    name: "Sr. Roberto N.",
    bairro: "Tijuca",
    services: "Enfermeiro + cuidador plantão",
    paga: 7100,
    custoPrestador: 5100,
    taxa: 2000,
  },
];

const PROVIDERS = [
  {
    name: "Ana Souza",
    role: "Enfermeira",
    region: "Zona Norte",
    status: "Disponível",
    hours: "Seg–Sex 7h–19h",
  },
  {
    name: "Carlos Mendes",
    role: "Técnico de enfermagem",
    region: "Zona Oeste",
    status: "Em plantão",
    hours: "Plantão 12x36",
  },
  {
    name: "Beatriz Lima",
    role: "Fonoaudióloga",
    region: "Zona Sul",
    status: "Disponível",
    hours: "Ter/Qui 8h–17h",
  },
  {
    name: "Diego Alves",
    role: "Fisioterapeuta",
    region: "Tijuca / Méier",
    status: "Agenda cheia",
    hours: "Seg–Sab manhã",
  },
  {
    name: "Eliane Rocha",
    role: "Cuidadora de idosos",
    region: "Barra / Recreio",
    status: "Disponível",
    hours: "Plantão 24h",
  },
  {
    name: "Fábio Nunes",
    role: "Terapeuta ocupacional",
    region: "Centro / Sul",
    status: "Folga",
    hours: "Qua–Sex",
  },
];

const DENSITY = [
  { bairro: "Tijuca", clients: 11, pct: 92 },
  { bairro: "Barra da Tijuca", clients: 8, pct: 68 },
  { bairro: "Botafogo", clients: 6, pct: 52 },
  { bairro: "Méier", clients: 5, pct: 44 },
  { bairro: "Recreio", clients: 4, pct: 36 },
  { bairro: "Centro", clients: 3, pct: 28 },
  { bairro: "Outros", clients: 3, pct: 28 },
];

const SCHEDULE = [
  { day: "Seg 10/03", slots: ["Ana — Helena (Tijuca) 7h", "Carlos — Paulo (Barra) 7h", "Beatriz — Costa (Botafogo) 9h"] },
  { day: "Ter 11/03", slots: ["Eliane — Lúcia (Méier) 6h", "Diego — Costa (Botafogo) 10h", "Fábio — Roberto (Tijuca) 14h"] },
  { day: "Qua 12/03", slots: ["Ana — Roberto (Tijuca) 7h", "Carlos — Paulo (Barra) 19h", "Beatriz — Costa (Botafogo) 9h"] },
  { day: "Qui 13/03", slots: ["Diego — Costa (Botafogo) 10h", "Eliane — Lúcia (Méier) 6h", "Ana — Helena (Tijuca) 19h"] },
];

const CONTRACTS = [
  { who: "Família Costa (cliente)", type: "Contrato de prestação", status: "Assinado", where: "Portal" },
  { who: "Ana Souza (enfermeira)", type: "Contrato de prestador", status: "Assinado", where: "Portal" },
  { who: "Sr. Paulo R. (cliente)", type: "Aditivo 24h", status: "Aguardando", where: "Portal" },
  { who: "Carlos Mendes (técnico)", type: "Contrato de prestador", status: "Aguardando", where: "Portal" },
  { who: "Sra. Lúcia A. (cliente)", type: "Contrato de prestação", status: "Assinado", where: "Portal" },
];

function brl(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function statusColor(status: string) {
  if (status === "Disponível" || status === "Assinado") return "text-emerald-300";
  if (status === "Em plantão" || status === "Aguardando") return "text-amber-300";
  return "text-fog/60";
}

export function HomeCarePortalDemo() {
  const [tab, setTab] = useState<TabId>("mes");

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#071018] text-[#e8eef5] sm:flex-row">
      <nav
        className="flex shrink-0 gap-1 overflow-x-auto border-b border-white/10 bg-[#0c1624] p-2 sm:w-44 sm:flex-col sm:overflow-visible sm:border-b-0 sm:border-r"
        aria-label="Seções do portal"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`shrink-0 rounded-md px-3 py-2 text-left text-xs transition sm:text-[13px] ${
              tab === t.id
                ? "bg-accent/20 text-accent"
                : "text-fog/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-5">
        {tab === "mes" ? (
          <section className="space-y-4">
            <header>
              <p className="text-[11px] tracking-[0.14em] text-accent uppercase">Março / 2026</p>
              <h2 className="mt-1 font-display text-lg font-semibold text-white">
                Fluxo financeiro do mês
              </h2>
              <p className="mt-1 text-xs text-fog/60">
                Antes: só planilhas soltas de entrada e saída. Agora: o mês inteiro em um só lugar.
              </p>
            </header>
            <div className="grid gap-3 sm:grid-cols-3">
              <Metric label="Recebido dos clientes" value={brl(MONTH.recebido)} hint="Entrada" />
              <Metric label="Pago aos prestadores" value={brl(MONTH.pagoPrestadores)} hint="Saída" />
              <Metric label="Taxa administrativa" value={brl(MONTH.taxaAdmin)} hint="Margem" accent />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Metric label="Clientes ativos" value={String(MONTH.clientesAtivos)} />
              <Metric label="Plantões no mês" value={String(MONTH.plantoes)} />
              <Metric label="Ticket médio" value={brl(MONTH.ticketMedio)} />
            </div>
            <div className="border border-white/10 bg-[#0c1624]/80 p-3">
              <p className="text-xs text-fog/70">
                A taxa administrativa é calculada automaticamente a partir do que o cliente paga
                menos o custo do prestador — sem planilha paralela.
              </p>
            </div>
          </section>
        ) : null}

        {tab === "clientes" ? (
          <section className="space-y-4">
            <header>
              <h2 className="font-display text-lg font-semibold text-white">Clientes e receita</h2>
              <p className="mt-1 text-xs text-fog/60">
                Quanto cada cliente custa, o que ele paga e o que sobra de taxa.
              </p>
            </header>
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full min-w-[640px] text-left text-xs sm:text-[13px]">
                <thead className="bg-[#0c1624] text-[11px] tracking-wide text-fog/55 uppercase">
                  <tr>
                    <th className="px-3 py-2 font-medium">Cliente</th>
                    <th className="px-3 py-2 font-medium">Bairro</th>
                    <th className="px-3 py-2 font-medium">Serviços</th>
                    <th className="px-3 py-2 font-medium">Paga</th>
                    <th className="px-3 py-2 font-medium">Prestador</th>
                    <th className="px-3 py-2 font-medium">Taxa</th>
                  </tr>
                </thead>
                <tbody>
                  {CLIENTS.map((c) => (
                    <tr key={c.name} className="border-t border-white/10">
                      <td className="px-3 py-2.5 text-white">{c.name}</td>
                      <td className="px-3 py-2.5 text-fog/75">{c.bairro}</td>
                      <td className="px-3 py-2.5 text-fog/75">{c.services}</td>
                      <td className="px-3 py-2.5 text-fog/90">{brl(c.paga)}</td>
                      <td className="px-3 py-2.5 text-fog/75">{brl(c.custoPrestador)}</td>
                      <td className="px-3 py-2.5 text-accent">{brl(c.taxa)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {tab === "prestadores" ? (
          <section className="space-y-4">
            <header>
              <h2 className="font-display text-lg font-semibold text-white">Prestadores</h2>
              <p className="mt-1 text-xs text-fog/60">
                Quem está disponível, horário, região e função — sem escala solta em outro arquivo.
              </p>
            </header>
            <ul className="grid gap-2 sm:grid-cols-2">
              {PROVIDERS.map((p) => (
                <li
                  key={p.name}
                  className="border border-white/10 bg-[#0c1624]/70 px-3 py-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-white">{p.name}</p>
                      <p className="text-xs text-fog/65">{p.role}</p>
                    </div>
                    <span className={`text-[11px] font-medium ${statusColor(p.status)}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-fog/70">Região: {p.region}</p>
                  <p className="text-xs text-fog/70">Horário: {p.hours}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {tab === "mapa" ? (
          <section className="space-y-4">
            <header>
              <h2 className="font-display text-lg font-semibold text-white">
                Concentração de clientes na cidade
              </h2>
              <p className="mt-1 text-xs text-fog/60">
                Onde está a maior demanda — útil para alocar prestadores e planejar expansão.
              </p>
            </header>
            <ul className="space-y-3">
              {DENSITY.map((d) => (
                <li key={d.bairro}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-white">{d.bairro}</span>
                    <span className="text-fog/60">{d.clients} clientes</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent/80"
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {tab === "escala" ? (
          <section className="space-y-4">
            <header>
              <h2 className="font-display text-lg font-semibold text-white">Escala da semana</h2>
              <p className="mt-1 text-xs text-fog/60">
                Antes ficava em planilha separada. Agora acompanha clientes e prestadores no mesmo portal.
              </p>
            </header>
            <div className="grid gap-3 sm:grid-cols-2">
              {SCHEDULE.map((day) => (
                <div key={day.day} className="border border-white/10 bg-[#0c1624]/70 p-3">
                  <p className="text-xs font-medium tracking-wide text-accent uppercase">
                    {day.day}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-fog/80">
                    {day.slots.map((slot) => (
                      <li key={slot} className="border-l-2 border-accent/40 pl-2">
                        {slot}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {tab === "contratos" ? (
          <section className="space-y-4">
            <header>
              <h2 className="font-display text-lg font-semibold text-white">Contratos</h2>
              <p className="mt-1 text-xs text-fog/60">
                Envio e assinatura de clientes e prestadores no mesmo lugar — sem sistema paralelo.
              </p>
            </header>
            <ul className="space-y-2">
              {CONTRACTS.map((c) => (
                <li
                  key={`${c.who}-${c.type}`}
                  className="flex flex-wrap items-center justify-between gap-2 border border-white/10 bg-[#0c1624]/70 px-3 py-3"
                >
                  <div>
                    <p className="text-sm text-white">{c.who}</p>
                    <p className="text-xs text-fog/60">{c.type}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-medium ${statusColor(c.status)}`}>{c.status}</p>
                    <p className="text-[11px] text-fog/45">via {c.where}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-bright"
          >
            Quero unificar assim
          </a>
          <p className="text-[11px] text-fog/45">
            Navegue as abas · dados fictícios · somente visualização
          </p>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  hint,
  accent,
}: {
  label: string;
  value: string;
  hint?: string;
  accent?: boolean;
}) {
  return (
    <div className="border border-white/10 bg-[#0c1624]/70 px-3 py-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] text-fog/55">{label}</p>
        {hint ? <span className="text-[10px] text-fog/40">{hint}</span> : null}
      </div>
      <p className={`mt-1 font-display text-lg font-semibold ${accent ? "text-accent" : "text-white"}`}>
        {value}
      </p>
    </div>
  );
}
