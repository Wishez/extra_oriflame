<template>
	<figure :class="[
		'iconShadow iconBackground circle parent row centered', 
		modifier ? 'iconBackground_' + modifier : null, 
		className ? className : null
	]">
		<i :class="{
			[icon]: icon,
			'iconBackground__icon': true,
			[`iconBackground__icon_${modifier}`]:  modifier
		}" 
			aria-hidden="true"
		/>
	</figure>
</template>

<script>
	export default {
		name: 'BaseIcon',
		props: {
			icon: {
				type: String,
				required: true,
			},
			modifier: {
				type: String,
				required: false,
			},
			className: {
				type: String,
				required: false,
			}
		}
	}

</script>

<style lang="sass">
	@import '../styles/conf/_sizes.sass'
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_breakpoints.sass'
	
	.iconBackground_navigation
		background-color:  $burgund $i
		color: $white $i
		@include breakpoint($xxs)
			font-size: (18em /16)
	.iconBackground
		height: $s25
		width: $s25
		background-color: #FA8BC4
		transition: color .2s ease-in, background-color .2s ease-in
	.iconBackground__icon
		font-size:  0.77777777777777777778em
	
</style>