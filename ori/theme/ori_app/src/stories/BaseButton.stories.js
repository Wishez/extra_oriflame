import Vue from 'vue';

import {
	storiesOf
} from '@storybook/vue';


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
