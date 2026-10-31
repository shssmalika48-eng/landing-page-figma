'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeftRight, Check, Heart, Share2 } from 'lucide-react'
import { formatRupiah, type Product } from '@/lib/products'
import { useStore } from './store-provider'

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleLike, likedIds } = useStore()
  const [added, setAdded] = useState(false)
  const [compared, setCompared] = useState(false)
  const liked = likedIds.has(product.id)

  function handleAdd() {
    addToCart(product.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className="group relative flex h-full flex-col bg-card">
      <div className="relative aspect-[285/301] overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.description}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {product.badge && (
          <span
            className={`absolute right-4 top-4 flex size-12 items-center justify-center rounded-full text-sm font-medium text-white ${
              product.badge.type === 'sale' ? 'bg-sale' : 'bg-new'
            }`}
          >
            {product.badge.type === 'sale' ? `-${product.badge.value}%` : 'New'}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-4 pb-7 pt-4">
        <h3 className="text-xl font-semibold text-card-foreground md:text-2xl">{product.name}</h3>
        <p className="mt-2 text-base font-medium text-muted-foreground">{product.description}</p>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="text-lg font-semibold text-card-foreground md:text-xl">{formatRupiah(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-[#b0b0b0] line-through md:text-base">
              <span className="sr-only">Original price </span>
              {formatRupiah(product.originalPrice)}
            </span>
          )}
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-[#3a3a3a]/70 opacity-0 transition-opacity duration-300 focus-within:opacity-100 group-hover:opacity-100">
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex h-12 w-[202px] items-center justify-center gap-2 bg-background text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          {added ? (
            <>
              <Check className="size-4" aria-hidden="true" /> Added
            </>
          ) : (
            'Add to cart'
          )}
        </button>
        <div className="flex items-center gap-5 text-base font-semibold text-white">
          <button type="button" className="flex items-center gap-1 hover:text-cream" aria-label={`Share ${product.name}`}>
            <Share2 className="size-4" aria-hidden="true" />
            Share
          </button>
          <button
            type="button"
            onClick={() => setCompared((v) => !v)}
            aria-pressed={compared}
            className={`flex items-center gap-1 hover:text-cream ${compared ? 'text-cream' : ''}`}
          >
            <ArrowLeftRight className="size-4" aria-hidden="true" />
            Compare
          </button>
          <button
            type="button"
            onClick={() => toggleLike(product.id)}
            aria-pressed={liked}
            className="flex items-center gap-1 hover:text-cream"
          >
            <Heart className={`size-4 ${liked ? 'fill-sale text-sale' : ''}`} aria-hidden="true" />
            Like
          </button>
        </div>
      </div>
    </article>
  )
}
