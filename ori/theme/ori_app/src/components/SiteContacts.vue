<template>
  <address :class="['h-s-end parent v-centered contactsContainer', modifier ? 'contactsContainer_' + modifier : '', className ]">
    <ul class="unstyledList contactsList normalStyle darkGrayColor semibold">
      <li class="contact parent row nowrap v-centered marginTop_zero">
        <base-icon 
          modifier="contact" 
          class-name="darkGrayColor" 
          icon="fab fa-viber" />
        <a 
          :href="`tel:${phone}`"
          class="text_nowrap darkenHover contact__link" 
          @focus="setDefaultMenuState" 
        >{{ phone }}</a>
      </li>
      <li class="contact parent row nowrap v-centered">
        <base-icon 
          class-name="darkGrayColor" 
          modifier="contact" 
          icon="fas fa-at"/>
        <a 
          :href="`mailto:${email}`"
          class="text_nowrap darkenHover contact__link" 
          @focus="setDefaultMenuState" 
        >{{ email }}</a>
      </li>
      <li 
        v-if="address && address !== 'None'" 
        class="contact parent row nowrap v-centered ">
        <base-icon 
          class-name="darkGrayColor" 
          modifier="contact" 
          icon="fas fa-location-arrow"/>
        <external-link 
          :to="addressHref" 
          class-name="contact__link darkenHover text_nowrap">
          {{ address }}
        </external-link>
      </li>
    </ul>
  </address>
	
</template>

<script>
import { notFollow } from "@/constants/pureFunctions";

export default {
  name: "SiteContacts",
  props: {
    className: {
      type: String,
      required: false,
      default: ""
    },
    address: {
      type: String,
      required: false,
      default: ""
    },
    addressHref: {
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
    phone() {
      return window.localStorage.phone || "+7 (985) 905-12-51";
    },
    email() {
      return window.localStorage.email || "shiningfinger@list.ru";
    }
  },
  methods: {
    notFollow,
    setDefaultMenuState() {
      if (!this.address && this.$store.state.menuWasTransformed) {
        this.$store.state.animations.animateNavigationToDefaultState();
      }
    }
  }
};
</script>

<style lang="sass">
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'


	.iconBackground_contact
		margin-right: (16rem / 18)
		


	.contactsList
		letter-spacing: .06rem
		padding-right: 5rem
		min-width: (260em / 18)

		@include breakpoint($md-less)
			padding-top: 1.5rem
			padding-bottom: 1.5rem

		@include breakpoint($xs)
			padding: 0
			
	.contact
		&:not(:first-of-type)
			margin-top:  (18em * 1.5 - 18) / 18
		&__link
			color: var(--logoColor)


</style>
