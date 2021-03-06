
<template>
  <li 
    role="presentation" 
    class="navLinkContainer" 
    @click="go" 
    @mouseenter="highlight">
    <router-link 
      v-if="!isExternalLink"
      :class="{ 
        'navLink parent centered nowrap column': true, 
        navLink_mobile: isPageScrolled || isMobile
      }"
      :to="href"
      :data-index="index"
      :aria-describedby="isActive ? 'active_page' : null"
      active-class="navLink_active"
      exact
    >
      <base-icon 
        v-if="icon" 
        :icon="icon" 
        modifier="navigation" 
      />
      <slot/>
    </router-link>
    	
    <external-link
      v-if="isExternalLink"
      :class-name="`navLink parent centered nowrap column${isPageScrolled || isMobile ? ' navLink_mobile' : ''}`"
      :data-index="index"
      :aria-describedby="isActive ? 'active_page' : null"
      :to="href"
      show-icon="hide"
      is-custom-styles
    >
      <!-- iconClass="absolute navLink__externalIcon" -->
      <base-icon 
        v-if="icon" 
        :icon="icon" 
        modifier="navigation" 
      />
      <slot/>
    </external-link>
  </li>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import ExternalLink from "@/components/ExternalLink";

import {
  setTabPosition,
  doBy,
  doByYScroll,
  listen,
  slideTo,
  timeout
} from "./../constants/pureFunctions";

export default {
  components: {
    BaseIcon,
    ExternalLink
  },
  props: {
    href: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    index: {
      type: [String, Number],
      required: true
    },
    isExternalLink: {
      type: Boolean,
      required: false,
      default: false
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      isPageScrolled: false
    };
  },
  computed: {
    checkCurrenLocation() {
      return () => {
        let currentLocation = window.location.pathname;

        const isHash = currentLocation.match(/#[^\/]/);

        if (isHash) {
          const index = isHash.index;
          currentLocation = currentLocation.slice(0, index);

          hashResource = currentLocation.slice(index);

          window.location.hash = currentLocation;

          slideTo(hashResource);
        }

        return this.href === currentLocation;
      };
    },
    isActive: {
      get: function() {
        return this.checkCurrenLocation();
      },
      set: function(newValue) {}
    },
    tab() {
      return document.querySelector(".activeTab");
    }
  },
  mounted() {
    const baseScrollOffset = this.$store.state.baseOffsetForTransform;

    timeout(() => {
      this.$set(
        this,
        "isPageScrolled",
        this.$store.state.rootElement.scrollTop > baseScrollOffset + 50
      );
    }, 10);

    listen({
      event: "scroll",
      callback: event => {
        this.$set(this, "isPageScrolled", this.$store.state.isPageScrolled);
      } // end callback
    }); // end listen
  },
  methods: {
    go(event) {
      if (this.$store.state.menuWasTransformed) {
        this.$store.state.animations.animateNavigationToDefaultState();
      }

      doBy({
        callback: () => {
          setTabPosition(this.tab, this.index);
        }
      });

      this.$set(
        this, // target
        "isActive", // prop
        this.checkCurrenLocation() // value
      );
    },
    highlight(event) {
      doBy({
        callback: () => {
          setTabPosition(this.tab, this.index, "translate");
        }
      }); // end doBy
    }
  }
};
</script>

<style lang="sass">
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'

	
	.activeTab
		height: 4px
		position: absolute
		bottom: 0
		z-index: 1
		left: 0
		background-color: $burgund
		min-width: 155px
		transition: transform .200s cubic-bezier(0.2, 0.0, 0.6, 1), left .150s cubic-bezier(0.2, 0.0, 0.6, 1)
		@include breakpoint($xs)
			display: none
	.navLink
		border-bottom-width: 4px
		border-bottom-style: solid
		border-bottom-color: $darkenGreen
		min-height: 70px
		background-color: #fff
		min-width: 155px
		background-image:  none
		font-weight: 300
		padding-top: .27777777777777777778em
		transition: background-color .3s ease-in
		position: relative
		overflow: hidden
		z-index: 0
		padding-bottom: $s6 / 1.618

		&::before, &::after
			content: ""
			width: 100%
			top: 0
			left: 0
			position: absolute
			transition: transform .3s ease-in-out
		
		&::before
			transform: translateY(-101%);
			z-index: -1
			background: $linkGradient
			height: 100%
			@include breakpoint($xs)
				content: none


		&:hover, &:focus, &:active
			background-image: none
			& .icon

			&:after, &:before
				transform: translate(0, 0)

		@include breakpoint($xs)	
			min-width: auto
			padding-top: .5rem
			transform: none $i
			background: transparent
			border-color: transparent
			border-style: solid 
			border-width: $s3
			color: $white

		@include breakpoint($xxs)
			font-size: (18em / 18)

		&_active, &:hover, &:focus, &:active
			color: $burgund
			transition: border .3s ease-in, background-color .3s ease-in
			@include breakpoint($xxs)
				color: $white
			& .iconBackground
				color: $darkGray $i
				background-color: $white $i
				// @include breakpoint($xxs)
				// 	font-size: (18em / 18)
		&_active
			&:after, &:before
				content: none
			// border-top-color: $burgund 
			&, &:hover, &:focus
				background: $linkGradient

				@include breakpoint($xxs)
					background: transparent

			@include breakpoint($xxs)
				background: transparent
				border-bottom-color: $pink
		&_mobile
			background: transparent
			border-color: transparent
			font-size: em(16)
			min-width: auto
			white-space: nowrap
			overflow: visible

			@include breakpoint($xs-up)
				padding: .5rem .5rem 0 $s25
				max-width: em(67.772816512, 16)
				color: $darkGray $i

			@include breakpoint($xs)
				color: $white $i

			&.navLink_active, &:hover, &:focus, &:active
				background: transparent
				@include breakpoint($xs-up)
					color: $burgund $i
				.iconBackground
					@include breakpoint($xs-up)
						color: $white $i
						background-color: $darkGray $i
						
			&:before
				content: none

			&.navLink_active				
				background: transparent 
				// border: 0

				@include breakpoint($xs-up)
					border-left-color: $burgund
					border-left-width: $s3
					border-left-style: solid
					// border-left: $s3 solid $burgund
				@include breakpoint($xs)
					border-top-color: $pink
					// border-top: $s3 solid $pink

		
	.navLinkContainer
		
		@include breakpoint($xs)
			flex-grow: 1

</style>
