type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 font-display ${className}`}>
      <span className="tracking-tight" aria-hidden="true">
        <span className="text-white">R</span>
        <span className="text-accent">J</span>
      </span>
      <span className="text-[0.72em] font-semibold tracking-[0.18em] text-white">
        TECH
      </span>
    </span>
  );
}
