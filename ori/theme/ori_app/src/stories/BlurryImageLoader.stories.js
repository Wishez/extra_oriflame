import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';
import space from '../assets/images/present/space.jpg';
import cat from '../assets/images/cat.jpg';

storiesOf('BlurryImageLoader', module)
    .add('Плавно загружающееся изображение',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                    <h2 class="bold index_big marginBottom_18">猫です</h2>
                    <blurry-image-loader    
                        :src="image"
                        default-media="(min-width: 481px)"
                        alt="Banner."
                        modifier="banner"
                        class-name="materialShadow fewRound fullWidth"
                        relative
                    ></blurry-image-loader>
                </div>`,
            data: () => ({
                image: cat
            })
        })
    )
    .add('Абсалютно позиционированное изображение',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <h2 class="bold index_big whiteColor">猫です</h2>
                <blurry-image-loader    
                    :src="image"
                    default-media="(min-width: 481px)"
                    alt="Cat."
                    modifier="banner"
                    class-name="materialShadow fewRound fullWidth order_first"
                ></blurry-image-loader>
            </div>`,
            data: () => ({
                image: cat
            })
        })
    )
    