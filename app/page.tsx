import { BrowseRange } from '@/components/furniro/browse-range'
import { Hero } from '@/components/furniro/hero'
import { Inspiration } from '@/components/furniro/inspiration'
import { OurProducts } from '@/components/furniro/our-products'
import { ShareGallery } from '@/components/furniro/share-gallery'
import { SiteFooter } from '@/components/furniro/site-footer'
import { SiteHeader } from '@/components/furniro/site-header'
import { StoreProvider } from '@/components/furniro/store-provider'

export default function Page() {
  return (
    <StoreProvider>
      <SiteHeader />
      <main>
        <Hero />
        <BrowseRange />
        <OurProducts />
        <Inspiration />
        <ShareGallery />
      </main>
      <SiteFooter />
    </StoreProvider>
  )
}
