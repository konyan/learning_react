import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { LandingPage } from './pages/LandingPage'
import { ProductListing } from './pages/ProductListing'
import { CartPage } from './pages/CartPage'

function AppShell() {
  const location = useLocation()
  const showHeader = location.pathname === '/products' || location.pathname === '/cart'

  return (
    <div className="app-shell">
      {showHeader && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  )
}

export default App
