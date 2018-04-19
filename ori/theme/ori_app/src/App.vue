<style src='./index.sass' lang='sass'></style>

<template>
  <div id="app">
  	<the-header/>
	  	<main id="main" class="wrapper container">	
	    	<router-view/>
	  	</main>
  	<the-footer />
  	<the-callback />
  </div>
</template>

<script>
	import TheHeader from '@/templates/TheHeader.vue';
	import TheFooter from '@/templates/TheFooter.vue';
	import TheCallback from '@/components/TheCallback.vue';
	import normalizeWheel from '@/lib/js/normwheel';
	import anime from 'animejs';
	import {doByYScroll, listen, doBy, throttle} from '@/constants/pureFunctions';

	const basicScroll = require('basicScroll');

	export default {
	  name: 'App',
	  components: {
	  	TheHeader,
	  	TheFooter,
	  	TheCallback
	  },
	  data: () => ({
		baseOffset: 0
	  }),
	  computed: {
	  	// Cache the navigation element for manipulating!
	  	navigation() {
			return document.getElementById('navigationList');
	  	},
	  	slideUpCallbackButton() {
			return anime({
  				targets: '.callback',
  				elasticity: 50,
  				translateY: 66,
  				duration: 250
  			});
	  	},
	  	slideDownCallbackButton() {
	  		return anime({
  				targets: '.callback',
  				elasticity: 50,
  				translateY: 0,
  				duration: 250
  			});
	  	},
	  	spinLinks() {
	  		return anime({
  				targets: '.navLink',
  				rotate: [
  					{value: "90deg", 
  					 duration: 250, 
  					 elasticity: 0,
  					 easing: 'easeInOutBack'
  					},
  				],
  				scale: [
    				{ value: 1.1, 
    				  duration: 370, 
    				  delay: 100, 
    				  easing: 'easeOutBack' },
    				{ value: .9, 
    				  duration: 150, 
    				  easing: 'easeInOutBack' },
  				]
  			});
	  	},
	  	spinLinksToBasePosition() {
	  		return anime({
  				targets: '.navLink',
  				rotate: "0",
  				elasticity: 0,
  				duration: 370,
  				scale: [
    				{ value: 1, 
    				  duration: 370, 
    				  easing: 'easeInOutQuad' },
  				]
  				
  			});
	  	},
	  	// Animation object for the navigation 
	  	// when an user scrolling from top of the page.
	  	// You can play and restart it.
	  	stretchNavigation() {
	  		const baseOffset = this.baseOffset;

	  // 		const instance = basicScroll.create({
			// 	from: baseOffset,
			// 	to: baseOffset + 60,
			// 	props: {
			// 		'--navigation-rotate': {
			// 			from: '0',
			// 			to: '-90deg',
			// 			// timing: 'elasticOut'
			// 		},
			// 		'--navigation-translate': {
			// 			from: '0',
			// 			to: '160px',
			// 			// timing: 'elasticOut'
			// 		},
			// 		'--navigation-scale': {
			// 			from: '1',
			// 			"50%": '1.1',
			// 			to: '1',
			// 			// timing: 'circInOut'
			// 		}
			// 	}
			// });

			// instance.start();

	  		return anime({
  				targets: this.navigation,
  				right: -80.656417116416,
  				elasticity: 100,
  				rotate: '-90deg', 
  				translateX: -115,
  				duration: 500,
  				begin: (anim) =>  {
					
					this.navigation.classList.add('navigation_fixed');
					
				}
  			});
	  	},
	  	mobileStretchNavigation() {
	  		return anime({
				targets: this.navigation,
  				scale: [
    				{ value: 1.04, 
    				  duration: 350, 
    				  easing: 'easeOutSine' },
    				{ value: 1, 
    				  duration: 350, 
    				  delay: 0, 
    				  easing: 'easeOutSine' },
  				],
  				bottom: 0,
  				backgroundColor: {value: "#333", duration: 100},
  				begin: (anim) => {
	  			
					this.navigation.classList.add('navigation_fixed');
				}
	  		});
	  	},
	  	mobileWideNavigation() {
	  		return anime({
	  				targets: this.navigation,
	  				scale: [
	    				{ value: 1.1, 
	    				  duration: 350, 
	    				  easing: 'easeInOutQuad' },
	    				{ value: 1, 
	    				  duration: 350,  
	    				  easing: 'easeInOutQuad' },
	  				],
	  				elasticity: 200,
	  				// duration: 350,
	  				begin: anim => {
						this.navigation.classList.remove('navigation_fixed');
	  				}
	  			});
	  		},
	  	// The anumation object witch sets to 
	  	// the base position of the navigation 
	  	// when an user comes back to top of the page.
	  	wideNavigation() {
	  		
	  		
	  		
	  		return anime({
	  				targets: this.navigation,
	  				elasticity: 200,
	  				duration: 350,
	  				rotate: 0, 
  					translateX: 0,
	  				begin: (anim) => {
						this.navigation.classList.remove('navigation_fixed');
  					}
	  			});
	  		},
	  		animateToDefaultState() {
	  			return () => {
	  				this.$store.commit('switchTransfromedMenuState', false);
					this.$store.commit('switchScrollPageState', false);
		  			
		  			doBy({ 
						callback: () => {
				  			this.wideNavigation.restart();
							this.spinLinksToBasePosition.restart();
						},
						fallback: () => {
							this.mobileWideNavigation.restart();
							this.slideUpCallbackButton.restart();
						}
					});
					
	  			}
	  		},
	  		animateByScrollToBottom() {
	  			return () => {
	  				this.$store.commit('switchTransfromedMenuState', true);
	  				
					this.$store.commit('switchScrollPageState', true);

		  			doBy({ 
						callback: () => {
				  			this.stretchNavigation.restart();
							this.spinLinks.restart();
						},
						fallback: () => {
							this.mobileStretchNavigation.restart();
							this.slideDownCallbackButton.restart();
						}
					});
	  			}
	  		}
	  	
	  },
	  mounted: function()  {
	  	const body = this.$store.state.rootElement;


	  	doBy({
	  		callback: () => {
				this.$set(
					this,
					'baseOffset',
					this.$store.state.baseOffsetForTransform
				);
	  		},
	  		fallback: () => {
	  			this.$set(
					this,
					'baseOffset',
					this.$store.state.baseMobileOffsetForTransform
				);
	  		}
	  	});

	  	const baseOffset = this.baseOffset;

	  	this.$store.commit('setGlobalAnimations', {
	  		name: 'animateNavigationToDefaultState',
	  		callback: this.animateToDefaultState
	  	});
	  	// The function will trigger by `blur` event of the navigation links or the header's logo .
		this.$store.commit('setGlobalAnimations', {
			name: 'transformMenuIfNeeded',
			callback: () => {
				// Check state of menu-ransformation for 
				// prevent the extra execute of the
				//  navigation's animation's transformation.
				if (!this.$store.state.menuWasTransformed) {
					console.log('will transform');
					this.animateByScrollToBottom();
				}
			}
		});

	  	this.$store.commit('switchScrollPageState', body.scrollTop <  baseOffset);


	  	listen({
	  		event: 'scroll', 
	  		callback: throttle(event =>  {
		  		const fromTopOffset = body.scrollTop;
		  		const menuWasTransformed = this.$store.state.menuWasTransformed
		  		// Function for checking scroll position of the target element.
			  	doByYScroll({
			  		target: body,
			  		condition: !menuWasTransformed,
					offsetY: baseOffset,
					onTrigger: this.animateByScrollToBottom
			  	});
		  	
				doByYScroll({
			  		target: body,
			  		condition: menuWasTransformed,
					offsetY: baseOffset,
					direction: "top",
					onTrigger: this.animateToDefaultState
			  	});
				
			})
		}); // end scroll

	  },
	  
	};
</script>

<style	lang="sass" scoped>
	@import './styles/conf/_sizes.sass'
		
	.wrapper
		max-width: 1129px
		margin-top: $s77
		margin-bottom: 	$s144
		padding-left: 1.5rem
	
</style>