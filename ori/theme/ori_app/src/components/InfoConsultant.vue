<template>
	<li class="refferalConsultant" v-if="!$store.state.personalRoom.referralConsultantOpened || isInfoShown">
			<transition name="fadeTranslateFromTop" appear>
				<article v-if="isInfoShown"
						class="pointer refferalConsultantInfo"
						@click="switchDisplayInfoState"
				>	
						<h3 class="refferalConsultantInfo__title">
								{{ `${consultant.first_name} ${consultant.last_name}${consultant.middle_name ? ' '  + consultant.middle_name : ''}`}}
						</h3>
					<fade-translate-transition-group
						:duration="500"
					>
						<li :key="0" 
							:data-index="0"
							class="topMargin_18"
							v-if="consultant.consultant_num"
						>
							<span class="normalWeight">Номер консультанта:</span> {{consultant.consultant_num}}
						</li>
						<li :key="1" 
							class="topMargin_18"
							v-if="consultant.email"
							:data-index="1"
						>
							<span class="normalWeight">Email:</span> {{consultant.email}}
						</li>
						<li :key="2" 
							class="topMargin_18"
							v-if="consultant.phone_number"
							:data-index="2"
						>
							<span class="normalWeight">Номер телефона:</span> {{consultant.phone_number}}
						</li>
						<li :key="3" 
							class="topMargin_18"
							v-if="consultant.city"
							:data-index="3"
						>
							<span class="normalWeight">Город:</span> {{consultant.city}}
						</li>
						<li :key="4" 
							class="topMargin_18"
							v-if="consultant.region"
							:data-index="4"
						>
							<span class="normalWeight">Почтовы индекс:</span> {{consultant.region}}
						</li>
						
					</fade-translate-transition-group>
				</article>
		</transition>
		<transition name="fadeTranslateToTop" appear>
			<div v-if="!isInfoShown" class="consultantPreview parent row v-centered h-between wrap">	
				<span class="spacing_12 consultantPreview__name marginBottom_xxs-11">	
					{{ `${consultant.first_name} ${consultant.last_name}` }} 
					{{ `${consultant.consultant_num ? `— ${consultant.consultant_num}` : ''}` }}
				</span>
				
				<base-button unstyled
					className="burgundColor underline zeroTopMargin consultantPreview__button marginBottom_xxs-11 fullWidth_xxs"
					:action="switchDisplayInfoState"
				>
					Подробнее
				</base-button>
			</div>
		</transition>
	</li>
</template>

<script>
	import BaseButton from '@/components/BaseButton';
	import FadeTranslateTransitionGroup from '@/components/FadeTranslateTransitionGroup';


	export default {
		name: "InfoConsultant",
		props: {
			consultant: {
				type: Object,
				required: true
			},
			className: {
				type: String,
				required: false,
				default: null
			},
			modifier: {
				type: String,
				required: false,
			},
			index: {
				type: Number,
				required: true
			},
		},
  	    components: {
  	    	BaseButton,
  	    	FadeTranslateTransitionGroup
	    },
	    mixins: [],
	    data: () => ({
	    	isInfoShown: false
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
	    	someConsultantIsNotOpened() {
	    		console.log(this.$store);
	    		console.log(this.$store.state.personalRoom);
				return !this.$store.state.personalRoom.referralConsultantOpened;
	    	},
	    	consultantId() {
	    		return `consultant_${this.index}`;
	    	}
	    },
	    methods: {
	    	switchDisplayInfoState() {
	    		this.$set(
	    			this,
	    			'isInfoShown',
	    			!this.isInfoShown
	    		);
	    		this.$store.dispatch(
	    			'personalRoom/changeInfoConsultantState', 
	    			this.isInfoShown
	    		);
	    	}
	    },
	    beforeUpdate() {
	    },
	    updated() {
	    },
	    beforeDestroy() {
	    }
	};
</script>

<style lang="sass" scoped>
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_breakpoints.sass'
	.refferalConsultant
		margin-top: $s18
		&:not(:last-of-type) .consultantPreview 
			@include breakpoint($xxs)
				border-bottom: 1px solid #E0E0E0
	.consultantPreview 
		@include breakpoint($xxs)
			justify-content: center
		&__name
		&__button
			@include breakpoint($xxs)
				order: -1

	.referralConsultantsLitter
		transition: all .5s cubic-bazier(0.6, 0.0, 0.2, 1)

</style>