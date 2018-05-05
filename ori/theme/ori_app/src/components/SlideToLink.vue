<template>
  <a 
    :class="{
      'darkenLink': true, 
      'slideTo': true,
      [`slideToLink_${modifier}`]: modifier, 
      [className]: className 
    }"
    :href="selector"
    @click="gogo"
  >
    <slot/>
  </a>
</template>

<script>
import { slideTo } from "@/constants/pureFunctions";

export default {
  name: "SlideToLink",
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
    selector: {
      type: String,
      required: true
    },
    offset: {
      type: Number,
      required: false,
      default: 0
    }
  },
  methods: {
    gogo(event) {
      event.preventDefault();
      slideTo({
        selector: this.selector,
        offset: this.offset
      });
    }
  }
};
</script>

<style lang="sass" scoped>
	
</style>
