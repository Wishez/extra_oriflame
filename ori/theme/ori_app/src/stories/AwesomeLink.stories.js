import Vue from 'vue';
import {
	storiesOf
} from '@storybook/vue';
import router from '../router';


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
	);