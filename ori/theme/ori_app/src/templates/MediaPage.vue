<template>
    <section class="mediaContent">		
    	<main-title>Видео</main-title>
    	<ul class="unstyledList videos wrap parent row">
    		<lazy-video 
    			:key="video.id" 
    			v-for="video in videos" 
    			:src="video.embed" 
    			:label="video.label"
    		/>
    	</ul>
    </section>
</template>

<script>
	import MainTitle from '@/components/MainTitle';
	import LazyVideo from '@/components/LazyVideo'
	export default {
	  name: 'MediaPage',
	  data () {
	    return {
	      videos: [
	      	{
	      		id: 0,
	      		embed: 'g3aI1uMFV-Q',
	      		label: '90 дней к успеху: развенчиваем миф о каталогах'
	      	},
	      	{
	      		id: 1,
	      		embed: '94Zxxf-4_VE',
	      		label: '90 дней к успеху: развенчиваем миф о секте'
	      	},
	      	{
	      		id: 2,
	      		embed: 'KuHhkFDJKP8',
	      		label: '90 дней к успеху: развенчиваем миф о финансовой пирамиде'
	      	}
	      ] // end videos
	    }
	  },
	  components: {
	  	MainTitle,
	  	LazyVideo
	  }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_colors.sass'

	.videos
		margin: $s47 -#{$s29} 0
</style>
