<template>	
	<div class="decorativeTitleContainer parent row nowrap centered">
		<hr class="grow decorativeTitleContainer__line">	
		<h2 class="grow decorativeTitleContainer__title">{{ title }}</h2>
		<hr class="grow decorativeTitleContainer__line">	
	</div>
</template>

<script>
	export default {
		name: "DecorativeTitle",
		props: {
			title: {
				type: String,
				required: true
			}
		}
	};
</script>

<style	lang="sass">
	.decorativeTitleContainer
		&__title
			min-width: 35%
			padding: 0 1rem
		&__devider

	
</style>