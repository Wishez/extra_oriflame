<template>
	<footer :class="['block', modifier ? 'block_' + modifier : null]">
		
	</footer>
</template>

<script>
	export default {
		name: "TheFooter",
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