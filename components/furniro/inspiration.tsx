'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'

const rooms = [
  { category: 'Bed Room', title: 'Inner Peace', image: '/images/room-1.png' },
  { category: 'Dining Room', title: 'Morning Light', image: '/images/room-2.png' },
  { category: 'Living Room', title: 'Quiet Corner', image: '/images/room-3.png' },
  { category: 'Kitchen', title: 'Sunny Table', image: '/images/gallery-kitchen.png' },
]

export function Inspiration() {
  const [active, setActive] = useState(0)
  const next = () => setActive((i) => (i + 1) % rooms.length)
  const ordered = rooms.map((_, i) => rooms[(active + i) % rooms.length])
  const current = ordered[0]

  return (
    <section id="inspiration" aria-labelledby="inspiration-title" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto grid max-w-[1440px] gap-10 py-12 pl-5 md:pl-[100px] lg:grid-cols-[422px_1fr] lg:items-center lg:gap-10 lg:py-11">
        <div className="pr-5 lg:pr-0">
          <h2
            id="inspiration-title"
            className="text-balance text-3xl font-bold leading-tight text-card-foreground md:text-[40px] md:leading-[48px]"
          >
            50+ Beautiful rooms inspiration
          </h2>
          <p className="mt-2 max-w-[368px] text-base font-medium text-[#616161]">
            Our designers have already made a lot of beautiful prototypes of rooms to inspire you.
          </p>
          <a
            href="#gallery"
            className="mt-6 inline-flex h-12 items-center justify-center bg-brand px-9 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Explore More
          </a>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex items-start gap-6">
            <div className="relative aspect-[404/582] w-[78%] shrink-0 sm:w-[404px]">
              <Image
                key={current.image}
                src={current.image}
                alt={`${current.category}: ${current.title}`}
                fill
                sizes="404px"
                className="object-cover animate-in fade-in duration-500"
              />
              <div className="absolute bottom-6 left-6 flex items-end">
                <div className="bg-background/75 px-6 py-6 backdrop-blur-sm md:px-8 md:py-8">
                  <p className="flex items-center gap-2 text-base font-medium text-[#616161]">
                    <span>{String(active + 1).padStart(2, '0')}</span>
                    <span aria-hidden="true" className="h-px w-7 bg-[#616161]" />
                    <span>{current.category}</span>
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-card-foreground md:text-[28px]">{current.title}</p>
                </div>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next room"
                  className="flex size-12 items-center justify-center bg-brand text-brand-foreground transition-colors hover:bg-brand/90"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>
            </div>

            {ordered.slice(1).map((room) => (
              <div key={room.image} className="relative hidden aspect-[372/486] w-[372px] shrink-0 sm:block">
                <Image src={room.image} alt="" fill sizes="372px" className="object-cover" />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-6 top-[40%] hidden size-12 items-center justify-center rounded-full bg-background text-brand shadow-lg transition-transform hover:scale-105 sm:flex"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="mt-6 flex items-center gap-5 sm:absolute sm:bottom-[60px] sm:left-[428px] sm:mt-0" role="tablist" aria-label="Choose room">
            {rooms.map((room, i) => (
              <button
                key={room.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show ${room.title}`}
                onClick={() => setActive(i)}
                className={`flex items-center justify-center rounded-full transition-all ${
                  i === active ? 'size-7 border border-brand' : 'size-7'
                }`}
              >
                <span className={`block size-[11px] rounded-full ${i === active ? 'bg-brand' : 'bg-[#d8d8d8]'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
