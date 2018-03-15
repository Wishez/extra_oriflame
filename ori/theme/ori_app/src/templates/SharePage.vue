<template>
	<article class="singleShare parent column">
		<!-- <transition  appear name="fade"> -->
			<content-preloader v-if="Object.keys(share).length === 0" />
		<!-- </transition> -->
		<transition  appear name="fade">
			<main-title modifier="share" v-if="share.title">
				{{ share.title }}
			</main-title>

		</transition>
		<transition  appear name="fade">
			<div v-if="share.published_date" class="fullWidth singleShare__meta parent centered">
				<time :datetime="transformDate(share.published_date, 'L'
				)">
					{{ transformDate(share.published_date) }}
				</time>
			</div>
		</transition>
		<transition appear name="slowFade">
			<div v-html="share.text" class="singleShare__content"/>
		</transition>
		
	</article>
</template>

<script>
	import ContentPreloader from '@/components/ContentPreloader';
	import MainTitle from '@/components/MainTitle';
	import {SHARE_STORE, SHARES_STORE} from '@/constants/shares';
	import {transformDate} from '@/constants/pureFunctions';

	export default {
		name: "SharePage",
		props: {
			className: {
				type: String,
				required: false,
				default: null
			},
			modifier: {
				type: String,
				required: false,
			},
		},
  	    components: {
  	    	MainTitle,
  	    	ContentPreloader
	    },
	    data: () => ({
	    	share: {
	    		title: '',
	    		text: '',
	    		img: null
	    	}
	    }),
	    mounted() {
	    	this.requestShare();
	    },
	    computed: {
	    	slug() {
	    		return localStorage.single_share_slug;
	    	},
	    	
	    },
	    methods: {
	    	transformDate,
	    	fetchAndDumpShare(share, silent=false) {
	    		const success = share => {
					this.$set(
						this,
						'share',
						share
					);
					
					this.$store.dispatch('dump', { 
						key: SHARE_STORE,
						value: this.share
					});
	    		};

				this.$store.dispatch(
	    			'shares/fetchShare',
	    			{
	    				success,
	    				silent,
	    				slug: this.slug
	    			}
	    		);
	    	},
	    	requestShare() {
				const loadShareCallback = share => {
    				let silent = false;
    				// See a locale share's congruence of 
    				// a needed in the view.
					if (share && share.slug === this.slug) {
						// I need it, and i set silent mode and cache to the view's state the share. 
						silent = true;
						
						this.$set(
							this,
							'share',
							share
						);
					}
					// Next, i update DB.
    				this.fetchAndDumpShare(share, silent);
    			}; // end loadShareCallback

	    		this.$store.dispatch('load', {
	    			key: SHARE_STORE,
	    			callback: loadShareCallback
				}); // end 'load' of SHARE_STORE
    			
	    	}
	    }
	};
</script>

<style lang="sass">
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_fonts.sass'

	.mainTitle_share
		margin-bottom: 0 $i

	.singleShare
		// font-size: 21px
		&__meta
			font-size: $s29
			margin-top: $s6
			font-family: $decorativeFont
		&__content
			max-width: 800px
			margin: 0 auto 0
			font-size: $s29
			line-height: 1.5
			@include breakpoint($xs)
				font-size: $s25
			@include breakpoint($xxs)
				font-size: $s18
			li
				font-weight: 200
			* + *
				margin-top: $s29
			a:hover
				color: $burgund
				background-image: $darkenLinkUnderlineGradient
			// * 
			// 	h2, h3, h4, h5, h6
			// 		margin-top: $s47
			// 		margin-bottom: $s29
			// 	article
			// 		margin-bottom: $s29
				
			// *:first-of-type
			// 	margin-top: 0 $i
</style>