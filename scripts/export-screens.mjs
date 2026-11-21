// Exports the screens listed in content/screens.yml to WebP for /screens.
//
//   node scripts/export-screens.mjs
//
// Reads PNGs from Arke-sessions/screenshots (override with SCREENS_SOURCE),
// prefers `<source>@3x.png` over `<source>.png`, never upscales, and writes
// public/assets/images/screens/<id>.webp, app/data/screen-sizes.json
// (pixel sizes, so the page can reserve space before images load) and
// public/screens.json (an index for agents and tools).
// Needs ImageMagick 7 (`magick`) on the PATH.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceRoot = process.env.SCREENS_SOURCE
  ?? resolve(root, '..', 'Arke-sessions', 'screenshots')
const outDir = join(root, 'public', 'assets', 'images', 'screens')
const sizesFile = join(root, 'app', 'data', 'screen-sizes.json')

// Display width is 250px; 750px covers 3x screens without wasting bytes.
const MAX_WIDTH = 750

const { flows } = yaml.load(readFileSync(join(root, 'content', 'screens.yml'), 'utf8'))
const screens = flows.flatMap(flow => flow.screens)

// Flow and screen ids share one anchor namespace on the page.
const ids = new Set()
const anchors = new Set(flows.map(flow => flow.id))
for (const { id } of screens) {
  if (ids.has(id)) throw new Error(`Duplicate screen id: ${id}`)
  if (anchors.has(id)) throw new Error(`Screen id matches a flow id: ${id}`)
  ids.add(id)
}

mkdirSync(outDir, { recursive: true })
mkdirSync(dirname(sizesFile), { recursive: true })

const sizes = {}
const missing = []

for (const { id, source } of screens) {
  const hiRes = join(sourceRoot, `${source}@3x.png`)
  const base = join(sourceRoot, `${source}.png`)
  const input = existsSync(hiRes) ? hiRes : base
  if (!existsSync(input)) {
    missing.push(`${id}: ${source}`)
    continue
  }
  const output = join(outDir, `${id}.webp`)
  execFileSync('magick', [input, '-resize', `${MAX_WIDTH}x>`, '-strip', '-quality', '85', output])
  const [width, height] = execFileSync('magick', ['identify', '-format', '%w %h', output])
    .toString().trim().split(' ').map(Number)
  sizes[id] = { width, height }
  console.log(`${id}  ${width}x${height}  ${input === hiRes ? '@3x' : '1x'}`)
}

// Remove exports for screens no longer in the list.
for (const file of readdirSync(outDir)) {
  if (file.endsWith('.webp') && !ids.has(file.slice(0, -5))) {
    rmSync(join(outDir, file))
    console.log(`removed ${file}`)
  }
}

writeFileSync(sizesFile, JSON.stringify(sizes, null, 2) + '\n')

// Machine-readable index for agents and tools, served at /screens.json.
const SITE = 'https://www.arke.cash'
const capturedOn = source => source.slice(0, 10)
const index = {
  title: 'Arké screens',
  description: 'Screens from development builds of Arké, a self-custodial bitcoin wallet for iPhone built on the Ark protocol, grouped by flow. Most were captured on signet, so amounts are test coins. Captions are written by the designer; each screen carries the date it was captured, and older screens may show an earlier design.',
  page: `${SITE}/screens`,
  license: {
    name: 'CC BY-NC 4.0',
    url: 'https://creativecommons.org/licenses/by-nc/4.0/',
    attribution: 'Arké, arke.cash'
  },
  updated: screens.map(s => capturedOn(s.source)).sort().at(-1),
  fields: {
    state: 'default | empty | filled | loading | success | error | warning',
    network: 'mainnet | signet',
    arkSpecific: 'true when the screen exists because of how the Ark protocol works'
  },
  flows: flows.map(flow => ({
    id: flow.id,
    title: flow.title,
    intro: flow.intro,
    url: `${SITE}/screens#${flow.id}`,
    screens: flow.screens.map(screen => ({
      id: screen.id,
      caption: screen.caption,
      state: screen.state,
      network: screen.network,
      arkSpecific: screen.ark,
      captured: capturedOn(screen.source),
      url: `${SITE}/screens#${screen.id}`,
      image: {
        url: `${SITE}/assets/images/screens/${screen.id}.webp`,
        ...sizes[screen.id]
      }
    }))
  }))
}
writeFileSync(join(root, 'public', 'screens.json'), JSON.stringify(index, null, 2) + '\n')

if (missing.length) {
  console.error(`\nMissing sources:\n  ${missing.join('\n  ')}`)
  process.exit(1)
}
console.log(`\n${Object.keys(sizes).length} screens exported to ${outDir}`)
