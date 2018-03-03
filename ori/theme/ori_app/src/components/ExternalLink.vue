
<template>
	<a 
    class="externalLink" 
    v-bind:href="href"
    v-on:click="notFollow"
    >
      <slot></slot>
      <i class="externalLink__icon fas fa-external-link-alt"></i>
   	</a>
</template>

<script>
	import notFollow from './../constants/pureFunctions';

	export default {
		props: {
			href: String,
		},
		methods: {
			notFollow
		}
	}
</script>

<style lang="sass">
	.externalLink
		&:hover, &:focus
			color: $burgund
</style>