<template>
	<base-button 
		label="Открыть оформление консультации"
		:action="action"
		unstyled
		className="callbackButton fewRound materialShadow"
	>
		<blurry-image-loader 
			alt="Закзать обратный вызов"
			className="callbackButton__icon"
			relative
			:src="callbackIcon" />
	</base-button>
</template>

<script>
	import BlurryImageLoader from '@/components/BlurryImageLoader';
	import BaseButton from '@/components/BaseButton';
	import callbackIcon from './../assets/images/icons/callback.png';
	

	export default {
		name: "CallbackButton",
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
			action: {
				type: Function,
				required: true
			}
		},
  	    components: {
  	    	BlurryImageLoader,
  	    	BaseButton
	    },
	    mixins: [],
	    data: () => ({
	    	callbackIcon
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
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'

	.callbackButton
		padding: $s11 $s6 0
		background-color: #fff $i

		&__icon
			max-width: $s47

</style>