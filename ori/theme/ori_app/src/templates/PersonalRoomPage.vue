<template>
  <section class="personalRoom parent column">
    <transition 
      name="fade"
      appear 
    >
      <main-title>{{ notFound ? 'Вы попали в пустую комнату' : 'Персональная комната' }}</main-title>
    </transition>
    <content-preloader v-if="!consultant.first_name || notFound" />
    <fade-translate-transition-group 
      v-if="!notFound && consultant.first_name"
      tag="div" 
      class-name="content"
    >
      <p 
        key="0"
        :data-index="0" 
      >
        Добро пожаловать в вашу персональну. комнату, {{ consultant.first_name }}
      </p>
      <p 
        key="1"
        :data-index="1" 
      >Здесь, вы можете просматривать <strong>
        <slide-to-link 
          selector="#referrals_list" 
      >списки ваших рефералов</slide-to-link></strong>, а также 
        <strong>
          <slide-to-link 
            selector="#referral_url">
            скопировать реферальную ссылку для её распространения
          </slide-to-link>
        </strong>, если вы, кончено,  захотите её распространять;).
      </p>
      <h2 
        id="referral_url" 
        key="2">
        Нажмите на ссылку, чтобы скопировать её
      </h2>
      <div 
        key="3" 
        :data-index="3" 
        class="parent row parent row v-centered">
        <transition name="fadeTranslateToTop">
          <span 
            v-if="hintText" 
            class="absolute hintText positionBottom_full-and-offset positionLeft_zero fewRound whiteBackground materialShadow container">
            {{ hintText }}
          </span> 
        </transition>
        <a 
          :href="consultant.referral_url"
          class="zeroTopMargin parent referralUrl darkenLink lightenHover referralUrl" 
          @click="copyLink"
        >
          <base-icon 
            modifier="navigation" 
            class-name="referralUrl__icon" 
            icon="fas fa-link" />
          <span class="zeroTopMargin">Скопировать ссылку</span>
          <textarea 
            id="clipboard"
            :value="consultant.referral_url" 
            class="visible-hidden" 
            aria-hidden="true"/>

        </a>
      </div>
      <article 
        key="4" 
        :data-index="4" 
        class="zeroTopMargin referralConsultants">
        <h2 
          id="referrals_list" 
          class="topMargin_29 referralConsultants__title">Ваши рефералы</h2>

        <p v-if="!consultant.	referral_consultants_of_consultant">
          Пока что, ваш список рефералов <strong>не заполнен</strong>. Как только один из ваших будущих партнёров <strong>зарегистрируется</strong>, тогда он <strong>отобразиться в списке</strong>, а это сообщение испариться! 
        </p>
        <simple-litter 
          v-if="referralConsultants.length"
          class-name="referralConsultantsLitter topMargin_29"
        >
          <form-controller 
            v-model="query"
            :value="query"
            :on-input="progressiveFilterConsultants"
            name="search"
            placeholder="Поиск"
            max-length="230"
            min-length="0"
            modifier="burgund"
            class-name="referralConsultantsLitter__search"
          />
          <fade-translate-transition-group
            :duration="500"
            class-name="refferalsList unstyledList topMargin_29"

          >
            <info-consultant 
              v-for="(referralConsultant, index) in referralConsultants" 
              v-if="!referralConsultant.hidden"
              :key="index"
              :data-index="index"
              :index="index"
              :consultant="referralConsultant"
            />

            <li 
              v-if="notFoundAnyReferrals"
              :key="referralConsultants.length + 1"
              :data-index="referralConsultants.length + 1" 
            >
              <span class="normalWeight" >Консультант не найден. Вы можете найти желаемых консультантов по следующим характеристикам:</span>
              <fade-translate-transition-group class-name="hintsList">
                <li 
                  v-for="(search_field, index) in ['Имени', 'Фамилии', 'Номеру консультанта', 'Городу','Почтовому идексу', 'Телефону', 'Email адрессу']"
                  :key="index"
                  :data-index="index"
                  class="hintsList__hint topMargin_11"
                >
                  {{ search_field }}
                </li>
              </fade-translate-transition-group>
            </li>
          </fade-translate-transition-group>
        </simple-litter>

				
      </article>

    </fade-translate-transition-group >
  </section>
</template>

<script>
import ContentPreloader from "@/components/ContentPreloader";
import FormController from "@/components/FormController";

import SimpleLitter from "@/components/SimpleLitter";

import InfoConsultant from "@/components/InfoConsultant";

import { throttle, transformDate, timeout } from "@/constants/pureFunctions";
import { CONSULTANT_DATA } from "@/constants/personalRoom";

export default {
  name: "PersonalRoomPage",
  components: {
    ContentPreloader,

    SimpleLitter,

    FormController,
    InfoConsultant
  },
  mixins: [],

  props: {},
  data: () => ({
    query: "",
    consultant_number: "",
    notFound: false,
    consultant: {
      referral_consultants_of_consultant: false,
      first_name: "",
      last_name: "",
      middle_name: "",
      referral_url: "",
      registered_date: "",
      middle_name: "",
      email: "",
      phone_number: "",
      region: "",
      city: ""
    },
    hintText: "",
    notFoundAnyReferrals: false,
    referralConsultants: [],
    filteredFields: [
      "consultant_num",
      "first_name",
      "last_name",
      "middle_name",
      "city",
      "email"
    ]
  }),
  computed: {
    progressiveFilterConsultants() {
      return throttle(() => {
        this.filterConsultants();
      }, 800);
    }
  },
  mounted() {
    this.$set(this, "consultant_number", localStorage.consultant_room_number);

    this.requestConsultantData();
  },
  beforeUpdate() {
    this.$set(this, "notFound", this.$store.state.personalRoom.notFound);
  },
  methods: {
    testConsultant(consultant) {
      const regex = new RegExp(this.query, "i");

      return this.filteredFields.some(field => regex.test(consultant[field]));
    },
    filterConsultants() {
      let counter = 0;
      console.log(this, this.referralConsultants);
      this.$set(
        this,
        "referralConsultants",
        this.referralConsultants.map(consultant => {
          if (this.testConsultant(consultant)) {
            consultant["hidden"] = false;
            counter += 1;
          } else {
            consultant["hidden"] = true;
          }

          return consultant;
        })
      );

      this.$set(this, "notFoundAnyReferrals", counter === 0);
    },

    setHintText(text, delay = 0) {
      timeout(() => {
        this.$set(this, "hintText", text);
      }, delay);
    },
    copyLink(event) {
      event.preventDefault();
      if (this.hintText) {
        return false;
      }
      const link = document.getElementById("clipboard");

      link.focus();
      link.select();

      try {
        const successful = document.execCommand("copy");

        const msg = successful
          ? "Вы успешно скопировали ссылку."
          : "Не удалось скопировать ссылку.";

        this.setHintText(msg);
      } catch (err) {
        this.setHintText("Oops, unable to copy");
      }
      this.setHintText("", 3000);
    },
    fetchAndDumpConsultantData(consultantData, silent = false) {
      const success = consultantData => {
        this.$set(this, "consultant", consultantData);

        this.$set(
          this,
          "referralConsultants",
          consultantData.referral_consultants_of_consultant
        );

        delete this.consultant["referral_consultants_of_consultant"];

        this.$store.dispatch("dump", {
          key: CONSULTANT_DATA,
          value: consultantData
        });
      };

      this.$store.dispatch("personalRoom/fetchConsultantData", {
        success,
        silent,
        consultant_number: this.consultant_number,
        raise404: () => {
          this.$set(this, "notFound", true);
        }
      });
    },
    requestConsultantData() {
      const loadConsultatnDataCallback = consultantData => {
        let silent = false;
        // See a locale share's congruence of
        // a needed in the view.
        if (
          consultantData &&
          consultantData.consultant_num === this.consultant_num
        ) {
          // I need it, and i set silent mode and cache to the view's state the share.
          silent = true;

          this.$set(this, "consultant", consultantData);
        }
        // Next, i update DB.
        this.fetchAndDumpConsultantData(consultantData, silent);
      }; // end

      this.$store.dispatch("load", {
        key: CONSULTANT_DATA,
        callback: loadConsultatnDataCallback
      }); // end 'load' of CONSULTANT_DATA
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$set(this, "consultant_number", to.params.consultant_number);

    this.requestConsultantData();

    next();
  }
};
</script>

<style lang="sass">
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'
	.referralConsultantsLitter
		// margin-top: $s29
		margin-bottom: $s29
		min-height: em(273)
	// .referralConsultantsLitter, .refferalList
	// 	margin-top: $s29
	.referralConsultantsLitter__search
		max-width: em(333.75)
	.hintText
		padding-top: $s6
		padding-bottom: $s6
	.refferalsList
	.referralUrl
		cursor: copy
		
	.hintsList
		&__lint
	.referralUrl__icon
		margin-bottom: $s6
		margin-right: $s11
</style>
