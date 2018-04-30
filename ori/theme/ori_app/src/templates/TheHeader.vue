<template>
	<header  class="whiteBackground header parent row wrap materialShadow h-end" 
		itemscope
		itemtype="https://schema.org/Organization"
	>	
		<router-link @focus="setDefaultMenuState"
			to="/"
			@blur="transformMenu" 
			@keypress="setDefaultMenuStateByPresingTab" class="grow brand paddingBottom_11 parent centered row disableUnderline">
			<svg  class="brand__title" itemprop="name" viewBox="0 0 173 64" aria-hidden="true">
                    <path d="M74.912 45.609l-1.594-4.904h-0.981l-1.594 4.904-1.594-4.904h-1.226l2.207 6.621h0.981l1.716-4.659 1.594 4.659h0.981l2.207-6.621h-1.226z"></path>
                    <path d="M18.268 43.525h33.349v0.981h-33.349v-0.981z"></path>
                    <path d="M59.586 18.636h2.207v14.59h-2.207v-14.59z"></path>
                    <path d="M70.13 33.226h2.207v-6.13h7.602v-2.084h-7.602v-4.414h8.46v-1.962h-10.667z"></path>
                    <path d="M25.257 33.471c4.659 0 8.46-3.801 8.46-8.46 0-4.536-3.801-6.621-6.621-6.621-5.517 0-5.885 5.395-5.885 5.395h0.123c0 0 0.981-3.923 4.782-3.923 3.065 0 5.395 2.084 5.395 5.027 0 3.433-2.82 6.253-6.253 6.253-3.31 0-6.375-2.452-6.375-6.866 0-3.433 1.839-6.253 5.027-7.479v-0.123c-4.046 0.613-6.989 4.169-6.989 8.337-0.123 4.659 3.678 8.46 8.337 8.46z"></path>
                    <path d="M62.038 43.525c-1.226-0.245-1.594-0.49-1.594-0.981s0.368-0.736 1.103-0.736c0.613 0 1.226 0.245 1.716 0.613l0.613-0.858c-0.613-0.49-1.471-0.858-2.33-0.858-1.349 0-2.207 0.736-2.207 1.962s0.736 1.594 2.207 1.962c1.226 0.245 1.471 0.49 1.471 0.981s-0.49 0.858-1.103 0.858c-0.858 0-1.471-0.368-2.084-0.858l-0.736 0.858c0.736 0.736 1.717 1.103 2.697 1.103 1.349 0 2.329-0.736 2.329-1.962 0-1.349-0.736-1.839-2.084-2.084z"></path>
                    <path d="M52.72 33.226l-4.414-5.885c2.207-0.613 3.678-2.207 3.678-4.291 0-2.697-2.207-4.536-5.395-4.536h-6.376v14.59h2.207v-5.395h3.556l4.046 5.395 2.697 0.123zM42.421 25.747v-5.149h4.046c2.084 0 3.31 0.858 3.31 2.452s-1.349 2.575-3.31 2.575h-4.046z"></path>
                    <path d="M83.126 44.506h3.31v-1.103h-3.31v-1.594h3.678v-1.103h-4.782v6.498h4.782v-0.981h-3.678z"></path>
                    <path d="M108.751 18.513l-6.621 14.713h2.329l1.716-3.801h7.111l1.594 3.801h2.452l-6.621-14.713h-1.962zM106.912 27.464l2.697-6.253 2.697 6.253h-5.395z"></path>
                    <path d="M125.058 22.437l4.659 6.866 0.245 0.368 0.245-0.368 4.536-6.866v10.789h2.207v-14.59h-2.084l-4.904 7.356-4.904-7.356h-2.084v14.59h2.084z"></path>
                    <path d="M125.058 43.525h30.897v0.981h-30.897v-0.981z"></path>
                    <path d="M147.249 31.142v-4.291h7.602v-2.084h-7.602v-4.169h8.582v-1.962h-10.789v14.59h10.789v-2.084z"></path>
                    <path d="M115.862 45.241l-3.556-4.536h-1.103v6.498h1.226v-4.536l3.556 4.536h0.981v-6.498h-1.103z"></path>
                    <path d="M89.87 18.636h-2.084v14.59h10.054v-2.084h-7.969z"></path>
                    <path d="M102.989 44.506h3.31v-1.103h-3.31v-1.594h3.678v-1.103h-4.782v6.498h4.904v-0.981h-3.801z"></path>
                    <path d="M93.793 40.705h-2.452v6.498h2.452c2.084 0 3.433-1.471 3.433-3.31 0.123-1.717-1.349-3.188-3.433-3.188zM93.793 46.222h-1.349v-4.414h1.349c1.349 0 2.207 0.981 2.207 2.207 0.123 1.226-0.858 2.207-2.207 2.207z"></path>
            </svg>
		</router-link>

		<site-contacts modifier="header"
			className="paddingBottom_11"
			@keypress="setDefaultMenuStateByPresingTab"
		/>
		<nav role="navigation" aria-label="Навигация сайта" id="navigationList" @mouseenter="clearTransformOfTabIfNedded" class="navigation parent h-s-end wrap row h-end baseChild">
			<ul class="navigationList parent wrap row h-end v-end v-s-end baseChild">
				<li aria-hidden="true" :class="{
					'visible-hidden': isTabShown
				}">
					<figure class="activeTab"  data-transformed="false"></figure>
				</li>
				<!-- <nav-link /> -->
				<nav-link
					v-for="(link, index) in navigationLinks"
					:key="index"
					:isExternalLink="!!link.isExternalLink"
					:index="index"
					:icon="link.icon"
					:href="link.href"
					@keypress="setDefaultMenuStateByPresingTab" 
					@blur="transformMenu" 
				>
					<span class="navLink__label">
						{{ link.name }}
					</span> 
				</nav-link>
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

	import {businessUrl} from '@/constants/conf';

	export default {
		name: "TheHeader",
		components: {
			NavLink,
			SiteContacts
		},
		data: () => ({
			isTabShown: true,
			navigationLinks: [
				{
					name: 'Главная',
					href: '/',
					icon: 'fas fa-home'
				},
				{
					name: 'Регистрация',
					href: '/registration',
					icon: 'fas fa-users'
				},
				{
					name: 'Бизнес',
					href: businessUrl,
					icon: 'fas fa-handshake',
					isExternalLink: true
				},
				{
					name: 'Акции',
					href: '/shares',
					icon: 'fas fa-gift'
				},
				{
					name: 'Медиа',
					href: '/media',
					icon: 'fas fa-video'
				}
			]
			
		}),
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
			transformMenu() {
				this.$store.state.animations.transformMenuIfNeeded();
			},
			setDefaultMenuStateByPresingTab(event) {
	  			switch (event.key) {
	  				case 'TAB':
	  					this.setDefaultMenuState();
	  					break;
	  				default: 
	  					return;
		  		}
			},
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
	@import '../styles/conf/_colors.sass'

	.navLink__label
		@include breakpoint($xxs)
			font-size: em(14)

	$i: !important
	.brandContainer
		height: 100%
	.header
		box-shadow: 0 5px 6px  2px rgba(0, 0, 0, 0.05)
		background-color: $green

	.header, .nvaigationList
		position: relative
	.navigation
		min-width: 155px * 5
		flex-grow: 0
		will-change: transform
		right: 0
		position: static
		z-index: 10

		&_fixed
			position: fixed
			min-width: auto
			justify-content: center

		@include breakpoint($xs-up)
			bottom: auto $i

		@include breakpoint($xs)
			min-width: 100%
			background-color: currentColor
			transform: none $i
			right: 0 $i
			
	.navigationList
		position: relative
		// transform: rotate(var(--navigation-rotate))
		will-change: transform
		min-height: 58.4px

		@include breakpoint($xs)

		@include breakpoint($xxs)
			flex-wrap: nowrap
	.brand__title
		font-size: $s29
		fill: #333
		width: 70%
		width: 322.956186888460770432px
		// max-width: em(322.956186888460770432, 29)
	.contactsContainer_header
		@include breakpoint($xs)
			padding: 0 1rem 3rem 1.5rem  $i
	.brand, .contactsContainer_header
		@include breakpoint($xs)
			min-width: 100%
			justify-content: center $i
	.brand
		&:hover, &:focus,  &:active
			background-image: none
			color: #333
		@include breakpoint($md-less)
			padding-left: 5rem
			justify-content: flex-start

		
		// font-style: italic
		font-size: $s29
		@include breakpoint($xs)
			// padding: $s11 1.5rem
			padding: 0 1rem .5rem 1.5rem
		// position: absolute
		// left: 3rem

	.header
		color: #333
		min-height: em(123.363469255968)
</style>