<template>
	<a 
		:href="to" 
		:class="className"
		@click="go"
	>
		<slot></slot>
	</a>
</template>

<script>
	import router from '@/router';
	import {
		slideTo,
		timeout
	} from './../constants/pureFunctions';

	export default {
		name: "InternalLink",
		props: {
			to: {
				type: [String, Object],
				required: false
			},
			className: {
				type: String,
				required: false
			},
			hashResource: {
				type: String,
				required: false,
				default: '#main'
			}
		},
		methods: {
			go(event) {
	  			event.preventDefault();
	  			router.push({path: this.to});

				timeout(() => {
					slideTo({
						selector: this.hashResource
					});
					
				}, 100);
	  		
				this.$store.state.animations.animateNavigationToDefaultState();
		  	
	  		}
			
		}
	};
	
</script>

<style lang="sass">
	
</style>