<script setup lang="ts">
const { data: home } = await useAsyncData(() => 
  queryCollection('content').path('/privacy-policy').first()
)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <div class="content-page">
    <div class="header">
      <NuxtLink to="/">Arké</NuxtLink>
      <h1>Privacy policy</h1>
    </div>
    <ContentRenderer v-if="home" class="content" :value="home" />

    <SiteFooter />

	  <SiteMap />
  </div>
</template>
