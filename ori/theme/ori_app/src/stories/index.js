import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';
import store from '../store';
import router from '../router';
import './index.sass';

const StoryContainer = () => (
  {
		template: `<div class="simpleWrapper parent centered">
    	<slot><slot/>
		</div>`,
		props: {
			className: {
				type: String,
				required:false ,
				default: ''
			}
		},
	}
);

Vue.component('StoryContainer', StoryContainer);

storiesOf('The Ladder', module)
  .add('Карьерная лестница', 
  	() => 
  	({
  		store,
  		template: `<div class="simpleWrapper businessPage paddingTop_big">
  			<the-ladder/>
  		</div>`
  	})
  );

storiesOf('Awesome Link', module)
  .add('Стандартная', 
  	() => 
  	({
  		router,
  		template: `<div class="container wrapper parent centered simpleWrapper">
	  		<awesome-link label="Переход на главную книжки с историями"
	    			content="Перейди по мне" 
	    			href="/" 
	    			className="banner__button whiteTextShadow"/>
	    	</div>`
		})
	)
	.add('Бургундная',
		() =>
		({
			router,
			template: `<div class="container wrapper parent centered simpleWrapper">
	  		<awesome-link label="Переход на главную книжки с историями"
	    			content="Hover me!" 
						href="/"
						modifier="burgund" 
	    			className="banner__button whiteTextShadow"/>
	    	</div>`
		})
	)
	.add('Салатовая',
		() =>
		({
			router,
			template: `<div class="parent centered simpleWrapper">
	  		<awesome-link label="Переход на главную книжки с историями"
	    			content = "Нажми на меня"
						href="/" 
						modifier="green"
	    			className="banner__button whiteTextShadow"/>
	    	</div>`
		})
	)

	.add('Белая',
		() =>
		({
			router,
			template: `<div class="parent centered simpleWrapper background-color_darkGray">
	  		<awesome-link label="Переход на главную книжки с историями"
	    			content="Перейди по мне" 
						href="/" 
						modifier="white"
	    			className="banner__button whiteTextShadow"/>
	    	</div>`
		})
	)

import russianBreakfest from '../assets/images/russian-breakfest.jpg';

storiesOf('About Item', module)
  .add('Абзац без изображения', 
  	() => 
  	({
  		store,
  		template: `<div class="blog parent centered simpleWrapper">
  			<about-item title="Что такое Storybook?">
					<p> Это <strong> инструмент для представления компонентов </strong> приложения в одном месте. Можно <strong>создавать истории</strong> , которые будут выглядить, как наративная <strong> документация </strong>. Обычно используется в больших проектах.</p>	
				</about-item>
					
  		</div>`
  	})
	)
	.add('Абзац с изображением',
		() =>
		({
			store,
			template: `<div class="blog parent centered simpleWrapper">
				<about-item 
					title="Компонент AboutItem" 
					image="${russianBreakfest}">
					<p> AboutItem - <strong> это переиспользуемая обёртка </strong> для какого-либо контента. Задав атрибуты <strong> title </strong > и <strong> image </strong> можно получить контейнер с заголовком и изображением.</p >
					<p>Чтобы разнообразить этот компонент, можно запихнуть внутрь него столько контента, сколько будет достаточно, чтобы удовлетворить ваше безудержное воображение.</p>
				</about-item>
					
  		</div>`
		})
	);


const buttonsState = {
	error: false,
	success: false
}

function changeStateOf({
	field,
	isClicked
}) {
	buttonsState[field] = isClicked;
}

storiesOf('Base Button', module)
	.add('Обычная розовая кнопка',
		() =>
		({
			template: `<div class="parent centered simpleWrapper">
					<base-button 
          class-name="textShadow"
          modifier="burgund"
        >
          Click me!
        </base-button>
  		</div>`
		})
	)
	.add('Кнопка успешной регистрации',
		() =>
		({
			template: `<div class="parent centered simpleWrapper">
					<base-button 
						:class-name="isClicked ? 'textShadow button_submit button_successful' : 'textShadow button_submit'"
						:action="changeState"
						modifier="burgund"
						type="submit"
					>
							{{ name }}
						</base-button>
					</div>`,
				data: () => ({
					name: 'Click on button!',
					isClicked: false
				}),
				methods: {
					changeState() {
						this.isClicked = !this.isClicked;
					}
				}
		})
	)
		.add('Кнопка с ошибкой',
			() =>
			({
				template: `<div class="blog parent centered simpleWrapper">
					<base-button 
						:class-name="isClicked ? 'textShadow button_submit button_error' : 'textShadow button_submit'"
						:action="changeState"
						modifier="burgund"
						type="submit"
					>
							{{ name }}
						</base-button>
					</div>`,
				data: () => ({
					name: 'Click on button!',
					isClicked: false
				}),
				methods: {
					changeState() {
						this.isClicked = !this.isClicked;
					}
				}
			})
	);


	storiesOf('Simple Litter', module)
		.add('Подложка для контента',
			() =>
			({
				template: `<div class="parent centered simpleWrapper">
					<simple-litter>
						<h2 class="marginBottom_18">Фиш контент!</h2>
						<p>Товарищи! Новая модель организационной деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.Задача организации, в особенности же начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации дальнейших направлений развития.Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.</p>

						<p>Не следует, однако забывать, что укрепление и развитие структуры требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач.Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют определения и уточнения систем массового участия.</p>

						<p>С другой стороны постоянное информационно - пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу(специалистов) участие в формировании новых предложений.С другой стороны укрепление и развитие структуры представляет собой интересный эксперимент проверки форм развития.Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требуют от нас анализа систем массового участия.Таким образом постоянное информационно - пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу(специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям.Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют от нас анализа дальнейших направлений развития.Таким образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу(специалистов) участие в формировании форм развития.</p>
        	</simple-litter>
  		</div>`
			})
		);

storiesOf('External Link', module)
	.add('Внешние ссылки',
		() =>
		({
			template: `<div class="parent row wrap centered simpleWrapper">
					
					<p class="fullWidth parent centered">
						<external-link to="https://shining-present.ru" class="lightenHover">Портфолио</external-link></p>
					<p class="fullWidth parent centered">
						<external-link to="https://filipp-zhuravlev.ru" class="darkenHover">Блог</external-link></p>
  		</div>`
		})
	);

storiesOf('NavLink', module)
	.add('Cсылки навигации',
		() =>
		({
			router,
			store,
			template: `<div class="parent row wrap centered simpleWrapper">
				<nav>
					<ul class="navigationList parent wrap row h-center v-end baseChild">
						<nav-link
								:index="0"
								icon="fas fa-thumbs-up"
								href="/"
						>
							<span class="navLink__label">
								True
							</span>
						</nav-link>

						<nav-link
								:index="1"
								icon="fas fa-thumbs-down"
								href="/to"
						>
							<span class="navLink__label">
								False
							</span>
						</nav-link>
					</ul>
				</nav>
  		</div>`
		})
	)

	.add('Мобильные ссылки',
		() =>
		({
			router,
			store,
			template: `<div class="parent row wrap centered simpleWrapper">
				<nav>
					<ul class="navigationList parent wrap column h-center v-end baseChild">
						<nav-link
								:index="0"
								icon="fas fa-thumbs-down"
								href="/"
								is-mobile
						>
							<span class="navLink__label">
								True
							</span>
						</nav-link>

						<nav-link
								:index="1"
								icon="fas fa-thumbs-down"
								href="/to"
								is-mobile
						>
							<span class="navLink__label">
								False
							</span>
						</nav-link>
					</ul>
				</nav>
			</div>`,

			// beforeMount() {
			// 	window.scroll(0, 400);

			// 	this.$store.state.baseOffsetForTransform = 0;
			// 	this.$store.state.rootElement.scrollTop = 600;
			// }
		}),
		
	);