import Vue from 'vue';

import {
	storiesOf
} from '@storybook/vue';
import store from '../store';
import router from '../router';

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
			</div>`
		})
	);