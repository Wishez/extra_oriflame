import Vue from 'vue';
import {
	storiesOf
} from '@storybook/vue';

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
