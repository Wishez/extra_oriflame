<template>
  <div :class="['fullWidth_xxs container materialShadow fewRound whiteBackground litter', modifier ? 'litter_' + modifier : null, className]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "SimpleLitter",
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
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'

	.litter
		padding-bottom: $s77
		padding-top: $s47
		min-width: calc(50% - 1.5rem)
		margin: 0
		
		> *:first-of-type
			margin-top: 0
</style>
