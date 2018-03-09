<style src='./index.sass' lang='sass'></style>

<template>
  <div id="app">
  	<site-header/>

	  	<main id="main" class="wrapper container">	
	    	<router-view/>
	  	</main>
  	<footer>
  		
  	</footer>
  </div>
</template>

<script>
	import SiteHeader from './templates/Header.vue';
	import normalizeWheel from './lib/js/normwheel';
	import anime from 'animejs';
	import {doByYScroll, listen, doBy} from './constants/pureFunctions';

	export default {
	  name: 'App',
	  components: {
	  	SiteHeader,
	  },
	  computed: {
	  	// Cache the navigation element for manipulating!
	  	navigation() {
			return document.getElementById('navigationList');
	  	},
	  	navigationLinks() {
			return document.getElementsByClassName('navLink');
	  	},
	  	spinLinks() {
	  		return anime({
  				targets: '.navLink',
  				rotate: [
  					{value: "90deg", 
  					 duration: 1500, 
  					 elasticity: 200,
  					 easing: 'easeInOutBack'
  					},
  				],
  				scale: [
    				{ value: 1.1, 
    				  duration: 750, 
    				  delay: 250, 
    				  easing: 'easeOutBack' },
    				{ value: .9, 
    				  duration: 500, 
    				  easing: 'easeInOutBack' },
  				],
  				begin: (anim) =>  {
					
				}
  			});
	  	},
	  	spinLinksToBasePosition() {
	  		return anime({
  				targets: '.navLink',
  				rotate: "0",
  				elasticity: 0,
  				duration: 1500,
  				scale: [
    				{ value: 1, 
    				  duration: 1000, 
    				  easing: 'easeInOutQuad' },
  				],
  				begin: (anim) =>  {
					
				}
  			});
	  	},
	  	// Animation object for the navigation 
	  	// when an user scrolling from top of the page.
	  	// You can play and restart it.
	  	stretchNavigation() {
	  		return anime({
  				targets: this.navigation,
  				rotate: "-90deg",
  				right: -109.656417116416,
  				top: 160,
  				elasticity: 250,
  				duration: 3000,
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
    				  duration: 500, 
    				  easing: 'easeOutSine' },
    				{ value: 1, 
    				  duration: 500, 
    				  delay: 0, 
    				  easing: 'easeOutSine' },
  				],
  				bottom: 0,
  				backgroundColor: {value: "#333", duration: 200},
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
	    				  duration: 500, 
	    				  easing: 'easeInOutQuad' },
	    				{ value: 1, 
	    				  duration: 500,  
	    				  easing: 'easeInOutQuad' },
	  				],
	  				elasticity: 200,
	  				duration: 2000,
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
	  				rotate: "0deg",
	  				scale: [
	    				{ value: 1.2, 
	    				  duration: 500, 
	    				  easing: 'easeInOutQuad' },
	    				{ value: 1, 
	    				  duration: 500, 
	    				  delay: 200, 
	    				  easing: 'easeInOutQuad' },
	  				],
	  				elasticity: 200,
	  				duration: 2000,
	  				begin: (anim) => {
						this.navigation.classList.remove('navigation_fixed');
  					}
	  			});
	  		}
	  	
	  },
	  data() {
	  	return {
	  		menuWasTransformed: false
	  	}
	  },
	  mounted: function()  {
	  	const body = this.$store.state.rootElement;
	  	let baseOffset = 0;
	  	doBy({
	  		callback: () => {
				baseOffset = this.$store.state.baseOffsetForTransform;
	  		},
	  		fallback: () => {
				baseOffset = this.$store.state.baseMobileOffsetForTransform;
	  		}
	  	})
	  	this.$store.commit('switchScrollPageState', body.scrollTop <  baseOffset + 50);

	  	// Cache context
	  	const that = this;

	  	listen({
	  		event: 'scroll', 
	  		callback: event =>  {
		  		// const normalized  = normalizeWheel(event);
		  		
		  		const fromTopOffset = body.scrollTop;

		  		// Function for checking scroll position of the target element.
			  	doByYScroll({
			  		target: body,
			  		condition: !this.menuWasTransformed,
					offsetY: baseOffset  + 50,
					onTrigger: () => {
						console.log('trigger', baseOffset + 50)
						doBy({ 
							callback: () => {
					  			this.stretchNavigation.restart();
								this.spinLinks.restart();
							},
							fallback: () => {
								console.log('Execute mobile fallback')
								this.mobileStretchNavigation.restart();
							}
						});

						this.menuWasTransformed = true;
				
						this.$store.commit('switchScrollPageState', true);
						


					}
			  	});
		  	
				doByYScroll({
			  		target: body,
			  		condition: this.menuWasTransformed,
					offsetY: baseOffset,
					direction: "top",
					onTrigger: () => {
			  			// console.log(body.scrollTop);
			  			this.menuWasTransformed = false;

			  			console.log('trigger', baseOffset)
			  			doBy({ 
							callback: () => {
					  			this.wideNavigation.restart();
								this.spinLinksToBasePosition.restart()
							},
							fallback: () => {
								console.log('Execute mobile fallback')
								this.mobileWideNavigation.restart();
							}
						});
						
						this.$store.commit('switchScrollPageState', false);
					}
			  	});
				
				}
		}); // end scroll

	  },
	  
	};
</script>

<style	lang="sass">
	@import './styles/conf/_sizes.sass'

	.wrapper
		max-width: 1129px
		margin-top: $s77
		margin-bottom: 	$s144
	
</style>