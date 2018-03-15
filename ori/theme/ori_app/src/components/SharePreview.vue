<template>
	<article :class="{
		'sharePreview whiteBackground fewRound materialShadow parent column nowrap fourWithPadding': true,
		['sharePreview_' + modifier]: !!modifier, 
		[className]: !!className
	}">
		<h2 class="fullWidth sharePreview__title container">
			<internal-link class="darkenLink sharePreview__title_link disableUnderline disableLinkHover" :to="url">
				{{ title }}
			</internal-link>
		</h2>
		<blurry-image-loader 
			v-if="image" 
			modifier="sharePreview" 
			:src="image" 
			relative
			:alt="title" />
		<div class="sharePreview__meta container fullWidth">
			<time :datetime="published">{{ published }}</time>
		</div>
		<p class="cropedText cropedText_6 sharePreview__announce container" v-html="announce" />
	</article>
</template>

<script>
	import BlurryImageLoader from './BlurryImageLoader';
	import InternalLink from './InternalLink';
	import siteApi from '@/constants/conf';

	export default {
		name: "SharePreview",
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
			published: {
				required: true,
				validator: function(value) {
					return value === null || typeof value === 'string';
				}
			},
			announce: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
			image: {
				required: true,
				validator: function(value) {
					return value === null || typeof value === 'string';
				}
			},
		},
  	    components: {
  	    	BlurryImageLoader,
  	    	InternalLink
	    },
	    mixins: [],
	    data: () => ({
	    	
	    }),
	    beforeCreate() {
	    },
	    created() {
	    	
	    },
	    beforeMount () {
	    },
	    mounted() {
	    },
	    computed: {
	    },
	    methods: {
	    },
	    beforeUpdate() {
	    },
	    updated() {
	    },
	    beforeDestroy() {
	    }
	};
</script>

<style lang="sass">
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'

	.imageContainer_sharePreview
		order: -1
		height: em(203)		
		.progressive-image-main
			will-change: transform
			transition: transform .3s ease-in
			&-wrapper
		// 	&-wrapper, &-main
		// 		height: 100% 

	
	.sharePreview
		cursor: pointer
		// min-width: em(324)
		padding-bottom: $s47
		
		// &:nth-of-type(6), &:nth-of-type(5)
			// background-color: $darkGray
			// color: $white
			// @include breakpoint($md-up)
			// 	max-width: calc(66.66666666666666666667% - #{$s29 / 2});
			// 	flex-grow: 1
			// 	min-width: 50%

		@include breakpoint($sm-less)
			min-width: calc(50% - #{$s47/2})
		&:nth-of-type(6)
			// @include breakpoint($sm-less)
			// 	flex-grow: 1
			// 	max-width: calc(50% - #{$s47/2})
		// &:nth-of-type(7)
		// 	@include breakpoint($sm-less)
		// 		flex-grow: 1
		// 		margin-left: auto
		// 		margin-right: auto
		// 		min-width: calc(75% - #{$s47/2})

		@include breakpoint($xs)
			min-width: calc(50% - #{$s29/2})

		// &:nth-last-child(3n-1)
		// 	@include breakpoint($xs)
		// 		min-width: 100%
		@include breakpoint($xxs)
			min-width: 100%
		&:hover 
			.progressive-image-main
				transform: scale(1.04)
			.sharePreview__title_link
				color:  lighten($burgund, 5%) $i

		&__title
			margin-top: $s18
		&__meta
			margin-top: $s18
			color: #9E9E9E
			text-align: left
		&__announce
</style>