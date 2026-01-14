<template>
  <section
  	:class="classObject" 
	:style="styleObject"
>
	<div class="content">
		<div class="image">
			<img
				:src="image"
				:srcset="imageSourceSet"
				:alt="imageAlt"
			>
		</div>
		<div class="copy">
			<h2>{{ title }}</h2>
			<p>{{ description }}</p>
		</div>
	</div>
  </section>
</template>

<script setup>

const props = defineProps([
	"title",
	"description",
	"image",
	"imageSourceSet",
	"imageAlt",
	"color",
	"flip"
])

const classObject = computed(() => {
	const c = ['home-section'];

	if(props.flip) {
		c.push('-flip');
	}

	return c;
})

const styleObject = computed(() => {
	return {
		backgroundColor: props.color
	}
})

</script>

<style lang="scss" scoped>

@use '@/assets/css/variables.scss' as variables;
@use '@/assets/css/mixins.scss' as mixins;
@use '@/assets/css/animations.scss' as animations;

.home-section {
	.content {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;

		.image {
			background-color: black;
			aspect-ratio: 1;
			line-height: 0;
		}

		.copy {
			h2 {
				font-size: 64px;
				line-height: 1;
				font-family: 'DM Serif Display';
				font-weight: 400;
				color: white;
			}

			p {
				margin-top: 20px;
				font-size: 24px;
				line-height: 1.4;
				color: white;
				opacity: 0.85;
			}
		}
	}

	@include mixins.media-query(small) {
		.content {
			.image {
				width: 100%;

				img {
					width: 100%;
				}
			}

			.copy {
				padding: 30px 20px 80px 20px;
			}
		}
	}

	@include mixins.media-query(medium-up) {
		.content {
			display: flex;	
			align-items: center;

			.image {
				width: 50%;
			}

			.copy {
				width: 50%;
			}
		}

		&:not(.-flip) {
			.content {
				.copy {
					padding-left: 60px;
				}
			}
		}

		&.-flip {
			.content {
				.image {
					order: 2;
				}

				.copy {
					padding-right: 60px;
				}
			}
		}
	}
}

</style>
