<template>
	<div :class="['block', modifier ? 'block_' + modifier : null]">

	</div>
</template>

<script>
	export default {
		name: "SiteLogo",
		data() {
			return {

			};
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
	
</style>