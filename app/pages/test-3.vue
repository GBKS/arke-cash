<script setup lang="ts">
const { data: home } = await useAsyncData(() => 
  queryCollection('content').path('/test-3').first()
)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
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
