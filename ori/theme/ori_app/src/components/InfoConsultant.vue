<template>
  <li 
    v-if="!$store.state.personalRoom.referralConsultantOpened || isInfoShown"
    class="refferalConsultant" 
  >
    <transition 
      name="fadeTranslateFromTop" 
      appear>
      <article 
        v-if="isInfoShown"
        class="pointer refferalConsultantInfo"
        @click="switchDisplayInfoState"
      >	
        <h3 class="refferalConsultantInfo__title">
          {{ `${consultant.first_name} ${consultant.last_name}${consultant.middle_name ? ' ' + consultant.middle_name : ''}` }}
        </h3>
        <fade-translate-transition-group
          :duration="500"
        >
          <li 
            v-if="consultant.consultant_num"
            :key="0" 
            :data-index="0"
            class="topMargin_18"
          >
            <span class="normalWeight">Номер консультанта:</span> {{ consultant.consultant_num }}
          </li>
          <li 
            v-if="consultant.email"
            :key="1" 
            :data-index="1"
            class="topMargin_18"
          >
            <span class="normalWeight">Email:</span> {{ consultant.email }}
          </li>
          <li 
            v-if="consultant.phone_number"
            :key="2" 
            :data-index="2"
            class="topMargin_18"
          >
            <span class="normalWeight">Номер телефона:</span> {{ consultant.phone_number }}
          </li>
          <li 
            v-if="consultant.city"
            :key="3" 
            :data-index="3"
            class="topMargin_18"
          >
            <span class="normalWeight">Город:</span> {{ consultant.city }}
          </li>
          <li 
            v-if="consultant.region"
            :key="4" 
            :data-index="4"
            class="topMargin_18"
          >
            <span class="normalWeight">Почтовы индекс:</span> {{ consultant.region }}
          </li>
						
        </fade-translate-transition-group>
      </article>
    </transition>
    <transition 
      name="fadeTranslateToTop" 
      appear>
      <div 
        v-if="!isInfoShown" 
        class="consultantPreview parent row v-centered h-between wrap">	
        <span class="spacing_12 consultantPreview__name marginBottom_xxs-11">	
          {{ `${consultant.first_name} ${consultant.last_name}` }} 
          {{ `${consultant.consultant_num ? `— ${consultant.consultant_num}` : ''}` }}
        </span>
				
        <base-button 
          :action="switchDisplayInfoState"
          class-name="burgundColor underline zeroTopMargin consultantPreview__button marginBottom_xxs-11 fullWidth_xxs"
          unstyled
        >
          Подробнее
        </base-button>
      </div>
    </transition>
  </li>
</template>

<script>
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
      default: ""
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    },
    index: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    isInfoShown: false
  }),
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
      this.$set(this, "isInfoShown", !this.isInfoShown);
      this.$store.dispatch(
        "personalRoom/changeInfoConsultantState",
        this.isInfoShown
      );
    }
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
