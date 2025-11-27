import { useCart } from '../context/CartContext'

export function ProductCard({ plant }) {
  const { addToCart, items } = useCart()
  const isInCart = Boolean(items[plant.id])

  return (
    <article className="product-card">
      <img src={plant.image} alt={plant.name} className="product-image" />
      <div className="product-details">
        <div>
          <p className="category-label">{plant.category}</p>
          <h3>{plant.name}</h3>
          <p className="product-meta">
            {plant.light} light · {plant.size}
          </p>
        </div>
        <div className="product-cta">
          <p className="price">${plant.price.toFixed(2)}</p>
          <button
            type="button"
            onClick={() => addToCart(plant)}
            disabled={isInCart}
            aria-disabled={isInCart}
          >
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

