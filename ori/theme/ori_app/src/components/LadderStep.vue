<template>
	<li :data-index="index"
		tabindex="0"
		:class="{
			['step overflowHidden fewRound materialShadow absolute']: true,
			[`step_${modifier}`]: modifier
		}"
	>
		<h3 class="cropedLine step__title italic textCentered paddingContainer">{{ title }}</h3>
		<div class="whiteBackground stepContent paddingContainer stepContent__paragraph zeroTopMargin">
			<p class="stepContent__paragraph zeroTopMargin"  v-html="achieve" />
			<p class="stepContent__paragraph" 	v-html="income" />
			<h4 v-if="showBenifit" class="italic textCentered stepContent__subtitle">Бонусы по достижению</h4>
			<ul v-if="showBenifit">
				<li :key="benifitIndex" 
					v-for="(benifitText, benifitIndex) in benifit" 
					v-html="benifitText"/>
			</ul>

		</div>
	</li>
</template>

<script>
	export default {
		name: "LadderStep",
		props: {
		 	className: {
				type: String,
				required: false,
				default: null
			},
			index: {
				type: Number,
				required: true,
			},
			achieve: {
				type: String,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
			income: {
				type: String,
				required: true,
			},
			benifit: {
				type: Array,
				required: true,
			},
			modifier: {
				type: String,
				required: false,
			}
		},
  	    components: {
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
	    	showBenifit() {
	    		return this.benifit.length
	    	}
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
	$baseOffset: 6
	
	$lastElementWidth: 100%
	$quantityElements: 4
	@for $index from 1 through $quantityElements
		
		.step:nth-of-type(#{$index})
			$priority: $quantityElements - $index + 1
			$scale: (1.618 * $index + 1)
			margin-top: ($s29 * $priority) / (1.618 * $index + 1)
			width: $lastElementWidth
			left: (100% - $lastElementWidth) / 2
			z-index: $priority
			& .step__title
				font-size: (25.936em / 18) - ((($index + 1) / $quantityElements) / 18)

		$lastElementWidth: $lastElementWidth - $baseOffset

	.step
		top: em(170, 25)
		transition: width .3s ease-in, left .3s ease-in, transform .3s ease, min-height .2s ease-in
		cursor: pointer
		z-index: 1
		&:not(:first-of-type)
		


	.step__title
		background-color: rgba($pink, .85)
		
		
	.stepContent
		// max-height: em(266.48)
		max-height: em(50, 25)
		overflow-y: auto
	.ladder_watch .step
		&:hover,&:focus, &:active 
			transform: translateY(-4.44444444444444444444rem) $i
			& .stepContent
				max-height: em(100, 25) $i
</style>