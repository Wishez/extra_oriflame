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
			margin-top: $s77
			margin: $s77 auto 0
			@include breakpoint($md-less) 
				margin-top: 0
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

		&:hover, &:focus
			.programmItem__title		
				opacity: 1
	
		.progressive-image
			&-main, &-wrapper
				height: 100%;
			&-main
				position: relative
				display: block
		
		&__title
			position: absolute
			height: em(60.95)
			will-change: opacity
			transition: opacity .2s cubic-bezier(0.2, 0.0,0.4,1)
			padding: 0 1rem
			z-index: 2
			opacity: .7
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
				bottom: (351.64% / 1.618 * 100 / 351.64)
				min-width: (274.33% / 1.618  * 100 / 274.33)

			&_second
				bottom: (276.79% / 1.618 / 1.618 * 100 / 276.79)
				min-width: (301.35% / 1.618 * 100 / 301.35)
			&_first
			&_third
				min-width: 100%
				bottom: 0

			&_first, &_second, &_third
				@include breakpoint($xxs)
					min-width: em(203)
			&_fourthMan
				bottom: 24.28%


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