<template>
  <section class="site-footer" >
	<div class="content">
		<h2><NuxtLink to="/">Arké</NuxtLink></h2>
	</div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use '@/assets/css/variables.scss' as variables;
@use '@/assets/css/mixins.scss' as mixins;
@use '@/assets/css/animations.scss' as animations;

.site-footer {
	background-color: #170B00;
	align-self: stretch;

	.content {
		padding-left: 10px;
		padding-right: 10px;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		
		h2 {
			line-height: 1;
			font-family: 'DM Serif Display';

			a {
				color: #F8D175;
			}
		}
	}

	@include mixins.media-query(medium-down) {
		.content {
			padding-top: 250px;
			padding-bottom: 250px;

			h2 {
				font-size: 48px;
			}
		}
	}

	@include mixins.media-query(large) {
		.content {
			padding-top: 500px;
			padding-bottom: 500px;

			h2 {
				font-size: 67px;
			}
		}
	}
}

</style>
