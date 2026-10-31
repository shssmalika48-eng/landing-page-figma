import Image from "next/image";

const categories = [
  { name: 'Dining', image: '/images/range-dining.png', alt: 'Knit throw and wooden tray on a rustic table' },
  { name: 'Living', image: '/images/range-living.png', alt: 'Beige sofa with cushions and a wooden stump table' },
  { name: 'Bedroom', image: '/images/range-bedroom.png', alt: 'Bedroom corner with a wicker plant basket and tripod lamp' },
]

export function BrowseRange() {
  return (
    <section aria-labelledby="range-title" className="mx-auto max-w-[1240px] px-5 py-14 md:py-16">
      <div className="text-center">
        <h2 id="range-title" className="text-2xl font-bold text-foreground md:text-[32px]">
          Browse The Range
        </h2>
        <p className="mt-2 text-base text-muted-foreground md:text-xl">
          Find the perfect pieces for every room in your home.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-16 md:gap-5">
        {categories.map((cat) => (
          <li key={cat.name}>
            <a href="#products" className="group block text-center">
              <div className="relative aspect-[381/480] overflow-hidden rounded-[10px]">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground transition-colors group-hover:text-brand md:mt-8 md:text-2xl">
                {cat.name}
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}