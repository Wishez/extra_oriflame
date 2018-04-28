<template>
	<div :class="['programmItemContainer programmItem_' + name]" 
		enter-active-class="fading-enter"
		leave-active-class="fading-leave">

		
	<!-- 	<base-tooltip 
			:id="tooltipId"
			:title="title"
		>
		</base-tooltip> -->
		<tooltip-item-container 
			:tooltipId="tooltipId"
			className="programmItem materialSadow"
			slot="reference"
		>

			<h2 :class="['whiteBackground parent centered programmItem__title materialSadow font-size_base font-family_main itemContent', titleModifier ? 'programmItem__title_' + titleModifier : 'programmItem__title_left', 'programmItem__title_' + name]">
				{{ title }}
			</h2>

			<blurry-image-loader 
				:src="src" 
				modifier="programmItem"
				className="materialShadow programmItem__image"
			 />
			<p v-html="stepDescription.paragraph"
				:class="{
					'fewRound programmItemDescription whiteBackground marginTop_zero itemContent': true,
					[`programmItemDescription_${name}`]: name
			}"/>
			 <!-- <article 
				:class="{
					'fewRound materialShadow absolute programmItemDescription whiteBackground ': true
			}"> -->
				<!-- <div :class="{
					'italic baseTooltipContent marginTop_18': true
				}"> -->
					
				<!-- </div> -->
			<!-- </article>	 -->
		</tooltip-item-container>
	</div>
</template>

<script>
	import BlurryImageLoader from './BlurryImageLoader';
	import TooltipItemContainer from './TooltipItemContainer';
	import BaseTooltip from './BaseTooltip';

	import Popper from 'vue-popperjs';

	export default {
		name: "ProgrammItem",
		components: {
			BlurryImageLoader,
			"popper": Popper,
			TooltipItemContainer,
			BaseTooltip
		},
		computed: {
			tooltipId: function() {
				return 'tooltip_' + this.name;
			},
		},
		
		props: {
			className: {
				type: String,
				required: false
			},
			title: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			titleModifier: {
				type: String,
				required: false
			},
			src: {
				type: String,
				required: true
			},
			stepDescription: {
				type: Object,
				required: true,
				validator(value) {
					// The Validation of three values of the object.
					// &&
						// (Array.isArray(value.items) && 
						// 	value.items.length > 0); 
					return  value.paragraph;
				}
			}
		},
	}
</script>

<style lang='sass'>
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_fonts.sass'
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_breakpoints.sass'
	@import './../styles/conf/_animations.sass'

	$additionalPadding: $s77 / 2 

	// .fading
	// 	&-enter
	// 		opacity: 0
	// 	&-enter-to
	// 		transition: opacity 1s ease
	// 		opacity: 1
	// 		will-change: opacity
	// 	&-enter, &-enter-to, &-leave, &-leave-to
	// 		will-change: opacity
	// 	&-leave, &-leave-to
	// 		z-index: 100
	// 		opacity: 0


	.programmItem
		position: relative

		@include breakpoint($xs)
			box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.2)

		&_second
			min-width: 35%;
			margin-top: $s77
			@include breakpoint($xs)
				display: flex;
				align-items: flex-end
		&_third
			margin-top: $s77 * 1.618
			

			& .progressive-image

			@include breakpoint($md)
				$thidBlockWidth: 233.66 * 2
				margin-top: $s77 + $s6
				min-width: em($thidBlockWidth) + ($s77 * 2) $i
			

		&_fourthMan, &_third
			@include breakpoint($xs)
				min-width: 100% $i
		&_fourthMan

			max-width: 67%
			margin-left: auto
			margin-top: ($s77 + em(64))
			margin: $s77 auto 0

			@include breakpoint($md-less) 
				margin-top: em(64)

			@include breakpoint($xs)
				max-width: none $i

		&_first,
		&_second, 
		&_fourthMan
			@include breakpoint($sm-less)
				min-width: em(341) + ($s77 / 2) $i
			@include breakpoint($xs)
				min-width: em(327) $i
		

		// &_fourthWooman
		// 	margin-top: $s77

		&_fourthMan, &_third
			@include breakpoint($sm-less)
				margin-top: $s77
		&_fourthMan
			@include breakpoint($xxs)

		&:hover, &:focus
			.itemContent		
				opacity: 1
	
		.progressive-image
			&-main, &-wrapper
				height: 100%;
			&-main
				position: relative
				display: block
		
		&__title
			// position: absolute
			// opacity: .7
			// will-change: opacity
			// transition: opacity .2s $standart

			z-index: 2
			height: em(60.95)
			padding: 0 1rem

			bottom: (351.64% / 1.618 * 100 / 351.64)

			&_left
				box-shadow: 3px 1px 6px 0 $shadow
				left: 0

			&_right
				box-shadow: -3px 1px 6px 0 $shadow
				right: 0

			&_center
				box-shadow: 0px 6px 6px -5px $shadow
				min-width: 100%
			&_first
				min-width: (274.33% / 1.618  * 100 / 274.33)

			&_second
				top: 0
				@include breakpoint($md-up)
				min-width: (301.35% / 1.618 * 100 / 301.35)
				@include breakpoint($xs)
					// bottom: (276.79% / 1.618  * 100 / 276.79)
					top: auto

			&_first

			&_third
				@include breakpoint($md-up)
					bottom: 100%

				min-width: 100%

				@include breakpoint($xs)
					// bottom: (276.79% / 1.618 * 100 / 276.79)
					
				// bottom: 0

			&_first, &_second, &_third
				@include breakpoint($xxs)
					min-width: em(203)

			&_fourthMan
				
				@include breakpoint($md-less)
					bottom: 100%

			@include breakpoint($xs)
				bottom: (276.79% / 1.618  * 100 / 276.79)
			&_fourthMan
				@include breakpoint($xxs)
					top: 0
					bottom: auto


	.itemContent
		position: absolute
		opacity: .7
		will-change: opacity
		transition: opacity .2s $standart
		z-index: 2

	.programmItemDescription
		padding: 1rem 1rem 1.618rem 1.618rem
		width: 100%
		
		bottom: 0
		border-bottom: $s6 solid $darkenGreen
		max-height: 100%
		font-size: 16px

		@include breakpoint($xs)
			position: relative
			font-size: 1rem
			border-top-right-radius: 0
			border-top-left-radius: 0
			box-shadow: none


	.programmItemContainer
		flex: 1 0 25%
		padding: 0 $s77 / 2

		@include breakpoint($sm-less)
			height: auto

		@include breakpoint($xs)
			padding: 0
			margin-top: em(33)


		&:not(.programmItem_third)
			@include breakpoint($xs)
				min-width: auto $i
				max-width: calc(50% - #{$s18})
		
		&[class*="programmItem_"]
			@include breakpoint($xxs)
				min-width: 100% $i
				max-width: none $i
				margin-top: 0

			&:not(:last-of-type)
				@include breakpoint($xxs)
					margin-bottom: 	$s47

</style>