<template>
	<picture :class="['imageContainer', modifier  ? 'imageContainer_' + modifier : '']">
		<source :srcset="imageSrc" :media="defaultMedia ? defaultMedia : 'all'"/>
		<slot></slot>
		<img :class="['imageContainer__image', modifier  ? 'imageContainer__image_' + modifier : '', className ? className : '']" 
			v-lazy="imageSrc" 
			:alt="alt ?  alt : ''"
		>
	</picture>
</template>

<script>
	export default {
		name: 'BlurryImageLoader',
		data() {
			return {
		      imageSrc: this.smallSrc
		    }
		},
		props: {
			modifier: {
				type: String,
				required: false
			},
			alt: {
				type: String,
				required: false
			},
			smallSrc: {
				type: String,
				required: true
			},
			defaultMedia: {
				type: String,
				required: false
			},
			className: {
				type: String,
				required: false
			},
		}
	};
</script>