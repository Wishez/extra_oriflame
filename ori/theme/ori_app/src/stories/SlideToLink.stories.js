import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import space from '../assets/images/present/space.jpg';

storiesOf('SlideToLink', module)
    .add('Ссылка для плавной прокрутки до контента',
        () => ({
            template: `<div class="parent row wrap centered simpleWrapper">
                <slide-to-link selector="#helloWorld" class-name="registrationContent__slideLink fewRound">Спуститься до приветствия</slide-to-link>
                <decorative-title id="helloWorld" class-name="marginTop_extra">Hello, Pal!</decorative-title>
            </div>`
        })
    )
    .add('Ссылка в стиле кнопки',
    	() => ({
    		template: `<div class="parent column wrap centered simpleWrapper">
                <slide-to-link modifier="button" selector="#description" class-name="registrationContent__slideLink fewRound">Посмотреть контент ниже</slide-to-link>
                <article id="description"  class="width_500 marginTop_extra">
                    <decorative-title>Описание</decorative-title>
                    <p class="marginBottom_18">Всего лишь добавил атрибут <strong>modifier</strong> с значением <strong>"button"</strong>!</p>
                    <blurry-image-loader :src="space" relative></blurry-image-loader>
                </article>
                
            </div>`,
            data() {
                return {
                    space
                };
            }
    	})
    );