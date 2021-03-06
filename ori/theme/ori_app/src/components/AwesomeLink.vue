<template>
  <router-link 
    :class="['disableLinkHover disableUnderline', containerClassName]" 
    :to="href">
    <span 
      :class="{
        awesomeButton: true,
        [className]: className,
        [`awesomeButton_${modifier}`]: modifier
      }"
      :data-title="content"
      :aria-label="label"
      @mousedown="down"
      @mouseleave="leave"
      @mousemove="move"
    />
  </router-link>
</template>

<script>
import {
  onMoveAwesomeButton,
  onLeaveAwesomeButton,
  onDownAwesomeButton
} from "./../constants/pureFunctions";

export default {
  name: "AwesomeLink",
  props: {
    href: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false,
      default: ""
    },
    modifier: {
      type: String,
      required: false,
      default: "pink"
    },
    containerClassName: {
      type: String,
      required: false,
      default: ""
    },
    content: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    docStyle() {
      return document.documentElement.style;
    },
    boundingClientRect() {
      return this.$el.getBoundingClientRect();
    }
  },
  methods: {
    move: function(event) {
      onMoveAwesomeButton(event, this.boundingClientRect, this.docStyle);
    },
    leave: function(event) {
      onLeaveAwesomeButton(event, this.boundingClientRect, this.docStyle);
    },
    down: function(event) {
      onDownAwesomeButton(event, this.boundingClientRect, this.docStyle);
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/conf/_colors.sass'
@import '../styles/conf/_sizes.sass'

.awesomeButton
  position: relative
  display: flex
  padding: 0 1.5rem
  justify-content: center
  align-items: center
  height: em(47)
  min-width: em(200)
  text-decoration: none
  text-align: center
  cursor: pointer
  user-select: none
  color: $darkGray
  z-index: 1
  max-width: em(200)

  &_green

    &::before
      background: $greenLinkGradient
    &::after
      // color: $white
  &_burgund

    &::before
      background: $burgundLinkGradient
    &::after
      color: $white

  &_white

    &::before
      background-color: $white

  &_pink

    &::before
      background: $linkGradient

  &::after
    position: relative
    display: inline-block
    content: attr(data-title)
    transition: transform .2s ease
    font-weight: bold
    letter-spacing: .01em
    will-change: transform
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    
    z-index: -1
    border-radius: 4px
    transition: box-shadow .5s ease, transform .2s ease
    will-change: transform
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px))
    
  &:hover::before
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3)

</style>
