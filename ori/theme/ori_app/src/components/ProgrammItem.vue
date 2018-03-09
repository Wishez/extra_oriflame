<template>
	<popper :class="['programmItemContainer programmItem_' + name]" trigger="hover"
		enter-active-class="fading-active"
		leave-active-class="fading-leave">
		
		<article  :id="tooltipId" class="programmItemDescription popper fewRound materialShadow">
			<h2 class="italic programmItemDescription__title" >{{ title }}</h2>
			<div class="programmItemDescriptionContent">
				
				<p>{{ stepDescription.paragraph }}</p>
				<ul class="programmItemDescriptionBenifits">
					<li class="" :key="item.id" v-for="item in stepDescription.items">
						{{ item.name }}
					</li>
				</ul>
			</div>
		</article>

		<div @mousemove="onHoverItem"
		 slot="reference" 
			:class="['programmItem materialSadow']">

			<p :class="['whiteBackground parent centered programmItem__title materialSadow', titleModifier ? 'programmItem__title_' + titleModifier : 'programmItem__title_left', 'programmItem__title_' + name]">{{ title }}</p>
			<blurry-image-loader 
				:src="src" 
				modifier="programmItem"
				className="materialShadow programmItem__image"
			 />
		</div>

	</popper>
</template>

<script>
	import BlurryImageLoader from './../templates/BlurryImageLoader';
	import {timeout, listen} from './../constants/pureFunctions';
	import anime from 'animejs';
	import Popper from 'vue-popperjs';

	export default {
		name: "ProgrammItem",
		components: {
			BlurryImageLoader,
			"popper": Popper
		},
		data() {
			return {
				// isScreenScrolled: document.documentElement.scrollTop > 80 || document.body > 80; 
			};
		},
		mounted: function() {

			// liets
			// window.addEventListener('scroll', (event) => {
			// 	if (!this.isScreenScrolled && ) {
			// 		this.isScreenScrolled  = '';
			// 	}

			// });
			timeout(() => {
				this.tooltip = document.getElementById(
						this.tooltipId
				);
			  	
			}, 2000);
		},
		computed: {
			tooltipId: function() {
				return 'tooltip_' + this.name;
			},
			
			onHoverItem: function() {
				const showUpOrBottom = (event, tooltipHeight, tooltipWidth) => {
					const windowHeight = window.innerHeight;
					const windowWidth = window.innerWidth;
					// let additionalValue = 0;
					// let x = 0;
					let y = 0;
					let place = 'top';
						 
					if (windowHeight / 2 < event.clientY) {
						y =  tooltipHeight + 18 + 11.12484548825710754017;
					} else {
						place = 'bottom';
						y -= 18 + 11.12484548825710754017 //6.8756770631996956367;
					}
					
					this.tooltip.setAttribute('x-placement', place);
					return y;
				};
				return event => {				
					const proportions = this.tooltip.getBoundingClientRect();
					event.stopPropagation();

					anime({
			  			targets: this.tooltip,
			  			translateX: event.pageX - (proportions.width / 2),
			  			translateY: event.pageY - showUpOrBottom(event, proportions.height),
			  			elasticity: 200,
			  			duration: 1500
			  		});
		  		};
				
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
		}
	}
</script>

<style lang='sass'>
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_fonts.sass'
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_breakpoints.sass'

	$additionalPadding: $s77 / 2 

	.fading
		&-active
			opacity: 1
			z-index: 100
			transition: opacity .3s ease-in
			will-change: opacity

		&-leave
			opacity: 0
			will-change: opacity
			transition: opacity .3s ease-in


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
			height: em(554.51)
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
		
	.programmItemDescriptionBenifits
		font-weight: 200
	.programmItemDescription 
		background-color: $pink
		text-align: left
		border: 0
		font-size: em(18, 16)
		padding: $s18 $s18 $s29
		max-width: em(346.1)
		@include breakpoint($xxs)
			width: 90vw
			max-height: 55vh
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

		

</style>