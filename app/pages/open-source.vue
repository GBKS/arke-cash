<script setup lang="ts">
const { data: home } = await useAsyncData(() => 
  queryCollection('content').path('/open-source').first()
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
      <h1>Open Source</h1>
    </div>
    <ContentRenderer v-if="home" class="content" :value="home" />

    <SiteFooter />

	  <SiteMap />
  </div>
</template>
