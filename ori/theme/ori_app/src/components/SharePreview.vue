<template>
  <article 
    :class="{
      'sharePreview overflowHidden whiteBackground fewRound materialShadow parent column nowrap fourWithPadding height_full paddingBottom_47': true,
      ['sharePreview_' + modifier]: modifier, 
      [className]: className
  }">
    <h2 class="fullWidth sharePreview__title marginTop_18 padding_horizontal marginLeft_heading">
      <internal-link 
        :to="url"
        class="darkenLink sharePreview__title_link disableUnderline disableLinkHover" 
      >
        {{ title }}
      </internal-link>
    </h2>
    <blurry-image-loader 
      v-if="image" 
      :src="image" 
      modifier="sharePreview" 
      relative
    />
    <div class="sharePreview__meta marginTop_18 text_left padding_horizontal fullWidth">
      <time :datetime="published">{{ published }}</time>
    </div>
    <p 
      class="cropedText cropedText_6 sharePreview__announce padding_horizontal" 
      v-html="announce" />
  </article>
</template>

<script>
import siteApi from "@/constants/conf";

export default {
  name: "SharePreview",

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
    title: {
      type: String,
      required: true
    },
    published: {
      type: String,
      required: true
    },
    announce: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="sass">
@import '../styles/conf/_colors.sass'
@import '../styles/conf/_sizes.sass'
@import '../styles/conf/_breakpoints.sass'

.imageContainer_sharePreview
	order: -1
	height: em(203)		
	.progressive-image-main
		will-change: transform
		transition: transform .3s ease-in
		&-wrapper

.shareContainer 
	max-width: 50ch

	@supports (display: grid)
		padding-left: 0
		padding-right: 0
		margin-bottom: 0

	@include breakpoint($xxs)
		padding: 0
	
.sharePreview
	&:hover 
		.progressive-image-main
			transform: scale(1.04)
		.sharePreview__title_link
			color:  lighten($burgund, 5%) $i
	&__meta
		color: #9E9E9E

</style>
