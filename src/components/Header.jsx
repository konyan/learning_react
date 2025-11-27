import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export function Header() {
  const { totals } = useCart()
  const location = useLocation()

  const links =
    location.pathname === '/products'
      ? [
        { to: '/', label: 'Landing' },
        { to: '/cart', label: 'Cart' },
      ]
      : [
        { to: '/', label: 'Landing' },
        { to: '/products', label: 'Shop' },
      ]

  return (
    <header className="site-header">
      <Link to="/products" className="brand">
        Verdant Co.
      </Link>
      <nav>
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="nav-link">
            {link.label}
          </Link>
        ))}
      </nav>
      <Link to="/cart" className="cart-status" aria-label="Shopping cart">
        <span className="cart-icon" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5h2l1.5 9h9.5l1.5-6h-11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1" fill="currentColor" />
            <circle cx="17" cy="20" r="1" fill="currentColor" />
          </svg>
        </span>
        <span className="cart-count">{totals.totalItems}</span>
      </Link>
    </header>
  )
}
