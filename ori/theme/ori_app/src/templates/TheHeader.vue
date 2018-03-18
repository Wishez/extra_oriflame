<template>
	<header  class="darkGrayBackground header parent row wrap materialShadow h-end" 
		itemscope
		itemtype="https://schema.org/Organization"
	>	
		<router-link @focus="setDefaultMenuState"
			to="/" class="grow brand parent centered row">
			<h1 class="brand__title" itemprop="name">
					Oriflame
			</h1>	
		</router-link>
		<site-contacts phone="+7 (985) 905-12-51" 
			email="shiningfinger@list.ru"
			modifier="header"
		/>
		<nav role="navigation" aria-label="Навигация сайта" id="navigationList" @mouseenter="clearTransformOfTabIfNedded" class="navigation parent h-s-end wrap row h-end baseChild">
			<ul class="navigationList parent wrap row h-end v-end v-s-end baseChild">
				<li aria-hidden="true" :class="{
					'visible-hidden': isTabShown
				}"><figure class="activeTab"  data-transformed="false"></figure></li>
				<nav-link  index='0' icon="fas fa-home"
					href="/">Главная</nav-link>
				<nav-link  index='1' icon="fas fa-users" href="/registration">Регистрация</nav-link>
				<nav-link  index='2' icon="fas fa-handshake" href="/business">Бизнес</nav-link>
				<nav-link  index='3' icon="fas fa-gift" href="/shares">Акции</nav-link>
				<nav-link  index='4' icon="fas fa-video" href="/media">Медиа</nav-link>
			</ul>
			<div id="active_page" hidden>Текущая страница</div>
		</nav>
	</header>
</template>

<script>
	import NavLink from '@/components/NavLink';
	import SiteContacts from '@/components/SiteContacts';
	import {
		setTabPosition, 
		doBy, 
		listen, 
		timeout,
		throttle
	} from '@/constants/pureFunctions';

	export default {
		name: "TheHeader",
		components: {
			NavLink,
			SiteContacts
		},
		data() {
			return {
				isTabShown: true
			};
		},
		computed: {
			tab() {
				return document.querySelector('.activeTab');
			}
		},
		mounted: function() {
			timeout(() => {
				this.$set(this, 'isTabShown', this.$store.state.isPageScrolled);
			}
			, 0);

			listen({
				event: 'scroll',
				callback: throttle(() => {
					this.$set(this, 'isTabShown', this.$store.state.isPageScrolled);
				})
			});

			// The callback will execute when the viewport 
			// will upper then 768px, and it is by default.
			// You can change it just setting "condition"
			// porperty in the doBy function's options..
			doBy({
				callback: () => {
					const currentNavigationLink = document.querySelector('.navLink_active');
					if (currentNavigationLink) {
						
						setTabPosition(
							this.tab, 
							currentNavigationLink.dataset.index
						);
					}
				}
			});

			

		},
		methods: {
			setDefaultMenuState() {
				if(this.$store.state.menuWasTransformed) {
					this.$store.state.animations.animateNavigationToDefaultState();
				}
			},
			clearTransformOfTabIfNedded () {
				doBy({
					callback: () => {
						if (this.tab.dataset.transformed !== 'false')
							setTabPosition(this.tab, 0, 'clearTranslate');
					}
				});
			}
		}
	}
</script>

<style lang="sass">
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_helpers.sass'
	@import '../styles/conf/_sizes.sass'

	$i: !important
	.brandContainer
		height: 100%

	.header, .nvaigationList
		position: relative
	.navigation
		min-width: 155em * 5 / 18
		flex-grow: 0
		will-change: transform
		transform: translateY(var(--navigation-translate)) scale(var(--navigation-scale)) !important
		right: 0
		position: static
		z-index: 10
		&_fixed
			position: fixed
			min-width: auto
			justify-content: center


		@include breakpoint($xs)
			min-width: 100%
			max-height: em(65.5)
	.navigationList
		transform: rotate(var(--navigation-rotate))
		will-change: transform
		min-height: 58.4px
		@include breakpoint($xxs)
			flex-wrap: nowrap
	.brand
		&:hover, &:focus,  &:active
			background-image: none
			color: #f7f7f7
			
	.brand__title
		font-weight: bold
		font-size: $s29
	.contactsContainer_header
		@include breakpoint($xs)
			padding: 0 1.5rem $s29 $i
	.brand, .contactsContainer_header
		@include breakpoint($xs)
			min-width: 100%
			justify-content: center $i
	.brand
		@include breakpoint($md-less)
			padding-left: 5rem
			justify-content: flex-start
		padding-bottom: .5rem

		color: #f2f2f2
		font-style: italic
		font-size: $s29
		@include breakpoint($xs)
			padding: $s11 1.5rem
		// position: absolute
		// left: 3rem

	.header
		min-height: em(123.363469255968)
</style>