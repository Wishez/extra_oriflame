import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';
import breakfest from '../assets/images/russian-breakfest.jpg';

storiesOf('ContentPreloader', module)
    .add('Прелодер',
        () => ({
            router,
            store,
            template: `<div class="parent column wrap centered simpleWrapper">
                <transition v-if="loaded">
                    <section v-if="loaded" aria-live="assertive">
                        <p class="marginBottom_18"> Спасибо за ожидание и потраченное время!</p>
                        <blurry-image-loader    
                            :src="image"
                            alt="Breakfest."
                            modifier="banner"
                            class-name="materialShadow fewRound fullWidth"
                            relative
                        ></blurry-image-loader>
                    </section>
                </transition>

                <transition v-else  name="fade">
                    <p role="timer" aria-live="polite" class="parent column centered">
                        <base-button 
                            :action="decreaseTime"
                            modifier="burgund"
                            class-name="marginBottom_18"
                        >
                            Быстрее!
                        </base-button>

                        До отображения контента осталось {{ untilTime }} секунд.

                        <content-preloader></content-preloader>
                    </p>
                </transition>
            </div>`,
            data: () => ({
                untilTime: 10,
                loaded: false,
                image: breakfest,
                interval: undefined
            }),
            created() {
                this.interval = setInterval(() => {
                    this.decreaseTime();
                }, 1000);
            },
            methods: {
                decreaseTime() {
                    this.untilTime -= 1;

                    this.showContentIfNeeded();
                },

                showContentIfNeeded() {
                    if (this.untilTime <= 0) {
                    	clearInterval(this.interval);
                    	this.loaded = true;
                    }
                }
            },
            computed: {}
        })
    );