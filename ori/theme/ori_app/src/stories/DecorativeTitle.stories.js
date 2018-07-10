import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';

storiesOf('DecorativeTitle', module)
    .add('Прелесный подзаголовок',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <decorative-title>Awesome Heading</decorative-title>
            </div>`,
            data: () => ({}),
            beforeMount() {},
            methods: {},
            computed: {}
        })
    );