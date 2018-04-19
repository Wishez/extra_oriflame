
<template>
	<a 
		:class="{
			'externalLink': !isCustomStyles,
			[`externalLink_${modifier}`]: modifier,
			[className]: className
		}"
    	v-bind:href="to"
    	@click="gogo"
    >
      
	      <slot></slot>
	      <i v-if="isIconShown" 
	      	 :class="`externalLink__icon fas fa-external-link-alt ${iconClass}`"></i>
      
   	</a>
</template>

<script>
	import {notFollow} from '@/constants/pureFunctions';

	export default {
		name: "ExternalLink",
		computed: {
			isIconShown() {
				switch (this.showIcon) {
					case "hide":
						return false;
					default:
						return true;
				}
			}
		},
		props: {
			isCustomStyles: {
				type: Boolean,
				required: false,
				default: false
			},
			iconClass: {
				type: String,
				required: false,
				default: ""
			},
			showIcon: {
				type: String,
				required: false
			},
			to: {
				type: String,
				required: true
			},
			modifier: {
				type: String,
				required: false
			},
			className: {
				type: String,
				required: false
			},
			
		},
		methods: {
			gogo(event) {
				notFollow(event, this.$el.href)
			}
		}
	}
</script>

<style lang="sass">
	@import '../styles/conf/_colors.sass'

	.externalLink
		display: inline-block
		// &:hover, &:focus, &:active
		// 	color: $burgund
</style>