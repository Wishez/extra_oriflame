import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';

storiesOf('SiteContacts', module)
    .add('Телефон и Почта',
        () => ({    
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <site-contacts modifier="header"></site-contacts>
            </div>`,
            beforeMount() {
                localStorage.phone = "+7 (985) 905-12-51";
                localStorage.email = "shiningfinger@list.ru";
                
                this.$store.state.currentSiteTheme.contactIconStyle = "green"
            },
        })
    )
    .add('Телефон, Почта и Адрес',
    	() => ({
    		router,
    		store,
    		template: `<div class="parent row wrap centered simpleWrapper">
                <site-contacts 
                    address="Магадан"
                    address-href="https://goo.gl/maps/3yiYBbyHhCL2"
                ></site-contacts>
            </div>`,
    		beforeMount() {
    			localStorage.phone = "8 (800) 555-35-55";
                localStorage.email = "shiningfinger@list.ru";

    			this.$store.state.currentSiteTheme.contactIconStyle = "pink"
    		},
    	})
    );