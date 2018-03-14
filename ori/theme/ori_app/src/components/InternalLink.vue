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
		slideTo
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
				required: false
			}
		},
		methods: {
			go(event) {
	  			event.preventDefault();
	  			router.push({path: this.to});

				if (this.hashResource) {
					console.log('slide to', this.hashResource);
					slideTo(this.hashResource);
				} 
				// else {
					// slideTo('#main');
				// }
	  		
				
				this.$store.state.animations.animateNavigationToDefaultState();
		  	
	  		}
			
		}
	};
	
</script>

<style lang="sass">
	
</style>