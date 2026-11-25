// Publishes each content page as plain Markdown at <path>.md (for example
// /faq.md), so agents can read the copy without parsing the HTML. The files
// are written at build time and served as static assets, in dev too.

import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { defineNuxtModule } from '@nuxt/kit'
import { CONTENT_PAGES, SITE_URL } from '../shared/site'

// `::screenshots` blocks are Vue components in the site. Turn them into
// plain Markdown images with their captions.
function replaceScreenshots(markdown: string): string {
  return markdown.replace(/^::screenshots\n---\n([\s\S]*?)\n---\n::$/gm, (block, props: string) => {
    const values: Record<string, string[]> = {}
    for (const line of props.split('\n')) {
      const match = line.match(/^(\w+):\s*(\[.*\])\s*$/)
      if (!match) return block
      try {
        values[match[1]!] = JSON.parse(match[2]!)
      } catch {
        return block
      }
    }

    const images = values.images ?? []
    return images
      .map((image, index) => {
        const caption = values.captions?.[index] ?? ''
        const alt = values.alts?.[index] || caption
        const img = `![${alt}](${SITE_URL}/assets/images/test/${image}.jpg)`
        return caption ? `${img}\n*${caption}*` : img
      })
      .join('\n\n')
  })
}

// Add the page's URL to the front matter so the file says where it came from.
function addUrl(markdown: string, url: string): string {
  return markdown.startsWith('---\n')
    ? `---\nurl: ${url}\n${markdown.slice(4)}`
    : `---\nurl: ${url}\n---\n\n${markdown}`
}

export default defineNuxtModule({
  meta: { name: 'markdown-copies' },
  async setup(_options, nuxt) {
    // Kept out of buildDir, which Nuxt clears after modules have run.
    const outDir = join(nuxt.options.rootDir, 'node_modules', '.cache', 'markdown-copies')
    await rm(outDir, { recursive: true, force: true })
    await mkdir(outDir, { recursive: true })

    for (const path of CONTENT_PAGES) {
      const slug = path.slice(1)
      const source = await readFile(join(nuxt.options.rootDir, 'content', `${slug}.md`), 'utf8')
      await writeFile(join(outDir, `${slug}.md`), addUrl(replaceScreenshots(source), `${SITE_URL}${path}`))
    }

    nuxt.hook('nitro:config', (config) => {
      config.publicAssets ||= []
      config.publicAssets.push({ dir: outDir, baseURL: '/', maxAge: 0 })
    })
  }
})
