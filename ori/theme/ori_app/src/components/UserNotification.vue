<template>
	<div :class="{
		[className]: className,
		'relative': relative,
	}">
			<transition appear name="fadeTranslateToTop">
				<user-hint	:id="hintId" :className="`absolute positionBottom_full-and-offset positionLeft_zero ${classHint}`"

					v-if="isHintShown">
					<slot />
				</user-hint>
			</transition>
			<info-icon className="font-size_25 font-size_xs-18 marginTop_zero-force" 
				label="Подсказать подсказку" 
				:onClick="changeStateOfHint"
				:onBlur="onBlur"
			/>
		</div>
</template>

<script>
	import InfoIcon from '@/components/InfoIcon';
	import UserHint from '@/components/UserHint'
	import {slideTo, timeout, ID} from '@/constants/pureFunctions';

	export default {
		name: "UserNotification",
		props: {
			className: {
				type: String,
				required: false,
				default: null
			},
			classHint: {
				type: String,
				required: false,
				default: ''
			},
			modifier: {
				type: String,
				required: false,
			},
			relative: {
				type: Boolean,
				required: false,
				default: true
			}
		},
  	    components: {
  	    	InfoIcon,
	    	UserHint
	    },
	    mixins: [],
	    data: () => ({
	    	isHintShown: false
	    }),
	    beforeCreate() {
	    },
	    created() {
	    },
	    beforeMount () {
	    },
	    mounted() {
	    },
	    computed: {
	    	hintId() {
	    		return `hint${ID()}`
	    	}
	    },
	    methods: {
	    	onBlur() {
				this.$set(
	    			this,
	    			'isHintShown',
	    			false
	    		);
	    	},
	    	changeStateOfHint() {
	    		this.$set(
	    			this,
	    			'isHintShown',
	    			!this.isHintShown
	    		);
	    		
	    		if (this.isHintShown) {
	    			timeout(() => {
		    			slideTo({
		    				selector: `#${this.hintId}`,
		    				offset: 25
		    			});
	    			}, 420);
	    		}
	    	}

	    },
	};
</script>

<style lang="sass" scoped>
	
</style>