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

  &_info
    background-color: $pink

  &_info:after
    transform: scale(1)
    background-color: $burgund
    opacity: .4
    will-change: transform, opacity
    animation-name: pulsar
    animation-duration: 4000ms
    animation-delay: 2000ms
    animation-iteration-count: infinite
    animation-timing-function: $standart // ease-out

  &_pink
    background-color: $pink

  &_green
    background-color: $darkenGreen
    color: $white

.iconBackground__icon
	font-size:  0.77777777777777777778em

@keyframes pulsar
	0%
		transform: scale(1)
		z-index: 1

	30%
		transform: scale(0.75)
		will-change: transform

	40%
		transform: scale(1)
		will-change: transform

	45%
		transform: scale(1.2)
		will-change: opacity, transform

	50%
		transform: scale(1.4)
		will-change: opacity, transform
		opacity: .25

	55%
		transform: scale(1.6)
		will-change: opacity, transform
		opacity: .1

	55%, 100%
		transform: scale(1.6)
		will-change: opacity, transform
		opacity: 0






</style>
