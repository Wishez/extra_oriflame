import Vue from 'vue';
import {
	storiesOf
} from '@storybook/vue';
import store from '../store';

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
