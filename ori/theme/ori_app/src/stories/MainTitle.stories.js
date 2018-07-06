import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';

storiesOf('MainTitle', module)
    .add('Hello World',
        () => ({
            template: `<div class="parent row wrap centered simpleWrapper">
                <main-title>Hello World!</main-title>
            </div>`,
        })
    );