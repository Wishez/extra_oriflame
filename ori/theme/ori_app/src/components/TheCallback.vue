<template>
	<div class="callback fixed positionLeft_47 positionLeft_xs-18 positionBottom_29">
		<transition appear name="fadeTranslateToTop">
			<callback-form v-if="isFormShown" :onBlurForm="changeDisplayStateOfForm" />
		</transition>
		<callback-button :action="changeDisplayStateOfForm" />
	</div>
</template>

<script>
	import CallbackForm from '@/components/CallbackForm';
	import CallbackButton from '@/components/CallbackButton';
	

	export default {
		name: "TheCallback",
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
		},
  	    components: {
  	    	CallbackForm,
  	    	CallbackButton
	    },
	    mixins: [],
	    data: () => ({
	    	isFormShown: false
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
	    	changeDisplayStateOfForm() {
	    		this.$set(
	    			this,
	    			'isFormShown',
	    			!this.isFormShown
	    		);
	    	}
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
	.litter_callback 
		padding-top: $s18 + $s6 $i
		padding-bottom: $s29 + $s6 $i
	.callback

		@include breakpoint($xs)
			bottom: em(84)
			
	
</style>