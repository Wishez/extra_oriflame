
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

	import {setTabPosition} from './../constants/pureFunctions';
	export default {
		props: {
			href: String,
			icon: String,
			index: String,
		},
		computed: {
			isActive() {
				return this.href === window.location.pathname;
			},
			tab() {
				return document.querySelector('.activeTab');
			}
		},
		methods: {
			go(event) {
		      setTabPosition(this.tab, this.index);
		      // isActive = this.href === window.location.pathname;
		    },
		    highlight(event) {
		    	setTabPosition(this.tab, this.index, 'translate');
		    },
		    
		},
		components: {
			Icon
		}
	}
</script>

<style lang="sass">
	$burgund: #941857
	$i: !important
	$white: #f2f2f2
	$pink: #FA8BC4
	$darkGray: #333
	$linkGradient: linear-gradient(180deg, $pink 0% ,rgba(255, 255, 255, .35) 50%, $pink 100%), $pink
	.navlinkContainer
	.iconBackground_navigation
		background-color:  $burgund $i
		color: $white $i
	// &::after
	// 	transform: translateX(-100%);
	// 	heigth: 2px
	// 	background-color: $burgund
	// 	z-index: 2
	.router-link-exact-active
	.activeTab
		height: 2px
		position: absolute
		top: 0
		z-index: 1
		left: 0
		background-color: $burgund
		min-width: 155px
		transition: transform .3s ease-in, left .3s ease-in;
	.navLink
		border-top-width: 2px
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
		&:hover, &:focus
			background-image: none
			&:after, &:before
				transform: translate(0, 0)

		&_active
			&:after, &:before
				content: none
			// border-top-color: $burgund 
			background: $linkGradient
			&:hover, &:focus
				background: $linkGradient
			
			& .iconBackground
				color: $darkGray $i
				background-color: $white $i


</style>