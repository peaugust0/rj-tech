"use client";

import { useMemo, useState } from "react";
import { WHATSAPP_URL } from "@/lib/content";

type TabId = "hoje" | "pacientes" | "financeiro" | "paciente";

type Patient = {
  id: string;
  name: string;
  age: number;
  since: string;
  sessionValue: number;
  sessionsMonth: number;
  doneMonth: number;
  nextSlot: string;
  focus: string;
  notes: string;
  exercises: string;
  suspicion: string;
  report: string;
};

const PATIENTS: Patient[] = [
  {
    id: "p1",
    name: "Lucas Ferreira",
    age: 8,
    since: "14 meses",
    sessionValue: 180,
    sessionsMonth: 8,
    doneMonth: 6,
    nextSlot: "Seg 10/03 · 09:00",
    focus: "Linguagem expressiva",
    notes: "Respondeu melhor a pistas visuais. Manteve contato ocular em 3 atividades.",
    exercises: "Nomear 10 figuras em casa · 10 min/dia com a mãe",
    suspicion: "Atraso de linguagem — acompanhar audiometria",
    report: "Evolução favorável no último trimestre; manter frequência 2x/semana.",
  },
  {
    id: "p2",
    name: "Maria Eduarda S.",
    age: 11,
    since: "9 meses",
    sessionValue: 180,
    sessionsMonth: 4,
    doneMonth: 4,
    nextSlot: "Seg 10/03 · 10:00",
    focus: "Leitura e compreensão",
    notes: "Leu parágrafo com pausas; compreendeu 4 de 5 perguntas.",
    exercises: "Ler 1 página em voz alta · anotar 3 palavras novas",
    suspicion: "—",
    report: "Bom engajamento familiar; consolidar rotina de leitura.",
  },
  {
    id: "p3",
    name: "Pedro Henrique",
    age: 6,
    since: "5 meses",
    sessionValue: 200,
    sessionsMonth: 8,
    doneMonth: 5,
    nextSlot: "Ter 11/03 · 09:00",
    focus: "Regulação sensorial",
    notes: "Ficou agitado no início; estabilizou após circuito proprioceptivo.",
    exercises: "Circuito de 3 estações em casa · 8 min antes da escola",
    suspicion: "Perfil sensorial a investigar com TO",
    report: "Sessões perdidas por falta; reforçar compromisso com a família.",
  },
  {
    id: "p4",
    name: "Sofia Almeida",
    age: 9,
    since: "12 meses",
    sessionValue: 180,
    sessionsMonth: 4,
    doneMonth: 4,
    nextSlot: "Ter 11/03 · 10:30",
    focus: "Fluência verbal",
    notes: "Bloqueios diminuíram em conversa estruturada.",
    exercises: "Falar sobre o dia em 5 frases · gravar áudio 1x",
    suspicion: "—",
    report: "Alta evolução; reduzir para 1x/semana em 30 dias se mantiver.",
  },
  {
    id: "p5",
    name: "Gabriel Costa",
    age: 7,
    since: "3 meses",
    sessionValue: 180,
    sessionsMonth: 8,
    doneMonth: 7,
    nextSlot: "Qua 12/03 · 09:00",
    focus: "Atenção compartilhada",
    notes: "Seguiu instrução de 2 passos em jogo de tabuleiro.",
    exercises: "Jogo de turnos 10 min · noite",
    suspicion: "Avaliar TEA — encaminhar neuropediatria",
    report: "Família trouxe laudo parcial; integrar com escola.",
  },
  {
    id: "p6",
    name: "Helena Dias",
    age: 10,
    since: "7 meses",
    sessionValue: 180,
    sessionsMonth: 4,
    doneMonth: 3,
    nextSlot: "Qua 12/03 · 11:00",
    focus: "Escrita e organização",
    notes: "Organizou parágrafo com conectivos; 1 falta justificada.",
    exercises: "Diário de 5 linhas · 4x na semana",
    suspicion: "—",
    report: "Manter e alinhar com professora de português.",
  },
  {
    id: "p7",
    name: "Rafael Nogueira",
    age: 13,
    since: "18 meses",
    sessionValue: 200,
    sessionsMonth: 4,
    doneMonth: 4,
    nextSlot: "Qui 13/03 · 14:00",
    focus: "Ansiedade social",
    notes: "Ensaiou apresentação escolar; respiração 4-7-8 aplicada.",
    exercises: "Respiração + ensaio 2x antes da prova oral",
    suspicion: "Ansiedade situacional — monitorar",
    report: "Boa adesão; combinar retorno em grupo se disponível.",
  },
  {
    id: "p8",
    name: "Isabela Martins",
    age: 5,
    since: "2 meses",
    sessionValue: 180,
    sessionsMonth: 8,
    doneMonth: 6,
    nextSlot: "Qui 13/03 · 15:30",
    focus: "Vocabulário e brincar",
    notes: "Nomeou animais; pediu ajuda verbalmente 2 vezes.",
    exercises: "Brincar de faz-de-conta 15 min · diário",
    suspicion: "Atraso leve — reavaliar em 60 dias",
    report: "Início recente; baseline em construção.",
  },
  {
    id: "p9",
    name: "Thiago Ramos",
    age: 12,
    since: "6 meses",
    sessionValue: 180,
    sessionsMonth: 4,
    doneMonth: 4,
    nextSlot: "Sex 14/03 · 09:30",
    focus: "Organização de estudos",
    notes: "Montou cronograma da semana com apoio mínimo.",
    exercises: "Checklist noturno de material escolar",
    suspicion: "—",
    report: "Autonomia crescente; reduzir scaffolding.",
  },
  {
    id: "p10",
    name: "Júlia Mendes",
    age: 8,
    since: "11 meses",
    sessionValue: 180,
    sessionsMonth: 8,
    doneMonth: 8,
    nextSlot: "Sex 14/03 · 11:00",
    focus: "Motricidade fina / escrita",
    notes: "Segurou lápis com tripé estável; copiou 8 letras.",
    exercises: "Tracejado + recorte 10 min · 3x/semana",
    suspicion: "—",
    report: "100% presença no mês; excelente adesão.",
  },
  {
    id: "p11",
    name: "Bruno Oliveira",
    age: 15,
    since: "4 meses",
    sessionValue: 220,
    sessionsMonth: 4,
    doneMonth: 2,
    nextSlot: "Sab 15/03 · 10:00",
    focus: "Autoregulação emocional",
    notes: "Identificou gatilhos; 2 faltas sem aviso.",
    exercises: "Registro de humor 1x ao dia no caderno",
    suspicion: "Humor depressivo — alinhar com psicólogo",
    report: "Risco de abandono; ligar para a família esta semana.",
  },
  {
    id: "p12",
    name: "Clara Souza",
    age: 7,
    since: "8 meses",
    sessionValue: 180,
    sessionsMonth: 4,
    doneMonth: 4,
    nextSlot: "Sab 15/03 · 11:30",
    focus: "Pragmática da comunicação",
    notes: "Cumprimentou e manteve turnos em conversa curta.",
    exercises: "Perguntar 2 coisas novas a um colega na escola",
    suspicion: "—",
    report: "Estável; manter metas de interação social.",
  },
];

const TODAY = [
  { time: "09:00", patientId: "p1", status: "Realizada" as const },
  { time: "10:00", patientId: "p2", status: "Realizada" as const },
  { time: "14:00", patientId: "p7", status: "Agendada" as const },
  { time: "15:30", patientId: "p8", status: "Agendada" as const },
  { time: "17:00", patientId: "p5", status: "Falta" as const },
];

type MonthDay = {
  date: string;
  weekday: string;
  slots: { time: string; patientId: string; status: "Realizada" | "Agendada" | "Falta" }[];
};

const MONTH_AGENDA: MonthDay[] = [
  {
    date: "03/03",
    weekday: "Ter",
    slots: [
      { time: "09:00", patientId: "p3", status: "Realizada" },
      { time: "10:30", patientId: "p4", status: "Realizada" },
    ],
  },
  {
    date: "05/03",
    weekday: "Qui",
    slots: [
      { time: "14:00", patientId: "p7", status: "Realizada" },
      { time: "15:30", patientId: "p8", status: "Realizada" },
    ],
  },
  {
    date: "07/03",
    weekday: "Sab",
    slots: [
      { time: "10:00", patientId: "p11", status: "Falta" },
      { time: "11:30", patientId: "p12", status: "Realizada" },
    ],
  },
  {
    date: "10/03",
    weekday: "Seg",
    slots: [
      { time: "09:00", patientId: "p1", status: "Realizada" },
      { time: "10:00", patientId: "p2", status: "Realizada" },
      { time: "14:00", patientId: "p7", status: "Agendada" },
      { time: "15:30", patientId: "p8", status: "Agendada" },
      { time: "17:00", patientId: "p5", status: "Falta" },
    ],
  },
  {
    date: "11/03",
    weekday: "Ter",
    slots: [
      { time: "09:00", patientId: "p3", status: "Agendada" },
      { time: "10:30", patientId: "p4", status: "Agendada" },
    ],
  },
  {
    date: "12/03",
    weekday: "Qua",
    slots: [
      { time: "09:00", patientId: "p5", status: "Agendada" },
      { time: "11:00", patientId: "p6", status: "Agendada" },
    ],
  },
  {
    date: "13/03",
    weekday: "Qui",
    slots: [
      { time: "14:00", patientId: "p7", status: "Agendada" },
      { time: "15:30", patientId: "p8", status: "Agendada" },
    ],
  },
  {
    date: "14/03",
    weekday: "Sex",
    slots: [
      { time: "09:30", patientId: "p9", status: "Agendada" },
      { time: "11:00", patientId: "p10", status: "Agendada" },
    ],
  },
  {
    date: "15/03",
    weekday: "Sab",
    slots: [
      { time: "10:00", patientId: "p11", status: "Agendada" },
      { time: "11:30", patientId: "p12", status: "Agendada" },
    ],
  },
  {
    date: "17/03",
    weekday: "Seg",
    slots: [
      { time: "09:00", patientId: "p1", status: "Agendada" },
      { time: "10:00", patientId: "p2", status: "Agendada" },
    ],
  },
  {
    date: "19/03",
    weekday: "Qua",
    slots: [
      { time: "09:00", patientId: "p5", status: "Agendada" },
      { time: "11:00", patientId: "p6", status: "Agendada" },
    ],
  },
  {
    date: "21/03",
    weekday: "Sex",
    slots: [
      { time: "09:30", patientId: "p9", status: "Agendada" },
      { time: "11:00", patientId: "p10", status: "Agendada" },
    ],
  },
  {
    date: "24/03",
    weekday: "Seg",
    slots: [
      { time: "09:00", patientId: "p1", status: "Agendada" },
      { time: "10:00", patientId: "p2", status: "Agendada" },
      { time: "14:00", patientId: "p7", status: "Agendada" },
    ],
  },
  {
    date: "28/03",
    weekday: "Sex",
    slots: [
      { time: "09:30", patientId: "p9", status: "Agendada" },
      { time: "11:00", patientId: "p10", status: "Agendada" },
    ],
  },
];

function brl(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function statusClass(status: string) {
  if (status === "Realizada") return "text-emerald-300";
  if (status === "Agendada") return "text-accent";
  return "text-amber-300";
}

export function ClinicPortalDemo() {
  const [tab, setTab] = useState<TabId>("hoje");
  const [agendaView, setAgendaView] = useState<"dia" | "mes">("dia");
  const [selectedId, setSelectedId] = useState(PATIENTS[0].id);

  const selected = useMemo(
    () => PATIENTS.find((p) => p.id === selectedId) ?? PATIENTS[0],
    [selectedId],
  );

  const monthStats = useMemo(() => {
    const expected = PATIENTS.reduce((s, p) => s + p.sessionValue * p.sessionsMonth, 0);
    const received = PATIENTS.reduce((s, p) => s + p.sessionValue * p.doneMonth, 0);
    const done = PATIENTS.reduce((s, p) => s + p.doneMonth, 0);
    const planned = PATIENTS.reduce((s, p) => s + p.sessionsMonth, 0);
    return { expected, received, done, planned, patients: PATIENTS.length };
  }, []);

  function openPatient(id: string) {
    setSelectedId(id);
    setTab("paciente");
  }

  const tabs: { id: TabId; label: string }[] = [
    { id: "hoje", label: "Agenda" },
    { id: "pacientes", label: "Paciente" },
    { id: "paciente", label: "Visão 360" },
    { id: "financeiro", label: "Financeiro" },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#071018] text-[#e8eef5] sm:flex-row">
      <nav
        className="flex shrink-0 gap-1 overflow-x-auto border-b border-white/10 bg-[#0c1624] p-2 sm:w-44 sm:flex-col sm:overflow-visible sm:border-b-0 sm:border-r"
        aria-label="Seções do consultório"
      >
        {tabs.map((t) => (
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
        {tab === "hoje" ? (
          <section className="space-y-4">
            <header className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] tracking-[0.14em] text-accent uppercase">
                  Terapeuta Ana · março / 2026
                </p>
                <h2 className="mt-1 font-display text-lg font-semibold text-white">Agenda</h2>
                <p className="mt-1 text-xs text-fog/60">
                  Veja o dia ou o mês inteiro — status da sessão e atalho para a ficha.
                </p>
              </div>
              <div
                className="inline-flex border border-white/15"
                role="group"
                aria-label="Período da agenda"
              >
                <button
                  type="button"
                  onClick={() => setAgendaView("dia")}
                  className={`px-3 py-1.5 text-xs transition ${
                    agendaView === "dia"
                      ? "bg-accent/20 text-accent"
                      : "text-fog/65 hover:text-white"
                  }`}
                >
                  Dia
                </button>
                <button
                  type="button"
                  onClick={() => setAgendaView("mes")}
                  className={`border-l border-white/15 px-3 py-1.5 text-xs transition ${
                    agendaView === "mes"
                      ? "bg-accent/20 text-accent"
                      : "text-fog/65 hover:text-white"
                  }`}
                >
                  Mês
                </button>
              </div>
            </header>

            {agendaView === "dia" ? (
              <ul className="space-y-2">
                <li className="text-[11px] font-medium tracking-wide text-fog/50 uppercase">
                  Hoje · 10/03
                </li>
                {TODAY.map((slot) => {
                  const p = PATIENTS.find((x) => x.id === slot.patientId);
                  if (!p) return null;
                  return (
                    <li
                      key={`${slot.time}-${p.id}`}
                      className="flex flex-wrap items-center justify-between gap-2 border border-white/10 bg-[#0c1624]/70 px-3 py-3"
                    >
                      <div>
                        <p className="text-sm text-white">
                          <span className="text-accent">{slot.time}</span> · {p.name}
                        </p>
                        <p className="text-xs text-fog/60">{p.focus}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium ${statusClass(slot.status)}`}>
                          {slot.status}
                        </span>
                        <button
                          type="button"
                          onClick={() => openPatient(p.id)}
                          className="border border-white/15 px-2 py-1 text-[11px] text-fog/80 transition hover:border-accent/50 hover:text-accent"
                        >
                          Abrir ficha
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="space-y-3">
                {MONTH_AGENDA.map((day) => (
                  <div
                    key={day.date}
                    className="border border-white/10 bg-[#0c1624]/70 px-3 py-3"
                  >
                    <p className="text-xs font-medium text-accent">
                      {day.weekday} · {day.date}
                      {day.date === "10/03" ? (
                        <span className="ml-2 text-fog/45">hoje</span>
                      ) : null}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {day.slots.map((slot) => {
                        const p = PATIENTS.find((x) => x.id === slot.patientId);
                        if (!p) return null;
                        return (
                          <li
                            key={`${day.date}-${slot.time}-${p.id}`}
                            className="flex flex-wrap items-center justify-between gap-2 text-xs"
                          >
                            <button
                              type="button"
                              onClick={() => openPatient(p.id)}
                              className="text-left text-fog/85 transition hover:text-accent"
                            >
                              <span className="text-white">{slot.time}</span> · {p.name}
                            </button>
                            <span className={`font-medium ${statusClass(slot.status)}`}>
                              {slot.status}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : null}

        {tab === "pacientes" ? (
          <section className="space-y-4">
            <header>
              <h2 className="font-display text-lg font-semibold text-white">
                Os 12 pacientes da Ana
              </h2>
              <p className="mt-1 text-xs text-fog/60">
                Clique em qualquer nome para ver agenda, financeiro, relatos e exercícios juntos.
              </p>
            </header>
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full min-w-[640px] text-left text-xs sm:text-[13px]">
                <thead className="bg-[#0c1624] text-[11px] tracking-wide text-fog/55 uppercase">
                  <tr>
                    <th className="px-3 py-2 font-medium">Paciente</th>
                    <th className="px-3 py-2 font-medium">Foco</th>
                    <th className="px-3 py-2 font-medium">Próxima</th>
                    <th className="px-3 py-2 font-medium">Mês</th>
                    <th className="px-3 py-2 font-medium" />
                  </tr>
                </thead>
                <tbody>
                  {PATIENTS.map((p) => (
                    <tr key={p.id} className="border-t border-white/10">
                      <td className="px-3 py-2.5 text-white">
                        {p.name}
                        <span className="mt-0.5 block text-[11px] text-fog/50">
                          {p.age} anos · {p.since}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-fog/75">{p.focus}</td>
                      <td className="px-3 py-2.5 text-fog/75">{p.nextSlot}</td>
                      <td className="px-3 py-2.5 text-fog/75">
                        {p.doneMonth}/{p.sessionsMonth}
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <button
                          type="button"
                          onClick={() => openPatient(p.id)}
                          className="text-xs text-accent transition hover:text-accent-bright"
                        >
                          Ver 360
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {tab === "paciente" ? (
          <section className="space-y-4">
            <header className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] tracking-[0.14em] text-accent uppercase">
                  Visão 360 do paciente
                </p>
                <h2 className="mt-1 font-display text-lg font-semibold text-white">
                  {selected.name}
                </h2>
                <p className="mt-1 text-xs text-fog/60">
                  {selected.age} anos · acompanhamento há {selected.since} · {selected.focus}
                </p>
              </div>
              <label className="text-xs text-fog/60">
                Trocar paciente
                <select
                  className="mt-1 block w-full min-w-[180px] border border-white/15 bg-[#0c1624] px-2 py-1.5 text-sm text-white"
                  value={selected.id}
                  onChange={(e) => setSelectedId(e.target.value)}
                >
                  {PATIENTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </label>
            </header>

            <div className="grid gap-3 sm:grid-cols-3">
              <Metric label="Valor / sessão" value={brl(selected.sessionValue)} />
              <Metric
                label="Sessões no mês"
                value={`${selected.doneMonth}/${selected.sessionsMonth}`}
                hint={selected.doneMonth < selected.sessionsMonth ? "há pendências" : "em dia"}
              />
              <Metric
                label="Total no mês"
                value={brl(selected.sessionValue * selected.doneMonth)}
                accent
              />
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              <Card title="Próxima sessao" body={selected.nextSlot} />
              <Card title="Tempo de acompanhamento" body={selected.since} />
              <Card title="Relato / pontos da sessão" body={selected.notes} />
              <Card title="Exercícios para a próxima" body={selected.exercises} />
              <Card title="Laudos e suspeitas" body={selected.suspicion} />
              <Card title="Observação clínica" body={selected.report} />
            </div>
          </section>
        ) : null}

        {tab === "financeiro" ? (
          <section className="space-y-4">
            <header>
              <h2 className="font-display text-lg font-semibold text-white">
                Financeiro do consultório
              </h2>
              <p className="mt-1 text-xs text-fog/60">
                Receita esperada vs realizada com base nas sessões dos 12 pacientes.
              </p>
            </header>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Metric label="Pacientes" value={String(monthStats.patients)} />
              <Metric
                label="Sessões feitas"
                value={`${monthStats.done}/${monthStats.planned}`}
              />
              <Metric label="Esperado no mês" value={brl(monthStats.expected)} />
              <Metric label="Já recebido" value={brl(monthStats.received)} accent />
            </div>
            <ul className="space-y-2">
              {PATIENTS.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-wrap items-center justify-between gap-2 border border-white/10 bg-[#0c1624]/70 px-3 py-2.5 text-xs"
                >
                  <button
                    type="button"
                    onClick={() => openPatient(p.id)}
                    className="text-left text-white transition hover:text-accent"
                  >
                    {p.name}
                  </button>
                  <span className="text-fog/60">
                    {p.doneMonth} sessões · {brl(p.sessionValue * p.doneMonth)}
                  </span>
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
            Quero um portal assim
          </a>
          <p className="text-[11px] text-fog/45">
            Navegue as abas · 12 pacientes fictícios · somente visualização
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

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-white/10 bg-[#0c1624]/70 px-3 py-3">
      <p className="text-[11px] font-medium tracking-wide text-accent/90 uppercase">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-fog/85">{body}</p>
    </div>
  );
}
