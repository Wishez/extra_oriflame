<template>
  <article 
    :class="{
      'userHint background-color_pink paddingContainer_horizontal paddingContainer_vertical fewRound materialShadow': true, 
      ['userHint_' + modifier]: modifier, 
      [className]: className
    }"
  >
    <slot/>
  </article>
</template>

<script>
export default {
  name: "UserHint",
  props: {
    className: {
      type: String,
      required: false,
      default: ""
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="sass" scoped>
	@import '../styles/conf/_sizes.sass'
	.userHint
		min-width: em(287)
		& > *:first-of-type
			margin-top: 0 
</style>
