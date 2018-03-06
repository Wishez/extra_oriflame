<template>
	<div v-tooltip="{ html: 'tooltip_' + name }"
		:class="['programmItem materialSadow', name ? 'programmItem_' + name : null]">

		<h2 :class="['parent centered programmItem__title materialSadow', titleModifier ? 'programmItem__title_' + titleModifier : 'programmItem__title_left', 'programmItem__title_' + name]">{{ title }}</h2>
		<blurry-image-loader 
			:smallSrc="src" 
			modifier="programmItem"
			className="materialShadow programmItem__image"
		 />
		
		<article :id="['tooltip_' + name]" class="programmItemDescription">
			<h3>{{ stepDescription.title }}</h3>
			<p>{{ stepDescription.paragraph }}</p>
			<ul>
				<li v-for="itemName in stepDescription.items">
					{{ itemName }}
				</li>
			</ul>
		</article>

		
	</div>
</template>

<script>
	// import firstStepImage from './../assets/images/programm/first.png'
	// import secondStepImage from './../assets/images/programm/second.png'
	// import thirdStepImage from './../assets/images/programm/third.png'
	// import fourthWoomanStepImage from './../assets/images/programm/fourth_wooman.png'
	// import fourthManStepImage from './../assets/images/programm/fourth_man.png.png'
 // {
	// 			firstStepImage,
	// 			secondStepImage,
	// 			thirdStepImage,
	// 			fourthWoomanStepImage,
	// 			fourthManStepImage

	// 		};
	import BlurryImageLoader from './../templates/BlurryImageLoader'
	export default {
		name: "ProgrammItem",
		components: {
			BlurryImageLoader
		},
		data() {
			return{};
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
			stepDescription: {
				type: Object,
				required: true,
				validator(value) {
					// The Validation of three values of the object.
					return value.title && 
						value.paragraph &&
						(Array.isArray(value.items) && 
							value.items.length > 0); 
				}
			}
		}
	}
</script>

<style lang="sass">
 	@import './../styles/conf/_colors.sass'

	.programmItem
		position: relative
		

		&__title
			position: absolute
			min-height: 
			padding: 0 1rem
			&_left
				box-shadow: 3px 1px 6px 0 $shadow
				left: 0
			&_right
				box-shadow: 3px -1px 6px 0 $shadow
				right: 0
			&_first, &_second
				bottom: 23.5%
			&_second
			&_third
				bottom: 21.12%
			&_fourthWooman, &_fourthMan
				bottom: 24.28%
		&_first
		&_second
		&_third
		&_fourthWooman
		&_fourthMan
	
</style>