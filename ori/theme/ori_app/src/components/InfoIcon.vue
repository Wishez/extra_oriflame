<template>
	<base-button unstyled
		:modifier="modifier"
		:label="label"
		:className="className"
		:action="onClick"
		:onBlur="onBlur"
	>
		<base-icon 
			modifier="info"
			className="darkGrayColor relative
			pseudo_after pseudo_after--negativeIndex pseudo_after--basePosition
			pseudo_after--fullHeight
			pseudo_after--fullWidth
			pseudo_after--round pseudo_after--absolute font-size_29 "
			:icon="`fas fa-info`" />
	</base-button>
</template>

<script>
	import BaseIcon from '@/components/BaseIcon';
	import BaseButton from '@/components/BaseButton';

	export default {
		name: "InfoIcon",
		props: {
			className: {
				type: String,
				required: false,
				default: null
			},
			modifier: {
				type: String,
				required: false,
			},
			label: {
				type: String,
				required: true
			},
			onClick: {
				type: Function,
				required: false
			},
			onBlur: {
				type: Function,
				required: false
			}
		},
  	    components: {
  	    	BaseIcon,
  	    	BaseButton
	    },
	};
</script>

<style lang="sass" scoped>
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_breakpoints.sass'

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
			// z-index: -1
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

		


	.iconBackground_info:after
		transform: scale(1)
		background-color: $burgund
		opacity: .4
		will-change: transform, opacity
		animation-name: pulsar
		animation-duration: 4000ms
		animation-delay: 2000ms
		animation-iteration-count: infinite
		animation-timing-function: ease-out //cubic-bezier(0.4, 0.0, 0.2, 1)//cubic-bezier(0.31, 0.21, 1, 1.11)
</style>