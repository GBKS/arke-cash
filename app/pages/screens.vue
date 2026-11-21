<script setup lang="ts">
import sizes from '~/data/screen-sizes.json'

const { data } = await useAsyncData('screens', () =>
  queryCollection('screens').first()
)

const title = 'Screens'
const description = 'Screens from Arké, a bitcoin wallet built on Ark, grouped by flow and dated.'

// Smooth scrolling for the flow links, only while this page is open.
useHead({ htmlAttrs: { class: 'smooth-scroll' } })

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

const flows = computed(() => data.value?.flows ?? [])

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })

function captureDate(source: string) {
  const day = source.slice(0, 10)
  return { iso: day, label: dateFormat.format(new Date(`${day}T00:00:00Z`)) }
}

function size(id: string) {
  return (sizes as Record<string, { width: number, height: number }>)[id]
}
</script>

<template>
  <div class="content-page screens-page">
    <div class="header">
      <h1><NuxtLink to="/">Arké</NuxtLink> Screens</h1>
    </div>

    <div class="intro">
      <p>Screens from Arké's development builds, grouped by flow. Most were taken on signet, Bitcoin's test network, so the amounts are test coins. The app keeps changing, so every screen shows the date it was captured.</p>    </div>

    <div class="controls">
      <nav aria-label="Flows">
        <a v-for="flow in flows" :key="flow.id" :href="`#${flow.id}`">{{ flow.title }}</a>
      </nav>
    </div>

    <div class="flows">
      <section v-for="flow in flows" :id="flow.id" :key="flow.id" class="flow">
        <div class="flow-header">
          <h2><a :href="`#${flow.id}`">{{ flow.title }}</a></h2>
          <p v-if="flow.intro">{{ flow.intro }}</p>
        </div>

        <div class="grid">
          <figure v-for="screen in flow.screens" :id="screen.id" :key="screen.id">
            <img
              :src="`/assets/images/screens/${screen.id}.webp`"
              :width="size(screen.id)?.width"
              :height="size(screen.id)?.height"
              :alt="screen.caption"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <p>{{ screen.caption }}</p>
              <div class="meta">
                <time :datetime="captureDate(screen.source).iso">{{ captureDate(screen.source).label }}</time>
                <a :href="`#${screen.id}`" class="permalink" :aria-label="`Link to this screen: ${screen.caption}`">#</a>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>

    <SiteFooter />

    <SiteMap />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/css/variables.scss' as variables;
@use '@/assets/css/mixins.scss' as mixins;

.screens-page {
  > .header,
  > .intro,
  > .controls {
    width: 100%;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }
}

.screens-page > .header h1 {
  font-size: clamp(44px, 12vw, 64px);
  white-space: nowrap;

  a {
    font-size: inherit;
    color: var(--gold);
  }
}

.intro {
  p {
    font-size: 21px;
    line-height: 1.4;
    color: rgba(white, 0.85);

    & + p {
      margin-top: 16px;
    }
  }
}

.controls {
  margin-top: 40px;

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    a {
      font-size: 15px;
      font-weight: 600;
      color: white;
      padding: 7px 12px;
      border-radius: 999px;
      background-color: rgba(white, 0.08);
      border: 1px solid rgba(white, 0.15);

      &:hover {
        background-color: rgba(white, 0.16);
      }
    }
  }
}

// The gallery sits on a warm light background: most screens are light and
// glare on the dark gradient, while the dark ones still read well here.
.flows {
  --ink: #1E1511;
  --paper: #F3F0EB;

  align-self: stretch;
  margin-top: 80px;
  padding-bottom: 120px;
  background-color: var(--paper);
  color: var(--ink);
}

.flow {
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 15px 0;
  scroll-margin-top: 20px;
}

.flow-header {
  max-width: 770px;
  margin: 0 auto 32px;

  h2 {
    font-family: 'DM Serif Display';
    font-size: 40px;
    line-height: 1.1;
    font-weight: 400;

    a {
      color: var(--ink);
    }
  }

  p {
    margin-top: 12px;
    font-size: 19px;
    line-height: 1.4;
    color: rgba(30, 21, 17, 0.75);
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 220px));
  justify-content: center;
  align-items: start;
  gap: 48px 28px;

  @include mixins.media-query(small) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 36px 15px;
  }
}

figure {
  margin: 0;
  scroll-margin-top: 20px;

  img {
    display: block;
    width: 100%;
    height: auto;
    // iPhone screen corners: ~55pt on a 440 × 956pt screen.
    border-radius: 12.5% / 5.75%;
    box-shadow: 0 0 0 1px rgba(30, 21, 17, 0.1), 0 18px 40px -22px rgba(30, 21, 17, 0.35);
    background-color: white;
  }

  &:target img {
    box-shadow: 0 0 0 3px #C99A2E, 0 18px 40px -22px rgba(30, 21, 17, 0.35);
  }

  figcaption {
    margin-top: 14px;

    p {
      font-size: 15px;
      line-height: 1.4;
      color: rgba(30, 21, 17, 0.85);
    }
  }
}

.meta {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 10px;
  font-size: 13px;
  color: rgba(30, 21, 17, 0.55);

  .permalink {
    color: rgba(30, 21, 17, 0.55);
    margin-left: auto;

    &:hover {
      color: var(--ink);
    }
  }
}
</style>

<style lang="scss">
html.smooth-scroll {
  scroll-behavior: smooth;

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
}
</style>
