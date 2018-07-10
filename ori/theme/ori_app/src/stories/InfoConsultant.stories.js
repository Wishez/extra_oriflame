import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';
import {
	throttle,
	transformDate,
    timeout,
    ID
} from "@/constants/pureFunctions";

storiesOf('InfoConsultant', module)
    .add('Информация о консультанте',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <ul class="unstyledList width_425">
                    <info-consultant :consultant="consultant" is-info-shown="isInfoShown"></info-consultant>
                </ul>
            </div>`,
            data: () => ({
                consultant: {
                    region: '1090208030',
                    first_name: "Fillip",
                    last_name: "Zhuravlev",
                    email: "shiningfinger@list.ru",
                    phone_number: "+7 (985) 905-12-51",
                    consultant_num: "13243546",
                    city: 'Moscow'
                },
                isInfoShown: true,
            }),
            beforeMount() {},
            methods: {},
            computed: {}
        })
    )
    .add('Поиск по консультантам',
    	() => ({
    		router,
    		store,
    		template: `<div class="parent row wrap centered simpleWrapper">
                 <simple-litter 
                    v-if="referralConsultants.length"
                    class-name="referralConsultantsLitter topMargin_29 width_500"
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
                        :delay="100"
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

                            <fade-translate-transition-group class-name="hintsList" :delay="100">
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
            </div>`,
    		data: () => ({
                isInfoShown: true,
                query: "",
                consultant_number: "",
                notFound: false,
                hintText: "",
                notFoundAnyReferrals: false,
                referralConsultants: [
                    {
                    	region: '1090208030',
                    	first_name: "Eric",
                    	last_name: "Cartpman",
                    	email: "eric@mail.com",
                    	phone_number: "+7 (800) 555-35-55",
                    	consultant_num: ID(),
                    	city: 'South Park',
                    	middle_name: "",
                    	registered_date: Date.now(),
                    	referral_url: "",
                    },
                    {
                    	region: '1090208030',
                    	first_name: "Albus",
                    	last_name: "Percival Wulfric Brian Dumbledore",
                    	email: "albus@gamail.com",
                    	phone_number: "+7 (777) 777-77-77",
                    	consultant_num: ID(),
                    	city: 'Magical British',
                    	middle_name: "",
                    	registered_date: Date.now(),
                    	referral_url: "",
                    },
                    {
                    	region: '1090208030',
                    	first_name: "Daenerys",
                    	last_name: "Targaryen",
                    	email: "mother-of-dragons@rambler.ru",
                    	phone_number: "+7 (123) 321-12-21",
                    	consultant_num: ID(),
                    	city: 'Westeros',
                    	middle_name: "",
                    	registered_date: Date.now(),
                    	referral_url: "",
                    },
                    {
                    	region: '1090208030',
                    	first_name: "Fillip",
                    	last_name: "Zhuravlev",
                    	email: "shiningfinger@list.ru",
                    	phone_number: "+7 (985) 905-12-51",
                    	consultant_num: ID(),
                    	city: 'Moscow',
                    	middle_name: "",
                    	registered_date: Date.now(),
                    	referral_url: "",
                    }
                ],
                filteredFields: [
                    "consultant_num",
                    "first_name",
                    "last_name",
                    "middle_name",
                    "city",
                    "email"
                 ]
            }),
            
    		beforeMount() {},
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
    		},
    		computed: {
    			progressiveFilterConsultants() {
    				return throttle(() => {
    					this.filterConsultants();
    				}, 800);
    			}
    		},
    	})
    );



   