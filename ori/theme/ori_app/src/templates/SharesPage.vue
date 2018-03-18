<template>
	<section class="shares parent row wrap h-between">
		<main-title>Последние акции</main-title>
		<!-- <transition :leave="''" appear name="fade"> -->
			<content-preloader v-if="!shares.length" />
		<!-- </transition> -->

		<transition appear 
			name="fade" 
			v-for="share in shares"
			:key="share.uuid">
			<share-preview 
				className="littleChild"
				:title="share.title"
				:announce="share.announce"
				:published="transformDate(share.published_date)"
				:image="share.img"
				:url="`/share/${share.slug}/`"
			/>
		</transition>
	</section>
</template>

<script>
	import SharePreview from '@/components/SharePreview';
	import ContentPreloader from '@/components/ContentPreloader';
	import MainTitle from '@/components/MainTitle';
	import {SHARES_STORE} from '@/constants/shares';
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
  	    	SharePreview,
  	    	MainTitle,
  	    	ContentPreloader
	    },
	    data: () => ({
	    	shares: [],
	    	requesting: false,
	    	sharesQuantityToShow: 6,
	    }),
	    mounted() {
    		this.requestShares();
	    },
	    methods: {
	    	transformDate,
	    	requestShares() {
	    		const success = shares => {
					this.$set(
						this,
						'shares',
						this.shrinkShares(shares)
					);
					
					const namedShares = this.shares.reduce(
							(composedShares, share) => ({
									...composedShares,
									[share.slug]: share
							}), 
							{}
						)				
					this.$store.dispatch('dump', { 
						key: SHARES_STORE,
						value: namedShares
					});
	    		};

	    		this.$store.dispatch('load', {
	    			key: SHARES_STORE,
	    			callback: shares => {
	    				let silent = false;

	    				if (shares) {
	    					silent = true;

	    					this.$set(
								this,
								'shares',
								this.shrinkShares([...shares])
							);
	    				}

	    				this.$store.dispatch(
			    			'shares/fetchShares',
			    			{
			    				success,
			    				silent
			    			}
			    		);
	    			}

	    		});
	    	},
	    	shrinkShares(shares) {
	    		return shares.slice(0, this.sharesQuantityToShow);
	    	}
	    },
	};
</script>