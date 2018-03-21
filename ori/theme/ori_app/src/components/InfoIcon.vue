<template>
	<base-button unstyled
		:modifier="modifier"
		:label="label"
		:className="className"
		:action="onClick"
	>
		<base-icon 
			modifier="info"
			className="darkGrayColor relative
			index_positive pseudo_after pseudo_after--negativeIndex pseudo_after--basePosition
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
			}
		},
  	    components: {
  	    	BaseIcon,
  	    	BaseButton
	    },
	    mixins: [],
	    data: () => ({
	    }),
	    beforeCreate() {
	    },
	    created() {
	    },
	    beforeMount () {
	    },
	    mounted() {
	    },
	    computed: {
	    },
	    methods: {
	    	
	    },
	    beforeUpdate() {
	    },
	    updated() {
	    },
	    beforeDestroy() {
	    }
	};
</script>

<style lang="sass" scoped>
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_breakpoints.sass'

	@keyframes pulsar
		0% 
			transform: scale(1.01)
		40% 
			transform: scale(1.111)
			opacity: .25
		70%
			transform: scale(1.2221)
			opacity: .1
		100%
			transform: scale(1.34431)
			opacity: 0



	.iconBackground_info:after
		transform: scale(1)
		background-color: $burgund
		opacity: .4
		will-change: transform, opacity
		animation-name: pulsar
		animation-duration: 2000ms
		// animation-delay: 3000ms
		animation-iteration-count: infinite
		animation-timing-function: cubic-bezier(0.31, 0.21, 1, 1.11)
</style>