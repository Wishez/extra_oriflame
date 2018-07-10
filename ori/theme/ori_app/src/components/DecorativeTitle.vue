<template>	
  <div :class="['fullWidth decorativeTitleContainer parent row nowrap centered', className ? className : '']">
    <hr :class="['grow decorativeTitleContainer__divider', modifier ? 'decorativeTitleContainer__divider' + modifier : '']">	
    <h2 :class="['bold decorativeTitleContainer__title', modifier ? 'decorativeTitleContainer__title_' + modifier : '']">
      <slot/>
    </h2>
    <hr :class="['grow decorativeTitleContainer__divider', modifier ? 'decorativeTitleContainer__divider' + modifier : '']">	
  </div>
</template>

<script>
export default {
  name: "DecorativeTitle",
  props: {
    modifier: {
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

<style	lang="sass">
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_helpers.sass'
	@import './../styles/conf/_breakpoints.sass'

	.decorativeTitleContainer
		&__title
			min-width: 40%
			padding: 0 1.5rem
			text-align: center
			max-width: em(340)
			@include breakpoint($xxs)
				max-width: 68.5%
		&__divider
		    height: 1px;
		    background-color: $burgund

	
</style>
