<template>
	<footer class="whiteBackground footer  parent h-around wrap v-end">
		<site-contacts 
			modifier="footer"
			:address="address"
			:addressHref="addressHref"
		/>
		<p class="light container copyrigth textCentered">&copy;&nbsp;2018&nbsp;Сайт независимого консультанта<br/>
			Создано с любовь к 
			<external-link className="normalWeight lightenHover" to="https://oriflame.ru">Орифлейм</external-link>
		</p>
		<p class="container author textRight light">Дизайн и разработка:<br/>
			<external-link className="normalWeight lightenHover" to="https://shining-present.ru">&#x2661;&nbsp;Филипп Журавлёв</external-link>
		</p>
	</footer>
</template>

<script>
	import SiteContacts from '@/components/SiteContacts';
	import ExternalLink from '@/components/ExternalLink';

	export default {
		name: "TheFooter",
		components: {
			SiteContacts,
			ExternalLink
		},
		computed: {
			address() { 
				return window.localStorage.address;
			},
			addressHref() { 
				return window.localStorage.addressHref;
			}
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
		box-shadow: 0 -4px 6px  1px rgba(0, 0, 0, 0.05)
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
		@include breakpoint($xs-only)
			text-align: center
	.author, .copyrigth
		margin-left: 0
		margin-right: 0
		// @include breakpoint($md-less)
			

</style>