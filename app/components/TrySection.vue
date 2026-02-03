<template>
  <section class="try-section" >
	<div class="content">
		<div class="video">
			<video 
				src="/assets/videos/puppy-male.mp4" 
				autoplay 
				muted 
				loop 
				playsinline
			></video>
		</div>
		<div class="copy">
			<h2>Start using it</h2>
			<p>Arké is currently in early development. For now, you'll have to compile the <a href="https://github.com/gbks/arke" target="_blank">code</a> yourself. A TestFlight version is being pondered.</p>

			<a href="https://tally.so/r/9qQJQ5" class="button -primary -large" target="_blank">Join the Waitlist</a>
		</div>
	</div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use '@/assets/css/variables.scss' as variables;
@use '@/assets/css/mixins.scss' as mixins;
@use '@/assets/css/animations.scss' as animations;

.try-section {
	background-color: #5E5E5E;
	align-self: stretch;

	.content {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;

		.video {
			max-width: 600px;
			border-radius: 25px;

			video {
				width: 100%;
				height: auto;
				display: block;
			}
		}

		.copy {
			h2 {
				font-size: 64px;
				font-family: 'DM Serif Display';
				color: white;
			}

			p {
				font-size: 24px;
				color: white;
				opacity: 0.85;

				a {
					color: white;
					text-decoration: underline;
				}
			}
			> a {
				margin-top: 30px;
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
