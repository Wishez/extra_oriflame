<template>
    <div class="mainContent">
    	<section @mouseup="onMouseUpParentAwesomeButton" class="banner parent h-around v-centered prespective wrap">
    		<h1 class="bold banner__title textShadow">
    			<span class="mainColor">Скидки от 20%</span> и <span class="mainColor">подарки</span> сразу после регистрации<span class="mainColor">.</span></h1>
    		<awesome-link label="Переход на страницу регистрации"
    				content="Регистрация" href="/registration" className="banner__button whiteTextShadow"></awesome-link>
			
    		<blurry-image-loader
    			:small-src="banner"
    			:src="banner"
    			defaultMedia="(min-width: 481px)"
    			alt="Регистрация"
    			modifier="banner"
    			className="materialShadow fewRound"
    		>
    			<source :srcset="mobileBanner" media="(max-width: 480px)"></source>
    		</blurry-image-loader>

    	</section>
		<section class="h-between blog parent row wrap" >
			<about-item
				v-for="aboutItem in aboutItems" 
				:key="aboutItem.id"
				:title="aboutItem.title"
				:paragraph="aboutItem.paragraph">
			</about-item>
		</section>
		<section class="programm">
			
		</section>
		<section class="extraInfo">
			
		</section>
    </div>
</template>

<script>
	// Images
	import banner from './../assets/images/banner.png';
	import mobileBanner from './../assets/images/mobile-banner.png';
	// Components
	import BlurryImageLoader from './../templates/BlurryImageLoader';
	import AwesomeLink from './../components/AwesomeLink';
	import AboutItem from './../components/AboutItem';

	import {onMouseUpParentAwesomeButton} from './../constants/pureFunctions';

	export default {
	  name: 'MainPage',
	  components: {
	  	BlurryImageLoader,
	  	AwesomeLink,
	  	AboutItem
	  },
	  data() {
	  	return {
	  		banner,
	  		mobileBanner,
	  		aboutItems: [
	  			{
	  				id: 1,
	  				title: 'Кратко',
	  				paragraph: 'Мы команда в Орифлейм, не первый год практикующая в этом замечательном бизнесе.'
	  			},
	  			{
	  				id: 2,
	  				title: 'Деятельность',
	  				paragraph: 'Мы продаём продукцию Орифлейм — хорошую косметику, различные аксессуары и здоровую,  комплексную, богатую витаминами еду.'
	  			},
	  			{
	  				id: 3,
	  				title: 'Основной доход',
	  				paragraph: 'Мы создаём свою команду и помогаем нашем товарищам формировать свои собственные. От этого образуется товарооборот и мы получаем хороший процент от него.'
	  			},
	  			{
	  				id: 4,
	  				title: 'Погружение',
	  				paragraph: 'Вы можете пройти регистрацию и стать членом нашей «банды». Помимо деятельности, вам будет дарован стартовый комплект приятных бонусов.'
	  			}
	  		]
	  			
	  	};
	  },
	  methods: {
	  	onMouseUpParentAwesomeButton
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
	// Variables and helpful functions
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_breakpoints.sass'
	@import './../styles/conf/_helpers.sass'
	
	.banner
		position: relative
		z-index: 0
		padding: 1.5rem 1.5rem 2rem
		color: $white
		&__title
			@include breakpoint($sm-up)
			    max-width: 75%;
			@include breakpoint($xs)
				margin-bottom: 1.5rem;
		&__button
			color: $darkGray
			
	.imageContainer_banner
		position: absolute
		top: 0
		z-index: -1
		left: 0
	.imageContainer__image_banner, .imageContainer_banner
		// max-height: em(166)
		height: 100%

</style>
