// Site-wide facts used by the app, the server routes and the build.

// Netlify serves the site on the bare domain and redirects www there.
export const SITE_URL = 'https://arke.cash'

// Pages rendered from a Markdown file in content/ with the same name.
// Each one is also published as Markdown at <path>.md for agents.
export const CONTENT_PAGES = [
  '/how',
  '/how-technical',
  '/test',
  '/test-1',
  '/test-2',
  '/test-3',
  '/test-4',
  '/test-5',
  '/test-6',
  '/test-7',
  '/test-8',
  '/test-9',
  '/privacy-policy',
  '/terms-and-conditions',
  '/roadmap',
  '/design',
  '/open-source',
  '/ark',
  '/faq'
]

// Every public page, in the order the sitemap lists them.
export const PAGES = ['/', ...CONTENT_PAGES, '/screens']

// A route path without its trailing slash, as listed above.
export const normalizePath = (path: string): string =>
  path === '/' ? '/' : path.replace(/\/+$/, '')

// The canonical URL for a route path. Netlify redirects /faq to /faq/,
// so canonical URLs end in a slash.
export const pageUrl = (path: string): string => {
  const normalized = normalizePath(path)
  return `${SITE_URL}${normalized === '/' ? '/' : `${normalized}/`}`
}
