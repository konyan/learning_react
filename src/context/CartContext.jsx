import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState({})

  const addToCart = (plant) => {
    setItems((prev) => {
      const currentQty = prev[plant.id]?.quantity ?? 0
      return {
        ...prev,
        [plant.id]: { ...plant, quantity: currentQty + 1 },
      }
    })
  }

  const removeFromCart = (plantId) => {
    setItems((prev) => {
      const updated = { ...prev }
      delete updated[plantId]
      return updated
    })
  }

  const updateQuantity = (plantId, delta) => {
    setItems((prev) => {
      const current = prev[plantId]
      if (!current) return prev
      const nextQty = current.quantity + delta
      if (nextQty <= 0) {
        const updated = { ...prev }
        delete updated[plantId]
        return updated
      }
      return {
        ...prev,
        [plantId]: { ...current, quantity: nextQty },
      }
    })
  }

  const totals = useMemo(() => {
    const entries = Object.values(items)
    const totalItems = entries.reduce((sum, item) => sum + item.quantity, 0)
    const totalCost = entries.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0,
    )
    return { totalItems, totalCost }
  }, [items])

  const value = useMemo(
    () => ({ items, addToCart, removeFromCart, updateQuantity, totals }),
    [items, totals],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
