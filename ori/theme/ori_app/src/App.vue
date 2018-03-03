<!-- <style src='./fonts.sass' lang='sass'></style> -->
<style src='./index.sass' lang='sass'></style>

<template>
  <div id="app">
  	<site-header/>
    <router-view/>
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
	// if ('serviceWorker' in navigator) {
	// 	navigator.serviceWorker.register('/js/sw.js')
	//        .then(function(reg){
	//             console.log('ServiceWorker registration successful with scope: ', reg.scope);
	//        }).catch(function(err) {
	//          console.log("No it didn't. This happened: ", err)
	//        });
	// }
</script>
