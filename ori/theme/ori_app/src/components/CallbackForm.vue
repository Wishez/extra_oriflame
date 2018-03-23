<template>
	<simple-litter modifier="callback"
			 :className="`positionRight_zero positionBottom_full-and-offset absolute parent callback${response.success ? ' centered' : ''}`">
		<form @submit.prevent="validateBeforeSubmit"
			method="POST"
			@blur="onBlurForm"
			class="callbackForm parent row wrap h-between v-centered perspective">
					
			<form-controller 
				v-model="callback_name"
				:value="callback_name"
				:error="errors.first('full_name')"
				v-validate="{ 
					required: true, 
					regex: regexp.regex_full_name
				}"
				autocomplete="name"
				name="callback_name"
				label="ФИО"
				placeholder="Иванов Иван Иванович"
				maxLength="230"
				minLength="4"
				:show="!response.success"
			/>

			
			<form-controller v-model="callback_phone"
				:value="callback_phone"
				:error="errors.first('phone_number')"
				v-validate="{ 
					required: true, 
					regex: regexp.regex_phone
				}"
				autocomplete="tel"
				type="tel"
				name="callback_phone"
				label="Номер телефона"
				placeholder="+7 (985) 905-12-51"
				maxLength="26"
				minLength="2"
				:show="!response.success"
			/>
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
					`button_centered marginTop_29 button_submit textShadow${response.error ? ' button_error' : ''}${response.success ? ' button_successful' : ''}` "
				modifier="burgund"
				type="submit">
				{{ !response.requesting ? 'Заказать' : 'Обработка...' }}
			</base-button>
		</form>
	</simple-litter>
</template>

<script>
	import SimpleLitter  from '@/components/SimpleLitter';
	import FormController  from '@/components/FormController';
	import russian from 'vee-validate/dist/locale/ru';
	import BaseButton from '@/components/BaseButton';
	import {callbackUrl} from '@/constants/conf';
	import {timeout} from '@/constants/pureFunctions';

	// Third party functions
	import axios from 'axios';
	import Cookies from 'js-cookie';


	import {
		regex_phone,
		regex_full_name
	} from '@/constants/validation';

	export default {
		name: "CallbackForm",
		props: {
			onBlurForm: {
				type: Function,
				required: true
			}
		},
  	    components: {
  	    	SimpleLitter,
  	    	FormController,
  	    	BaseButton
	    },
	    mixins: [],
	    data: () => ({
	    	callback_name: "",
	    	callback_phone: "",
	    	response: {
		  		serverMessage: "",
		  		success: false,
		  		error: false,
		  		requestion: false
		  	},
		  	regexp: {
		      	regex_phone,
				regex_full_name,
		  	},
	    }),
	    beforeCreate() {
	    },
	    created() {
	    	this.$validator.localize('ru', {
		  		messages: russian.messages,
		  		attributes: {
		  			full_name: "ФИО",
			      	phone_number: "номер телефона",
		  		}
		  	});

	    },
	    beforeMount () {
	    },
	    mounted() {
	    	
	    },
	    computed: {
	    },
	    methods: {
	    	setResponseData(newResponseData) {
				this.$set(
		  			this,
		  			'response',
		  			newResponseData
		  		);
		  	},
	    	validateBeforeSubmit(event) {
  	  			event.preventDefault();

				this.$validator.validateAll().then((result) => {
					// Reffer to response.
					const oldResponseData = this.response;

					this.setResponseData({
						...oldResponseData,
						requesting: true,
					});

				    if (result) {
							  
						const csrftoken = Cookies.get('csrftoken');

						axios({
							method: 'post',
							url: callbackUrl,
							data: {
								callback_name: this.callback_name,
								callback_phone: this.callback_phone
							},
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

				}); // end validateAll
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
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'
	.litter_callback
		min-width: em(322.956186888460770432) $i
		// @include breakpoint($xs)
			

</style>