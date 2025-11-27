import { Link } from 'react-router-dom'
import { CartItem } from '../components/CartItem'
import { useCart } from '../context/CartContext'

export function CartPage() {
  const { items, totals } = useCart()
  const itemList = Object.values(items)

  return (
    <section className="cart-page">
      <div className="page-intro">
        <p className="eyebrow">Your cart</p>
        <h1>{totals.totalItems} plants ready to ship</h1>
        <p>Total due today: ${totals.totalCost.toFixed(2)}</p>
      </div>

      {itemList.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Add something lush!</p>
          <Link to="/products" className="primary-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {itemList.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <aside className="cart-summary">
            <h2>Order summary</h2>
            <dl>
              <div className="summary-row">
                <dt>Plants</dt>
                <dd>{totals.totalItems}</dd>
              </div>
              <div className="summary-row">
                <dt>Total</dt>
                <dd>${totals.totalCost.toFixed(2)}</dd>
              </div>
            </dl>
            <Link to="/products" className="secondary-btn">
              Continue Shopping
            </Link>
            <button
              type="button"
              className="primary-btn"
              onClick={() => alert('Checkout flow coming soon!')}
            >
              Checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  )
}
