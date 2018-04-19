<template>
	<base-button unstyled
		:modifier="modifier"
		:label="label"
		:className="className"
		:action="makeAction(direction)"
	>
		
		<base-icon :id="id" className="hover-color_white hover-backgroundColor_burgund darkGrayColor"
			:icon="`far fa-hand-point-${direction}`" />
	</base-button>
</template>

<script>
	import BaseIcon from '@/components/BaseIcon';
	import BaseButton from '@/components/BaseButton';

	export default {
		name: "ArrowButton",
		props: {
			id: {
				type: String,
				required: false
			},
			className: {
				type: String,
				required: false,
				default: null
			},
			makeAction: {
				type: Function,
				require: true,
				default: function(direction) {
					return () => {
						console.log(direction);
					}
				},
				validator: function(value) {
					// Value must be a carried function.
					return typeof value() === 'function';
				}
			},
			direction: {
				type: String,
				required: true,
				default: 'up',
				validator: function(value) {
					const directions = ['up', 'down', 'left', 'right'];
					return directions.indexOf(value) !== -1;
				}
			},
			modifier: {
				type: String,
				required: false,
			},
			label: {
				type: String,
				required: true
			}
		},
  	    components: {
  	    	BaseIcon,
  	    	BaseButton
	    },
	};
</script>

<style lang="sass" scoped>
@import '../styles/conf/_colors.sass'
@import '../styles/conf/_sizes.sass'
@import '../styles/conf/_breakpoints.sass'


</style>