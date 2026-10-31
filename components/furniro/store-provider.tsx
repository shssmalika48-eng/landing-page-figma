'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

type StoreContextValue = {
  cartCount: number
  likedIds: Set<string>
  addToCart: (id: string) => void
  toggleLike: (id: string) => void
}

const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<string[]>([])
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set())

  const addToCart = useCallback((id: string) => setCart((prev) => [...prev, id]), [])
  const toggleLike = useCallback((id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ cartCount: cart.length, likedIds, addToCart, toggleLike }),
    [cart.length, likedIds, addToCart, toggleLike],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
