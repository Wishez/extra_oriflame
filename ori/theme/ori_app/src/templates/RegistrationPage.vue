<template>
	<section class="registrationContent parent row wrap h-between">
		<main-title>Регистрация</main-title>
		<transition appear name="fading">
			<slide-to-link className="registrationContent__slideLink fewRound" v-if="isMobile" selector="#registration">
				Спуститься к регистрации
			</slide-to-link>
		</transition>
		<simple-litter modifier="registration"
			 :className="` parent registration${response.success ? ' centered' : ''}`" id="registration">
			<form @submit.prevent="validateBeforeSubmit"
				method="POST"
				class="registrationForm parent row wrap h-between v-centered perspective">
						
				<form-controller 
					v-model="full_name"
					:value="full_name"
					:error="errors.first('full_name')"
					v-validate="{ 
						required: true, 
						regex: regexp.regex_full_name
					}"
					:onBlur="splitFullName"
					autocomplete="name"
					name="full_name"
					label="ФИО"
					placeholder="Иванов Иван Иванович"
					maxLength="230"
					minLength="4"
					:show="!response.success"
				/>
				<form-controller
					:error="errors.first('birthday')"
					name="birthday"
					:value="''"
					type="date"
					label="Дата рождения"
					:simpleInput="false"
					modifier="notHidden"
					:show="!response.success"
				>
					<datepicker 
						v-model="birthday"
						name="birthday"
						autocomplete="bday"
						v-validate="{
							required: true
						}"
						:wrapper-class="{
							'controller__input': true,
							'validBorder': !!birthday
						}"
						required
						language="ru"
						placeholder="01 Янв 1970">
					</datepicker>
				</form-controller>	
				
				<form-controller v-model="phone_number"
					:value="phone_number"
					:error="errors.first('phone_number')"
					v-validate="{ 
						required: true, 
						regex: regexp.regex_phone
					}"
					autocomplete="tel"
					type="tel"
					name="phone_number"
					label="Номер телефона"
					placeholder="+7 (985) 905-12-51"
					maxLength="26"
					minLength="2"
					:show="!response.success"
				/>
				<form-controller v-model="email"
					:value="email"
					:error="errors.first('email')"
					type="email"
					autocomplete="email"
					v-validate="{ 
						required: true, 
						email: true,
						regex: regexp.regex_email
					}"
					name="email"
					label="Email"
					placeholder="shiningfinger@list.ru"
					maxLength="150"
					minLength="3"
					:show="!response.success"
				/>
				<form-controller v-model="city"
					:value="city"
					name="city"
					autocomplete="address-level2"
					:error="errors.first('city')"
					v-validate="{
						required: true,
						regex: regexp.regex_name
					}"
					label="Город"
					placeholder="Лондон, Москва"
					maxLength="50"
					minLength="2"
					:show="!response.success"
				/>
				<form-controller v-model="region"
					:value="region"
					name="region"
					:error="errors.first('region')"
					autocomplete="postal-code"
					v-validate="{
						required: true,
						numeric: true
					}"
					label="Почтовый Индекс"
					maxLength="26"
					minLength="2"
					placeholder="12398765"
					:show="!response.success"
				/>
				<form-controller 
					:show="!response.success"
					v-model="check_agreement"
					:value="check_agreement"
					type="checkbox"
					name="check_agreement"
					modifier="checkbox"
					baseContainerClasses="row parent centered"
					:onClick="allowOrDisallowRegister"
				>
					<label for="check_agreement"
						id="check_agreement_label"
						class="light">Вы ознакомились с <external-link className="normalWeight darkenLink" to="https://ru-eshop.oriflame.com/iframe/custom/ru/consultant/Registration.pdf">договором</external-link> и <external-link className="normalWeight darkenLink" to="https://ru-eshop.oriflame.com/iframe/custom/ru/consultant/Registration.pdf">условиями</external-link>?</label>
				</form-controller>
				<transition appear name="fade">
					<p v-if="response.serverMessage"
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
					:className="
						`button_centered button_submit textShadow${response.error ? ' button_error' : ''}${response.success ? ' button_successful' : ''}`"
					modifier="burgund"
					type="submit"
					:disabled="!check_agreement">
					{{ !response.requesting ? 'Зарегистрироваться' : 'Обработка...' }}
				</base-button>
			</form>
		</simple-litter>
		<simple-litter modifier="registration" className="registrationDescription" id="description">
			<transition-group appear name="fade">
				<p class="registrationDescription__paragraph" key="0">
					Для того, чтобы зарегистрироваться, вам не нужно делать какие-либо взносы до или после регистрации. Регистрация <strong>совершенно бесплатна</strong>!
				</p>
				<p key="1" class="registrationDescription__paragraph">
					После регистрации, вы станете на <strong>первую ступень</strong> <internal-link 
						className="darkenLink"
						hashResource='ladder' 
						to='business'>карьерной лестницы</internal-link> Орифлейм, откуда вы сможете сделать выбор — идти вверх по лестнице или просто пользоваться бонусами.
				</p>
				<p key="2" class="registrationDescription__paragraph">
					Кстати, в число бонусов входит скидки <strong>от 20 до 32%</strong>, возможность участвовать в <internal-link className="darkenLink" to='shares'>акциях</internal-link>, где вы, вероятно, найдёте для себя что-нибудь <strong>интересное</strong> и <strong>полезное</strong>. Также, вас ждут специальные, будоражущие воображение,  <strong>распродажи</strong>.
				</p>
				<p class="registrationDescription__paragraph" key="3">
					Но если вы  захотите <strong>устремиться вверх</strong> по лестнице, то вы всегда сможете опираться на наше крепкое плечо. Мы готовы поделиться с вами <strong>необходимыми знаниями и опытом</strong>, которые накопили путём проб и ошибок!
				</p>
			</transition-group>
		</simple-litter>
	</section>
</template>

<script>
// Components
import SimpleLitter from '@/components/SimpleLitter';
import BaseButton from '@/components/BaseButton';
import InternalLink from '@/components/InternalLink';
import ExternalLink from '@/components/ExternalLink';
import MainTitle from '@/components/MainTitle';
import FormController from '@/components/FormController';
import SlideToLink from '@/components/SlideToLink';
import FadeTranslateTransitionGroup from '@/components/FadeTranslateTransitionGroup';

// Third party components
import Datepicker from 'vuejs-datepicker';
import russian from 'vee-validate/dist/locale/ru';
// Third party functions
import axios from 'axios';
import Cookies from 'js-cookie';

// Contants
import {
	regex_phone,
	regex_email,
	regex_full_name,
	regex_name	
} from '@/constants/validation';
import {timeout, transformName} from '@/constants/pureFunctions';
import {registrationUrl} from '@/constants/conf';

export default {
  name: 'RegistrationPage',
  data: () => ({
	full_name: "",
  	birthday: "",
  	email: "",
  	phone_number: "",
  	city: "",
  	// passport_data: "",
  	region: "",
  	// street: "",
  	// num_home: "",
  	// num_apartment: "",
  	check_agreement: false,
  	first_name: '',
  	last_name: '',
  	middle_name: '',
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
		regex_name,
  	},
  	user_led: ""
  }),
  computed: {
  	isMobile() {
  		return window.innerWidth <= 480;
  	}
  },
  components: {
  	SimpleLitter,
  	FormController,
  	MainTitle,
  	InternalLink,
  	BaseButton,
  	ExternalLink,
  	Datepicker,
  	SlideToLink,
  	FadeTranslateTransitionGroup
  },
  methods: {
  	allowOrDisallowRegister(event) {
  		this.$set(
  			this,
  			'check_agreement',
  			event.target.checked
  		);
  	},
  	setResponseData(newResponseData) {
		this.$set(
  			this,
  			'response',
  			newResponseData
  		);
  	},
  	splitFullName() {
  		const partsSequances = ['last_name', 'first_name', 'middle_name'];
  		const transformedFullName = this.full_name
  				.split(' ')
  				.map((name, i) => {
  					const transformedName = transformName(name);
  					const key = partsSequances[i];
  					
		  			this.$set(
		  				this,
		  				key,
		  				transformedName
		  			);

		  			return transformedName;
  				})
  				.join(' ');
  				
  		this.$set(
  			this,
  			'full_name',
  			transformedFullName
  		);

  	},
  	validateBeforeSubmit(event) {
  	  event.preventDefault();
      this.$validator.validateAll().then((result) => {
        ;
       	// Reffer to response.
	    const oldResponseData = this.response;

		this.setResponseData({
		...oldResponseData,
		requesting: true,
	  });
        if (result) {
          
          const neededData = [
          	'first_name',
		  	'last_name',
		  	'middle_name',
		  	'birthday',
		  	'email',
		  	'phone_number',
		  	'city',
		  	'region',
		  	'user_led'
		  ];
		  
		  const csrftoken = Cookies.get('csrftoken');
		 
		  const data = {};

		  for (const key of neededData) {
		  	data[key] = this[key];
		  }

          axios({
          	method: 'post',
          	url: registrationUrl,
          	data,
          	headers: {
				'X-CSRFToken': csrftoken
          	}
          })
          	.then(response => {

 				
          		this.setResponseData({
      				...oldResponseData,
      				serverMessage: response.data,
      				requesting: false,
      				success: true
      			});
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
          				serverMessage: ''
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
      				serverMessage: ''
      			});
      			
      		}, 3000);
        }

      });
    }
  },
  created() {
  	const user_led_number = localStorage.user_led_number;

	this.$set(
		this,
		'user_led',
		user_led_number ? user_led_number : ""	
	);

  	this.$validator.localize('ru', {
  		messages: russian.messages,
  		attributes: {
  			full_name: "ФИО",
	      	birthday: "дата рождения",
	      	email: "e-mail",
	      	phone_number: "номер телефона",
	      	city: "город",
	      	// passport_data: "серия и номер пасспорта",
	      	region: "Почтовый индекс",
	      	// street: "улица",
	      	// num_home: "номер дома",
	      	// num_apartment: "номер квартиры",
  		}
  	});
  }
}
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
	// .controller__input_date:valid
	.registration
		@include breakpoint($xxs)
			order: 3
	// 	border: 3px solid $validColor
	.registrationForm__message
		margin: 0 0 $s29
		&_success
			// color: $validColor
		&_error
			color: $red
	.validBorder
		border-color: $validColor $i
		transition: border-color .3s ease-in $i
	.litter_registration
		flex-grow: 0
		flex-shrink: 0
		flex-basis: calc(50% - 1.5rem)
</style>
