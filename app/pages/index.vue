<template>
  <div class="page home-page">
	<HomeBanner />

	<HomeSection
		title="Yours."
		description="Your keys. Your phone. Your bitcoin. That's the whole arrangement."
		color="#231610"
		image="/assets/images/bright-beige.jpg"
		imageSourceSet="/assets/images/bright-beige.jpg 1x, /assets/images/bright-beige@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<HomeSection
		title="No middlemen."
		description="You send it. They receive it. No bank in between, no approval, no waiting."
		color="#20080F"
		image="/assets/images/dark-red-blue.jpg"
		imageSourceSet="/assets/images/dark-red-blue.jpg 1x, /assets/images/dark-red-blue@2x.jpg 2x"
		imageAlt=""
	/>

	<HomeSection
		title="Instant."
		description="Payments settle in seconds. This is what bitcoin is supposed to feel like."
		color="#30010A"
		image="/assets/images/red.jpg"
		imageSourceSet="/assets/images/red.jpg 1x, /assets/images/red@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<HomeSection
		title="One tap."
		description="Pay anyone who accepts bitcoin. As simple as it sounds."
		color="#3B2428"
		image="/assets/images/light-pink-blue.jpg"
		imageSourceSet="/assets/images/light-pink-blue.jpg 1x, /assets/images/light-pink-blue@2x.jpg 2x"
		imageAlt=""
	/>

	<HomeSection
		title="Recoverable."
		description="Phone gone? Bitcoin isn't. Back up once, restore anywhere."
		color="#132D43"
		image="/assets/images/skull.jpg"
		imageSourceSet="/assets/images/skull.jpg 1x, /assets/images/skull@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<HomeSection
		title="Everyday."
		description="Coffee. Flights. Rent. Whatever you're buying, it comes with you."
		color="#2D1C2D"
		image="/assets/images/pink-puppy.jpg"
		imageSourceSet="/assets/images/pink-puppy.jpg 1x, /assets/images/pink-puppy@2x.jpg 2x"
		imageAlt=""
	/>

	<HomeSection
		title="Dark mode."
		description="Obviously."
		color="#131212"
		image="/assets/images/black-snakeskin.jpg"
		imageSourceSet="/assets/images/black-snakeskin.jpg 1x, /assets/images/black-snakeskin@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<HomeSection
		title="Secure."
		description="Built on cryptography that doesn't ask you to trust anyone. Including us."
		color="#2B2422"
		image="/assets/images/alligator.jpg"
		imageSourceSet="/assets/images/alligator.jpg 1x, /assets/images/alligator@2x.jpg 2x"
		imageAlt=""
	/>

	<HomeSection
		title="Private."
		description="What you spend is your business. We don't see it. No one does."
		color="#302B24"
		image="/assets/images/venetian-mask.jpg"
		imageSourceSet="/assets/images/venetian-mask.jpg 1x, /assets/images/venetian-mask@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<TrySection />

	<SiteFooter />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use '@/assets/css/variables.scss' as variables;
@use '@/assets/css/mixins.scss' as mixins;
@use '@/assets/css/animations.scss' as animations;

.home-page {
	display: flex;
	flex-direction: column;
}

</style>
