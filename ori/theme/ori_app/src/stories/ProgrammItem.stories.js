import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';
import {
	first,
	second,
	third,
	fourth
} from "@/assets/images/programm";
import space from "@/assets/images/present/space.jpg";

storiesOf('Programm Item', module)
    .add('Единичный компонент',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
              <programm-item 
                    :src="item.src"
                    :title="item.title"
                    :name="item.name"
                    :step-description="item.stepDescription"
                    :title-modifier="item.titleModifier"
                />
            </div>`,
            data() {
                return {
                    item: {
                        src: space,
                        title: 'こんにちは',
                        name: 'fourth',
                        stepDescription: {
                        	paragraph: "Товарищи! укрепление и развитие структуры влечет за собой процесс внедрения и модернизации систем массового участия. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания по разработке соответствующий условий активизации."
                        },
                        titleModifier: 'center'
                    }
                }
            },
            beforeMount() {},
            methods: {},
            computed: {}
        })
    )
    .add('Группа компонентов',
    	() => ({
    		router,
    		store,
    		template: `<div class="parent row wrap centered paddingTop_77 paddingBottom_big">
              <div class="programmItems parent h-between row wrap">
				
                <programm-item 
                    v-for="(item, index) in items"
                    :key="index"
                    :src="item.src"
                    :title="item.title"
                    :name="item.name"
                    :step-description="item.stepDescription"
                    :title-modifier="item.titleModifier"
                />
            </div>
            </div>`,
    		data() {
    			return {
    				items: [{
    							id: 0,
    							title: "Первый шаг",
    							src: first,
    							name: "first",
    							stepDescription: {
    								paragraph: "Выполнив условия этого квеста <strong>вы получите, совершенно бесплатно</strong>, набор продукции №1."
    							}
    						}, // end first
    						{
    							id: 1,
    							title: "Второй шаг",
    							src: second,
    							name: "second",
    							titleModifier: "right",
    							stepDescription: {
    								paragraph: "Выполнив эти условия ещё раз, в следующие 21 день, <strong>вы получите, совершенно бесплатно</strong>,  дополнительно к набору №1, набор продукции №2."
    							}
    						}, // end second
    						{
    							id: 2,
    							title: "Третий шаг",
    							src: third,
    							name: "third",
    							stepDescription: {
    								paragraph: "Выполнив эти <strong>условия ещё раз</strong>, в следующие 21 день, вы можете выбрать <strong>один из трёх вариантов</strong>, дополнительно к набору №1 и №2, набор продукции №3."
    							}
    						}, // end third
    						{
    							id: 3,
    							name: "fourthMan",
    							src: fourth,
    							title: "Четвёртый шаг",
    							titleModifier: "center",
    							stepDescription: {
    								paragraph: "Выполнив эти условия <strong>ещё раз, в следующие 21 день</strong>, вы можете выбрать один из двух вариантов, <strong> совершенно бесплатно</strong>, дополнительно к набору №1, №2 и №3, набор продукции №4."
    							}
    						} // end fourthWooman
    					], // end programmItems
    					extraInfoLinks: [{
    							id: 0,
    							text: "Бонусные баллы",
    							href: "/business",
    							hashResource: "#scores"
    						},
    						{
    							id: 1,
    							text: "О регистрации",
    							href: "/registration",
    							hashResource: "#description"
    						},
    						{
    							id: 3,
    							text: "Интернет магазин",
    							href: "https://www.oriflame.ru/",
    							external: true
    						},
    						{
    							id: 4,
    							text: "О структуре бизнеса",
    							href: "/business"
    						},
    						{
    							id: 5,
    							text: "Видео об Орифлейм ",
    							href: "/media"
    						}
    					] // end extraInfoLinks
    			}
    		},
    		beforeMount() {},
    		methods: {},
    		computed: {}
    	})
    );


    