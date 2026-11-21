# arke.cash

The website for [Arké](https://www.arke.cash), an experimental, self-custodial bitcoin wallet for iPhone built on the [Ark protocol](https://www.arke.cash/ark). The app itself lives in [gbks/arke](https://github.com/gbks/arke).

The site explains how Arké works, holds the test guide, FAQ, roadmap and legal pages, and has a [screen gallery](https://www.arke.cash/screens) of the app.

## Stack

- [Nuxt 4](https://nuxt.com) with Vue 3 and Pinia
- [Nuxt Content 3](https://content.nuxt.com) for the Markdown pages and the screen list
- Sass for styles, `@nuxtjs/i18n` (English only for now)
- Node 26, pinned in `.nvmrc`

## Getting started

```bash
nvm use
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Project layout

| Path | What's there |
|---|---|
| `content/*.md` | Page copy: how it works, the technical explainer, Ark, design, FAQ, roadmap, open source, the test guide (`test.md`, `test-1.md` to `test-9.md`), privacy policy and terms |
| `content/screens.yml` | The screens shown on `/screens`: flows, captions, states and source captures |
| `content.config.ts` | Nuxt Content collections: `content` for the Markdown pages, `screens` for the gallery |
| `app/pages/` | One page per route. Most load their Markdown from `content/` and render it with `ContentRenderer` |
| `app/components/` | Site header, navigation, footer, site map, home page sections, and `Screenshots.vue`, used as `::screenshots` in the test guide |
| `app/assets/css/` | Global styles and Sass variables |
| `public/assets/` | Images, videos and fonts |
| `server/api/faucet.post.ts` | Forwards a signet faucet request for an Ark address to `faucet.arke.cash` |
| `scripts/export-screens.mjs` | Builds the gallery images and index from `content/screens.yml` |

## Adding or editing a page

Most pages are Markdown in `content/` with a `title`, `description` and optional `image` in the front matter. The matching Vue file in `app/pages/` loads it by path. A new page needs both files. It also needs an entry in `nitro.prerender.routes` in `nuxt.config.ts` so it's prerendered, and a link in `app/components/SiteMap.vue` if it belongs in the menu.

## Screen gallery

`/screens` shows screens from development builds of the app, grouped by flow. The list lives in `content/screens.yml`. Each screen has an `id`, which is also its anchor on the page, plus a `source`: the path to a simulator capture, without the extension, in a sibling `Arke-sessions/screenshots/` folder.

After editing `screens.yml`, run:

```bash
node scripts/export-screens.mjs
```

It needs [ImageMagick](https://imagemagick.org) (`magick`) on your PATH. Set `SCREENS_SOURCE` to read captures from somewhere other than `../Arke-sessions/screenshots`. The script:

- writes `public/assets/images/screens/<id>.webp`, capped at 750 px wide, preferring a `@3x` capture when one exists
- records each image's size in `app/data/screen-sizes.json`, so the page can reserve space before images load
- writes `public/screens.json`, a machine-readable index for tools and agents
- removes images for screens no longer in the list, and stops if a screen id repeats or matches a flow id

Commit the generated files together with `screens.yml`. `public/llms.txt` points agents to the gallery and the index.

## Building and deploying

```bash
npm run generate   # static site in .output/public (dist links there)
npm run build      # server build, needed for the faucet endpoint
npm run preview    # serve the last build locally
```

`npm run generate` prerenders every route listed in `nuxt.config.ts`. The faucet endpoint only works with a server build and needs `FAUCET_SECRET` set in the environment. A local `.env` works, and it's git-ignored.

Nuxt Content keeps its database in `.data/content/contents.sqlite`. That file is tracked and changes whenever content is rebuilt.

## License

The code is licensed under the [Apache License 2.0](LICENSE). The app screenshots in `public/assets/images/screens/` are licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/), the same as the Arké app.
