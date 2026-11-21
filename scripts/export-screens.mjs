// Exports the screens listed in content/screens.yml to WebP for /screens.
//
//   node scripts/export-screens.mjs
//
// Reads PNGs from Arke-sessions/screenshots (override with SCREENS_SOURCE),
// prefers `<source>@3x.png` over `<source>.png`, never upscales, and writes
// public/assets/images/screens/<id>.webp plus app/data/screen-sizes.json
// (pixel sizes, so the page can reserve space before images load).
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

if (missing.length) {
  console.error(`\nMissing sources:\n  ${missing.join('\n  ')}`)
  process.exit(1)
}
console.log(`\n${Object.keys(sizes).length} screens exported to ${outDir}`)
