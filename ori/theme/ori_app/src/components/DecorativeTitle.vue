<template>	
	<div :class="['decorativeTitleContainer parent row nowrap centered', className ? className : '']">
		<hr :class="['grow decorativeTitleContainer__divider', modifier ? 'decorativeTitleContainer__divider' + modifier : '']">	
		<h2 :class="['bold decorativeTitleContainer__title', modifier ? 'decorativeTitleContainer__title_' + modifier : '']">
			<slot></slot>
		</h2>
		<hr :class="['grow decorativeTitleContainer__divider', modifier ? 'decorativeTitleContainer__divider' + modifier : '']">	
	</div>
</template>

<script>
	export default {
		name: "DecorativeTitle",
		props: {
			modifier: {
				type: String,
				required: false
			},
			className: {
				type: String,
				required: false	
			}
		}
	};
</script>

<style	lang="sass">
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_helpers.sass'

	.decorativeTitleContainer
		&__title
			min-width: 40%
			padding: 0 1rem
			text-align: center
			max-width: em(340)
		&__divider
		    height: 1px;
		    background-color: $burgund

	
</style>