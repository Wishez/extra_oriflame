<template>
	<footer class="darkGrayBackground footer whiteColor parent h-around wrap v-end">
		<site-contacts phone="+7 (985) 905-12-51" 
			email="shiningfinger@list.ru"
			modifier="footer"
			address="ул. Животноводова д. 322"
			addressHref="https://shining-present.ru"

		/>
		<p class="light container copyrigth textCentered">&copy;&nbsp;2018&nbsp;Сайт независимого консультанта<br/>
			Создано с любовь к 
			<external-link className="normalWeight pinkColor lightenHover" to="https://oriflame.ru">Орифлейм</external-link>
		</p>
		<p class="container author textRight light">Дизайн и разработка:<br/>
			<external-link className="normalWeight pinkColor lightenHover" to="https://shining-present.ru">&#x2661;&nbsp;Филипп Журавлёв</external-link>
		</p>
	</footer>
</template>

<script>
	import SiteContacts from '@/components/SiteContacts';
	import ExternalLink from '@/components/ExternalLink';

	export default {
		name: "TheFooter",
		data() {
			return {

			};
		},
		components: {
			SiteContacts,
			ExternalLink
		},
		props: {
			className: {
				type: String,
				required: false
			},
			modifier: {
				type: String,
				required: false
			}
		}
	}
</script>

<style lang="sass">
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'
	.footer
		padding: $s29
		@include breakpoint($xs)
			padding-bottom: em(124.586)
	.contactsContainer_footer
		@include breakpoint($md-less)
			min-width: 100%
			padding: 0
			margin-bottom: $s29
	.copyrigth, .author
		@include breakpoint($md-less)
			min-width: 50%
			max-width: none !important
			margin: 0
			padding: 0
		@include breakpoint($xs)
			min-width: 100%
	.copyrigth
		@include breakpoint($md-less)
			text-align: left
		@include breakpoint($xs)
			margin-bottom: $s29
	// .author
		// @include breakpoint($md-less)
			

</style>