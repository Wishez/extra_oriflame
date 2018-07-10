<template>
  <div class="callback fixed positionLeft_47 positionLeft_xs-18 positionBottom_29">
    <transition 
      name="fadeTranslateToTop"
      appear 
    >
      <callback-form 
        v-if="isFormShown" 
        :on-blur-form="changeDisplayStateOfForm" />
    </transition>
    <callback-button :action="changeDisplayStateOfForm" />
  </div>
</template>

<script>
import CallbackForm from "@/components/CallbackForm";
import CallbackButton from "@/components/CallbackButton";

export default {
  name: "TheCallback",
  components: {
    CallbackForm,
    CallbackButton
  },
  mixins: [],
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
    isFormShown: false
  }),
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  methods: {
    changeDisplayStateOfForm() {
      this.$set(this, "isFormShown", !this.isFormShown);
    }
  }
};
</script>

<style lang="sass" scoped>
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'
	.litter_callback 
		padding-top: $s18 + $s6 $i
		padding-bottom: $s29 + $s6 $i
	.callback

		@include breakpoint($xs)
			bottom: em(84)
			
	
</style>
