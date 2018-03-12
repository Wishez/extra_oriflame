<template>	
	<div :class="['fullWidth mainTitle parent row nowrap centered', className ? className : '']">
		<hr :class="['grow mainTitle__divider', modifier ? 'mainTitle__divider' + modifier : '']">	
		<h1 :class="['italic semibold mainTitle__title', modifier ? 'mainTitle__title_' + modifier : '']">
			<slot></slot>
		</h1>
		<hr :class="['grow mainTitle__divider', modifier ? 'mainTitle__divider' + modifier : '']">	
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
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_breakpoints.sass'

	.mainTitle
		margin-bottom: $s47 
		&__title
			min-width: 40%
			padding: 0 1.5rem
			text-align: center
			max-width: em(340)
			@include breakpoint($xxs)
				max-width: 68.5%
		&__divider
		    height: 1px;
		    background-color: #C7C7C7

	
</style>