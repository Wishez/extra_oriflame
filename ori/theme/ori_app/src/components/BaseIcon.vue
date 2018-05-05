<template>
  <figure 
    :class="{
      'iconShadow iconBackground circle parent row centered': true, 
      ['iconBackground_' + $store.state.currentSiteTheme.contactIconStyle ]: modifier === 'contact', 
      ['iconBackground_' + modifier]: modifier,
      [className] : className
  }">
    <i 
      :class="{
        [icon]: icon,
        'iconBackground__icon': true,
        [`iconBackground__icon_${modifier}`]: modifier,

      }" 
      aria-hidden="true"
    />
  </figure>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
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

<style lang="sass">
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_animations.sass'
	@import '../styles/conf/_breakpoints.sass'
	
	.iconBackground_navigation
		background-color:  $burgund $i
		color: $white $i
		@include breakpoint($xxs)
			font-size: (18em /16)

	.iconBackground
		height: $s25
		width: $s25
		transition-property: color, background-color
		transition-timing-function: $standart
		transition-duration: .2s

		&_pink
			background-color: #FA8BC4
		&_green
			background-color: $darkenGreen
			color: $white

	.iconBackground__icon
		font-size:  0.77777777777777777778em
	
</style>
