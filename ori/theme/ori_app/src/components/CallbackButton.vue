<template>
  <base-button 
    :action="action"
    label="Открыть оформление консультации"
    unstyled
    class-name="callbackButton fewRound materialShadow"
  >
    <blurry-image-loader 
      :src="callbackIcon" 
      alt="Закзать обратный вызов"
      class-name="callbackButton__icon"
      relative
    />
  </base-button>
</template>

<script>
import callbackIcon from "./../assets/images/icons/callback.png";

export default {
  name: "CallbackButton",

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
    },
    action: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    callbackIcon
  }),
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  methods: {}
};
</script>

<style lang="sass" scoped>
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'

	.callbackButton
		padding: $s11 $s6 0
		background-color: #fff $i

		&__icon
			max-width: $s47

</style>
