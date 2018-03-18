<template>
	<div @mousemove="onHoverItem"
		 :class="{
		 	[className]: className
		 }"
		 :aria-expanded="expanded"
		 tabindex="0"
		 @mouseleave="onMouseLeaveItem"
	>
		 <!-- @focus="onHoverItem"
		 @blur="onMouseLeaveItem" -->
		<slot/>
	</div>
</template>

<script>
	import anime from 'animejs';
	import {timeout} from '@/constants/pureFunctions';

	export default {
		name: "TolltipItemContainer",
		props: {
			className: {
				type: String,
				required: false,
				default: null
			},
			tooltipId: {
				type: String,
				required: true,
			},
		},
  	    components: {
	    },
	    mixins: [],
	    data: () => ({
	    	expanded: false
	    }),
	    beforeCreate() {
	    },
	    created() {
	    },
	    beforeMount () {
	    },
	    mounted() {
	    	timeout(() => {
				this.tooltip = document.getElementById(
					this.tooltipId
				);
			}, 500);
	    },
	    computed: {
	    	onHoverItem: function() {	    		
				const showUpOrBottom = (event, tooltipHeight, tooltipWidth) => {
					const windowHeight = window.innerHeight;
					const windowWidth = window.innerWidth;
					// let additionalValue = 0;
					// let x = 0;
					let y = 0;
					let place = 'top';
						 
					if (windowHeight / 2 < event.clientY) {
						y =  tooltipHeight + 18 + 11.12484548825710754017;
					} else {
						place = 'bottom';
						y -= 18 + 11.12484548825710754017 //6.8756770631996956367;
					}
					
					this.tooltip.setAttribute('x-placement', place);
					return y;
				};

				return event => {	
					this.$set(
		    			this,
		    			'expanded',
		    			true
		    		);
					const proportions = this.tooltip.getBoundingClientRect();
					const x = event.pageX - (proportions.width / 2);	
					const y = event.pageY - showUpOrBottom(event, proportions.height);
					event.stopPropagation();
					
					anime({
			  			targets: this.tooltip,
			  			translateX: x,
			  			translateY: y,
			  			elasticity: 150,
			  			duration: 60
			  		});
		  		};
			}
	    },
	    methods: {
	    	onMouseLeaveItem() {
	    		this.$set(
	    			this,
	    			'expanded',
	    			false
	    		);
	    	},
	    }
	};
</script>

<style lang="sass" scoped>
	
</style>