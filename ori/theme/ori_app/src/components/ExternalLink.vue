
<template>
	<a 
    :class="['externalLink', modifier ? 'externalLink_' + modifier : null, className ? className : null ]"
    v-bind:href="to"
    @click="notFollow"
    >
      <slot></slot>
      <i class="externalLink__icon fas fa-external-link-alt"></i>
   	</a>
</template>

<script>
	import {notFollow} from '@/constants/pureFunctions';

	export default {
		name: "ExternalLink",
		props: {
			to: {
				type: String,
				required: true
			},
			modifier: {
				type: String,
				required: false
			},
			className: {
				type: String,
				required: false
			},
		},
		methods: {
			notFollow
		}
	}
</script>

<style lang="sass">
	@import '../styles/conf/_colors.sass'

	.externalLink
		// &:hover, &:focus, &:active
		// 	color: $burgund
</style>