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


storiesOf('About Item', module)
  .add('Абзац', 
  	() => 
  	({
  		store,
  		template: `<div class="wrapper container blog">
  			<about-item title="Что такое Storybook?" 
  				paragraph="Это <strong>инструмент для представления компонентов</strong> приложения в одном месте. Можно <strong>создавать истории</strong>, которые будут выглядить, как наративная <strong>документация</strong>. Обычно используется в больших проектах." />
  		</div>`
  	})
  );