export type Product = {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  badge?: { type: 'sale'; value: number } | { type: 'new' }
  image: string
}

export const products: Product[] = [
  { id: 'syltherine', name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, originalPrice: 3500000, badge: { type: 'sale', value: 30 }, image: '/images/product-syltherine.png' },
  { id: 'leviosa', name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, image: '/images/product-leviosa.png' },
  { id: 'lolito', name: 'Lolito', description: 'Luxury big sofa', price: 7000000, originalPrice: 14000000, badge: { type: 'sale', value: 50 }, image: '/images/product-lolito.png' },
  { id: 'respira', name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, badge: { type: 'new' }, image: '/images/product-respira.png' },
  { id: 'grifo', name: 'Grifo', description: 'Night lamp', price: 1500000, image: '/images/product-grifo.png' },
  { id: 'muggo', name: 'Muggo', description: 'Small mug', price: 150000, badge: { type: 'new' }, image: '/images/product-muggo.png' },
  { id: 'pingky', name: 'Pingky', description: 'Cute bed set', price: 7000000, originalPrice: 14000000, badge: { type: 'sale', value: 50 }, image: '/images/product-pingky.png' },
  { id: 'potty', name: 'Potty', description: 'Minimalist flower pot', price: 500000, badge: { type: 'new' }, image: '/images/product-potty.png' },
  { id: 'aurelia', name: 'Aurelia', description: 'Velvet lounge armchair', price: 3200000, originalPrice: 4000000, badge: { type: 'sale', value: 20 }, image: '/images/gallery-chair.png' },
  { id: 'nordo', name: 'Nordo', description: 'Oak stool pair', price: 900000, badge: { type: 'new' }, image: '/images/gallery-stools.png' },
  { id: 'serena', name: 'Serena', description: 'Upholstered bed frame', price: 8500000, image: '/images/gallery-bed.png' },
  { id: 'kaya', name: 'Kaya', description: 'Ceramic table vase', price: 350000, image: '/images/gallery-vase.png' },
]

export function formatRupiah(value: number) {
  return `Rp ${value.toLocaleString('id-ID')}`
}
