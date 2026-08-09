"use client";

import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/lib/content";

type Role = "bot" | "user";

type Message = {
  id: string;
  role: Role;
  text: string;
  time: string;
};

type ServiceId =
  | "manicure"
  | "pedicure"
  | "mao-pe"
  | "gel-mao"
  | "gel-pe"
  | "blindagem"
  | "alongamento-novo"
  | "alongamento-manut";

type ExtraId = "francesinha" | "nail-art" | "remocao" | "nenhum";

type WhenId = "hoje" | "amanha" | "semana" | "ver-agenda";

type Step = "menu" | "service" | "extra" | "when" | "name" | "done";

type Answers = {
  service?: ServiceId;
  extras: ExtraId[];
  when?: WhenId;
  name?: string;
};

const SERVICES: { id: ServiceId; label: string; price: number }[] = [
  { id: "manicure", label: "Manicure simples", price: 35 },
  { id: "pedicure", label: "Pedicure", price: 40 },
  { id: "mao-pe", label: "Mão + pé", price: 70 },
  { id: "gel-mao", label: "Esmaltação em gel (mão)", price: 55 },
  { id: "gel-pe", label: "Esmaltação em gel (pé)", price: 60 },
  { id: "blindagem", label: "Blindagem", price: 80 },
  { id: "alongamento-novo", label: "Alongamento (novo)", price: 150 },
  { id: "alongamento-manut", label: "Alongamento (manutenção)", price: 90 },
];

const EXTRAS: { id: ExtraId; label: string; price: number }[] = [
  { id: "francesinha", label: "Francesinha", price: 15 },
  { id: "nail-art", label: "Nail art (até 2 unhas)", price: 20 },
  { id: "remocao", label: "Remoção de gel", price: 25 },
  { id: "nenhum", label: "Sem extras", price: 0 },
];

const WHEN_OPTIONS: { id: WhenId; label: string }[] = [
  { id: "hoje", label: "Hoje, se tiver vaga" },
  { id: "amanha", label: "Amanhã" },
  { id: "semana", label: "Esta semana" },
  { id: "ver-agenda", label: "Quero ver a agenda com a manicure" },
];

const DEMO_NAMES = ["Ana", "Beatriz", "Camila", "Juliana"];

const PRICE_TABLE = SERVICES.map((s) => `- ${s.label} — R$ ${s.price}`).join("\n");

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function clockNow() {
  return new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcTotal(serviceId: ServiceId, extras: ExtraId[]) {
  const base = SERVICES.find((s) => s.id === serviceId)?.price ?? 0;
  const extraSum = extras
    .filter((id) => id !== "nenhum")
    .reduce((sum, id) => sum + (EXTRAS.find((e) => e.id === id)?.price ?? 0), 0);
  return base + extraSum;
}

function buildQuote(answers: Answers) {
  const service = SERVICES.find((s) => s.id === answers.service);
  const extras = answers.extras.filter((id) => id !== "nenhum");
  const when = WHEN_OPTIONS.find((w) => w.id === answers.when);
  const total = answers.service ? calcTotal(answers.service, answers.extras) : 0;

  const extrasLine =
    extras.length > 0
      ? extras
          .map((id) => {
            const e = EXTRAS.find((x) => x.id === id);
            return e ? `  + ${e.label} (${formatBRL(e.price)})` : "";
          })
          .join("\n")
      : "  + Sem extras";

  return [
    "Orçamento pronto",
    "",
    `Cliente: ${answers.name}`,
    `Serviço: ${service?.label} — ${formatBRL(service?.price ?? 0)}`,
    "Extras:",
    extrasLine,
    `Quando: ${when?.label}`,
    "",
    `Total: ${formatBRL(total)}`,
    "",
    "Valores da tabela fixa do studio. A manicure confirma o horário e finaliza o agendamento com você.",
  ].join("\n");
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    role: "bot",
    time: "09:41",
    text: "Olá! Bem-vinda ao Studio Luna Nails.\nSou a assistente virtual — respondo na hora com a tabela e já monto seu orçamento.",
  },
  {
    id: "ask-menu",
    role: "bot",
    time: "09:41",
    text: "O que você gostaria de fazer?",
  },
];

export function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [step, setStep] = useState<Step>("menu");
  const [answers, setAnswers] = useState<Answers>({ extras: [] });
  const [typing, setTyping] = useState(false);
  const [busy, setBusy] = useState(false);
  const answersRef = useRef<Answers>({ extras: [] });
  const listRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reducedMotion.current ? "auto" : "smooth",
    });
  }, [messages, typing]);

  async function botSay(texts: string[]) {
    setBusy(true);
    for (const text of texts) {
      setTyping(true);
      await delay(reducedMotion.current ? 0 : 480 + Math.min(text.length * 10, 800));
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "bot", text, time: clockNow() },
      ]);
      await delay(reducedMotion.current ? 0 : 140);
    }
    setBusy(false);
  }

  function pushUser(text: string) {
    setMessages((prev) => [
      ...prev,
      { id: uid(), role: "user", text, time: clockNow() },
    ]);
  }

  async function chooseMenu(action: "tabela" | "orcamento" | "duvida") {
    if (busy) return;

    if (action === "tabela") {
      pushUser("Ver tabela de preços");
      await botSay([
        `Tabela fixa — Studio Luna Nails\n\n${PRICE_TABLE}\n\nExtras:\n- Francesinha — R$ 15\n- Nail art (até 2 unhas) — R$ 20\n- Remoção de gel — R$ 25`,
        "Quer que eu monte o orçamento com base nessa tabela?",
      ]);
      setStep("menu");
      return;
    }

    if (action === "duvida") {
      pushUser("Tirar uma dúvida");
      await botSay([
        "Posso ajudar com valores, tempo médio e o que está incluso.\nPara agendar com precisão, o ideal é eu montar o orçamento primeiro — aí a manicure só confirma o horário.",
        "Vamos fazer o orçamento agora?",
      ]);
      setStep("menu");
      return;
    }

    pushUser("Quero um orçamento");
    setStep("service");
    await botSay(["Perfeito! Qual serviço você quer? Os preços são da tabela fixa."]);
  }

  async function chooseService(serviceId: ServiceId) {
    if (busy) return;
    const service = SERVICES.find((s) => s.id === serviceId);
    if (!service) return;
    pushUser(`${service.label} — ${formatBRL(service.price)}`);
    setAnswers((a) => ({ ...a, service: serviceId, extras: [] }));
    setStep("extra");
    await botSay(["Quer adicionar algum extra?"]);
  }

  async function chooseExtra(extraId: ExtraId) {
    if (busy) return;
    const extra = EXTRAS.find((e) => e.id === extraId);
    if (!extra) return;
    pushUser(extra.label + (extra.price ? ` — ${formatBRL(extra.price)}` : ""));

    const nextExtras = extraId === "nenhum" ? (["nenhum"] as ExtraId[]) : [extraId];
    setAnswers((a) => ({ ...a, extras: nextExtras }));
    setStep("when");
    await botSay(["Para quando você gostaria?"]);
  }

  async function chooseWhen(whenId: WhenId) {
    if (busy) return;
    const when = WHEN_OPTIONS.find((w) => w.id === whenId);
    if (!when) return;
    pushUser(when.label);
    setAnswers((a) => ({ ...a, when: whenId }));
    setStep("name");
    await botSay([
      "Quase pronto! Como posso te chamar?\n(Escolha um nome de demonstração — nesta demo os dados são fictícios.)",
    ]);
  }

  async function chooseName(name: string) {
    if (busy) return;
    pushUser(name);
    const next: Answers = { ...answersRef.current, name };
    setAnswers(next);
    setStep("done");

    const total = next.service ? calcTotal(next.service, next.extras) : 0;
    await botSay([
      buildQuote(next),
      `Orçamento enviado automaticamente.\nSeu pedido virou um lead qualificado: a manicure já sabe o serviço, os extras, a preferência de dia e o valor (${formatBRL(total)}) — ela só precisa confirmar a vaga.`,
      "Na vida real, o robô responde 24h e a profissional entra só quando a cliente já está pronta para agendar.",
    ]);
  }

  function restart() {
    if (busy) return;
    setMessages(INITIAL_MESSAGES);
    setAnswers({ extras: [] });
    setStep("menu");
    setTyping(false);
    setBusy(false);
  }

  const options =
    step === "menu"
      ? [
          {
            key: "orcamento",
            label: "Quero um orçamento",
            onClick: () => void chooseMenu("orcamento"),
          },
          {
            key: "tabela",
            label: "Ver tabela de preços",
            onClick: () => void chooseMenu("tabela"),
          },
          {
            key: "duvida",
            label: "Tirar uma dúvida",
            onClick: () => void chooseMenu("duvida"),
          },
        ]
      : step === "service"
        ? SERVICES.map((s) => ({
            key: s.id,
            label: `${s.label} · ${formatBRL(s.price)}`,
            onClick: () => void chooseService(s.id),
          }))
        : step === "extra"
          ? EXTRAS.map((e) => ({
              key: e.id,
              label: e.price ? `${e.label} · ${formatBRL(e.price)}` : e.label,
              onClick: () => void chooseExtra(e.id),
            }))
          : step === "when"
            ? WHEN_OPTIONS.map((w) => ({
                key: w.id,
                label: w.label,
                onClick: () => void chooseWhen(w.id),
              }))
            : step === "name"
              ? DEMO_NAMES.map((name) => ({
                  key: name,
                  label: name,
                  onClick: () => void chooseName(name),
                }))
              : [];

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#0b141a]">
      <div
        ref={listRef}
        className="wa-chat-bg min-h-0 flex-1 space-y-1.5 overflow-y-auto px-3 py-3 sm:px-4"
        aria-live="polite"
      >
        <div className="mx-auto mb-3 max-w-[90%] rounded-lg bg-[#182229]/px-3 py-1.5 text-center text-[11px] text-[#8696a0]">
          Mensagens automáticas · Studio Luna Nails (demo)
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`relative max-w-[88%] px-2.5 pb-4 pt-1.5 text-[13.5px] leading-snug shadow-sm sm:max-w-[82%] sm:text-sm ${
                msg.role === "user"
                  ? "rounded-lg rounded-tr-none bg-[#005c4b] text-[#e9edef]"
                  : "rounded-lg rounded-tl-none bg-[#202c33] text-[#e9edef]"
              }`}
            >
              <p className="whitespace-pre-line pr-8">{msg.text}</p>
              <span className="absolute bottom-1 right-2 text-[10px] text-[#8696a0]">{msg.time}</span>
            </div>
          </div>
        ))}

        {typing ? (
          <div className="flex justify-start" aria-hidden="true">
            <div className="rounded-lg rounded-tl-none bg-[#202c33] px-4 py-3">
              <span className="chat-typing-dots inline-flex gap-1">
                <span className="size-1.5 rounded-full bg-[#8696a0]" />
                <span className="size-1.5 rounded-full bg-[#8696a0]" />
                <span className="size-1.5 rounded-full bg-[#8696a0]" />
              </span>
            </div>
          </div>
        ) : null}
      </div>

      <div className="shrink-0 border-t border-[#222d34] bg-[#1f2c34] px-3 py-2.5 sm:px-4">
        {step !== "done" && options.length > 0 ? (
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Opções de resposta">
            {options.map((opt) => (
              <button
                key={opt.key}
                type="button"
                disabled={busy}
                onClick={opt.onClick}
                className="rounded-full border border-[#00a884]/55 bg-[#0b141a] px-3 py-1.5 text-left text-xs text-[#e9edef] transition hover:bg-[#00a884]/15 disabled:cursor-not-allowed disabled:opacity-50 sm:text-[13px]"
              >
                {opt.label}
              </button>
            ))}
          </div>
        ) : null}

        {step === "done" ? (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#00a884] px-4 py-2 text-sm font-semibold text-[#111b21] transition hover:bg-[#06cf9c]"
            >
              Quero um chatbot assim
            </a>
            <button
              type="button"
              disabled={busy}
              onClick={restart}
              className="inline-flex items-center justify-center rounded-full border border-[#8696a0]/40 px-4 py-2 text-sm text-[#e9edef] transition hover:border-[#00a884] disabled:opacity-50"
            >
              Reiniciar demo
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
