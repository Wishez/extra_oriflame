<template>
	<article :id="id" 
		:class="{
			'baseTooltip popper fewRound materialShadow': true,
			[className]: className,
			[`baseTooltip_${modifier}`]: modifier
		}">
			<h2 :class="{
				'italic baseTooltip__title': true,
				[`baseTooltip__title_${modifier}`]: modifier
			}" >
				{{ title }}
			</h2>
			<div :class="{
				'italic baseTooltipContent': true,
				[`baseTooltipContent_${modifier}`]: modifier
			}">
				<slot />
			</div>
	</article>
</template>

<script>
	export default {
		name: "BaseTooltip",
		props: {
			className: {
				type: String,
				required: false,
				default: null
			},
			modifier: {
				type: String,
				required: false,
			},
			title: {
				type: String,
				required: true,
			},
			id: {
				type: String,
				required: true,
			},
			modifier: {
				type: String,
				required: false
			}
		},

	};
</script>

<style lang="sass">
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_fonts.sass'
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_breakpoints.sass'

	
	.baseTooltip 
		background-color: $pink
		text-align: left
		border: 0
		font-size: em(18, 16)
		padding: $s18 $s18 $s29
		max-width: em(346.1)
		@include breakpoint($xxs)
			width: 90vw
			max-height: 55vh
		&.popper
			border: 0 solid $burgund
			&[x-placement^="left"]
				border-left-width: $s6
				.popper__arrow
					border-width: 18px 0 18px 18px
					border-color: transparent transparent transparent $pink
			&[x-placement^="right"]
				border-right-width: $s11
				.popper__arrow
					border-width: 18px 18px 18px 0
					border-color: transparent $pink transparent transparent 
			&[x-placement^="bottom"]
				border-bottom-width: 6.8756770631996956367px
				.popper__arrow
					top: -18px
					border-width: 0 18px 18px 18px
					border-color: transparent transparent $pink transparent
			&[x-placement^="top"]
				border-top-width: $s6
				.popper__arrow
					bottom: -18px
					border-width: 18px 18px 0 18px
					border-color: $pink transparent transparent transparent 
		&Content
			overflow: auto
			max-height: em(213.90605686032138442522) - $s77
			margin-top: $s29
			padding-right: $s18
			p
				margin-top: 0
		&__title
			font-size: $s25
			letter-spacing: .1em

</style>