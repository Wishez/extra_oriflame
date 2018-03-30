<template>	
	<article class="about materialShadow fewRound whiteBackground">
		<h2 :class="['about__title', modifier ? 'about__title_' + modifier : '']">{{ title }}</h2>
		<p :class="['about__paragraph', modifier ? 'about__paragraph_' + modifier : '']"
			v-html="paragraph"
		/>
		<slot></slot>
	</article>
</template>

<script>
	export default {
		name: "AboutItem",
		props: {
			title: {
				type: String,
				required: true
			},
			paragraph: {
				type: String,
				required: true
			},
			modifier: {
				type: String,
				required: false
			},
			className: {
				type: String,
				required: false
			}
		}
	};
</script>

<style lang="sass">
	@import './../styles/conf/_helpers.sass'
	@import './../styles/conf/_breakpoints.sass'
	@import './../styles/conf/_sizes.sass'
	$i: !important

	.about
		max-width: em(523)
		margin-bottom: $s29
		padding-bottom: $s47 $i
		border-left: 8px solid #941857;
				
		@include breakpoint($sm-less)
			max-width: calc(50% - #{29.127px / 2});
		@include breakpoint($xxs)
			max-width: none
		&__title
			margin-left: -4px

	
</style>