<template>
	<header  class="header parent row wrap cascadingShadow" 
		itemscope
		itemtype="https://schema.org/Organization"
	>	
		
		<nav @mouseenter="clearTransformOfTabIfNedded" class="nvaigation parent h-s-end wrap row h-end baseChild">
			<router-link to="/" class="brand parent v-s-centered centered row">
				<h1 class="brand__title" itemprop="name">
						Oriflame
				</h1>	
			</router-link>
			<ul class="nvaigationList parent wrap row h-end v-end v-s-end baseChild">
				<li><figure class="activeTab" data-transformed="false"></figure></li>
				<nav-link  index='0' icon="fas fa-home"
					href="/">Главная</nav-link>
				<nav-link  index='1' icon="fas fa-users" href="/registration">Регистрация</nav-link>
				<nav-link  index='2' icon="fas fa-handshake" href="/business">Бизнес</nav-link>
				<nav-link  index='3' icon="fas fa-gift" href="/shares">Акции</nav-link>
				<nav-link  index='4' icon="fas fa-video" href="/media">Медиа</nav-link>
			</ul>
			<div id="activePageDescription" hidden>Текущая страница</div>
		</nav>
	</header>
</template>

<script>
	import NavLink from './../components/NavLink';
	import {setTabPosition} from './../constants/pureFunctions';

	export default {
		components: {
			NavLink
		},
		computed: {
			tab() {
				return document.querySelector('.activeTab');
			}
		},
		mounted: function() {
			const index = document.querySelector('.navLink_active').dataset.index;
			
			setTabPosition(this.tab, index);
		},
		methods: {
			clearTransformOfTabIfNedded () {
				if (this.tab.dataset.transformed !== 'false')
					setTabPosition(this.tab, 0, 'clearTranslate');
			}
		}
	}
</script>

<style lang="sass">
	.brandContainer
		height: 100%

	.header, .nvaigationList
		position: relative
	.nvaigationList
		height: 58.4px;
		max-width: 155em * 5 / 18

	.brand__title
		font-weight: bold
	.brand
		padding-bottom: .5rem

		color: #f2f2f2
		font-style: italic
		font-size: 1.618em
		position: absolute
		left: 10%

	.header
		min-height: 88px
		background-color: #333
</style>