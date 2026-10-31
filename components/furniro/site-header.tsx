'use client'

import { useState } from 'react'
import { Heart, Menu, Search, ShoppingCart, UserRound, X } from 'lucide-react'
import { Logo } from './logo'
import { useStore } from './store-provider'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Shop', href: '#products' },
  { label: 'About', href: '#inspiration' },
  { label: 'Contact', href: '#footer' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { cartCount, likedIds } = useStore()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:h-[100px] md:px-12">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-12 lg:gap-[75px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-base font-medium text-foreground transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 md:gap-5 lg:gap-8">
          <IconButton label="Account" className="hidden sm:inline-flex">
            <UserRound className="size-6" />
          </IconButton>
          <IconButton label="Search">
            <Search className="size-6" />
          </IconButton>
          <IconButton label={`Wishlist, ${likedIds.size} items`} badge={likedIds.size}>
            <Heart className="size-6" />
          </IconButton>
          <IconButton label={`Cart, ${cartCount} items`} badge={cartCount}>
            <ShoppingCart className="size-6" />
          </IconButton>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border/60 md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

function IconButton({
  label,
  badge,
  className = '',
  children,
}: {
  label: string
  badge?: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`relative inline-flex size-10 items-center justify-center text-foreground transition-colors hover:text-brand ${className}`}
    >
      {children}
      {badge ? (
        <span
          aria-hidden="true"
          className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground"
        >
          {badge}
        </span>
      ) : null}
    </button>
  )
}
