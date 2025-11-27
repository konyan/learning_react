import { ProductCard } from '../components/ProductCard'
import { plants } from '../data/plants'
import { usePageMeta } from '../hooks/usePageMeta'

export function ProductListing() {
  usePageMeta({
    title: 'Shop Indoor Houseplants',
    path: '/products',
    description:
      'Browse Verdant Co. plant collections grouped by light level and style. Add resilient ferns, trailing pothos, and statement monsteras to your cart.',
  })

  const grouped = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) acc[plant.category] = []
    acc[plant.category].push(plant)
    return acc
  }, {})

  return (
    <section className="product-page">
      <div className="page-intro">
        <p className="eyebrow">Shop the greenhouse</p>
        <h1>Houseplants for every light level.</h1>
        <p>
          Choose from curated collections built for apartments, offices, and
          cozy corners. Every plant ships with illustrated care instructions.
        </p>
      </div>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="category-block">
          <div className="category-heading">
            <h2>{category}</h2>
            <p>{items.length} varieties</p>
          </div>
          <div className="product-grid">
            {items.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
