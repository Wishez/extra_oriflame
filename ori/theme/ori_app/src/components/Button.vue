<template>	
	<button :class="['button', modifier ?  'button_' + modifier : '', className]"
			:aria-pressed="pressed" 
			:type="type ? type : 'button'"
			:aria-label="label ? label : null"
			role="button"
			tabindex="0"
	>
		<slot></slot>
	</button>
</template>
<script	>
	export default {
		name: 'toggle-button',
		props: [
			'modifier', 
			'type', 
			'label', 
			'className'
		],
		data: {
			pressed: false
		},
		methods: {
			onClick: function(event) {
				this.pressed = !this.pressed;
			}
		}
	};
</script>
<style lang="sass">
	
</style>