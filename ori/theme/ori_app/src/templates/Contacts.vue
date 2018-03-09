<template>
	<address :class="['h-s-end parent v-centered contactsContainer', modifier ? 'contactsContainer_' + modifier : '' ]">
		<ul class="unstyledList contactsList normalStyle semibold">
			<li class="contact parent row nowrap v-centered">
				<icon modifier="contact" icon="fab fa-viber"></icon>
				<a class="contact__link" :href="`tel:${phone}`">{{ phone }}</a>
			</li>
			<li class="contact parent row nowrap v-centered">
				<icon modifier="contact" icon="fas fa-at"></icon>
				<a class="contact__link" :href="`mailto:${email}`">{{ email }}</a>
			</li>
			<li v-if="address" class="contact parent row nowrap v-centered">
				<icon modifier="contact" icon="fas fa-location-arrow"></icon>
				<a class="contact__link" @click="notFollow" :href="addressHref">{{ address }}</a>
			</li>
		</ul>
	</address>
</template>

<script>
	import Icon from './Icon';
	import {notFollow} from './../constants/pureFunctions'

	export default {
		name: "Contacts",
		props: {
			phone: String,
			email: String,
			address: String,
			addressHref: String,
			modifier: String
		},
		components: {
			Icon
		},
		methods: {
			notFollow
		}

	}
</script>

<style lang="sass">
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'
	.iconBackground_contact
		margin-right: (16rem / 18)
	.contactsList
		// padding-left: 1.5rem
		letter-spacing: .06rem
		padding-right: 5rem
		min-width: (260em / 18)
		@include breakpoint($md-less)
			padding-top: 1.5rem
			padding-bottom: 1.5rem
		@include breakpoint($xs)
			padding: 0
			// justify-self: center
	.contact
		&:not(:first-of-type)
			margin-top:  (18em * 1.5 - 18) / 18
		&__link
			color: $white


</style>