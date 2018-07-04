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
  .add('Привлекательная ссылка', 
  	() => 
  	({
  		router,
  		template: `<div class="container wrapper parent centered simpleWrapper">
	  		<awesome-link label="Переход на главную книжки с историями"
	    			content="Классная Кнопка" 
	    			href="/" 
	    			className="banner__button whiteTextShadow"/>
	    	</div>`
	})
  );
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