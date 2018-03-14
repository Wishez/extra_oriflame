<template>
	<article :class="{
		'sharePreview whiteBackground fewRound materialShadow h-arround parent column nowrap fourWithPadding': true,
		['sharePreview_' + modifier]: !!modifier, 
		[className]: !!className
	}">
		<internal-link class="darkenLink disableUnderline container" :to="url">
			<h2 class="sharePreview__title">{{ title }}</h2>
		</internal-link>
		<blurry-image-loader 
			v-if="image" 
			modifier="sharePreview" 
			:src="image" 
			relative
			:alt="title" />
		<div class="sharePreview__meta container">
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
	    	console.log(this.image);
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

<style lang="sass" scoped>
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'

	.imageContainer_sharePreview
		order: -1
		height: em(203)		
		.progressive-image
			&-wrapper
				will-change: transform
				transition: transform .3s ease-in
			&-wrapper, &-main
				height: 100% 

	.sharePreview
		// min-width: em(324)
		&:hover
			.progressive-image-wrapper
				transform: scale(1.1)
			&__title	

		&__title
		&__meta
		&__announce
</style>