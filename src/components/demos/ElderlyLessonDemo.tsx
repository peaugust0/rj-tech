"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/content";

type StepId =
  | "inicio"
  | "achar-app"
  | "abrir-conversa"
  | "enviar-audio"
  | "ver-foto"
  | "cuidado"
  | "fim";

type Step = {
  id: StepId;
  short: string;
  title: string;
  coach: string;
  action: string;
  next: StepId | null;
};

const STEPS: Step[] = [
  {
    id: "inicio",
    short: "Começar com calma",
    title: "Encontro 1 · Conhecer o celular",
    coach:
      "Olá, Dona Célia. Este é um celular parecido com o seu (Samsung). Vamos com calma. Hoje o objetivo é só um: falar com o neto no WhatsApp. Se errar, usamos a setinha de voltar.",
    action: "Entendi, vamos achar o WhatsApp",
    next: "achar-app",
  },
  {
    id: "achar-app",
    short: "Abrir o WhatsApp",
    title: "Passo 1 · Abrir o WhatsApp",
    coach:
      "Na tela inicial, procure o ícone verde do WhatsApp. Toque uma vez, sem segurar. Se abrir outra coisa, toque no botão de voltar (triângulo) embaixo e tentamos de novo.",
    action: "Toquei no WhatsApp",
    next: "abrir-conversa",
  },
  {
    id: "abrir-conversa",
    short: "Conversa do neto",
    title: "Passo 2 · Abrir a conversa do neto",
    coach:
      "Esta é a lista do WhatsApp. Procure Pedro (neto) e toque no nome. A seta à esquerda em cima também serve para voltar.",
    action: "Abri a conversa do Pedro",
    next: "enviar-audio",
  },
  {
    id: "enviar-audio",
    short: "Mandar um áudio",
    title: "Passo 3 · Mandar um áudio",
    coach:
      "No canto inferior direito está o microfone. Segure, fale “Oi meu neto, tudo bem?” e solte. O áudio sobe sozinho na conversa.",
    action: "Enviei o áudio",
    next: "ver-foto",
  },
  {
    id: "ver-foto",
    short: "Ver a foto",
    title: "Passo 4 · Ver a foto que ele mandou",
    coach:
      "O Pedro mandou uma foto. Toque nela uma vez para ver grande. Para voltar à conversa, use a seta no topo esquerdo.",
    action: "Consegui ver a foto",
    next: "cuidado",
  },
  {
    id: "cuidado",
    short: "Cuidado com golpes",
    title: "Passo 5 · Cuidado com golpes",
    coach:
      "Se aparecer mensagem pedindo Pix urgente ou link estranho, não clique e não responda. Chame a família ou a gente. A seta de voltar não apaga o perigo — o certo é não tocar no link.",
    action: "Vou lembrar disso",
    next: "fim",
  },
  {
    id: "fim",
    short: "Pronto por hoje",
    title: "Pronto por hoje",
    coach:
      "Você abriu o WhatsApp, falou com o neto, viu uma foto e aprendeu a desconfiar de golpe. No próximo encontro repetimos e avançamos — no seu ritmo.",
    action: "Reiniciar a aula",
    next: null,
  },
];

export function ElderlyLessonDemo() {
  const [stepId, setStepId] = useState<StepId>("inicio");
  const step = STEPS.find((s) => s.id === stepId) ?? STEPS[0];
  const index = STEPS.findIndex((s) => s.id === stepId);
  const progress = ((index + 1) / STEPS.length) * 100;

  function advance() {
    if (step.next) {
      setStepId(step.next);
      return;
    }
    setStepId("inicio");
  }

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#071018] text-[#e8eef5]">
      <div className="border-b border-white/10 bg-[#0c1624] px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] tracking-[0.14em] text-accent uppercase">
              Aula guiada · inclusão digital
            </p>
            <p className="mt-0.5 text-sm text-white">{step.title}</p>
          </div>
          <p className="text-xs text-fog/55">
            {index + 1}/{STEPS.length}
          </p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
        <div className="mx-auto grid max-w-4xl gap-5 lg:grid-cols-[minmax(0,300px)_1fr]">
          <div className="mx-auto w-full max-w-[300px]">
            <SamsungPhone>
              <PhoneScreen stepId={stepId} />
            </SamsungPhone>
            <p className="mt-2 text-center text-[10px] text-fog/45">
              Modelo ilustrativo · Samsung Galaxy A15
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <div className="border border-accent/30 bg-accent/10 px-4 py-4">
              <p className="text-[11px] font-medium tracking-wide text-accent uppercase">
                Instrutor RJ Technology
              </p>
              <p className="mt-2 text-base leading-relaxed text-fog/90 sm:text-[1.05rem]">
                {step.coach}
              </p>
            </div>

            <button
              type="button"
              onClick={advance}
              className="w-full bg-accent px-4 py-4 text-base font-semibold text-ink transition hover:bg-accent-bright sm:text-lg"
            >
              {step.action}
            </button>

            <aside className="space-y-2">
              <p className="text-[11px] font-medium tracking-wide text-fog/50 uppercase">
                Roteiro do encontro
              </p>
              <ol className="grid gap-1.5 sm:grid-cols-2">
                {STEPS.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setStepId(s.id)}
                      className={`w-full rounded-md px-2.5 py-2 text-left text-xs transition ${
                        s.id === stepId
                          ? "bg-accent/20 text-accent"
                          : i < index
                            ? "text-fog/70 hover:bg-white/5"
                            : "text-fog/45 hover:bg-white/5"
                      }`}
                    >
                      {i + 1}. {s.short}
                    </button>
                  </li>
                ))}
              </ol>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center border border-accent/40 px-3 py-2.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-ink"
              >
                Quero esse acompanhamento
              </a>
              <p className="text-[11px] leading-snug text-fog/45">
                Demo · WhatsApp ilustrado · somente visualização
              </p>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function SamsungPhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[300px]">
      <div className="absolute inset-0 rounded-[2rem] bg-[#1a1d21] shadow-[0_24px_60px_rgba(0,0,0,0.55),inset_0_0_0_2px_#3a3f46]" />
      <div className="absolute inset-[3px] overflow-hidden rounded-[1.85rem] bg-black">
        {/* Punch-hole camera (A15 style) */}
        <div className="pointer-events-none absolute left-1/2 top-2.5 z-20 size-3 -translate-x-1/2 rounded-full bg-[#0a0a0a] ring-1 ring-[#2a2a2a]">
          <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a2330]" />
        </div>
        <div className="flex h-full flex-col">{children}</div>
      </div>
      {/* Side buttons */}
      <span className="absolute -right-[2px] top-[18%] h-10 w-[3px] rounded-l bg-[#2c3036]" aria-hidden="true" />
      <span className="absolute -left-[2px] top-[22%] h-6 w-[3px] rounded-r bg-[#2c3036]" aria-hidden="true" />
      <span className="absolute -left-[2px] top-[30%] h-10 w-[3px] rounded-r bg-[#2c3036]" aria-hidden="true" />
    </div>
  );
}

function StatusBar({ dark = true }: { dark?: boolean }) {
  const color = dark ? "text-white" : "text-[#111b21]";
  return (
    <div className={`flex items-center justify-between px-5 pb-1 pt-7 text-[10px] font-medium ${color}`}>
      <span>09:41</span>
      <div className="flex items-center gap-1.5">
        <SignalIcon className={dark ? "fill-white" : "fill-[#111b21]"} />
        <WifiIcon className={dark ? "fill-white" : "fill-[#111b21]"} />
        <BatteryIcon className={dark ? "fill-white" : "fill-[#111b21]"} />
      </div>
    </div>
  );
}

function AndroidNav({ light = false }: { light?: boolean }) {
  const c = light ? "#111b21" : "#e9edef";
  return (
    <div className={`flex h-10 shrink-0 items-center justify-around ${light ? "bg-[#f0f2f5]" : "bg-[#0b141a]"}`}>
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4l-6 8 6 8" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke={c} strokeWidth="2" />
      </svg>
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke={c} strokeWidth="2" />
      </svg>
    </div>
  );
}

function PhoneScreen({ stepId }: { stepId: StepId }) {
  if (stepId === "inicio" || stepId === "achar-app") {
    return <HomeScreen highlightWa={stepId === "achar-app"} />;
  }
  if (stepId === "abrir-conversa") return <WaChatList />;
  if (stepId === "enviar-audio") return <WaChat screen="audio" />;
  if (stepId === "ver-foto") return <WaChat screen="foto" />;
  if (stepId === "cuidado") return <WaChat screen="golpe" />;
  return <WaChat screen="fim" />;
}

function HomeScreen({ highlightWa }: { highlightWa: boolean }) {
  const apps = [
    { name: "Telefone", color: "#34c759", icon: "phone" },
    { name: "Mensagens", color: "#30d158", icon: "msg" },
    { name: "Chrome", color: "#4285f4", icon: "chrome" },
    { name: "Galeria", color: "#ff9f0a", icon: "gallery" },
    { name: "WhatsApp", color: "#25d366", icon: "wa" },
    { name: "Câmera", color: "#64d2ff", icon: "cam" },
    { name: "Play Store", color: "#00c853", icon: "store" },
    { name: "Configurações", color: "#8e8e93", icon: "settings" },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col bg-gradient-to-b from-[#1c3a5f] via-[#152a45] to-[#0d1b2a]">
      <StatusBar />
      <div className="flex flex-1 flex-col px-4 pb-2 pt-4">
        <p className="text-center text-4xl font-light text-white/95">09:41</p>
        <p className="mt-1 text-center text-[11px] text-white/70">dom., 15 de março</p>

        <div className="mt-8 grid grid-cols-4 gap-x-2 gap-y-5">
          {apps.map((app) => (
            <div key={app.name} className="flex flex-col items-center gap-1.5">
              <div
                className={`flex size-12 items-center justify-center rounded-[1.1rem] shadow-md ${
                  app.name === "WhatsApp" && highlightWa
                    ? "ring-2 ring-white ring-offset-2 ring-offset-[#152a45]"
                    : ""
                }`}
                style={{ backgroundColor: app.color }}
              >
                <AppGlyph type={app.icon} />
              </div>
              <span className="max-w-[64px] truncate text-center text-[10px] text-white/90">
                {app.name}
              </span>
            </div>
          ))}
        </div>

        {highlightWa ? (
          <p className="mt-auto pb-2 text-center text-[11px] font-medium text-white">
            Toque no ícone verde do WhatsApp
          </p>
        ) : (
          <p className="mt-auto pb-2 text-center text-[11px] text-white/60">
            Tela inicial do celular
          </p>
        )}
      </div>
      <AndroidNav />
    </div>
  );
}

function WaChatList() {
  const chats = [
    { name: "Pedro (neto)", preview: "Vó, te mando uma foto!", time: "09:38", unread: 1, active: true },
    { name: "Maria (filha)", preview: "Te ligo mais tarde", time: "ontem", unread: 0, active: false },
    { name: "Grupo da família", preview: "Bom dia!", time: "ontem", unread: 0, active: false },
    { name: "Farmácia", preview: "Seu pedido saiu", time: "12/03", unread: 0, active: false },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#0b141a]">
      <StatusBar />
      <div className="flex items-center justify-between bg-[#1f2c34] px-3 py-2.5">
        <p className="text-[17px] font-semibold text-white">WhatsApp</p>
        <div className="flex items-center gap-4 text-white/80">
          <SearchIcon />
          <MoreIcon />
        </div>
      </div>
      <div className="flex gap-4 border-b border-white/5 bg-[#1f2c34] px-4 text-[13px] text-[#8696a0]">
        <span className="border-b-2 border-[#00a884] pb-2 text-[#00a884]">Conversas</span>
        <span className="pb-2">Status</span>
        <span className="pb-2">Chamadas</span>
      </div>
      <ul className="min-h-0 flex-1 overflow-y-auto">
        {chats.map((c) => (
          <li
            key={c.name}
            className={`flex items-center gap-3 border-b border-white/[0.04] px-3 py-3 ${
              c.active ? "bg-[#00a884]/10" : ""
            }`}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#6b7c85] text-sm font-semibold text-white">
              {c.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-[15px] text-[#e9edef]">{c.name}</p>
                <span className="text-[11px] text-[#8696a0]">{c.time}</span>
              </div>
              <div className="mt-0.5 flex items-center justify-between gap-2">
                <p className="truncate text-[13px] text-[#8696a0]">{c.preview}</p>
                {c.unread > 0 ? (
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#00a884] text-[10px] font-semibold text-[#111b21]">
                    {c.unread}
                  </span>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="bg-[#1f2c34] px-3 py-1.5 text-center text-[10px] text-[#00a884]">
        Toque em Pedro (neto)
      </p>
      <AndroidNav />
    </div>
  );
}

function WaChat({ screen }: { screen: "audio" | "foto" | "golpe" | "fim" }) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-[#0b141a]">
      <StatusBar />
      <div className="flex items-center gap-2 bg-[#1f2c34] px-2 py-2">
        <span className="flex size-8 items-center justify-center text-[#aebac1]" aria-hidden="true">
          <BackArrow />
        </span>
        <div className="flex size-9 items-center justify-center rounded-full bg-[#6b7c85] text-xs font-semibold text-white">
          P
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-medium text-[#e9edef]">Pedro (neto)</p>
          <p className="text-[11px] text-[#8696a0]">online</p>
        </div>
        <div className="flex items-center gap-3 pr-1 text-[#aebac1]">
          <VideoIcon />
          <PhoneIcon />
          <MoreIcon />
        </div>
      </div>

      <div className="wa-chat-bg min-h-0 flex-1 space-y-2 overflow-y-auto px-2.5 py-3">
        <div className="mx-auto max-w-[85%] rounded-md bg-[#182229] px-2 py-1 text-center text-[11px] text-[#8696a0]">
          Hoje
        </div>

        <Bubble side="in" time="09:38">
          Oi vó! Tudo bem?
        </Bubble>

        {(screen === "audio" || screen === "foto" || screen === "golpe" || screen === "fim") && (
          <Bubble side="out" time="09:40">
            <MicWave />
          </Bubble>
        )}

        {(screen === "foto" || screen === "golpe" || screen === "fim") && (
          <Bubble side="in" time="09:42" pad={false}>
            <div className="overflow-hidden rounded-md">
              <div className="flex aspect-[4/3] w-[200px] max-w-full items-center justify-center bg-gradient-to-br from-[#3d5a80] to-[#1b2838] text-[11px] text-white/80">
                Foto da família
              </div>
            </div>
            <p className="mt-1 px-1 text-[13px]">Olha a foto que tirei ontem</p>
          </Bubble>
        )}

        {screen === "golpe" ? (
          <Bubble side="in" time="09:50" danger>
            <p className="text-[13px] leading-snug">
              URGENTE: sua conta será bloqueada. Acesse agora:{" "}
              <span className="text-[#53bdeb] underline">bit.ly/pix-falso</span>
            </p>
            <p className="mt-1 text-[11px] text-amber-300">Não toque neste link</p>
          </Bubble>
        ) : null}

        {screen === "fim" ? (
          <Bubble side="out" time="09:45">
            Obrigada meu neto, amei a foto!
          </Bubble>
        ) : null}

        {screen === "audio" ? (
          <p className="pt-2 text-center text-[11px] font-medium text-[#00a884]">
            Segure o microfone para gravar
          </p>
        ) : null}
        {screen === "foto" ? (
          <p className="pt-2 text-center text-[11px] font-medium text-[#00a884]">
            Toque na foto · seta volta à conversa
          </p>
        ) : null}
      </div>

      <div className="flex items-center gap-2 bg-[#1f2c34] px-2 py-2">
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-[#8696a0]"
          tabIndex={-1}
          aria-hidden="true"
        >
          +
        </button>
        <div className="flex h-10 flex-1 items-center rounded-full bg-[#2a3942] px-4 text-[13px] text-[#8696a0]">
          Mensagem
        </div>
        <div
          className={`flex size-10 items-center justify-center rounded-full ${
            screen === "audio" ? "bg-[#00a884] ring-2 ring-white/40" : "bg-[#00a884]"
          }`}
        >
          <MicIcon />
        </div>
      </div>
      <AndroidNav />
    </div>
  );
}

function Bubble({
  side,
  time,
  children,
  danger,
  pad = true,
}: {
  side: "in" | "out";
  time: string;
  children: React.ReactNode;
  danger?: boolean;
  pad?: boolean;
}) {
  const out = side === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[88%] ${pad ? "px-2.5 pb-4 pt-1.5" : "px-1 pb-4 pt-1"} text-[14.5px] leading-snug shadow-sm ${
          out
            ? "rounded-lg rounded-tr-none bg-[#005c4b] text-[#e9edef]"
            : danger
              ? "rounded-lg rounded-tl-none border border-amber-400/40 bg-[#202c33] text-[#e9edef]"
              : "rounded-lg rounded-tl-none bg-[#202c33] text-[#e9edef]"
        }`}
      >
        {children}
        <span className="absolute bottom-1 right-2 text-[10px] text-[#8696a0]">{time}</span>
      </div>
    </div>
  );
}

/* ——— icons ——— */

function AppGlyph({ type }: { type: string }) {
  if (type === "wa") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.62 0 8.24 3.62 8.24 8.24 0 4.62-3.62 8.24-8.24 8.24-1.44 0-2.84-.37-4.07-1.08l-.29-.17-3.12.82.83-3.04-.19-.31a8.2 8.2 0 0 1-1.26-4.46c0-4.62 3.62-8.24 8.1-8.24z" />
      </svg>
    );
  }
  return <span className="text-lg text-white/90" aria-hidden="true">•</span>;
}

function BackArrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 7h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm14 2l4-2v10l-4-2V9z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.19 2.4.56 3.5a1 1 0 0 1-.25 1L6.6 10.8z" />
    </svg>
  );
}

function MicIcon({ light = false }: { light?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={light ? "#e9edef" : "#111b21"} aria-hidden="true">
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11h-2z" />
    </svg>
  );
}

function MicWave() {
  return (
    <span className="inline-flex items-center gap-2 pr-6">
      <span className="flex size-7 items-center justify-center rounded-full bg-[#00a884]/35">
        <MicIcon light />
      </span>
      <span className="inline-flex h-3 items-end gap-0.5">
        {[3, 7, 5, 9, 4, 8, 6].map((h, i) => (
          <span key={i} className="w-0.5 rounded-full bg-[#00a884]" style={{ height: h }} />
        ))}
      </span>
      <span className="text-[12px] text-[#8696a0]">0:04</span>
    </span>
  );
}

function SignalIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="10" viewBox="0 0 16 12" className={className} aria-hidden="true">
      <rect x="0" y="8" width="3" height="4" rx="0.5" />
      <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
      <rect x="9" y="2" width="3" height="10" rx="0.5" />
      <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
    </svg>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="10" viewBox="0 0 16 12" className={className} aria-hidden="true">
      <path d="M8 10.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zM8 7c1.4 0 2.7.5 3.7 1.3l-1.2 1.2A3.5 3.5 0 0 0 8 8.6c-.9 0-1.7.3-2.4.8L4.4 8.2A5.3 5.3 0 0 1 8 7zm0-3.2c2.3 0 4.4.9 6 2.3L12.8 7A6.8 6.8 0 0 0 8 5.2 6.8 6.8 0 0 0 3.2 7L2 5.9A9.2 9.2 0 0 1 8 3.8z" />
    </svg>
  );
}

function BatteryIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="10" viewBox="0 0 22 12" className={className} aria-hidden="true">
      <rect x="0.5" y="1.5" width="18" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" className="opacity-90" />
      <rect x="2" y="3" width="12" height="6" rx="1" />
      <rect x="19" y="4" width="2" height="4" rx="0.5" />
    </svg>
  );
}
