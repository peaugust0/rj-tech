export const WHATSAPP_URL =
  "https://wa.me/5521973470393?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20RJ%20TECH%20e%20quero%20saber%20mais.";

export const PHONE_DISPLAY = "(21) 97347-0393";

export const services = [
  {
    id: "sites-apps",
    title: "Criação de Sites e Apps",
    description: "Presença digital e ferramentas sob medida para o seu negócio.",
  },
  {
    id: "ti",
    title: "Resolução de Problemas de TI",
    description: "Suporte local ou remoto para destravar o dia a dia.",
  },
  {
    id: "instalacao",
    title: "Instalação de Softwares e Apps",
    description: "Setup correto, estável e pronto para usar.",
  },
  {
    id: "gestao",
    title: "Gestão de Tecnologia para Marcas e Empresas",
    description: "Organização da stack e processos digitais.",
  },
  {
    id: "unificacao",
    title: "Unificação de Sistemas",
    description: "Dados e ferramentas conectados em um só fluxo.",
  },
  {
    id: "dashboards",
    title: "Dashboards e Relatórios",
    description: "Power BI, Looker Studio e Excel automatizado.",
  },
  {
    id: "treinamento",
    title: "Treinamento e Ensino de Tecnologias",
    description: "Capacitação prática para equipes e profissionais.",
  },
  {
    id: "inclusao",
    title: "Inclusão Digital para Idosos",
    description: "Acompanhamento paciente e acolhedor com tecnologia.",
  },
] as const;

export type CaseStudy = {
  id: string;
  label: string;
  title: string;
  problem: string;
  solution: string;
  tech: readonly string[];
  result: string;
  previewHref?: string;
  previewKind?: "whatsapp" | "portal" | "clinica";
  previewNote?: string;
  previewCaption?: string;
};

export const cases: CaseStudy[] = [
  {
    id: "chatbot",
    label: "Case demonstrativo · Beleza / WhatsApp",
    title: "Chatbot de orçamento para manicure",
    problem:
      "A manicure perde leads no WhatsApp quando demora a responder: a cliente pede preço, some, e agenda com quem respondeu primeiro. Repetir a mesma tabela e montar orçamento à mão consome o dia.",
    solution:
      "Chatbot no WhatsApp com tabela de preços fixa e opções guiadas. Conforme a resposta da cliente, o robô oferece só o que cabe no fluxo e já fecha o orçamento (serviço + extras + preferência de dia). A profissional entra só para confirmar a vaga.",
    tech: ["Chatbot WhatsApp", "Tabela de preços fixa", "Orçamento automático", "Lead qualificado"],
    result:
      "Resposta 24/7, orçamento na hora e leads quentes: a manicure sabe o que a cliente quer e quanto vai pagar antes de digitar a primeira mensagem humana.",
    previewHref: "/demos/chatbot/",
    previewKind: "whatsapp",
    previewCaption: "Situação real: manicure com preços fixos e orçamento automático no WhatsApp",
    previewNote:
      "Lead é o contato interessado que ainda não fechou — por exemplo, alguém que pediu orçamento no WhatsApp. Sem resposta rápida, esse lead esfria e procura outra profissional.",
  },
  {
    id: "portal-homecare",
    label: "Case demonstrativo · Home care",
    title: "Portal unificado para cuidados em casa",
    problem:
      "A empresa de home care vivia em pedaços: uma planilha do que cada cliente paga por serviço, outra do que paga aos prestadores de serviços de saúde, escala de prestadores solta em outra planilha, contratos em outro sistema, e sem visão do fluxo financeiro do mês, da disponibilidade da equipe, de onde está a maior concentração de clientes na cidade nem do custo/receita por cliente.",
    solution:
      "Portal único que concentra o fluxo do mês (entrada, saída e taxa), clientes e serviços, prestadores (função, região, horário e disponibilidade), escala, mapa de concentração na cidade e envio/assinatura de contratos para clientes e prestadores — no lugar de planilhas e ferramentas espalhadas.",
    tech: [
      "Portal web unificado",
      "Financeiro + taxa administrativa",
      "Escala e disponibilidade",
      "Contratos digitais",
    ],
    result:
      "Uma fonte da verdade: a gestão enxerga o mês inteiro, sabe quem está livre, onde estão os clientes e quanto cada contrato rende — sem caçar dado em arquivo solto.",
    previewHref: "/demos/portal-homecare/",
    previewKind: "portal",
    previewCaption:
      "Situação real: home care com financeiro, prestadores, escala e contratos no mesmo portal",
    previewNote:
      "Unificar não é só juntar abas: é enxergar fluxo, equipe, clientes e contratos juntos para decidir com o mês real na frente.",
  },
  {
    id: "clinica",
    label: "Case demonstrativo · Saúde / consultório",
    title: "Portal da terapeuta Ana",
    problem:
      "Agenda em um lugar, dados pessoais e financeiros do paciente em outro. Com 12 pacientes, para montar o quadro completo de uma sessão a Ana perdia tempo e corria risco de informação espalhada.",
    solution:
      "Sistema sob medida com visão 360º do paciente: sessões e horários, status (realizada ou não), valor por sessão e total no mês, relatos e pontos da sessão, exercícios para a próxima, tempo de acompanhamento, laudos e suspeitas — tudo no mesmo lugar.",
    tech: ["App web personalizado", "Agenda + prontuário + financeiro", "Visão 360 do paciente"],
    result:
      "Gestão do consultório em um único fluxo: mais segurança no histórico dos 12 pacientes e mais tempo dedicado ao atendimento.",
    previewHref: "/demos/portal-clinica/",
    previewKind: "clinica",
    previewCaption:
      "Situação real: terapeuta com 12 pacientes — agenda, ficha e financeiro no mesmo portal",
    previewNote:
      "Visão 360º significa abrir o paciente e ver sessão, dinheiro, relatos e próximos passos juntos — sem caçar em planilha e agenda separadas.",
  },
];
