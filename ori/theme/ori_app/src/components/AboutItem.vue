<template>	
  <article 
    :class="{
      'about materialShadow fewRound whiteBackground' : true,
      [className]: className
  }">
    <h2 :class="['about__title parent row wrap v-end', modifier ? 'about__title_' + modifier : '']">{{ title }} 
      <blurry-image-loader 
        v-if="image"
        :src="image"
        :class-name="`aboutItemImage order_first fewRound materialShadow marginRight_11 ${imageClass}`"
        aria-hidden="true"
        role="presentation"
        relative
      />
    </h2>
    <!-- <p :class="['about__paragraph', modifier ? 'about__paragraph_' + modifier : '']"
		>
		</p> -->
    <slot/>
  </article>
</template>

<script>
export default {
  name: "AboutItem",
  props: {
    title: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: false,
      default: ""
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
    },
    image: {
      type: String,
      required: false,
      default: ""
    },
    imageClass: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="sass">
	@import './../styles/conf/_helpers.sass'
	@import './../styles/conf/_breakpoints.sass'
	@import './../styles/conf/_sizes.sass'
	$i: !important

	.about
		max-width: em(523)
		margin-bottom: ($s29 + $s11)
		padding-bottom: ($s47 + $s11) $i
		border-left: 8px solid #941857;
				
		@include breakpoint($sm-less)
			max-width: calc(50% - #{29.127px / 2});

		@include breakpoint($xs)
			max-width: none
		&__title
			margin-left: -4px

	
</style>
