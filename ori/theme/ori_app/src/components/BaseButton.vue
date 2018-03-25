<template>	
	<button :class="{
			'unstyledButton': unstyled,
			'button materialShadow fewRound': !unstyled, 
			[`button_${modifier}`] : modifier, 
			[className]: className
		}"
			:aria-pressed="pressed" 
			:type="type ? type : 'button'"
			:aria-label="label"
			:disabled="disabled"
			tabindex="0"
			role="button"
			@click="onClick"
			@blur="makeActionByBlur"
	
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
			unstyled: {
				type: Boolean,
				required: false,
				default: false
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
			action: {
				type: Function,
				required: false
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
			onBlur: {
				type: Function,
				required:  false
			}
		},
		methods: {
			onClick: function(event) {
				this.$set(
					this,
					'pressed',
					!this.pressed	
				);
				if (this.action) {
					this.action(event);
				}
			},
			makeActionByBlur: function(event) {
				this.$set(
					this,
					'pressed',
					false
				);
				
				if (this.onBlur) {
					console.log('blur triggered');
					this.onBlur(event);
				}
			}
		}
	};
</script>
<style lang="sass" scoped>
	@import '../styles/conf/_colors.sass'
	@import '../styles/conf/_sizes.sass'
	.unstyledButton
		border: 0
		background: none
	button
		cursor: pointer
		&:disabled
			opacity: .5
			cursor: default
			&:hover, &:active, &:focus
				transform: none
				// color: $shadow

	.button 
		position: relative
		padding: 0 1.5rem
		height: em(47)
		min-width: em(200)
		cursor: pointer
		user-select: none
		z-index: 1
		transition: all 0.3s
		will-change: transform
		transform-style: preserve-3d
		&:hover, &:focus
			transform: scale(1.02)
		&:active
			transform: scale(1.02) translateY(2px)
		&, &_submit:after, &_submit:before
			display: flex
			justify-content: center
			align-items: center
		&_error, &_successful
		    box-shadow: 0
			
		&_error
			&, &:hover, &:focus
				transform-origin: 50% 0%
				transform: rotateX(110deg) translateY(-100%)
			&:before
				top: 100%
				// background: #e96a6a
				// color: #a33a3a
				background-color: $red
				// color: darken($red, 25%)
				color: $white
				content: 'Ошибка!'
				font-weight: 700
				transform-origin: 0% 0%
				transform: rotateX(-90deg)
		&_successful
			&, &:hover, &:focus
				transform-origin: 50% 100%
				transform: rotateX(-90deg) translateY(100%)
			&:after
				top: -98%
				// background: #7aca7c
				// color: #358337
				background-color: darken($validColor, 25%)
				color: $white
				content: 'Успех!'
				transform-origin: 0% 100%;
				transform: rotateX(90deg);
				


		&_submit
			&:after, &:before
				box-shadow: 2px 4px 6px $shadow
				text-shadow: -2px 1px 13px $shadow //rgba(255, 255, 255, .8)
				width: 100%
				height: 100%
				position: absolute
				left: 0
				border-radius: 2px
		&_centered
			margin-left: auto
			margin-right: auto
		&_burgund
			background: $registrationButtonGradinet
			color: $white
	.button[aria-pressed]
		outline: none
		box-shadow: 1.5px 1.5px 1px #FFF, -1.5px -1.5px 1px #fff , -3px -3px 1px $burgund, 3px 3px 1px $burgund

</style>