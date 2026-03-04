<script setup lang="ts">
const { data: home } = await useAsyncData(() => 
  queryCollection('content').path('/how-technical').first()
)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
  ogTitle: home.value?.title,
  ogDescription: home.value?.description,
  twitterTitle: home.value?.title,
  twitterDescription: home.value?.description,
  ogImage: resolveSeoImage(home.value),
  twitterImage: resolveSeoImage(home.value)
})
</script>

<template>
  <div class="content-page">
    <div class="header">
      <NuxtLink to="/">Arké</NuxtLink>
      <h1>How it works.</h1>

      <div class="tech-toggle">
        <NuxtLink to="/how">Normal</NuxtLink>
        <NuxtLink to="/how-technical">Technical</NuxtLink>
      </div>
    </div>
    <ContentRenderer v-if="home" class="content" :value="home" />

    <TrySection />

    <SiteFooter />

	  <SiteMap />
  </div>
</template>
