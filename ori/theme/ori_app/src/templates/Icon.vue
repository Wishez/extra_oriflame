<template>
	<figure :class="['iconShadow iconBackground circle parent row centered',  modifier ? 'iconBackground_' + modifier : '']">
		<i :class="[icon, 'iconBackground__icon', modifier ? 'iconBackground__icon_' + modifier : '']"></i>	
	</figure>
</template>

<script>
	export default {
		name: 'Icon',
		props: {
			icon: String,
			signification: String,
			modifier: String
		}
	}

</script>

<style lang="sass">
	.iconBackground
		height: 25px
		width: 25px
		background-color: #FA8BC4
		transition: color .2s ease-in, background-color .2s ease-in
	.iconBackground__icon
		font-size:  0.77777777777777777778em
	
</style>