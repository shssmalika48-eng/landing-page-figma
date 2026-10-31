'use client'

import { useState } from 'react'

const links = ['Home', 'Shop', 'About', 'Contact']
const help = ['Payment Options', 'Returns', 'Privacy Policies']

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id="footer" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-[1240px] px-5 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr_0.6fr_1.2fr]">
          <div>
            <p className="text-2xl font-bold text-foreground">Funiro.</p>
            <address className="mt-10 max-w-[285px] text-base not-italic leading-relaxed text-muted-foreground md:mt-12">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </address>
          </div>

          <nav aria-labelledby="footer-links">
            <h2 id="footer-links" className="text-base font-medium text-muted-foreground">Links</h2>
            <ul className="mt-8 flex flex-col gap-8 md:mt-14 md:gap-11">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-base font-medium text-foreground hover:text-brand">{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-help">
            <h2 id="footer-help" className="text-base font-medium text-muted-foreground">Help</h2>
            <ul className="mt-8 flex flex-col gap-8 md:mt-14 md:gap-11">
              {help.map((l) => (
                <li key={l}>
                  <a href="#" className="text-base font-medium text-foreground hover:text-brand">{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-base font-medium text-muted-foreground">Newsletter</h2>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-wrap items-end gap-3 md:mt-14">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="min-w-0 flex-1 border-b border-foreground bg-transparent pb-1 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="border-b border-foreground pb-1 text-sm font-medium uppercase text-foreground hover:border-brand hover:text-brand"
              >
                Subscribe
              </button>
            </form>
            <p aria-live="polite" className="mt-3 text-sm text-brand">
              {subscribed ? 'Thanks for subscribing!' : ''}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-9">
          <p className="text-base text-foreground">2026 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
