<template>
	<transition appear
		name="fade">
		<div v-if="show"
			:class="[baseContainerClasses, 'controller', modifier ? 'controller_' + modifier : null, className]">
			<transition name="fade">
				<label 
					@click="selectInput"
					:class="['light controller__label', modifier ? 'controller__label_' + modifier : null]"
					:id="`${name}_label`"
					v-if="label && !error" :for="name" >
					{{ label }}
				</label>
				<span v-if="error" class="controller__error">
					{{ error }}
				</span>
			</transition>

			<input 
				v-if="simpleInput"
				:class="{
					'controller__input': true,
					'controller__input_hasValue': !!value,
					['controller__input_' + modifier]: !!modifier,
					'controller__input_invalid': !!error
				}"
				:required="required"
				:type="type" 
				:autocomplete="autocomplete" 
				:placeholder="placeholder"
				:name="name" 
				:pattern="pattern"
				:aria-labelledby="`${name}_label`"
				:value="value" 
				@input="updateValue(
					$event.target, 
					$event.target.value, 
					onInput($event)
				)"
				@click="onClick"
				:minlength="minLength"
				:maxlength="maxLength"
				@blur="onBlur"
			/>
				<!-- @focus="selectAll" -->
			<slot />
			<span v-if="!/(checkbox|date)/.test(type)" class="controller__border"/>
		</div>
	</transition>
</template>

<script>
	import {timeout} from '@/constants/pureFunctions';
	import AwesomeMask from 'awesome-mask';

	export default {
		name: "FormController",
		data() {
			return {
				hasValue: false,
			}
		},
		computed:  {
			pattern() {
				const regExp = this.regExp;
				return regExp ? regExp : false;
			}
		},
		directives: {
			'mask': AwesomeMask
		},
		props: {
			onClick: {
				type: Function,
				required: false,
				default: () => {}
			},
			autocomplete: {
				type: String,
				required: false,
				default: 'on'
			},
			show: {
				type: Boolean,
				required: false,
				default: true
			},
			onInput: {
				type: Function,
				required: false,
				default: () => {}
			},
			onBlur: {
				type: Function,
				required: false,
				default: () => {}
			},
			baseContainerClasses: {
				type: String,
				required: false,
				default: 'v-start parent column'
			},
			className: {
				type: String,
				required: false,
				default: null
			},
			minLength: {
				type: String,
				required: false,
				default: ''
			},
			maxLength: {
				type: String,
				required: false,
				default: ''
			},
			regExp: {
				type: String,
				required: false,
				default: ''
			},
			modifier: {
				type: String,
				required: false
			},
			value: {
		      type: [String, Boolean],
		      required: true,
		      default: ''
		    },
		    name: {
		      type: String,
		      required: true
		    },
		    type: {
		      type: String,
		      default: "text"
		    },
		    error: {
		      type: String,
		      default: ''
		    },
		    simpleInput: {
				type: Boolean,
		      	default: true,
		      	required: false
		    },
		    label: {
		      type: String,
		      default: '',
		      required: false
		    },
		    placeholder: {
		    	type: String,
		      	default: '',
		      	required: false
		    },
		    required: {
				type: Boolean,
		      	default: true,
		      	required: false
		    },
		    updateValue: {
		    	type: Function,
		    	required: false,
		    	default: function(element, value) {
					this.$emit('input', value);
		    	}
		    },
		},
		methods: {
			selectAll: function (event) {
		      // Workaround for Safari bug
		      // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
		      timeout(function () {
		      	event.target.select()
		      }, 0)
		    },
		    selectInput: function(event)  {
		    	document
		    		.querySelector(`[name="${event.target.getAttribute('for')}"]`)
		    		.focus();
		    	
		    } 
		}
	}
</script>

<style lang="sass">
@import '../styles/conf/_sizes.sass'
@import '../styles/conf/_colors.sass'
@import '../styles/conf/_mixins.sass'
@import '../styles/conf/_extentions.sass'
@import "~susy/sass/_susy.scss"
.vdp-datepicker input
	cursor: pointer
.controller 
	overflow: hidden
	min-width: none
	width: 100%
	&_notHidden
		overflow: visible
	// display: inline-block
	@extend %relative
	&:not(:first-of-type) 
		margin-top: $s18
	&_checkbox 
		margin: $s29 auto $i
		max-width: em(304)


	&_small
		max-width: calc(50% - 1.5rem)
	&__paragraph
		@extend %absolute
		bottom: .70em
		left: 100.5%
		font-weight: bold
		left: calc(100% + .2em)
		white-space: nowrap
		display: block
		overflow: hidden
		text-overflow: ellipsis
	&__border
		// Focus pseudo-element
		background: linear-gradient(to right, rgba(250, 139, 196, 0.5) 0%, #941857 0%, #941857 0%, rgba(250, 139, 196, 0.25) 100%), #FA8BC4
		z-index: 4
		&::after, &::before	
			content: ""
			
		&, &::after, &::before
			transition: transform .3s ease-in-out
			position: absolute
			bottom: 0
			left: 0
			transform: translateX(-100%)
			width: 100%
			height: 2.5px
			will-change: transform
		// Error pseudo-element
		&::before
			background-color: $red
			z-index: 4
		// Sucessfull pseudo-element
		&::after
			z-index: 3
			background-color: $validColor
	&__input 
		border-radius: 2px
		width: 100%
		padding: $s11
		border-bottom-width: 2px 
		border-bottom-style: solid
		border-bottom-color: $pink
		&_burgund 
			border-bottom-color: $burgund
		transition: box-shadow .3s ease-in

		&_whiteBg, &_textarea
			background-color: $white

		// &_burgund 
		// 	border-color:  $red
		// &:empty:focus
		// 		// &::after, &::before
		// 		// 	content: none
		&:focus
			outline: none
			& + .controller__border
				transform: translateX(0)

		// &_hasValue:focus
		&_hasValue
			& + .controller__border
				transform: translateX(0)
			&:valid
				& + .controller__border::after
					transform: translateX(0)
			&:invalid 
				& + .controller__border::before
					transform: translateX(0)
		&_invalid
			& + .controller__border::before
				transform: translateX(0)
		// &_hasValue:valid
		// 	& + .controller__border::after
		// 		transform: translateX(0)	
			
	
		&_select 
			padding: 0 em(9)
			& hr
				display: none
			& button
				right: -9px $i
		&_checkbox 
			-webkit-appearance: none
			cursor: pointer
			height: em(26)
			width: em(26)
			border: 2px solid $pink
			max-width: span(1)
			margin-right: $s11
			position: relative

			&::before
				content: ""
				position: absolute
				width: 0
				height: 0
				border-style: solid
				border-color: $validColor
				border-width: 0
				bottom: -2px
				left: -2px
				border-radius: 2px
				transition: height .3s ease-in, width .3s ease-in, border .1s ease
				background-color: transparent
			&:checked:before
				width: calc(100% + 4px)
				height: calc(100% + 4px)
				border-width: 2px

				
			
			&:checked:after 
				content: '\2714'
				// font-size: em(15)
				position: absolute
				top: em(1)
				left: em(3)
				color: $darkGray
	&__option
		// background-color: #C4C4C4 $i
		color: #4F4F4F $i
		& .colorContainer
			margin-left: 0
			&__name
				opacity: 1
			&__color
				margin: 0 .5em 0 0
		&:hover
			background-color: #4F4F4F $i
			color: #F2F2F2 $i
	&__error
		color: $red
		margin-top: $s6
		
	&__label 
		// align-self: flex-end
		cursor: pointer
		font-size: em(21)
	
	
		
	
	// &__checkboxLabel 
	// 	color: $white
	// 	padding: .5em 0 .8em 1em 
	// 	max-width: span(10)
	// 	background-color: $red
	// 	@include round(em(2))
</style>