<script setup lang="ts">
const { data: home } = await useAsyncData(() => 
  queryCollection('content').path('/test').first()
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
      <h1>Test guide.</h1>
    </div>
    <ContentRenderer v-if="home" class="content" :value="home" />
  </div>
</template>
