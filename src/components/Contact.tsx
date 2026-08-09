import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="relative border-t border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">Contato</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Fale comigo agora
            </h2>
            <p className="mt-4 text-fog/80">
              Conte o problema do seu negócio — respondo pelo WhatsApp e montamos o próximo
              passo juntos.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#25D366] px-6 py-3.5 text-base font-semibold text-ink transition hover:brightness-110"
            >
              <WhatsAppIcon />
              {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.87L2 22l5.27-1.38A9.96 9.96 0 0 0 12.04 22C17.58 22 22.05 17.52 22.05 12S17.58 2 12.04 2zm0 18.15c-1.6 0-3.09-.43-4.38-1.18l-.31-.18-3.13.82.84-3.05-.2-.33A8.13 8.13 0 0 1 3.9 12c0-4.49 3.66-8.14 8.14-8.14 4.49 0 8.14 3.65 8.14 8.14 0 4.48-3.65 8.15-8.14 8.15z" />
    </svg>
  );
}
