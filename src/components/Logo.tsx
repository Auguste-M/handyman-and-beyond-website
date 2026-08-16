interface LogoProps {
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({ variant = 'dark', showWordmark = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/assets/images/image.png"
        alt="Handyman & Beyond"
        className={`h-12 w-auto object-contain ${variant === 'light' ? 'rounded bg-white' : ''}`}
      />
      {!showWordmark && <span className="sr-only">Handyman &amp; Beyond</span>}
    </div>
  );
}
