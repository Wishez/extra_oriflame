f<template>
  <progressive-img
    :src="src"
    :placeholder="src"
    :class="{
      'imageContainer': true,
      ['imageContainer_' + modifier]: !!modifier,
      [className]: !!className,
      'imageContainer_relative': relative
    }" 
    :alt="alt ? alt : ''"
    no-ratio
  />
	
</template>

<script>
export default {
  name: "BlurryImageLoader",
  props: {
    modifier: {
      type: String,
      required: false,
      default: ""
    },
    relative: {
      type: Boolean,
      required: false,
      default: false
    },
    alt: {
      type: String,
      required: false,
      default: ""
    },
    src: {
      type: String,
      required: true
    },
    defaultMedia: {
      type: String,
      required: false,
      default: ""
    },
    className: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="sass">
	.imageContainer
		&_relative
			.progressive-image-main
				position: relative
				display: block
			.progressive-image-main, .progressive-image-wrapper
				height: 100%
				
	
</style>
