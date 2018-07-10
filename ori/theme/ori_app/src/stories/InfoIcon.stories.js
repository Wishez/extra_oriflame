import Vue from 'vue';
import {
	storiesOf
} from '@storybook/vue';
import store from '../store';

storiesOf('InfoIcon', module)
    .add('Стандартная',
        () => ({
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                    <info-icon label="Информация об информативной кнопке"></info-icon>
                </div>`,
        })
    )