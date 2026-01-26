<script setup lang="ts">
const route = useRoute()
const { data: home } = await useAsyncData(() => queryCollection('content').path(route.path).first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <div class="content-page">
    <div class="header">
      <NuxtLink to="/">Arké</NuxtLink>
      <h1>Test guide.</h1>
    </div>
    <ContentRenderer v-if="home" class="content" :value="home" />
  </div>
</template>
