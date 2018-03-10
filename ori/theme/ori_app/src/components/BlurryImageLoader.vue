<template>
		<progressive-img
		  :src="src"
		  :placeholder="src"
		  :class="['imageContainer', modifier  ? 'imageContainer_' + modifier : '', className ? className : '']" 
		  :alt="alt ?  alt : ''"
		  no-ratio
		/>
	
</template>

<script>
	export default {
		name: 'BlurryImageLoader',
		props: {
			modifier: {
				type: String,
				required: false
			},
			alt: {
				type: String,
				required: false
			},
			src: {
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