<template>
  <article 
    class="parent v-end ladderFold relative"
    @mouseenter="preventScrollPage"
    @mouseleave="allowScrollPage" 
  >
    <h2 
      id="ladder" 
      class="baseChild ladderFold__title parent centered darkGrayBackground textCentered_xs whiteColor relative" 
    >
      Карьерная лестница
      <arrow-button 
        id="downArrowButton"
        :make-action="onClickArrowButton"
        direction="down" 
        class-name="static_xs font-size_xs-41  positionTop_11 positionRight_47 absolute marginRight_xs-18" 
        modifier="ladder" 
        label="Посмотреть предыдущие звания" 
      />
      <arrow-button 
        id="upArrowButton"
        :make-action="onClickArrowButton"
        direction="up" 
        class-name="absolute font-size_xs-41 static_xs  positionBottom_11 positionRight_11 marginLeft_xs-18 marginBottom_xs-11 marginTop_zero"
        modifier="ladder"
        label="Посмотреть следующие звания"
      />
    </h2>
    <div/>
    <user-notification 
      :relative="false"
      class-name="absolute index_big positionLeft_negative-18 positionBottom_negative-18 positionLeft_zero positionLeft_xs-77 positionLeft_xxs-47" 
      class-hint="ladderHint"
    >
      <p>Для прокрутки лестницы, используйте колёсико мышки, либо кнопки вверх и вниз на чёрной коробке.</p>
      <p>Для открытия звания достаточно кликнуть по нему. Для сокрытия, можно кликнуть на пустое пространство, либо на открытый элемент.</p>
    </user-notification>
    <fade-translate-transition-group 
      id="ladder"
      :class="{
        'ladder index_positive unstyledList absolute zeroTopMargin': true,
        'pseudo_elements pseudo_elements--absolute': true,
        'ladder_watch': canWatchForSteps
      }"
      :delay="18"
      :duration="370"
			
    >
      <ladder-step 
        v-for="(step, index) in ladder" 
        v-if="range.indexOf(index) !== -1"
        :title="step.title"
        :key="index"
        :index="index"
        :achieve="step.achieve"
        :benifit="step.benifit"
        :income="step.income"
        :z-index="range[0] + 3 - index"
        :discount="step.discount"
      />
      <li 
        :key="ladder.length"
        :index="ladder.length" 
        aria-hidden="true" 
        class="pseudo_elements pseudo_elements--absolute absolutePseusoElements ladder__walls absolute perspective"
      />
    </fade-translate-transition-group>
  </article>
</template>

<script>
import LadderStep from "./LadderStep";

import ArrowButton from "@/components/ArrowButton";
import UserNotification from "@/components/UserNotification";

import { ladder } from "@/constants/business";
import { listen, throttle, timeout, prevent } from "@/constants/pureFunctions";

export default {
  name: "TheLadder",
  components: {
    LadderStep,
    ArrowButton,
    UserNotification
  },
  data: () => ({
    ladder: ladder.reverse(),
    range: [0, 1, 2],
    canWatchForSteps: true,
    canScrollingSteps: true
  }),
  computed: {
    ladderElement() {
      return document.getElementById("ladder");
    },
    navigationStyles() {
      return document.getElementById("navigationList").style;
    },
    root() {
      return this.$store.state.rootElement;
    },
    rootStyles() {
      return this.root.style;
    }
  },
  mounted() {
    const ladder = this.ladderElement;

    listen({
      element: ladder,
      event: "wheel",
      callback: throttle(this.onScroll)
    });
  },
  methods: {
    // I need scroll position for prevent scrolling
    // when an user scrolls the ladder.
    noteLastDocumentScrollPosition() {
      this.$set(this, "lastDocumentScrollPosition", this.root.scrollTop);
    },
    preventScrollPage() {
      this.$store.dispatch("business/preventScrollPage", {
        isMobile: this.$store.state.isUserFromMobileOrientation,
        rootStyles: this.rootStyles,
        navigationStyles: this.navigationStyles
      });
    },
    allowScrollPage() {
      this.$store.dispatch("business/allowScrollPage", {
        isMobile: this.$store.state.isUserFromMobileOrientation,
        rootStyles: this.rootStyles,
        navigationStyles: this.navigationStyles
      });
    },
    // Make delay to prevent an user's fast scrolling the ladder.
    disableWatchState(delay = 1500) {
      if (this.canWatchForSteps) {
        this.$set(this, "canWatchForSteps", false);

        timeout(() => {
          this.$set(this, "canWatchForSteps", true);
        }, delay);
      }
    },
    onClickArrowButton(direction) {
      return () => {
        const isDownDirection = direction === "down";

        this.onTouch(event, isDownDirection);
      };
    },
    onScroll(event) {
      const delta = -event.deltaY;
      const isDownDirection = delta < 0;

      // If condition is true, then the act will be for down direction.
      this.onTouch(event, isDownDirection);
    },
    // Abstract event for change steps' positions in the fold by scroll or touch.
    onTouch(event, condition) {
      if (!this.$store.state.business.openedStep) {
        if (condition) {
          // Go down
          this.decreseRange();
        } else {
          // Go up
          this.increaseRange();
        }

        this.disableWatchState();

        prevent(event);
      }
    },
    increaseRange() {
      const range = this.range;

      if (range[2] <= this.ladder.length) {
        this.$set(
          this,
          "range",
          range.reduce(
            (rangeNumbers, number) => [...rangeNumbers, number + 1],
            []
          )
        );
      }
    },
    decreseRange() {
      const range = this.range;
      if (range[0] !== 0) {
        this.$set(
          this,
          "range",
          this.range.reduce(
            (rangeNumbers, number) => [...rangeNumbers, number - 1],
            []
          )
        );
      }
    }
  }
};
</script>

<style lang="sass">
@import './../styles/conf/_sizes.sass'
@import './../styles/conf/_colors.sass'
@import './../styles/conf/_breakpoints.sass'
$baseHeight: 80
$baseXsHeight: 109.656417116416
.ladderHint
	@include breakpoint($xxs)
		width: 83vw
		margin-left: -$s47
.button_ladder
	font-size: em(18, 25)
	$fs-xxs-11: em(11, 34.8) 
	&:first-of-type
		order: -1
		@include breakpoint($xs)
			margin-top: em(-3.7773256768024697908)
		@include breakpoint($xxs)
			margin-left: $fs-xxs-11
			margin-right: $fs-xxs-11
	&:last-of-type

		@include breakpoint($xs)
			// justify-self: flex-end
			align-self: flex-end
		@include breakpoint($xxs)
			margin: 0 $fs-xxs-11 $fs-xxs-11
	@include breakpoint($xs)
		font-size: em(25, 25)
	@include breakpoint($xxs)
		font-size: em(34.8, 25)
	

.ladderFold
	margin-top: $s144//em($baseHeight * 4)
	&__title
		height: em($baseHeight, 29)
		padding-right: em(47, 29)
		padding-bottom: .5rem
		box-shadow: 0 -9px 15px -10px rgba(0,0,0,.4), 0 6px 4px -2px rgba(0,0,0,.8)
		z-index: 10
		@include breakpoint($xs)
			height: em($baseXsHeight, 29)
			font-size: em(32, 25)
			align-items: flex-start
			padding-top: em(25.89, 32)
			padding-bottom: 0
			padding-right: 0
		@include breakpoint($xxs)
			height: em($baseXsHeight, 23.5)
			// padding-top: em(11, 32)
			
	
.ladder
	bottom: 0
	min-width: 90%
	left: (100% - 90) / 2
	height: em($baseHeight * 2.5)
	
	@include breakpoint($xs) 
		font-size: em(18, 25)
		height: em($baseXsHeight * 2.5)
	&:after, &:before
	&:after
		width: 80.75%
		z-index: -1
		height: em(90)
		bottom: em(110.25)
		border-radius: 2px
		font-size: 18px
		left: 9.5%
		background-color: lighten($darkGray, 7.5%)
		@include breakpoint($xxs)
			height: em(31)
	// &:before
	// 	background: linear-gradient(to top, darken($darkGray, 5%) 0% , lighten($darkGray, 5%) 99%, $darkGray, 99%, $darkGray, 100%),$darkGray
	&__walls
		height: 100%
		width: 110%
		left: -5%
		top: 0
		z-index: 0
		&:after, &:before
			border-radius: 2px
			bottom: 0
			height: 36%//em(115.55, 25)
			width: 80%
			top: auto
			background: linear-gradient(to right,  $darkGray 0%, lighten($darkGray, 5%) 0%) $darkGray
			z-index: -1
		&:before
			left: -33.5%
			transform: rotateY(80deg) skewY(-7.5deg) translateY(-55px)
		&:after
			right: -33.5%
			transform: rotateY(-80deg) skewY(7.5deg) translateY(-55px)
	&::-webkit-scrollbar
		width: 0

</style>
