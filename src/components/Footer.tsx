import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 sm:flex-row sm:items-center sm:px-8">
        <Logo className="text-lg" />
        <p className="text-sm text-fog/55">
          © {year} RJ Technology · Soluções em tecnologia &amp; desenvolvimento
        </p>
      </div>
    </footer>
  );
}
