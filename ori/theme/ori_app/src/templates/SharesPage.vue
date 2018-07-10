<template>
  <section class="shares parent row wrap h-between">
    <main-title>Последние акции</main-title>
    <content-preloader v-if="!shares.length" />
    <transition 
      name="fade">
      <p 
        v-if="!shares.length && isNotShares"
        class="fullWidth textCentered">
        Акций нет, но мы их скоро добавим.
      </p>
    </transition>
    <transition-group
      v-if="shares.length"
      tag="div"
      name="fade" 
      class="sharesList parent row wrap h-between display_grid gap_increased grid_base-columns"
    >
      <div 
        v-for="(share, index) in shares"
        :key="index" 
        class="baseChild marginBottom_47 shareContainer container grid_four fullWidth_xxs notRestAlone halfWidth_xs removeOffsetWithGrid"> 
        <share-preview 
          :title="share.title"
          :announce="share.announce"
          :published="transformDate(share.published_date)"
          :image="share.img"
          :url="`/share/${share.slug}/`"
        />
      </div>
    </transition-group>
  </section>
</template>

<script>
import SharePreview from "@/components/SharePreview";

import { SHARES_STORE } from "@/constants/shares";
import { transformDate, timeout } from "@/constants/pureFunctions";

export default {
  name: "SharePage",
  components: {
    SharePreview
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
    shares: [],
    requesting: false,
    sharesQuantityToShow: 6,
    loaded: false,
    isNotShares: false
  }),
  mounted() {
    this.requestShares();
    timeout(() => {
      if (!this.loaded || this.shares.length) {
        this.isNotShares = true;
      }
    }, 3000);
  },
  methods: {
    transformDate,
    requestShares() {
      const success = shares => {
        this.$set(this, "shares", this.shrinkShares(shares));

        this.loaded = true;

        const namedShares = this.shares.reduce(
          (composedShares, share) => ({
            ...composedShares,
            [share.slug]: share
          }),
          {}
        );
        this.$store.dispatch("dump", {
          key: SHARES_STORE,
          value: namedShares
        });
      };

      this.$store.dispatch("load", {
        key: SHARES_STORE,
        callback: shares => {
          let silent = false;

          if (shares) {
            silent = true;

            this.$set(this, "shares", this.shrinkShares([...shares]));
          }

          this.$store.dispatch("shares/fetchShares", {
            success,
            silent
          });
        }
      });
    },
    shrinkShares(shares) {
      return shares.slice(0, this.sharesQuantityToShow);
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/conf/_breakpoints.sass'
@import '../styles/conf/_sizes.sass'
@import '../styles/conf/_colors.sass'

.shareContainer

.sharesList
	min-width: 100%
	
	@include breakpoint($md-up)
		@supports (display: grid)
			grid-template-columns: repeat(auto-fit, (30ch, max-content))

			


</style>
