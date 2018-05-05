<template>
  <div 
    :class="{
      [className]: className,
      'relative': relative,
  }">
    <transition 
      name="fadeTranslateToTop"
      appear 
    >
      <user-hint	
        v-if="isHintShown"
        :id="hintId" 
        :class-name="`absolute positionBottom_full-and-offset positionLeft_zero ${classHint}`"

      >
        <slot />
      </user-hint>
    </transition>
    <info-icon 
      :on-click="changeStateOfHint"
      :on-blur="onBlur"
      class-name="font-size_25 font-size_xs-18 marginTop_zero-force" 
      label="Подсказать подсказку" 
    />
  </div>
</template>

<script>
import InfoIcon from "@/components/InfoIcon";
import UserHint from "@/components/UserHint";
import { slideTo, timeout, ID } from "@/constants/pureFunctions";

export default {
  name: "UserNotification",
  components: {
    InfoIcon,
    UserHint
  },
  mixins: [],
  props: {
    className: {
      type: String,
      required: false,
      default: ""
    },
    classHint: {
      type: String,
      required: false,
      default: ""
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    },
    relative: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: () => ({
    isHintShown: false
  }),
  computed: {
    hintId() {
      return `hint${ID()}`;
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {
    onBlur() {
      this.$set(this, "isHintShown", false);
    },
    changeStateOfHint() {
      this.$set(this, "isHintShown", !this.isHintShown);

      if (this.isHintShown) {
        timeout(() => {
          slideTo({
            selector: `#${this.hintId}`,
            offset: 25
          });
        }, 420);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
	
</style>
