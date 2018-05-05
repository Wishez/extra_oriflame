<template>
  <article class="singleShare parent column">
    <transition 
      name="fade"
      appear 
    >
      <main-title 
        v-if="notFound || share.title "
        modifier="share" 
      >
        {{ notFound ? 'Мы не нашли акцию, которую вы запрашивали' : share.title }}
      </main-title>
    </transition>
		
    <content-preloader v-if="!share.title || notFound" />
    <transition 
      name="fade"
      appear 
    >
      <div 
        v-if="share.published_date && !notFound" 
        class="fullWidth singleShare__meta parent centered">
        <time 
          :datetime="transformDate(share.published_date, 'L'
        )">
          {{ transformDate(share.published_date) }}
        </time>
      </div>
    </transition>
    <transition 
      name="fade"
      appear 
    >
      <blurry-image-loader 
        v-if="share.img"
        :src="share.img" 
        class-name="fullWidth fewRound marginTop_47 materialShadow"
        relative
      />
    </transition>
    <transition 
      v-leave="'fast'" 
      name="slowFade"
      appear 
    >
      <div 
        v-if="!notFound" 
        class="content"
        v-html="share.text" 
      />
    </transition>
		
  </article>
</template>

<script>
import ContentPreloader from "@/components/ContentPreloader";

import { SHARE_STORE, SHARES_STORE } from "@/constants/shares";
import { transformDate } from "@/constants/pureFunctions";

export default {
  name: "SharePage",
  components: {
    ContentPreloader
  },
  props: {
    className: {
      type: String,
      required: false,
      default: ""
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    }
  },
  data: () => ({
    share: {
      title: "",
      text: "",
      img: null
    },
    notFound: false,
    slug: ""
  }),
  computed: {},
  mounted() {
    this.$set(this, "slug", localStorage.single_share_slug);

    this.requestShare();
  },
  beforeUpdate() {
    this.$set(this, "notFound", this.$store.state.shares.notFound);
  },
  methods: {
    transformDate,
    fetchAndDumpShare(share, silent = false) {
      const success = share => {
        this.$set(this, "share", share);

        this.$store.dispatch("dump", {
          key: SHARE_STORE,
          value: this.share
        });
      };

      this.$store.dispatch("shares/fetchShare", {
        success,
        silent,
        slug: this.slug,
        raise404: () => {
          this.$set(this, "notFound", true);
        }
      });
    },
    requestShare() {
      const loadShareCallback = share => {
        let silent = false;
        // See a locale share's congruence of
        // a needed in the view.
        if (share && share.slug === this.slug) {
          // I need it, and i set silent mode and cache to the view's state the share.
          silent = true;

          this.$set(this, "share", share);
        }
        // Next, i update DB.
        this.fetchAndDumpShare(share, silent);
      }; // end loadShareCallback

      this.$store.dispatch("load", {
        key: SHARE_STORE,
        callback: loadShareCallback
      }); // end 'load' of SHARE_STORE
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$set(this, "slug", to.params.slug);
    this.requestShare();
    next();
  }
};
</script>

<style lang="sass">
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_fonts.sass'

	.mainTitle_share
		margin-bottom: 0 $i

	.singleShare
		// font-size: 21px
		&__meta
			font-size: $s29
			margin-top: $s6
			font-family: $decorativeFont
		&__content

			// * 
			// 	h2, h3, h4, h5, h6
			// 		margin-top: $s47
			// 		margin-bottom: $s29
			// 	article
			// 		margin-bottom: $s29
				
			// *:first-of-type
			// 	margin-top: 0 $i
</style>
