<template>
	<section class="shares parent row wrap h-between">
		<transition appear 
			name="fade" 
			v-for="share in shares">
			<share-preview 
				className="littleChild"
				:title="share.title"
				:announce="share.announce"
				:published="moment(share.published_date).locale('ru').format('LL')"
				:image="share.img"
				:url="`/share/${share.slug}/`"
			/>
		</transition>
	</section>
</template>

<script>
	import SharePreview from '@/components/SharePreview';
	import MainTitle from '@/components/MainTitle';
	import {SHARES_STORE} from '@/constants/shares';
	import moment from 'moment';
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
  	    	MainTitle
	    },
	    mixins: [],
	    data: () => ({
	    	shares: [],
	    	requesting: false,

	    }),
	    beforeCreate() {
	    },
	    created() {
	    },
	    beforeMount () {
	    },
	    mounted() {
	    	
    		const success = shares => {
				this.$set(
					this,
					'shares',
					shares
				);

				this.$set(
					this,
					'shares',
					shares
				);

				console.log('set shares', this.shares);
				this.$store.dispatch('dump', { 
					key: SHARES_STORE,
					value: this.shares
				});
    		};

    	 	this.$store.dispatch(
    			'shares/fetchShares',
    			{
    				success
    			}
    		);
	    	
	    },
	    methods: {
	    	moment
	    },
	    beforeUpdate() {
	    },
	    updated() {
	    	console.log(this.$store.state.shares.isRequesting);
	    },
	    beforeDestroy() {
	    }
	};
</script>

<style lang="sass" scoped>

	
</style>