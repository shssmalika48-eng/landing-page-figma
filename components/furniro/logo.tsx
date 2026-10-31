export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-1.5 ${className}`} aria-label="Furniro home">
      <svg width="34" height="22" viewBox="0 0 34 22" fill="none" aria-hidden="true">
        <path d="M0 22 9 6l3.5 6L8 22H0Z" fill="#B88E2F" />
        <path d="M8.5 22 18 4l9.5 18h-5L18 13l-4.5 9h-5Z" fill="#B88E2F" />
        <path d="M22 0 34 22h-4L20 3.5 22 0Z" fill="#B88E2F" />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-foreground md:text-[28px]">Furniro</span>
    </a>
  )
}
