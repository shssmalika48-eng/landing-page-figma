import Image from 'next/image';

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Rattan armchair beside a potted palm in a bright minimalist room"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-left"
      />
      <div className="mx-auto flex min-h-[560px] max-w-[1440px] items-end px-5 py-10 md:min-h-[716px] md:items-center md:justify-end md:px-14">
        <div className="w-full max-w-[643px] rounded-[10px] bg-cream p-8 md:px-10 md:pb-9 md:pt-16">
          <p className="text-sm font-semibold tracking-[3px] text-foreground md:text-base">New Arrival</p>
          <h1
            id="hero-title"
            className="mt-2 text-balance text-4xl font-bold leading-tight text-brand md:text-[52px] md:leading-[65px]"
          >
            Discover Our New Collection
          </h1>
          <p className="mt-4 max-w-[546px] text-pretty text-base font-medium leading-relaxed text-foreground md:text-lg">
            Thoughtfully crafted pieces in warm, natural materials — designed to make every corner of your home feel
            calm, comfortable and beautifully yours.
          </p>
          <a
            href="#products"
            className="mt-8 inline-flex h-14 items-center justify-center bg-brand px-12 text-sm font-bold uppercase text-brand-foreground transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:mt-12 md:h-[74px] md:px-[72px] md:text-base"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  )
}
