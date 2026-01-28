<template>
  <div class="screenshots-wrapper">
	<div class="screenshots">
		<figure v-for="(image, index) in images" :key="index">
			<img
				:src="`/assets/images/test/${image}.jpg`"
				:alt="alts.length >= index ? alts[index] : ''"
			/>
			<figcaption v-if="captions && captions.length >= index">{{ captions[index] }}</figcaption>
		</figure>
	</div>
  </div>
</template>

<script setup>

const props = defineProps([
	'images',
	'alts',
	'captions'
])

</script>

<style lang="scss" scoped>

@use '@/assets/css/variables.scss' as variables;
@use '@/assets/css/mixins.scss' as mixins;
@use '@/assets/css/animations.scss' as animations;

.screenshots-wrapper {
	overflow-x: auto;
	display: flex;
	justify-content: safe center;
	width: 100vw;
	margin-left: calc(-50vw + 50%);
	// padding: 0 20px;
	box-sizing: border-box;
}

.screenshots {
	display: flex;
	gap: 20px;
	width: fit-content;
	padding-top: 40px;
	padding-bottom: 40px;

	figure {
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;

		img {
			width: 250px;
			height: auto;
			line-height: 0;
			border-radius: 35px;
			border: 1px solid rgba(black, 0.1);
		}

		figcaption {
			color: #606060;
			font-weight: 500;
			font-size: 16px;
			max-width: 250px;
			text-align: center;
			word-wrap: break-word;
		}

		&:first-child {
			padding-left: 15px;
		}

		&:last-child {
			padding-right: 15px;
		}
	}
	
	@include mixins.media-query(small) {
		
	}
	
	@include mixins.media-query(medium-up) {
		
	}
}

</style>
