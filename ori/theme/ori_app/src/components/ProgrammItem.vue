<template>
	<div @mousemove="onHoverItem" v-tooltip.top="{ html: tooltipId  }"
		:class="['programmItem materialSadow', name ? 'programmItem_' + name : null]">

		<p :class="['whiteBackground parent centered programmItem__title materialSadow', titleModifier ? 'programmItem__title_' + titleModifier : 'programmItem__title_left', 'programmItem__title_' + name]">{{ title }}</p>
		<blurry-image-loader 
			:src="src" 
			modifier="programmItem"
			className="materialShadow programmItem__image"
		 />
		
		<article :id="tooltipId" class="programmItemDescription">
			<h2>{{ title }}</h2>
			<p>{{ stepDescription.paragraph }}</p>
			<ul>
				<li :key="item.id" v-for="item in stepDescription.items">
					{{ item.name }}
				</li>
			</ul>
		</article>

		
	</div>
</template>

<script>
	import BlurryImageLoader from './../templates/BlurryImageLoader';
	import {timeout} from './../constants/pureFunctions';

	export default {
		name: "ProgrammItem",
		components: {
			BlurryImageLoader
		},
		data() {
			return {
			
			};
		},
		mounted: function() {
			timeout(() => {
				this.tooltip = document.getElementById(
						this.tooltipId
				).parentNode.parentNode;
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
					// if (event.clientY - tooltipHeight < windowHeight) {
					// 	y = 0;
						// if (event.clientX - tooltipWidth < 0) {
						// 	x = tooltipWidth / 2 + 18;
						// }
						// // } else {

						// // }
						 
					if (windowHeight / 2 < event.clientY) {
						y =  tooltipHeight + 18;
						this.tooltip.setAttribute('x-placement', 'top')
					} else {
						y -= 18;
					}
					
					
					return y;
				};
				return event => {				
					const proportions = this.tooltip.getBoundingClientRect();
					event.stopPropagation();
			  		console.log(event)
		  			this.tooltip.style.transform = `translate3d(${event.pageX - (proportions.width / 2)}px, ${event.pageY - showUpOrBottom(event, proportions.height)}px, 0px)`

		  		};
				
			}
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

	.programmItem
		position: relative
		cursor: pointer

		&_first, &_second	
			height: em(240)
			min-width: em(240)

		&[class*="fourth"]
			height: em(393.72)
		&_first
			// @inlcude breakpoint($xs-up)
			order: 1
		&_second
			// @inlcude breakpoint($xs-up)
			order: 2
		&_third
			min-width: em(554.88)
			height: em(554.51)
			transform: translateY(-#{$s77})
			// @inlcude breakpoint($xs-up)
			order: 4
		&_fourthWooman, &_fourthMan
			min-width: em(406.59)
			height: em(393.72)

		&_fourthWooman
			// @inlcude breakpoint($xs-up)
			order: 5
			margin-top: $s77
		&_fourthMan
			// @inlcude breakpoint($xs-up)
			order: 3

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
		.progressive-image-main
			position: relative

		&__title
			position: absolute
			min-height: em(60.95)
			
			padding: 0 1rem
			z-index: 2
			&_left
				box-shadow: 3px 1px 6px 0 $shadow
				left: 0
			&_right
				box-shadow: -3px 1px 6px 0 $shadow
				right: 0
			&_first, &_second
				bottom: 23.5%
				min-height: 
			
			&_third
				min-width: em(342.94)
				bottom: 21.12%
			&_fourthWooman, &_fourthMan
				min-width: 100%
				bottom: 24.28%

		
</style>