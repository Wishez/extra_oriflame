<template>
  <base-button
    :modifier="modifier"
    :label="label"
    :class-name="className"
    :action="makeAction(direction)"
    unstyled
  >

    <base-icon
      :id="id"
      :icon="`far fa-hand-point-${direction}`"
      modifier="pink"
      class-name="hover-color_white hover-backgroundColor_burgund darkGrayColor"
    />
  </base-button>
</template>

<script>
export default {
  name: "ArrowButton",
  props: {
    id: {
      type: String,
      required: false,
      default: ""
    },
    className: {
      type: String,
      required: false,
      default: ""
    },
    makeAction: {
      type: Function,
      require: true,
      default: function(direction) {
        return () => {
          console.log(direction);
        };
      }
    },
    direction: {
      type: String,
      required: true,
      default: "up",
      validator: function(value) {
        const directions = ["up", "down", "left", "right"];
        return directions.indexOf(value) !== -1;
      }
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/conf/_colors.sass'
@import '../styles/conf/_sizes.sass'
@import '../styles/conf/_breakpoints.sass'


</style>
