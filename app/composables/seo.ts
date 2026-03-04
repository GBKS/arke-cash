export const DEFAULT_SEO_IMAGE = 'https://www.arke.cash/assets/images/preview.jpg'

export const resolveSeoImage = (item: unknown): string => {
  if (!item || typeof item !== 'object') {
    return DEFAULT_SEO_IMAGE
  }

  const candidate = (item as { image?: unknown }).image
  return typeof candidate === 'string' && candidate.length > 0
    ? candidate
    : DEFAULT_SEO_IMAGE
}
