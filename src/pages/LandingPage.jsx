import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <section className="landing">
      <div className="landing-content">
        <p className="eyebrow">Indoor Plant Studio</p>
        <h1>Verdant keeps every room breathing easy.</h1>
        <p>
          We curate resilient, beautifully grown houseplants and give you the
          care plans to help them thrive. Delivered straight from greenhouses to
          your doorstep.
        </p>
        <Link to="/products" className="primary-btn">
          Get Started
        </Link>
      </div>
    </section>
  )
}
