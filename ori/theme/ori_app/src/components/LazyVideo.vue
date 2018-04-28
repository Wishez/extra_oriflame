<template>
	<li @click="loadVideo" 
		:aria-labelledby="'video_' + src"
		:class="['youtube baseChild removeOffsetWithGrid', modifier ? 'youtube_' + modifier : null, className]"
		tabindex="0"

	>
		<transition name="fade">
			<blurry-image-loader 
				v-if="!showVideo"
				modifier="relative"
				className="materialShadow fewRound"
				:src="'https://img.youtube.com/vi/' + src + '/sddefault.jpg'"
			/>
	    </transition>
	    <transition name="fade">
			<button v-if="!showVideo" class="play-button"></button>
		</transition>
		<transition name="fade">
			<iframe 
				v-if="showVideo"
				frameborder="0"
				class="materialShadow fewRound"
				:src="'https://www.youtube.com/embed/'+ this.src +'?rel=0&showinfo=0&autoplay=1'"
				allowfullscreen=""
			/>
		</transition>
		<div hidden :id="'video_' + src">
			{{ label }}
		</div>
	</li>
</template>

<script>
	import BlurryImageLoader from './BlurryImageLoader'

	export default {
		name: "LazyVideo",
		data() {
			return {
				showVideo: false
			}
		},
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
			src: {
				type: String,
				required: true
			},
			label: {
				type: String,
				required: true
			}	
		},
		methods: {
			loadVideo(event) {
				this.$set(this, 'showVideo', true);
				// const iframe = document.createElement( 'iframe' )
		  //     	const element = this.$el;

		  //     	iframe.setAttribute( 'frameborder', '0' )
		  //     	iframe.setAttribute( 'allowfullscreen', '' )
		  //     	// iframe.setAttribute( 'src', 'https://www.youtube.com/embed/'+ this.src +'?rel=0&showinfo=0&autoplay=1' )
		  //     	iframe.classList.add('materialShadow fewRound');		

		  //     	element.innerHTML = '';
		  //     	element.appendChild( iframe )
			}
		},
		components: {
			BlurryImageLoader
		}
	};
	
</script>

<style lang="sass">
	@import '../styles/conf/_breakpoints.sass'
	@import "~susy/sass/_susy.scss"
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_colors.sass'

	.youtube:nth-last-child(2):nth-child(4n) 
		min-width: span(5)

	.youtube 
		min-height: em(199.602093256156224)
		position: relative
		overflow: hidden
		cursor: pointer
		margin-bottom: 	$s25
		padding: 0 $s25

			
		min-width: 30%
		max-width: span(8)

		@supports (display: grid)
			margin-bottom: 0
			padding-left: 0
			padding-right: 0
			margin-top: 0

		@include breakpoint($sm-up)
			// max-height: em(199.602093256156224)
		@include breakpoint($sm-less) 
			// padding-bottom: 33.25%
			min-width: 50%
			margin-bottom: 	$s47
	  	 
		@include breakpoint($xxs) 
			min-width: 100%
			// padding-bottom: 56.25%

	.youtube img 
		width: 100%
		top: 0
		left: 0
		opacity: 0.7
		height: 100%

	.youtube .play-button 
		width: 90px
		height: 60px
		background-color: #333
		box-shadow: 0 0 30px rgba( 0,0,0,0.6 )
		z-index: 1
		opacity: 0.8
		border-radius: 6px

	.youtube .play-button:before 
		content: ""
		border-style: solid
		border-width: 15px 0 15px 26.0px
		border-color: transparent transparent transparent #fff

	.youtube img,
	.youtube .play-button 
		cursor: pointer

	// .youtube img,
	// .youtube iframe,
	.youtube .play-button,
	.youtube .play-button:before 
		position: absolute

	.youtube .play-button,
	.youtube .play-button:before 
		top: 50%
		left: 50%
		transform: translate3d( -50%, -50%, 0 )

	.youtube iframe 
		height: 100%;
		width: calc(100% - 3rem)
		top: 0
		left: 1.5rem
		position: absolute
		
		@supports (display: grid)
			width: 100%
			left: 0
</style>