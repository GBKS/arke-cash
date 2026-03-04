<template>
  <section class="site-map" >
	<nav>
		<NuxtLink to="/how">How it works</NuxtLink>
		<NuxtLink to="/how-technical">How the tech works</NuxtLink>
		<NuxtLink to="/roadmap">Roadmap</NuxtLink>
		<NuxtLink to="/design">Design</NuxtLink>
		<NuxtLink to="/open-source">Open Source</NuxtLink>
		<NuxtLink to="/ark">About Ark</NuxtLink>
		<a href="https://community.second.tech/t/arke-macos-prototype/156/7" target="_blank">Updates</a>
		<NuxtLink to="/faq">FAQ</NuxtLink>
		<NuxtLink to="/test">Test Guide</NuxtLink>
		<a href="https://github.com/gbks/arke" target="_blank">Code</a>
		<NuxtLink to="/privacy">Privacy Policy</NuxtLink>
		<NuxtLink to="/terms">Terms of Service</NuxtLink>
	</nav>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use '@/assets/css/variables.scss' as variables;
@use '@/assets/css/mixins.scss' as mixins;
@use '@/assets/css/animations.scss' as animations;

.site-map {
	background-color: #170B00;
	align-self: stretch;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 20px;

	nav {
		max-width: 800px;
		column-gap: 20px;
		width: 100%;
		
		a {
			display: block;
			break-inside: avoid;
			color: white;
			font-weight: 500;
			padding: 10px 0;
			border-bottom: 1px solid rgba(var(--goldRGB), 0.25);
			@include mixins.r('font-size', 14, 16);			
		}
	}

	@include mixins.media-query(large) {
		nav {
			column-count: 4;

			a {
				&:nth-child(3n) {
					border-width: 0;
				}
			}
		}
	}

	@include mixins.media-query(medium) {
		nav {
			column-count: 3;

			a {
				&:nth-child(4n) {
					border-width: 0;
				}
			}
		}
	}

	@include mixins.media-query(small) {
		nav {
			column-count: 2;

			a {
				&:nth-child(6n) {
					border-width: 0;
				}
			}
		}
	}
}

</style>
