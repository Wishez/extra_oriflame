<template>
  <section class="mediaContent">		
    <main-title>Видео</main-title>
    <transition-group 
      tag="ul" 
      class="unstyledList videos wrap parent row display_grid gap_increased grid_base-columns">
      <lazy-video 
        v-for="(video, index) in videos" 
        :key="index" 
        :src="video.embed" 
        :label="video.label"
      />
    </transition-group>
  </section>
</template>

<script>
import MainTitle from "@/components/MainTitle";
import LazyVideo from "@/components/LazyVideo";
export default {
  name: "MediaPage",
  components: {
    MainTitle,
    LazyVideo
  },
  data() {
    return {
      videos: [
        {
          id: 0,
          embed: "g3aI1uMFV-Q",
          label: "90 дней к успеху: развенчиваем миф о каталогах"
        },
        {
          id: 1,
          embed: "94Zxxf-4_VE",
          label: "90 дней к успеху: развенчиваем миф о секте"
        },
        {
          id: 2,
          embed: "KuHhkFDJKP8",
          label: "90 дней к успеху: развенчиваем миф о финансовой пирамиде"
        }
      ] // end videos
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
@import '../styles/conf/_sizes.sass'
@import '../styles/conf/_colors.sass'

.videos
	margin: $s47 -#{$s29} 0

	@supports (display: grid)
		margin-left: 0
		margin-right: 0 
</style>
