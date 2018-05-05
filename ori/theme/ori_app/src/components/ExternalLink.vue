
<template>
  <a 
    :class="{
      'externalLink': !isCustomStyles,
      [`externalLink_${modifier}`]: modifier,
      [className]: className
    }"
    :href="to"
    @click="gogo"
  >
      
    <slot/>
    <i 
      v-if="isIconShown" 
      :class="`externalLink__icon fas fa-external-link-alt ${iconClass}`"/>
      
  </a>
</template>

<script>
import { notFollow } from "@/constants/pureFunctions";

export default {
  name: "ExternalLink",
  props: {
    isCustomStyles: {
      type: Boolean,
      required: false,
      default: false
    },
    iconClass: {
      type: String,
      required: false,
      default: ""
    },
    showIcon: {
      type: String,
      required: false,
      default: ""
    },
    to: {
      type: String,
      required: true
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    },
    className: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    isIconShown() {
      switch (this.showIcon) {
        case "hide":
          return false;
        default:
          return true;
      }
    }
  },
  methods: {
    gogo(event) {
      notFollow(event, this.$el.href);
    }
  }
};
</script>

<style lang="sass">
	@import '../styles/conf/_colors.sass'

	.externalLink
		display: inline-block
		// &:hover, &:focus, &:active
		// 	color: $burgund
</style>
