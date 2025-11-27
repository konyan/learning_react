import { useCart } from '../context/CartContext'

export function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} className="cart-thumb" />
      <div className="cart-copy">
        <h3>{item.name}</h3>
        <p className="cart-meta">${item.price.toFixed(2)} each</p>
        <div className="quantity-controls">
          <button type="button" onClick={() => updateQuantity(item.id, -1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => updateQuantity(item.id, 1)}>
            +
          </button>
        </div>
      </div>
      <div className="cart-actions">
        <p className="line-total">${(item.quantity * item.price).toFixed(2)}</p>
        <button
          type="button"
          className="link"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </article>
  )
}
