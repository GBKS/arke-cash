<script setup lang="ts">
const { data: home } = await useAsyncData(() => 
  queryCollection('content').path('/test-1').first()
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
  <div class="test-page">
    <div class="header">
      <NuxtLink to="/">Arké</NuxtLink>
      <p><NuxtLink to="/test">← Test guide intro</NuxtLink></p>
    </div>
    <ContentRenderer v-if="home" class="content" :value="home" />
  </div>
</template>
