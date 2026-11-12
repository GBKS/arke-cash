<template>
  <section class="site-map" >
	<nav>
		<NuxtLink to="/how">How it works</NuxtLink>
		<NuxtLink to="/how-technical">How the tech works</NuxtLink>
		<NuxtLink to="/roadmap">Roadmap</NuxtLink>
		<NuxtLink to="/design">Design</NuxtLink>
		<NuxtLink to="/open-source">Open Source</NuxtLink>
		<NuxtLink to="/ark">About Ark</NuxtLink>
		<a href="https://servers.arke.cash" target="_blank">Ark servers</a>
		<a href="https://gbks.substack.com" target="_blank">Updates</a>
		<a href="https://discord.gg/THhNW5H26H" target="_blank">Discord</a>
		<NuxtLink to="/faq">FAQ</NuxtLink>
		<NuxtLink to="/test">Test Guide</NuxtLink>
		<div class="pair"><NuxtLink to="/terms-and-conditions">Terms</NuxtLink> &amp; <NuxtLink to="/privacy-policy">Privacy</NuxtLink></div>
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
		
		> a, > .pair {
			display: block;
			break-inside: avoid;
			color: white;
			font-weight: 500;
			padding: 10px 0;
			border-bottom: 1px solid rgba(var(--goldRGB), 0.25);
			@include mixins.r('font-size', 14, 16);			
		}

		.pair a {
			color: inherit;
		}
	}

	@include mixins.media-query(large) {
		nav {
			column-count: 4;

			> * {
				&:nth-child(3n) {
					border-width: 0;
				}
			}
		}
	}

	@include mixins.media-query(medium) {
		nav {
			column-count: 3;

			> * {
				&:nth-child(4n) {
					border-width: 0;
				}
			}
		}
	}

	@include mixins.media-query(small) {
		nav {
			column-count: 2;

			> * {
				&:nth-child(6n) {
					border-width: 0;
				}
			}
		}
	}
}

</style>
