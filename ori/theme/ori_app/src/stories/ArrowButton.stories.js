import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';
import anime from 'animejs';

storiesOf('Arrow Button', module)
    .add('Вертикальные кнопки',
        () => ({
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <p class="parent centered fullWidth">Счётчик: {{ count }}</p>
                <arrow-button 
                    :makeAction="() => (() => {count+=1;})"
                    label="Увеличить счётчик" 
                    direction="up"
                    class-name="marginTop_11 marginRight_6"
                ></arrow-button>

                <arrow-button 
                    :makeAction="() => (() => {count-=1;})"
                    label="Уменьшить счётчик" 
                    direction="down"
                    class-name="marginTop_11"
                ></arrow-button>
            </div>`,
            data() {
                return {
                    count: 0
                };
            }
        })
    )
    .add('Горизонтальные кнопки',
    	() => ({
    		store,
    		template: `<div class="parent row wrap centered simpleWrapper">
                <p ref="translatedBlock" class="parent centered fullWidth">Перемешающийся блок</p>
                <div class="fullWidth parent centered">
                    <arrow-button 
                        :makeAction="() => (
                            () => {
                                translateBlock({
                                    x: 0,
                                    y: positionY-offset
                                });
                            }
                        )"
                        label="Переместить блок вверх" 
                        direction="up"
                        class-name="marginTop_11"
                    ></arrow-button>
                </div>

                <arrow-button 
                    :makeAction="() => (
                        () => {
                            translateBlock({
                                x: positionX-offset,
                                y: 0
                            });
                        }
                    )"
                    label="Переместить блок влево"
                    direction="left"
                    class-name="marginTop_11 marginRight_47"
                ></arrow-button>

                <arrow-button 
                    :makeAction="() => (
                        () => {
                            translateBlock({
                                x: positionX+offset,
                                y: 0
                            });
                        }
                    )"
                    label="Переместить блок вправо" 
                    direction="right"
                    class-name="marginTop_11"
                ></arrow-button>

                <div class="fullWidth parent centered">
                    <arrow-button 
                        :makeAction="() => (
                            () => {
                                translateBlock({
                                    x: 0,
                                    y: positionY+offset
                                });
                            }
                        )"
                        label="Переместить блок вниз" 
                        direction="down"
                        class-name="marginTop_11"
                    ></arrow-button>
                </div>
            </div>`,
    		data() {
    			return {
                    positionX: 0,
                    positionY: 0,
                    offset: 50
    			};
            },
            methods: {
                translateBlock({x, y}) {
                   const targets = this.$refs.translatedBlock;
                    
                   anime({
                        targets,
                        translateY: y,
                        translateX: x,
                        duration: 300,
                        easing: "easeInOutCirc",
                        elasticity: 100
                   });

                   this.positionX = x;
                   this.positionY = y;
                }
            }
    	})
    );