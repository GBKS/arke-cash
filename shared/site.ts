// Site-wide facts used by the app, the server routes and the build.

export const SITE_URL = 'https://www.arke.cash'

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

// The canonical URL for a route path: no trailing slash, except the homepage.
export const canonicalPath = (path: string): string =>
  path === '/' ? '/' : path.replace(/\/+$/, '')
