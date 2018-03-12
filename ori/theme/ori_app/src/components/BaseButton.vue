<template>	
	<button :class="['button materialShadow fewRound', modifier ?  'button_' + modifier : '', className]"
			:aria-pressed="pressed" 
			:type="type ? type : 'button'"
			:aria-label="label"
			:disabled="disabled"
			tabindex="0"
			role="button"
			@click="onClick"
	>
		<slot></slot>
	</button>
</template>
<script	>
	export default {
		name: 'BaseButton',
		data() {
			return {
				pressed: false
			};
		},
		props: {
			modifier: {
				type: String,
				required: false,
				default: ''
			},
			disabled: {
				type: Boolean,
				required: false,
				default: false
			},
			className: {
				type: String,
				required: false,
				default: null
			},
			type: {
				type: String,
				required: false,
				default: ''
			},
			label: {
				type: String,
				required: false,
				default: null
			},
		},
		methods: {
			onClick: function() {
				this.$set(
					this,
					'pressed',
					!this.pressed	
				);
			}
		}
	};
</script>
<style lang="sass" scoped>
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'

	button
		cursor: pointer
		&:disabled
			background: none
			cursor: default
			color: $shadow
			&:hover, &:active, &:focus
				transform: none
				background: none
				color: $shadow


	button[aria-pressed]
		outline: none
		box-shadow: 1.5px 1.5px 1px #FFF, -1.5px -1.5px 1px #fff , -3px -3px 1px $burgund, 3px 3px 1px $burgund

</style>