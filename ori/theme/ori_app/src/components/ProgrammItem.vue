<template>
	<popper transition="1000" :class="['programmItemContainer programmItem_' + name]" trigger="hover"
		enter-active-class="fading-enter"
		leave-active-class="fading-leave">
		<base-tooltip 
			:id="tooltipId"
			:title="title"
		>
			<p v-html="stepDescription.paragraph"/>
			<ul class="programmItemDescriptionBenifits">
				<li class="light" :key="item.id" v-for="item in stepDescription.items">
					{{ item.name }}
				</li>
			</ul>
		</base-tooltip>
		<tooltip-item-container 
			:tooltipId="tooltipId"
			className="programmItem materialSadow"
			slot="reference"
		>

			<p :class="['whiteBackground parent centered programmItem__title materialSadow', titleModifier ? 'programmItem__title_' + titleModifier : 'programmItem__title_left', 'programmItem__title_' + name]">{{ title }}</p>
			<blurry-image-loader 
				:src="src" 
				modifier="programmItem"
				className="materialShadow programmItem__image"
			 />
		</tooltip-item-container>
	</popper>
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
					return  value.paragraph &&
						(Array.isArray(value.items) && 
							value.items.length > 0); 
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

	$additionalPadding: $s77 / 2 

	.fading
		&-enter
			opacity: 0
		&-enter-to
			transition: opacity 1s ease
			opacity: 1
			will-change: opacity
		&-enter, &-enter-to, &-leave, &-leave-to
			will-change: opacity
		&-leave, &-leave-to
			z-index: 100
			opacity: 0


	.programmItem
		position: relative
		cursor: pointer
		height: 100%
		

		&_first, &_second	
			height: em(240)
			@include breakpoint($sm-less)
				height: em(341)

		&[class*="fourth"]
			height: em(393.72)
		&_first
			// @inlcude breakpoint($xs-up)
			order: 1
		&_second
			// @inlcude breakpoint($xs-up)
			order: 2
		&_third
			min-width: em(560) + $s77 - em(2) $i
			height: em(520)
			& .progressive-image
				max-height: em(520)
			margin-top: -#{$s77 + $s6}
			order: 4
			@include breakpoint($md)
				$thidBlockWidth: 233.66 * 2
				min-width: em($thidBlockWidth) + ($s77 * 2) $i
			@include breakpoint($sm-less)
				// margin-top: 0
				order: 3
			@include breakpoint($xs)
				min-width: 100% $i

		&_fourthWooman, &_fourthMan
			min-width: em(406.59) + $additionalPadding $i
			height: em(393.72)
		&_first,
		&_second, 
		&_fourthWooman, 
		&_fourthMan
			@include breakpoint($sm-less)
				min-width: em(341) + ($s77 / 2) $i
			@include breakpoint($xs)
				min-width: em(327) $i


		&_fourthWooman
			// @inlcude breakpoint($xs-up)
			order: 5
			margin-top: $s77
		&_fourthMan
			order: 3
		
		&_fourthMan, &_third
			@include breakpoint($sm-less)
				margin-top: $s77

		&:hover
			.imageContainer_programmItem
				filter: blur(0)	
			.programmItem__title		
				filter: blur(2px)	
		.imageContainer_programmItem
			filter: blur(2px)
		.imageContainer_programmItem, &__title
			will-change: filter
			transition: filter .3s ease-in
		.progressive-image
			&-main, &-wrapper
				height: 100%;
			&-main
				position: relative
				display: block
		
		&__title
			position: absolute
			height: em(60.95)
			
			padding: 0 1rem
			z-index: 2
			&_left
				box-shadow: 3px 1px 6px 0 $shadow
				left: 0
			&_right
				box-shadow: -3px 1px 6px 0 $shadow
				right: 0
			&_center
				box-shadow: 0px 6px 6px -5px $shadow
				min-width: 100%
			&_first, &_second
				bottom: 23.5%
				min-width: em(147.82)
				@include breakpoint($sm-less)
					min-width: em(210.75)
			&_third
				min-width: em(342.94)

				bottom: 21.12%
				@include breakpoint($sm-less) 
					min-width: em(417.82)

			&_first, &_second, &_third
				@include breakpoint($xxs)
					min-width: em(203)
			&_fourthWooman, &_fourthMan
				bottom: 24.28%

	.programmItemContainer
		flex: 1 0 25%
		min-width: em(240) + ($s77 / 2)
		padding: 0 $s77 / 2
		@include breakpoint($sm-less)
			height: auto
			min-height: em(273)
		@include breakpoint($xs)
			padding: 0
			margin-top: em(33)
		&:not(.programmItem_third)
			@include breakpoint($xs)
				min-width: auto $i
				max-width: calc(50% - #{$s18}) $i
		&[class*="programmItem_"]
			@include breakpoint($xxs)
				min-width: 100% $i

				max-width: none $i
				min-height: em(240) + ($s77 / 2)
				margin-top: 0
				margin-bottom: 	$s47
</style>