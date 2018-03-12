<template>
	<div :class="['container materialShadow fewRound whiteBackground litter', modifier ? 'litter_' + modifier : null, className]">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "SimpleLitter",
		data() {
			return {

			};
		},
		props: {
			className: {
				type: String,
				required: false,
				default: null
			},
			modifier: {
				type: String,
				required: false
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import '../styles/conf/_sizes.sass'
	.litter
		padding-bottom: $s47
		padding-top: $s47
		min-width: calc(50% - 1.5rem)
		margin: 0
		> *:first-of-type
			margin-top: 0
</style>