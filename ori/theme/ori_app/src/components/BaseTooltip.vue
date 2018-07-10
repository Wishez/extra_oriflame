<template>
  <article 
    :id="id" 
    :class="{
      'baseTooltip popper fewRound materialShadow': true,
      [className]: className,
      [`baseTooltip_${modifier}`]: modifier
  }">
    <h2 
      :class="{
        'italic baseTooltip__title marginLeft_heading': true,
        [`baseTooltip__title_${modifier}`]: modifier
    }" >
      {{ title }}
    </h2>
    <div 
      :class="{
        'italic baseTooltipContent marginTop_18': true,
        [`baseTooltipContent_${modifier}`]: modifier
    }">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    className: {
      type: String,
      required: false,
      default: null
    },
    modifier: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    modifier: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="sass">
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_fonts.sass'
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_breakpoints.sass'

	$tootipColor: $darkenGreen
	.baseTooltip 
		background-color: $white $i
		text-align: left $i
		border: 0 $i
		font-size: em(18, 16) $i
		padding: $s18 $s18 $s29 $s29 $i
		max-width: em(346.1) $i
		@include breakpoint($xxs)
			width: 90vw $i
			max-height: 55vh $i
		&.popper
			border: 0 solid $darkenGreen $i
			&[x-placement^="left"]
				border-left-width: $s6 $i
				.popper__arrow
					border-width: 18px 0 18px 18px $i
					border-color: transparent transparent transparent $tootipColor $i
			&[x-placement^="right"]
				border-right-width: $s11 $i
				.popper__arrow
					border-width: 18px 18px 18px 0 $i
					border-color: transparent $tootipColor transparent  transparent  $i
			&[x-placement^="bottom"]
				border-bottom-width: 6.8756770631996956367px $i
				.popper__arrow
					top: -18px $i
					border-width: 0 18px 18px 18px $i
					border-color: transparent transparent $tootipColor  transparent $i
			&[x-placement^="top"]
				border-top-width: $s6 $i
				.popper__arrow
					bottom: -18px $i
					border-width: 18px 18px 0 18px $i
					border-color: $tootipColor transparent transparent  transparent  $i
		&Content
			overflow: auto
			max-height: em(213.90605686032138442522) - $s77
			padding-right: $s18
			p
				margin-top: 0
		&__title
			font-size: $s25
			letter-spacing: .1em

</style>
