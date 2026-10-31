import Image from 'next/image'

type Tile = { src: string; alt: string; className: string }

const leftTiles: Tile[] = [
  { src: '/images/range-bedroom.png', alt: 'Bedroom shelf with plants', className: 'col-span-1 row-span-1 aspect-[274/382]' },
  { src: '/images/gallery-desk.png', alt: 'White desk with laptop and vintage radio', className: 'col-span-2 row-span-1 aspect-[451/312] self-end' },
  { src: '/images/gallery-chair.png', alt: 'Mustard velvet armchair', className: 'col-span-1 row-span-1 aspect-[381/323]' },
  { src: '/images/gallery-stools.png', alt: 'Wooden stools with a vase of flowers', className: 'col-span-2 row-span-1 aspect-[344/242] self-start' },
]

const rightTiles: Tile[] = [
  { src: '/images/gallery-bed.png', alt: 'Beige bedroom with tufted bench', className: 'col-span-1 aspect-[290/348] self-end' },
  { src: '/images/gallery-kitchen.png', alt: 'Sunny kitchen with brick wall', className: 'col-span-1 aspect-[425/433] self-end' },
  { src: '/images/gallery-vase.png', alt: 'White vase with dried grass', className: 'col-span-1 aspect-[178/242] w-3/5 self-start' },
  { src: '/images/gallery-shelf.png', alt: 'Tiled kitchen wall with shelf', className: 'col-span-1 aspect-[258/196] w-4/5 self-start' },
]

function TileImage({ tile }: { tile: Tile }) {
  return (
    <div className={`relative overflow-hidden ${tile.className}`}>
      <Image src={tile.src} alt={tile.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-105" />
    </div>
  )
}

export function ShareGallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="scroll-mt-24 overflow-hidden py-14 md:py-16">
      <div className="text-center">
        <p className="text-base font-semibold text-[#616161] md:text-xl">Share your setup with</p>
        <h2 id="gallery-title" className="mt-1 text-3xl font-bold text-card-foreground md:text-[40px]">
          #FuniroFurniture
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 items-center gap-4 md:grid-cols-[1.7fr_1fr_2fr]">
        <div className="grid grid-cols-3 gap-4">
          {leftTiles.map((tile) => (
            <TileImage key={tile.src} tile={tile} />
          ))}
        </div>

        <div className="relative hidden aspect-[295/392] md:block">
          <Image src="/images/gallery-dining.png" alt="Dining room with pendant lamp" fill sizes="20vw" className="object-cover" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {rightTiles.map((tile) => (
            <TileImage key={tile.src} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  )
}
