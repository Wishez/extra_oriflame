<template>
	<section class="registrationContent parent row wrap h-between">
		<main-title>Регистрация</main-title>
		<simple-litter modifier="registration"
			 className=" registration" id="registration">
			<form @submit.prevent="validateBeforeSubmit"
			class="registrationForm registrationForm parent row wrap h-between v-centered perspective">
					
				<form-controller 
					v-model="full_name"
					:value="full_name"
					:error="errors.first('full_name')"
					:validation="{ 
						required: true, 
						regex: /^\+?([A-Za-zА-Я-а-яёЁ\-]*\s)([ёЁA-Za-zА-Я-а-я\-]*)(\s[A-Za-zА-Я-а-я\-]*)?$/i
					}"
					regExp="^([A-Za-zА-Я-а-яёЁ\-]*)(\s[ёЁA-Za-zА-Я-а-я\-]*)(\s[A-Za-zА-Я-а-я\-]*)?$"
					name="full_name"
					label="ФИО"
					placeholder="Иванов Иван Иванович"
				/>
				<form-controller
					error=""
					name="birthday"
					:value="''"
					type="date"
					label="Дата рождения"
					:simpleInput="false"
					modifier="notHidden"
				>
					<datepicker 
						v-model="birthday"
						name="birthday"
						wrapper-class="controller__input"
						input-class="controller__input_date"
						required
						language="ru"
						placeholder="01 Янв 1970">
					</datepicker>
				</form-controller>	
				<form-controller v-model="passport_data"
					:value="passport_data"
					error=""
					
					name="passport_data"
					label="Серия и номер паспорта"
					placeholder="0000-00000"
				/>
				
				<form-controller v-model="phone_number"
					:value="phone_number"
					:error="errors.first('phone_number')"
					:onInput="checkError"
					:validation="'required|numeric'"
					name="phone_number"
					label="Номер телефона"
					placeholder="+7 (985) 905-12-51"
				/>
				<form-controller v-model="email"
					:value="email"
					:error="errors.first('email')"
					type="email"
					:onInput="checkError"
					validation="required|email"
					name="email"
					label="Email"
					placeholder="shiningfinger@list.ru"
				/>
				<form-controller v-model="city"
					:value="city"
					name="city"
					error=""
					
					label="Город"
					placeholder="Лондон, Москва"
				/>
				<form-controller v-model="region"
					:value="region"
					name="user_region"
					error=""
					
					label="Регион"
					placeholder="Московская область, Магаданская область"
				/>
				<form-controller v-model="street"
					:value="street"
					name="street"
					error=""
						
					label="Улица"
					placeholder="Тисовая, Пушкина"
				/>
				<form-controller v-model="num_home"
					:value="num_home"
					name="num_home"
					error=""
					type="number"
					label="Дом"
					placeholder="1А"
					modifier="small"
				/>
				<form-controller v-model="num_apartment"
					:value="num_apartment"
					error=""
					type="number"
					name="num_apartment"
					label="Квартира"
					placeholder="123"
					modifier="small"
				/>
				<form-controller v-model="check_agreement"
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
				<base-button 
					:className="`button_centered button_submit  textShadow ${validation.state}`"
					modifier="burgund"
					type="submit"
					:disabled="!check_agreement">
					Зарегистрироваться
				</base-button>

			</form>
		</simple-litter>
		<simple-litter modifier="registration" className="registrationDescription" id="description">
			<p class="registrationDescription__paragraph">
				Для того, чтобы зарегистрироваться, вам не нужно делать какие-либо взносы до или после регистрации. Регистрация <strong>совершенно бесплатна</strong>!
			</p>
			<p class="registrationDescription__paragraph">
				После регистрации, вы станете на <strong>первую ступень</strong> <internal-link 
					className="burgundColor"
					hashResource='ladder' 
					to='business'>карьерной лестницы</internal-link> Орифлейм, откуда вы сможете сделать выбор — идти вверх по лестнице или просто пользоваться бонусами.
			</p>
			<p class="registrationDescription__paragraph">
				Кстати, в число бонусов входит скидки <strong>от 20 до 32%</strong>, возможность участвовать в <internal-link className="burgundColor" to='shares'>акциях</internal-link>, где вы, вероятно, найдёте для себя что-нибудь <strong>интересное</strong> и <strong>полезное</strong>. Также, вас ждут специальные, будоражущие воображение,  <strong>распродажи</strong>.
			</p>
			<p class="registrationDescription__paragraph">
				Но если вы  захотите <strong>устремиться вверх</strong> по лестнице, то вы всегда сможете опираться на наше крепкое плечо. Мы готовы поделиться с вами <strong>необходимыми знаниями и опытом</strong>, которые накопили путём проб и ошибок!
			</p>
		</simple-litter>
	</section>
</template>

<script>
import SimpleLitter from '@/components/SimpleLitter';
import Datepicker from 'vuejs-datepicker';
import BaseButton from '@/components/BaseButton';
import InternalLink from '@/components/InternalLink';
import ExternalLink from '@/components/ExternalLink';
import MainTitle from '@/components/MainTitle';
import FormController from '@/components/FormController';
import russian from 'vee-validate/dist/locale/ru';

export default {
  name: 'RegistrationPage',
  data () {
    return {
    	full_name: "",
      	birthday: "",
      	passport_data: "",
      	email: "",
      	phone_number: "",
      	city: "",
      	region: "",
      	street: "",
      	num_home: "",
      	num_apartment: "",
      	validation: {
      		state: ""
      	},
      	check_agreement: false,
      	content: 'Страница Регистрации',
    }
  },
  props: {
    
  },
  components: {
  	SimpleLitter,
  	FormController,
  	MainTitle,
  	InternalLink,
  	BaseButton,
  	ExternalLink,
  	Datepicker
  },
  methods: {
  	allowOrDisallowRegister(event) {
  		this.$set(
  			this,
  			'check_agreement',
  			event.target.checked
  		);
  	},
  	validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        console.log(result);
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    },
    checkError(event) {
    	console.log('value', this[name]);
    	const name = event.target.name;
		console.log('error', this.errors.first(name));
					
    }
  },
  created() {
  	this.$validator.localize('ru', {
  		messages: russian.messages,
  		attributes: {
  			full_name: "ФИО",
	      	birthday: "дата рождения",
	      	passport_data: "серия и номер пасспорта",
	      	email: "e-mail",
	      	phone_number: "номер телефона",
	      	city: "город",
	      	region: "регион",
	      	street: "улица",
	      	num_home: "номер дома",
	      	num_apartment: "номер квартиры",
  		}
  	});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
	@import '../styles/conf/_colors.sass'

	// .controller__input_date:valid
	// 	border: 3px solid $validColor
	.litter_registration
		flex-grow: 0
		flex-shrink: 0
		flex-basis: calc(50% - 1.5rem)
</style>
