import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';
import store from '../store';
import router from '../router';
import './index.sass';


storiesOf('The Ladder', module)
  .add('Карьерная лестница', 
  	() => 
  	({
  		store,
  		template: `<div class="simpleWrapper businessPage">
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