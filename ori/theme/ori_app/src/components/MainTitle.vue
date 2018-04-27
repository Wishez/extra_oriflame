<template>	
	<div :class="{
			'fullWidth mainTitle parent row nowrap centered': true,
			[`mainTitle_${modifier}`]: modifier, 
			[className]:  className
		}">
		<hr :class="{
			'grow mainTitle__divider display_none-phone': true, 
			[`mainTitle__divider_${modifier}`]:  modifier
		}">	
		<h1 :class="{
			'italic semibold mainTitle__title': true, 
			[`mainTitle__title_${modifier}`]:  modifier
		}">
			<slot></slot>
		</h1>
		<hr :class="{
			'grow mainTitle__divider display_none-phone': true, 
			[`mainTitle__divider_${modifier}`]:  modifier
		}">	
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
				padding: 0
				// max-width: 
		&__divider
		    height: 1px;
		    background-color: #C7C7C7



	
</style>