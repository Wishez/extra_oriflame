import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';

storiesOf('UserNotification', module)
    .add('Важная информация для пользователя',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper ">
                <user-notification
                    class-name="ladderInfoContainer index_big"
                    class-hint="userNotificationHint"
                >
                    <decorative-title class-name="marginBottom_29">Описание</decorative-title>
                    <p>В этот замечательный компонент можно класть любой контент.</p>
                    <p>Он служит подсказкой для пользователя.</p>
                    <p>Подсказке можно задавать любой класс, который может определить её стили и позицию.</p>
                </user-notification>
            </div>`,
            data: () => ({}),
            beforeMount() {},
            methods: {},
            computed: {}
        })
    );