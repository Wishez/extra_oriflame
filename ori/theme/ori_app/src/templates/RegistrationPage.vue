<template>
  <section class="registrationContent parent row wrap h-between">
    <main-title>Регистрация</main-title>
    <transition 
      name="fading"
      appear 
    >
      <slide-to-link 
        v-if="isMobile" 
        class-name="registrationContent__slideLink fewRound" 
        selector="#registration">
        Спуститься к регистрации
      </slide-to-link>
    </transition>
    <simple-litter 
      id="registration"
      :class-name="`parent registration${response.success ? ' centered' : ''}`" 
      modifier="registration"
    >
      <form 
        method="POST"
        class="registrationForm parent row wrap h-between v-centered perspective"
        @submit.prevent="validateBeforeSubmit"
      >
						
        <form-controller 
          v-validate="{ 
            required: true, 
            regex: regexp.regex_full_name
          }"
          v-model="full_name"
          :value="full_name"
          :error="errors.first('full_name')"
          :on-blur="splitFullName"
          :show="!response.success"
          autocomplete="name"
          name="full_name"
          label="ФИО"
          placeholder="Иванов Иван Иванович"
          max-length="230"
          min-length="4"
        />
        <form-controller
          :error="errors.first('birthday')"
          :value="''"
          :simple-input="false"
          :show="!response.success"
          name="birthday"
          type="date"
          label="Дата рождения"
          modifier="notHidden"
        >
          <datepicker 
            v-validate="{
              required: true
            }"
            v-model="birthday"
            :wrapper-class="{
              'controller__input': true,
              'validBorder': !!birthday
            }"
            name="birthday"
            autocomplete="bday"
            calendar-class="controller__input_datepicker"
            required
            language="ru"
            placeholder="01 Янв 1970"/>
        </form-controller>	
				
        <form-controller 
          v-validate="{ 
            required: true, 
            regex: regexp.regex_phone
          }"
          v-model="phone_number"
          :value="phone_number"
          :error="errors.first('phone_number')"
          :show="!response.success"
          autocomplete="tel-national"
          type="tel"
          name="phone_number"
          label="Номер телефона"
          placeholder="+7 (985) 905-12-51"
          max-length="26"
          min-length="2"
        />
        <form-controller 
          v-validate="{ 
            required: true, 
            email: true,
            regex: regexp.regex_email
          }"
          v-model="email"
          :value="email"
          :error="errors.first('email')"
          :show="!response.success"
          type="email"
          autocomplete="email"
          name="email"
          label="Email"
          placeholder="shiningfinger@list.ru"
          max-length="150"
          min-length="3"
        />
        <form-controller 
          v-validate="{
            required: true,
            regex: regexp.regex_name
          }"
          v-model="city"
          :value="city"
          :error="errors.first('city')"
          :show="!response.success"
          name="city"
          autocomplete="address-level2"
          label="Город"
          placeholder="Лондон, Москва"
          max-length="50"
          min-length="2"
        />
        <form-controller 
          v-validate="{
            required: true,
            numeric: true
          }"
          v-model="region"
          :value="region"
          :error="errors.first('region')"
          :show="!response.success"
          name="region"
          autocomplete="postal-code"
          label="Почтовый Индекс"
          max-length="26"
          min-length="2"
          placeholder="12398765"
        />
        <form-controller 
          v-model="check_agreement"
          :show="!response.success"
          :value="check_agreement"
          :on-click="allowOrDisallowRegister"
          type="checkbox"
          name="check_agreement"
          modifier="checkbox"
          base-container-classes="row parent centered"
        >
          <label 
            id="check_agreement_label"
            for="check_agreement"
            class="light">Вы ознакомились с <external-link 
              class-name="normalWeight lightenHover" 
              to="https://ru-eshop.oriflame.com/iframe/custom/ru/consultant/Registration.pdf">договором</external-link> и <external-link 
                class-name="normalWeight lightenHover" 
                to="https://ru-eshop.oriflame.com/iframe/custom/ru/consultant/Registration.pdf">условиями</external-link>?</label>
        </form-controller>
        <transition 
          name="fade"
          appear 
        >
          <p 
            v-if="response.serverMessage"
            :class="{
              'registrationForm__message': true,
              'fullWidth': true,
              'registrationForm__message_error': response.error,
              'registrationForm__message_success': response.success,
              'light': response.success,
            }"
          >{{ response.serverMessage }}</p>
        </transition>
        <base-button 
          :class-name="
          `button_centered button_submit textShadow${response.error ? ' button_error' : ''}${response.success ? ' button_successful' : ''}`"
          :disabled="!check_agreement"
          modifier="burgund"
          type="submit"
        >
          {{ !response.requesting ? 'Зарегистрироваться' : 'Обработка...' }}
        </base-button>
      </form>
    </simple-litter>
    <simple-litter 
      id="description"
      modifier="registration" 
      class-name="registrationDescription" 
    >
      <transition-group 
        tag="article" 
        appear 
        name="fade">
        <h2 
          :key="0" 
          :data-index="0"
          class="marginLeft_heading">Пройдя регистрацию</h2>
        <p 
          :key="1" 
          :data-index="1"
          class="registrationDescription__paragraph">
          Вам будет предоставлена <strong>скидка от 20% на весь спектр продукции</strong> компании Oriflame.

          <!-- Для того, чтобы зарегистрироваться, вам не нужно делать какие-либо взносы до или после регистрации. Регистрация <strong>совершенно бесплатна</strong>! -->
        </p>
        <p 
          :key="2" 
          :data-index="2" 
          class="registrationDescription__paragraph">
          Вы сможете <strong>участвовать во множестве акций</strong> и <strong>получить подарки</strong>: <i>продукцию компании</i> Oriflame, <i>ценные призы</i> (вплоть до автомобилей), <i>денежные призы</i>, а также <i>путешествия за счёт фирмы</i>.

          <!-- После регистрации, вы станете на <strong>первую ступень</strong> <internal-link 
						className="lightenHover"
						hashResource='ladder' 
						to='business'>карьерной лестницы</internal-link> Орифлейм, откуда вы сможете сделать выбор — идти вверх по лестнице или просто пользоваться бонусами. -->
        </p>
        <p 
          :key="3" 
          :data-index="3" 
          class="registrationDescription__paragraph"
        >
          Заказывать продукцию Oriflame можно <strong>с помощью интернета</strong>, а получать <strong>в удобном для Вас месте</strong>.

          <!-- Кстати, в число бонусов входит скидки <strong>от 20 до 32%</strong>, возможность участвовать в акциях, где вы, вероятно, найдёте для себя что-нибудь <strong>интересное</strong> и <strong>полезное</strong>. Также, вас ждут специальные, будоражущие воображение,  <strong>распродажи</strong>. -->
        </p>
        <p 
          :key="4" 
          :data-index="4"
          class="registrationDescription__paragraph"
        >
          Вы сможете, если захотите, <strong>воспользоваться нашей системой</strong> для получения дохода, на базе маркетинга компании Oriflame без продаж. 
          Более подробную информацию Вы можете получить пройдя по вкладке <external-link 
            :to="businessUrl"
            class-name="lightenHover" 
          >«Бизнес»</external-link> в навигации.

          <!-- Но если вы  захотите <strong>устремиться вверх</strong> по лестнице, то вы всегда сможете опираться на наше крепкое плечо. Мы готовы поделиться с вами <strong>необходимыми знаниями и опытом</strong>, которые накопили путём проб и ошибок! -->
        </p>
      </transition-group>
    </simple-litter>
  </section>
</template>

<script>
// Components
import SimpleLitter from "@/components/SimpleLitter";

import FormController from "@/components/FormController";

// Third party components
import Datepicker from "vuejs-datepicker";
import russian from "vee-validate/dist/locale/ru";
// Third party functions
import axios from "axios";
import Cookies from "js-cookie";

// Contants
import {
  regex_phone,
  regex_email,
  regex_full_name,
  regex_name
} from "@/constants/validation";
import { timeout, transformName } from "@/constants/pureFunctions";
import { registrationUrl, businessUrl } from "@/constants/conf";

export default {
  name: "RegistrationPage",
  components: {
    SimpleLitter,
    FormController,
    Datepicker
  },
  data: () => ({
    businessUrl,
    full_name: "",
    birthday: "",
    email: "",
    phone_number: "",
    city: "",
    region: "",
    check_agreement: false,
    first_name: "",
    last_name: "",
    middle_name: "",
    response: {
      serverMessage: "",
      success: false,
      error: false,
      requestion: false
    },
    regexp: {
      regex_phone,
      regex_email,
      regex_full_name,
      regex_name
    },
    user_led: ""
  }),
  computed: {
    isMobile() {
      return window.innerWidth <= 480;
    }
  },
  created() {
    const user_led_number = localStorage.user_led_number;

    this.$set(this, "user_led", user_led_number ? user_led_number : "");

    this.$validator.localize("ru", {
      messages: russian.messages,
      attributes: {
        full_name: "ФИО",
        birthday: "дата рождения",
        email: "e-mail",
        phone_number: "номер телефона",
        city: "город",
        // passport_data: "серия и номер пасспорта",
        region: "Почтовый индекс"
        // street: "улица",
        // num_home: "номер дома",
        // num_apartment: "номер квартиры",
      }
    });
  },
  methods: {
    allowOrDisallowRegister(event) {
      this.$set(this, "check_agreement", event.target.checked);
    },
    setResponseData(newResponseData) {
      this.$set(this, "response", newResponseData);
    },
    splitFullName() {
      const partsSequances = ["last_name", "first_name", "middle_name"];
      const transformedFullName = this.full_name
        .split(" ")
        .map((name, i) => {
          const transformedName = transformName(name);
          const key = partsSequances[i];

          this.$set(this, key, transformedName);

          return transformedName;
        })
        .join(" ");

      this.$set(this, "full_name", transformedFullName);
    },
    validateBeforeSubmit(event) {
      if (!this.response.success) {
        this.$validator.validateAll().then(result => {
          // Reffer to response.
          const oldResponseData = this.response;

          this.setResponseData({
            ...oldResponseData,
            requesting: true
          });
          if (result) {
            const neededData = [
              "first_name",
              "last_name",
              "middle_name",
              "birthday",
              "email",
              "phone_number",
              "city",
              "region",
              "user_led"
            ];

            const csrftoken = Cookies.get("csrftoken");

            const data = {};

            for (const key of neededData) {
              data[key] = this[key];
            }

            axios({
              method: "post",
              url: registrationUrl,
              data,
              headers: {
                "X-CSRFToken": csrftoken
              }
            })
              .then(response => {
                this.setResponseData({
                  ...oldResponseData,
                  serverMessage: response.data,
                  requesting: false,
                  success: true
                });
                if (typeof gtag_report_conversion !== "undefined") {
                  gtag_report_conversion();
                }
              })
              .catch(error => {
                this.setResponseData({
                  ...oldResponseData,
                  serverMessage: `Внутренняя ошибка сервера: ${error}`,
                  requesting: false,
                  error: true
                });

                timeout(() => {
                  this.setResponseData({
                    ...oldResponseData,
                    error: false,
                    serverMessage: ""
                  });
                }, 3000);
              });
            return;
          } else {
            this.setResponseData({
              ...oldResponseData,
              serverMessage: `Проверьте правильность введёных данных`,
              requesting: false,
              error: true
            });

            timeout(() => {
              this.setResponseData({
                ...oldResponseData,
                error: false,
                serverMessage: ""
              });
            }, 3000);
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
@import '../styles/conf/_colors.sass'
@import '../styles/conf/_sizes.sass'
@import '../styles/conf/_breakpoints.sass'
.registrationContent__slideLink
	display: block
	margin: auto
	position: relative
	top: em(-29.512, 11)
	font-size: $s11
	background-image: none
	border: 2px solid
	padding: .5rem 1rem



.registrationDescription
	@include breakpoint($xxs)
		margin-bottom: $s47 $i

.registration
	@include breakpoint($xxs)
		order: 3
.registrationForm__message
	margin: 0 0 $s29
	&_success
		
	&_error
		color: $red
.validBorder
	border-color: $green $i
	transition: border-color .3s ease-in $i
.litter_registration
	flex-grow: 0
	flex-shrink: 0
	flex-basis: 40%
</style>
