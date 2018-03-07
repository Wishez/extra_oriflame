<!-- <style src='./fonts.sass' lang='sass'></style> -->
<style src='./index.sass' lang='sass'></style>

<template>
  <div id="app">
  	<site-header/>
  	<main class="wrapper container">	
    	<router-view/>
  	</main>
  	<footer>
  		
  	</footer>
  </div>
</template>

<script>
	import SiteHeader from './templates/Header.vue';
	
	export default {
	  name: 'App',
	  components: {
	  	SiteHeader
	  }
	  
	};
</script>

<style	lang="sass">
	@import './styles/conf/_sizes.sass'

	.wrapper
		max-width: 1129px
		margin-top: $s77
		margin-bottom: 	$s144
	
</style>