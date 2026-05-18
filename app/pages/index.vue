<template>
  <div class="page home-page">
	<HomeBanner />

	<SiteMap />

	<HomeSection
		title="Yours."
		description="Your keys. Your phone. Your bitcoin. That's the whole arrangement."
		color="#231610"
		image="/assets/images/bright-beige-2.jpg"
		imageSourceSet="/assets/images/bright-beige-2.jpg 1x, /assets/images/bright-beige-2@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<HomeSection
		title="No middlemen."
		description="You send it. They receive it. No bank in between, no approval, no waiting."
		color="#1A1205"
		image="/assets/images/mushrooms.jpg"
		imageSourceSet="/assets/images/mushrooms.jpg 1x, /assets/images/mushrooms@2x.jpg 2x"
		imageAlt=""
	/>

	<HomeSection
		title="Instant."
		description="Payments settle in seconds. This is what bitcoin is supposed to feel like."
		color="#0F151B"
		image="/assets/images/picnic-blanket.jpg"
		imageSourceSet="/assets/images/picnic-blanket.jpg 1x, /assets/images/picnic-blanket@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<HomeSection
		title="One tap."
		description="Pay anyone who accepts bitcoin. As simple as it sounds."
		color="#1B120A"
		image="/assets/images/tilt.jpg"
		imageSourceSet="/assets/images/tilt.jpg 1x, /assets/images/tilt@2x.jpg 2x"
		imageAlt=""
	/>

	<HomeSection
		title="Recoverable."
		description="Phone gone? Bitcoin isn't. Back up once, restore anywhere."
		color="#19170C"
		image="/assets/images/byte.jpg"
		imageSourceSet="/assets/images/byte.jpg 1x, /assets/images/byte@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<HomeSection
		title="Everyday."
		description="Coffee. Flights. Rent. Whatever you're buying, it comes with you."
		color="#1B0C05"
		image="/assets/images/book.jpg"
		imageSourceSet="/assets/images/book.jpg 1x, /assets/images/book@2x.jpg 2x"
		imageAlt=""
	/>

	<HomeSection
		title="Dark mode."
		description="Obviously."
		color="#0E170B"
		image="/assets/images/pigeon.jpg"
		imageSourceSet="/assets/images/pigeon.jpg 1x, /assets/images/pigeon@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<HomeSection
		title="Secure."
		description="Built on cryptography that doesn't ask you to trust anyone. Including us."
		color="#161503"
		image="/assets/images/tulips.jpg"
		imageSourceSet="/assets/images/tulips.jpg 1x, /assets/images/tulips@2x.jpg 2x"
		imageAlt=""
	/>

	<HomeSection
		title="Private."
		description="What you spend is your business. We don't see it. No one does."
		color="#221110"
		image="/assets/images/shades.jpg"
		imageSourceSet="/assets/images/shades.jpg 1x, /assets/images/shades@2x.jpg 2x"
		imageAlt=""
		:flip="true"
	/>

	<TrySection />

	<SiteFooter />

	<SiteMap />
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
