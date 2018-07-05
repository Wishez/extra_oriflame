import Vue from 'vue';

import {
	storiesOf
} from '@storybook/vue';
import store from '../store';
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