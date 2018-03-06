
<template>
	<li class="navLinkContainer" @click="go" @mouseenter="highlight">
    	<router-link v-bind:class="{ 
    		navLink: true, 
    		parent: true, 
    		centered: true,
    		nowrap: true,
    		column: true
    	}"
		  exact
		  :data-index="index"
	      :aria-describedby="isActive ? 'active_page' : null"
	      role="presentation"
		  activeClass="navLink_active"
	      :to="href"
    	>
    		<icon :icon="icon" modifier="navigation" v-if="icon"></icon>
      		<slot></slot>
    	</router-link>
  </li>
</template>

<script>
	import router from './../router';
	import Icon from './../templates/Icon.vue';

	import {setTabPosition, doBy} from './../constants/pureFunctions';

	export default {
		props: {
			href: String,
			icon: String,
			index: String,
		},
		computed: {
			isActive: {
				get: function() { 
					return this.href === window.location.pathname;
				},
				set: function(newValue) {

				}

			},
			tab() {
				return document.querySelector('.activeTab');
			}
		},
		methods: {
			go(event) {
				doBy(() => {
		    		console.log('do');
		      		setTabPosition(this.tab, this.index);
		      	});

		    	this.isActive = this.href === window.location.pathname;
		    },
		    highlight(event) {
		    	doBy(() => {
		    		setTabPosition(this.tab, this.index, 'translate');
		    	});
		    },
		    
		},
		components: {
			Icon
		}
	}
</script>

<style lang="sass">
	@import '../styles/conf/_breakpoints.sass'
	@import '../styles/conf/_colors.sass'

	
	
	.iconBackground_navigation
		background-color:  $burgund $i
		color: $white $i
		@include breakpoint($xxs)
			font-size: (18em /16)
	
	.activeTab
		height: 4px
		position: absolute
		top: 0
		z-index: 1
		left: 0
		background-color: $burgund
		min-width: 155px
		transition: transform .3s ease-in, left .3s ease-in;
		@include breakpoint($xs)
			display: none
	.navLink
		border-top-width: 4px
		border-top-style: solid
		border-top-color: $pink
		min-height: 54px
		background-color: #fff
		min-width: 155px
		background-image:  none
		font-weight: 300
		padding-top: .27777777777777777778em
		transition: border .3s ease-in, background-color .3s ease-in
		position: relative
		overflow: hidden
		z-index: 0
		&::before, &::after
			content: ""
			width: 100%
			top: 0
			left: 0
			position: absolute
			transition: transform .3s ease-in-out
		
		&::before
			transform: translateY(-100%);
			z-index: -1
			background: $linkGradient
			height: 100%
		&:hover, &:focus, &:active
			background-image: none
			& .icon
			&:after, &:before
				transform: translate(0, 0)

		@include breakpoint($xs)	
			min-width: auto
			padding-top: .5rem
		@include breakpoint($xxs)
			background: transparent
			border-top: 0
			color: $white
			border: 2px solid transparent
			font-size: (16em / 18)
		&_active, &:hover, &:focus, &:active
			color: $burgund
			@include breakpoint($xxs)
				color: $white
			& .iconBackground
				color: $darkGray $i
				background-color: $white $i
				// @include breakpoint($xxs)
				// 	font-size: (18em / 18)

		&_active
			&:after, &:before
				content: none
			// border-top-color: $burgund 
			&, &:hover, &:focus
				background: $linkGradient
				@include breakpoint($xxs)
					background: transparent
			@include breakpoint($xxs)
				background: transparent
				border-bottom-color: $pink
	.navLinkContainer
		@include breakpoint($xs)
			flex-grow: 1

</style>