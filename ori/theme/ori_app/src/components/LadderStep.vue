<template>
	<li :data-index="index"
		tabindex="0"
		@click="animate"
		@keypress="animateByKey"
		@blur="closeByBlur"
		:class="{
			['step overflowHidden fewRound materialShadow absolute']: true,
			[`step_${modifier}`]: modifier,
			'step_opened': opened
		}"
		:style="{
			zIndex
		}"
		:aria-expanded="opened"
	>
		<h3 :id="titleId" class="cropedLine step__title italic textCentered paddingContainer">
			{{ title }}
		</h3>
		<div class="whiteBackground stepContent paddingContainer stepContent__paragraph zeroTopMargin normalWeight">
			<p class="bold zeroTopMargin textCentered">{{ title }}</p>
			<p class="stepContent__paragraph"  v-html="achieve" />
			<p class="stepContent__paragraph" 	v-html="income" />
			<p class="stepContent__paragraph" 	v-html="discount" v-if="discount" />
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
	import anime from 'animejs';
	import {slideTo, timeout, ID} from '@/constants/pureFunctions';

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
			discount: {
				type: String,
				required: false,
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
			},
			zIndex: {
				type: Number,
				required: false,
			}
		},
  	    components: {
	    },
	    mixins: [],
	    data: () => ({
	    	opened: false,
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
	    	titleId() {
	    		return `title${ID()}`
	    	},
	    	titleElement() {
	    		return document.querySelector(`#${this.titleId}`);
	    	},
	    	showBenifit() {
	    		return this.benifit.length
	    	},
	    	openStepAimation() {
	    		const step = this.$el;
	    		const isMobile = this.$store.state.isUserFromMobileOrientation;

	    		return anime({
	    			targets: step,
	    			translateY: isMobile ?  `-180.48px` : `-322.48px`,
	    			duration: 242.10526315789473684211,
	    			// easing: 'easeInOutCubic',
	    			zIndex: 10,
	    			scale:[
	    				{
	    					value: 1.0618, 
	    					delay: 300,
	    					duration: 58.98888888888888888889,
	    					// easing: 'easeInOut'
	    				}
	    			],
	    			elasticity: 100,
	    			autoplay: false
	    		}) 
	    	},
	    	closeStepAimation() {
				const step = this.$el;
				const zIndex = this.zIndex;

	    		return anime({
	    			targets: step,
	    			translateY: {
    					value: 0,
    					delay: 100,
    					duration: 242.10526315789473684211
    				},
	    			zIndex: {value: zIndex, duration: 100},
	    			duration: 58.98888888888888888889,
	    			// easing: 'easeInOutCubic',
	    			scale: 1,
	    			elasticity: 100,
	    			autoplay: false
	    		}) 
	    	},
	    	
	    },
	    methods: {
	    	animate() {
	    		if (this.opened) {
	    			this.close();
	    		} else {
	    			this.open();
	    		}
	    	},
	    	isNotMobile() {
	    		return window.innerWidth > 768;
	    	},
	    	switchState(opened=false) {
	    		this.$set(
	    			this,
	    			'opened',
	    			opened
	    		);

	    		if (this.isNotMobile())  {
		    		this.$store.commit(
		    			'business/swtichOpenedState',
		    			opened
		    		);
	    		}
	    	},
	    	open() {
	    		
	    		const isMobile = this.$store.state.isUserFromMobileOrientation;
	    		
	    		this.switchState(true);
	    		this.openStepAimation.restart();

	    		timeout(() => {
	    			slideTo({
	    				element: this.$el,
	    				offset: isMobile ? 10 : 50
	    			});
	    		}, isMobile ? 420 : 620);
	    	},
	    	close() {
	    		this.$el.blur();
	    		this.switchState();
				this.closeStepAimation.restart();

	    	},
	    	animateByKey(evnet) {	
	    		switch(event.key.toUpperCase()) {

	    			case 'ENTER':  
	    				if (this.opened) {
	    					this.close();
			    		} else {
			    			this.open();
			    		}
			    		return;
			    	default:
			    		return;
	    		}
	    	},
	    	closeByBlur() {
				if (this.opened) {
	    			this.close();
			    };
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
			max-width: $lastElementWidth
			left: (100% - $lastElementWidth) / 2
			
			& .step__title
				font-size: (25.936em / 18) - ((($index + 1) / $quantityElements) / 18)

		$lastElementWidth: $lastElementWidth - $baseOffset

	.step
		transition: all .230s cubic-bezier(0.4, 0.0, 0.2, 1)
		max-width: 100%
		cursor: pointer
		z-index: 1
		&_opened
			@include breakpoint($xxs)
				// position: fixed
				// min-width: 80vw
				// left: 2.5vw $i
				// top: 7.5vh
			.stepContent 
				max-height: em(266.48, 25)
				transition: max-height 600ms cubic-bezier(0.4, 0.0, 0.6, 1)
				@include breakpoint($xxs) 
					transition: max-height 428.57142857142857142857ms cubic-bezier(0.4, 0.0, 0.6, 1)

			// position: fixed
		


	.step__title
		background-color: rgba($pink, .85)
		
		
	.stepContent
		transition: max-height 18ms cubic-bezier(0.4, 0.0, 0.6, 1)
		will-change: max-height
		// max-height: em(266.48)
		max-height: em(50, 25)
		overflow-y: auto
	.ladder_watch .step:not(.step_opened)
		&:hover,&:focus, &:active 
			transform: translateY(-4.44444444444444444444rem) $i
			@include breakpoint($xs)
				transform: translateY(-2.74687542919928581239rem) $i

			& .stepContent
				max-height: em(100, 25) $i
				
</style>