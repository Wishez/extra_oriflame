import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import cat from '../assets/images/cat.jpg';

storiesOf('UserHint', module)
    .add('Подсказка',
        () => ({
            template: `<div class="parent row wrap centered simpleWrapper">
                <user-hint class-name="width_500">
                    <decorative-title class-name="marginBottom_18">Описание</decorative-title>
                    <blurry-image-loader :src="cat" class-name="marginBottom_18" relative></blurry-image-loader>
                    <p>Эта подсказка предварительно стилизована.</p>
                    <p>Внутрь неё можно положить любой контент.</p>
                    <p>Эту подсказку можно переиспользовать.</p>
                </user-hint>
            </div>`,
            data: () => ({cat}),
            beforeMount() {},
            methods: {},
            computed: {}
        })
    );