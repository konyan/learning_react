import { useEffect } from 'react'

const siteName = 'Verdant Co.'
const siteUrl = 'https://konyan.github.io/learning_react'
const defaultDescription =
  'Verdant Co. delivers resilient indoor plants, expert care guides, and concierge support for every room in your home.'
const defaultImage =
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80'

const ensureMeta = (selector, attrs) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attrs)
      .filter(([key]) => key === 'name' || key === 'property')
      .forEach(([key, value]) => {
        element.setAttribute(key, value)
      })
    document.head.appendChild(element)
  }
  return element
}

const ensureLink = (rel) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  return element
}

export function usePageMeta({
  title = 'Modern Houseplants Delivered',
  description = defaultDescription,
  path = '/',
  image = defaultImage,
  type = 'website',
}) {
  useEffect(() => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    const url = `${siteUrl}${normalizedPath === '/' ? '/' : normalizedPath}`
    const pageTitle = `${title} | ${siteName}`
    document.title = pageTitle

    const metaDefinitions = [
      { selector: 'meta[name="description"]', attrs: { name: 'description' }, content: description },
      { selector: 'meta[property="og:title"]', attrs: { property: 'og:title' }, content: pageTitle },
      { selector: 'meta[property="og:description"]', attrs: { property: 'og:description' }, content: description },
      { selector: 'meta[property="og:url"]', attrs: { property: 'og:url' }, content: url },
      { selector: 'meta[property="og:type"]', attrs: { property: 'og:type' }, content: type },
      { selector: 'meta[property="og:image"]', attrs: { property: 'og:image' }, content: image },
      { selector: 'meta[name="twitter:title"]', attrs: { name: 'twitter:title' }, content: pageTitle },
      { selector: 'meta[name="twitter:description"]', attrs: { name: 'twitter:description' }, content: description },
      { selector: 'meta[name="twitter:image"]', attrs: { name: 'twitter:image' }, content: image },
    ]

    metaDefinitions.forEach(({ selector, attrs, content }) => {
      if (!content) return
      const element = ensureMeta(selector, attrs)
      element.setAttribute('content', content)
    })

    const canonical = ensureLink('canonical')
    canonical.setAttribute('href', url)

    return () => {}
  }, [title, description, path, image, type])
}
