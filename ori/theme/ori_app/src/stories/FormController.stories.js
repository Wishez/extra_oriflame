import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';
import Datepicker from "vuejs-datepicker";
import {
	regex_phone,
	regex_email,
	regex_full_name,
	regex_name
} from "../constants/validation";
import russian from "vee-validate/dist/locale/ru";

storiesOf('FormController', module)
    .add('Text, email и tel поля',
        () => ({
            router,
            store,
            template: `<div class="parent column wrap centered simpleWrapper">
                <form-controller 
                    v-validate="{ 
                        required: true, 
                        regex: regexp.regex_full_name
                    }"
                    v-model="full_name"
                    :value="full_name"
                    :error="errors.first('full_name')"
                    autocomplete="name"
                    name="full_name"
                    label="Ваше полное имя"
                    placeholder="Гарри Поттер-Эванс-Веррес"
                    max-length="230"
                    min-length="4"
                />	
                        
                <form-controller 
                    v-validate="{ 
                        required: true, 
                        regex: regexp.regex_phone
                    }"
                    v-model="phone_number"
                    :value="phone_number"
                    :error="errors.first('phone_number')"
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
                        type="email"
                        autocomplete="email"
                        name="email"
                        label="E-mail"
                        placeholder="shiningfinger@list.ru"
                        max-length="150"
                        min-length="3"
                    />
            </div>`,
            data: () => ({
                email: "",
                regexp: {
                	regex_phone,
                	regex_email,
                	regex_full_name,
                	regex_name
                },
                full_name: "",
                phone_number: "",
            }),
            beforeMount() {},
            methods: {},
            computed: {},
            created() {
                this.$validator.localize("ru", {
                    messages: russian.messages,
                    attributes: {
                        full_name: "полное имя",
                        email: "e-mail",
                        phone_number: "номер телефона"
                    }
                });
            }
        })
    )
    .add('Checkbox',
    	() => ({
    		router,
    		store,
    		template: `<div class="parent column wrap centered simpleWrapper">
                <form-controller 
                    v-model.bool="check_agreement"
                    :on-click="allowClickOnButton"
                    type="checkbox"
                    :value="check_agreement"
                    :disabled="check_agreement" 
                    name="check_agreement"
                    modifier="checkbox"
                    base-container-classes="row parent centered"
                >
                    <label 
                        id="check_agreement_label"
                        for="check_agreement"
                        class="light">
                        Вы уверены, что хотите сделать кнопку используемой?
                    </label>
                </form-controller>

                <base-button 
                    :disabled="!check_agreement" 
                    :action="makeApplause" 
                    class="font-size_25" 
                    unstyled
                >
                    <base-icon modifier="pink" icon="fas fa-hand-paper"></base-icon>
                </base-button>
            </div>`,
    		data: () => ({
    			check_agreement: false
            }),
            methods: {
                makeApplause() {
                    this.check_agreement = false;
                },

                allowClickOnButton() {
                    this.check_agreement = true;
                },
                
            }
    	})
    )
    .add('DatePicker',
    	() => ({
    		router,
    		store,
    		template: `<div class="parent column wrap centered simpleWrapper">
                <form-controller
                    :error="errors.first('birthday')"
                    :value="''"
                    :simple-input="false"
                    name="birthday"
                    type="date"
                    label="Любая дата"
                    modifier="notHidden"
                >
                    <datepicker 
                        v-validate="{
                            required: true
                        }"
                        v-model="birthday"
                        :wrapper-class="{
                            'controller__input': true,
                            'whiteBackground': true,
                            'validBorder': !!birthday
                        }"
                        name="birthday"
                        autocomplete="bday"
                        calendar-class="controller__input_datepicker"
                        required
                        language="ru"
                        placeholder="01 Янв 1970"/>
                    </form-controller>	
            </div>`,
            components: {
                Datepicker
            },
    		data: () => ({
    			birthday: ""
    		})
    	})
    );