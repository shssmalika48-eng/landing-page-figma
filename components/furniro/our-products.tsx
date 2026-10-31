'use client'

import { useState } from 'react'
import { products } from '@/lib/products'
import { ProductCard } from './product-card'

const PAGE_SIZE = 8

export function OurProducts() {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const allShown = visible >= products.length

  return (
    <section id="products" aria-labelledby="products-title" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 pb-16">
      <h2 id="products-title" className="text-center text-3xl font-bold text-card-foreground md:text-[40px]">
        Our Products
      </h2>

      <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, visible).map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setVisible((v) => (allShown ? PAGE_SIZE : v + PAGE_SIZE))}
          className="h-12 w-[245px] border border-brand bg-background text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          {allShown ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  )
}
