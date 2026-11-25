<script setup lang="ts">
import { CONTENT_PAGES, normalizePath, pageUrl } from '#shared/site'

// Canonical URL, og:url and, for content pages, the Markdown copy,
// all derived from the current route.
const route = useRoute()
const path = computed(() => normalizePath(route.path))
const url = computed(() => pageUrl(route.path))

useHead({
  link: () => [
    { rel: 'canonical', href: url.value },
    ...(CONTENT_PAGES.includes(path.value)
      ? [{ rel: 'alternate', type: 'text/markdown', href: `${path.value}.md` }]
      : [])
  ]
})

useSeoMeta({ ogUrl: url })
</script>

<template>
  <div id="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
