import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';

storiesOf('TheCallback', module)
    .add('Форма обратного вызова',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <the-callback></the-callback>
            </div>`
        })
    );