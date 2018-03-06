<template>
	<router-link class="disableLinkHover" :to='href'>
		<span :class="['awesomeButton', className]"
			@mousedown="down"
			@mouseleave="leave"
			@mousemove="move"
			:data-title="content"
			:aria-label="label"
		>
		</span>
	</router-link>
</template>

<script>
	import {onMoveAwesomeButton, onLeaveAwesomeButton, onDownAwesomeButton} from './../constants/pureFunctions';

	export default {
	  name: 'AwesomeLink',
	  props: {
	  	href: {
	  		type: String,
	  		required: true
	  	},
	  	className: {
	  		type: String,
	  		required: false
	  	},
	  	content: {
	  		type: String,
	  		required: true
	  	},
	  	label: {
	  		type: String,
	  		required: true
	  	}
	  },
	  computed: {
	  	docStyle() {
	  		return document.documentElement.style;
	  	},
	  	boundingClientRect() {
	  		return this.$el.getBoundingClientRect();
	  	}
	  },
	  methods: {
	  	move: function(event) {
	  		// console.log('move');
			onMoveAwesomeButton(event, this.boundingClientRect, this.docStyle);
	  	},
	  	leave: function(event) {
	  		
			onLeaveAwesomeButton(event, this.boundingClientRect, this.docStyle);;
	  	},
	  	down: function(event) {
	  		
	  		onDownAwesomeButton(event, this.boundingClientRect, this.docStyle);
	  	}
	  }
	}
</script>

