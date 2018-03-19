<template>
	<article 
		@mouseenter="preventScrollPage"
		@mouseleave="allowScrollPage" 
		class="parent v-end ladderFold relative">
		<h2 class="baseChild ladderFold__title parent centered darkGrayBackground whiteColor relative">Карьерная лестница</h2>
		<fade-translate-transition-group id="ladder"
			:class="{
				'ladder unstyledList absolute zeroTopMargin': true,
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
				v-for="(step, index) in ladder" />
			<li aria-hidden="true" 
				class="ladder__walls absolute perspective"
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
	    	canWatchForSteps: true
	    }),
	    beforeCreate() {
	    },
	    created() {
	    },
	    beforeMount () {
	    },
	    mounted() {
	    	// const fold = this.$el;
	    	const ladder = this.ladderElement;
			
			// this.root.scrollTop = this.root.scrollTop; 
	    	console.log(ladder);

	    	// ladder.style.paddingRight = `${l.offsetWidth - child.clientWidth}px`;
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
	    		

				const delta = -event.deltaY;
				const lessThanZero = delta < 0;
				

				// this.ladderElement.scrollTop = 0
				// if (lessThanZero && ladder.) {
				// }
    			if (lessThanZero) {
    				this.decreseRange();
    			} else {
    				this.increaseRange();
    			}
    			
    			
    			this.disableWatchState();
				event.preventDefault();
  				event.stopPropagation();
				
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

<style lang="sass" scoped>
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_breakpoints.sass'
	$baseHeight: 80
	.ladderFold
		height: em($baseHeight * 4)
		&__title
			height: em($baseHeight, 29)
			padding-bottom: .5rem
			box-shadow: 0 -9px 15px -10px rgba(0,0,0,.4)
			z-index: 10





	.ladder
		bottom: 0
		min-width: 90%
		left: (100% - 90) / 2
		height: em($baseHeight * 4)
		z-index: 1
		&__walls
			height: 100%
			width: 110%
			left: -5%
			top: 0
			z-index: 0
			&:after, &:before
				content: '' $i
				position: absolute
				bottom: 0
				height: 22%//em(115.55, 25)
				width: 80%
				top: auto
				background-color: $darkGray
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