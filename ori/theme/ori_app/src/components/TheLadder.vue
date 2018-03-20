<template>
	<article 
		@mouseenter="preventScrollPage"
		@mouseleave="allowScrollPage" 
		class="parent v-end ladderFold relative">
		<h2 class="baseChild ladderFold__title parent centered darkGrayBackground whiteColor relative">Карьерная лестница</h2>
		<fade-translate-transition-group id="ladder"
			:class="{
				'ladder  unstyledList absolute zeroTopMargin': true,
				'pseudo_elements pseudo_elements--absolute': true,
				'ladder_watch': canWatchForSteps
			}"
			:delay="18"
		>
			<ladder-step :title="step.title"
				:key="index"
				:index="index"
				:achieve="step.achieve"
				:benifit="step.benifit"
				:income="step.income"
				v-if="range.indexOf(index) !== -1"
				v-for="(step, index) in ladder" 
				:zIndex="range[0] + 3 - index"
				:discount="step.discount"
			/>
			<li aria-hidden="true" 
				class="pseudo_elements pseudo_elements--absolute absolutePseusoElements ladder__walls absolute perspective"
				:key="ladder.length"
				:index="ladder.length" />
		</fade-translate-transition-group>
	</article>
</template>

<script>
	import LadderStep from './LadderStep';
	import FadeTranslateTransitionGroup from './FadeTranslateTransitionGroup';
	import {ladder} from '@/constants/business';
	import {
		listen, 
		throttle, 
		timeout,
		prevent
	} from '@/constants/pureFunctions';

	export default {
		name: "TheLadder",
		props: {
		},
  	    components: {
  	    	LadderStep,
	    	FadeTranslateTransitionGroup
	    },
	    mixins: [],
	    data: () => ({
	    	ladder: ladder.reverse(),
	    	range: [0, 1, 2],
	    	lastDocumentScrollPosition: 0,
	    	canWatchForSteps: true,
	    	canScrollingSteps: true
	    }),
	    beforeCreate() {
	    },
	    created() {
	    },
	    beforeMount () {
	    },
	    mounted() {
	    	
	    	const ladder = this.ladderElement;
		
	    	listen({
	    		element: ladder,
	    		event: 'wheel',
	    		callback: throttle(this.onScroll)
	    	})


	    },
	    computed: {
	    	ladderElement() {
	    		return document.getElementById('ladder');
	    	},
	    	navigationStyles() {
	    		return document.getElementById('navigationList').style;
	    	},
	    	root() {
	    		return this.$store.state.rootElement;
	    	},
			rootStyles() {
				return this.root.style;
			}
	    },
	    methods: {
	    	// I need scroll position for prevent scrolling 
	    	// when an user scrolls the ladder.
	    	noteLastDocumentScrollPosition() {
	    		console.log(this.navigationStyles);
	    		this.$set(
	    			this,
	    			'lastDocumentScrollPosition',
	    			this.root.scrollTop
	    		);
	    	},
	    	preventScrollPage() {
	    		this.rootStyles.overflowY = "hidden";
	    		this.rootStyles.paddingRight = '13.5px';
	    		this.navigationStyles.marginRight = '13.5px';
	    	},
	    	allowScrollPage() {
	    		this.rootStyles.overflowY = "auto";
	    		this.rootStyles.paddingRight = 0;
	    		this.navigationStyles.marginRight = 0;
	    	},
	    	disableWatchState(delay=1500) {
	    		if (this.canWatchForSteps) {
		    		this.$set(
		    			this,
		    			'canWatchForSteps',
		    			false
		    		);

		    		timeout(() => {
	    				this.$set(
			    			this,
			    			'canWatchForSteps',
			    			true
			    		)
    				}, delay);
	    		}
	    	},

	    	onScroll(event) {
	    		
	    		if (!this.$store.state.business.openedStep) {
					const delta = -event.deltaY;
					const lessThanZero = delta < 0;
	
	    			if (lessThanZero) {
	    				this.decreseRange();
	    			} else {
	    				this.increaseRange();
	    			}
	    			
	    			this.disableWatchState();

	    			prevent(event);
					// event.preventDefault();
	  		// 		return false;
	    		}
				
	    	},
	    	increaseRange() {
	    		const range = this.range;

	    		if (range[2] <= this.ladder.length) {
		    		this.$set(
		    			this,
		    			'range',
		    			range.reduce(
		    				(rangeNumbers, number) => [...rangeNumbers, number + 1],
		    				[]
		    			)
		    		)
	    		}
	    	},
	    	decreseRange() {
	    		const range = this.range;
	    		if (range[0] !== 0) {
		    		this.$set(
		    			this,
		    			'range',
		    			this.range.reduce(
		    				(rangeNumbers, number) => [...rangeNumbers, number - 1],
		    				[]
		    			)
		    		);
	    		}
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

<style lang="sass">
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_breakpoints.sass'
	$baseHeight: 80
	.ladderFold
		margin-top: $s144//em($baseHeight * 4)
		&__title
			height: em($baseHeight, 29)
			padding-bottom: .5rem
			box-shadow: 0 -9px 15px -10px rgba(0,0,0,.4), 0 6px 4px -2px rgba(0,0,0,.8)
			z-index: 10

	.ladder
		bottom: 0
		min-width: 90%
		left: (100% - 90) / 2
		height: em($baseHeight * 2.5)
		z-index: 1
		&:after, &:before
		&:after
			width: 80.75%
			z-index: -1
			height: em(90)
			bottom: em(110.25)
			border-radius: 2px
			font-size: 18px
			left: 9.5%
			background-color: lighten($darkGray, 7.5%)
		// &:before
		// 	background: linear-gradient(to top, darken($darkGray, 5%) 0% , lighten($darkGray, 5%) 99%, $darkGray, 99%, $darkGray, 100%),$darkGray
		&__walls
			height: 100%
			width: 110%
			left: -5%
			top: 0
			z-index: 0
			&:after, &:before
				border-radius: 2px
				bottom: 0
				height: 36%//em(115.55, 25)
				width: 80%
				top: auto
				background: linear-gradient(to right,  $darkGray 0%, lighten($darkGray, 5%) 0%) $darkGray
				z-index: -1
			&:before
				left: -33.5%
				transform: rotateY(80deg) skewY(-7.5deg) translateY(-55px)
			&:after
				right: -33.5%
				transform: rotateY(-80deg) skewY(7.5deg) translateY(-55px)
		&::-webkit-scrollbar
			width: 0

</style>