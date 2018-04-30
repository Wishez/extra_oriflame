<template>
	<footer class="whiteBackground footer  parent h-around wrap v-end">
		<site-contacts 
			modifier="footer"
			:address="address"
			:addressHref="addressHref"
		/>
		<p class="light container copyrigth textRight">&copy;&nbsp;2018&nbsp;Сайт независимого консультанта<br/>
			Создано с любовь к 
			<external-link className="normalWeight darkenHover" to="https://oriflame.ru">Орифлейм</external-link>
		</p>
		<p v-if="false" class="container author textRight light">Дизайн и разработка:<br/>
			<external-link className="normalWeight darkenHover" to="https://shining-present.ru">&#x2661;&nbsp;Филипп Журавлёв</external-link>
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
		background-color: $green
		padding: $s29 $s29 $s47
		box-shadow: 0 -4px 6px  1px rgba(0, 0, 0, 0.05)
		
		@include breakpoint($xs)
			justify-content: space-between
			padding-bottom: em(124.586 / 1.618)

	.contactsContainer_footer

		ul 
			@include breakpoint($md-less)
				padding: 0
			

	.copyrigth, .author

		@include breakpoint($md-less)
			// min-width: 50%
			max-width: none !important
			margin: 0
			padding: 0

		@include breakpoint($xs)
			min-width: 100%

	.copyrigth
		@include breakpoint($xs)
			margin-top: $s29
			
		// @include breakpoint($xs-only)
		// 	text-align: right

	.author, .copyrigth
		margin-left: 0
		margin-right: 0
		// @include breakpoint($md-less)
			

</style>