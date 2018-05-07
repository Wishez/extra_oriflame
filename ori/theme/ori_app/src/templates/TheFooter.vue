<template>
  <footer class="whiteBackground footer  parent h-around wrap v-end">
    <site-contacts 
      :address="address"
      :address-href="addressHref"
      modifier="footer"
    />
    <p class="light container copyrigth textRight">&copy;&nbsp;2018&nbsp;Сайт независимого консультанта<br>
      Создано с любовь к 
      <external-link 
        class-name="copyrigth__refer normalWeight darkenHover" 
        to="https://oriflame.ru">Орифлейм</external-link>
    </p>
    <p 
      v-if="false" 
      class="container author textRight light">Дизайн и разработка:<br>
      <external-link 
        class-name="normalWeight darkenHover" 
        to="https://shining-present.ru">&#x2661;&nbsp;Филипп Журавлёв</external-link>
    </p>
  </footer>
</template>

<script>
import SiteContacts from "@/components/SiteContacts";

export default {
  name: "TheFooter",
  components: {
    SiteContacts
  },
  props: {
    className: {
      type: String,
      required: false,
      default: ""
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    address() {
      return window.localStorage.address;
    },
    addressHref() {
      return window.localStorage.addressHref;
    }
  }
};
</script>

<style lang="sass">
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_breakpoints.sass'
	.footer
	
		background-color: var(--topBottomBackgroundColor, $white)
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
    &, & a
      color: var(--logoColor, $white)
		@include breakpoint($xs)
			margin-top: $s29
			
		// @include breakpoint($xs-only)
		// 	text-align: right

	.author, .copyrigth
		margin-left: 0
		margin-right: 0
		// @include breakpoint($md-less)
			

</style>
