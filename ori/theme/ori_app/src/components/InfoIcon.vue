<template>
  <base-button
    :modifier="modifier"
    :label="label"
    :class-name="className"
    :action="onClick"
    :on-blur="onBlur"
    unstyled
  >
    <base-icon
      :icon="`fas fa-info`"
      modifier="info"
      class-name="darkGrayColor relative
			pseudo_after pseudo_after--negativeIndex pseudo_after--basePosition
			pseudo_after--fullHeight
			pseudo_after--fullWidth
			pseudo_after--round pseudo_after--absolute font-size_29 "
    />
  </base-button>
</template>

<script>
export default {
  name: "InfoIcon",
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
    },
    label: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: false,
      default: () => {}
    },
    onBlur: {
      type: Function,
      required: false,
      default: () => {}
    }
  }
};
</script>

<style lang="sass" scoped>
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_breakpoints.sass'

</style>
