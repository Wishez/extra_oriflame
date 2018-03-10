<template>
    <div class="mainContent">
    	<section @mouseup="onMouseUpParentAwesomeButton" class="banner parent h-around v-centered prespective wrap">
    		<h1 class="bold banner__title textShadow">
    			<span class="mainColor">Скидки от 20%</span> и <span class="mainColor">подарки</span> сразу после регистрации<span class="mainColor">.</span></h1>
    		<awesome-link label="Переход на страницу регистрации"
    				content="Регистрация" href="/registration" className="banner__button whiteTextShadow"></awesome-link>
			
    		<blurry-image-loader
    			:src="banner"
    			defaultMedia="(min-width: 481px)"
    			alt="Регистрация"
    			modifier="banner"
    			className="materialShadow fewRound"
    		/>

    	</section>
		<section class="h-between blog parent row wrap" >
			<about-item
				v-for="aboutItem in aboutItems" 
				:key="aboutItem.id"
				:title="aboutItem.title"
				:paragraph="aboutItem.paragraph">
			</about-item>
		</section>
		<section class="programm parent column">
			<decorative-title>Бонусы со старта</decorative-title>
			<p :class="['programm__paragraph', paragraph.position]"
				v-for="paragraph in programmParagraphs"
				:key="paragraph.id">
				{{ paragraph.text }}
			</p>
			<div class="programmItems parent h-between row wrap">
				
				<programm-item 
					:src="item.src"
					:title="item.title"
					:key="item.id"
					:name="item.name"
					:stepDescription="item.stepDescription"
					:titleModifier="item.titleModifier"
					v-for='item in programmItems'/>
			</div>
			
		</section>
		<section class="extraInfo">
			<decorative-title>Полезная информация</decorative-title>
			<ul role="navigation" aria-describedby="aria-describedby" id="extraInfo">
				<li :key="link.id" v-for="link in extraInfoLinks">
					<internal-link
						:to="link.href" 
						:hashResource="link.hashResource"
						v-if="!link.external"
						className="darkenHover"
					>
						{{ link.text }}
					</internal-link>
					<external-link 
						className="darkenHover"
						:to="link.href" 
						v-if="link.external">
						{{ link.text }}
					</external-link>
					
				</li>
			</ul>
		</section>
		<div hidden id="extraInfoNavigation" >
			
		</div>
    </div>
</template>

<script>
	// Images
	import banner from './../assets/images/banner.png';
	import mobileBanner from './../assets/images/mobile-banner.png';
	import firstStepImage from './../assets/images/programm/first.png'
	import secondStepImage from './../assets/images/programm/second.png'
	import thirdStepImage from './../assets/images/programm/third.png'
	import fourthWoomanStepImage from './../assets/images/programm/fourth_wooman.png'
	import fourthManStepImage from './../assets/images/programm/fourth_man.png'
 
	// Components
	import BlurryImageLoader from '@/components/BlurryImageLoader';
	import AwesomeLink from '@/components/AwesomeLink';
	import AboutItem from '@/components/AboutItem';
	import ExternalLink from '@/components/ExternalLink';
	import InternalLink from '@/components/InternalLink';
	import DecorativeTitle from '@/components/DecorativeTitle';
	import ProgrammItem from '@/components/ProgrammItem';


	import {onMouseUpParentAwesomeButton} from './../constants/pureFunctions';

	export default {
	  name: 'MainPage',
	  components: {
	  	BlurryImageLoader,
	  	AwesomeLink,
	  	AboutItem,
	  	DecorativeTitle,
	  	ProgrammItem,
	  	ExternalLink,
	  	InternalLink
	  },
	  data() {
	  	return {
	  		banner: window.innerWidth <= 480 ? 
	  			mobileBanner : 
	  			banner,
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
	  		], // end aboutItems
	  		programmParagraphs: [
	  			{
	  				id: 1,
	  				text: 'Зарегистрировавшись, вы можете взять квест. Название этому квесту «Статовая программа». На самом деле, это одна из акций, которая доступна всем консультантам.',
	  				position: 'v-s-start'
	  			},{
	  				id: 2,
	  				text: 'Вам нужно будет размещать заказы. За эти заказы вы будете получать бонусные балы — внутренняя валюта Орифлейм.',
	  				position: 'v-s-centered'
	  			},{
	  				id: 3,
	  				text: 'Каждые 200 баллов, вы сможете выбрать разнообразные  предметы, на которые будут хорошие скидки. Ко всему прочему, бонусные баллы также принесут вам доход!',
	  				position: 'v-s-end'
	  			}
	  		], // end aboutParagraphs
	  		programmItems: [
	  			{
	  				id: 0,
	  				title: "Первый шаг",
	  				src: firstStepImage,
	  				name: "first",
	  				stepDescription: {
	  					paragraph: "По достижению первых 200 баллов, у вас будет специальная скидка на этот набор. Вы сэкономите 1033₽ + 5% от стандартной цены набора.",
	  					items: [
	  						{
	  							name: 'Питательный крем для рук и тела',
	  							id: 0
	  						},
	  						{
	  							name: 'Крем-мыло «Молоко и мед – Золотая серия» (Код: 31604)',
	  							id: 1
	  						},
	  						{
	  							name: 'Увлажняющий крем для душа «Молоко и мед – Золотая серия» (Код: 31605)',
	  							id: 2
	  						},
	  						{
	  							name: 'Специальное смягчающее средство «Нежная забота» (Код: 1276)',
	  							id: 3
	  						},
	  						
	  					]
	  				}

	  			}, // end first
	  			{
	  				id: 1,
	  				title: "Второй шаг",
	  				src: secondStepImage,
	  				name: "second",
	  				titleModifier: 'right',
	  				stepDescription: {
	  					paragraph: "Продвигаясь на следующий уровень, вы сможете заказать группу предметов по сходной цене: 2066₽ + 5% от цены каталога.",
	  					items: [
	  						{
	  							name: 'Губная помада «The ONE Colour Stylist» (оттенок «Дивный пион»)',
	  							id: 0
	  						},
	  						{
	  							name: 'Тушь для ресниц 5-в-11 «The ONE Wonderlash» (оттенок «Черный»)',
	  							id: 1
	  						},
	  					]
	  				}

	  			}, // end second
	  			{
	  				id: 2,
	  				title: "Третий шаг",
	  				src: thirdStepImage,
	  				name: "third",
	  				stepDescription: {
	  					paragraph: "На данном этапе, вас ожидает выбор одного из набора  и скидка на него в 3099₽ + 5% от суммы набора. ",
	  					items: [
	  						{
	  							name: 'Продукты «Optimals Age ReviveАнти»: возрастной дневной и ночной крем, а также крем для кожи вокруг глаз (Код: 540211)',
	  							id: 0
	  						},
	  						{
	  							name: 'Туалетная вода «Eclat Femme» для нее(Код: 540212) или «Eclat Homme» для него (Код: 540213)',
	  							id: 2
	  						},
	  					]
	  				}

	  			}, // end third
	  			{
	  				id: 3,
	  				name: "fourthMan",
	  				src: fourthManStepImage,
	  				title: "Четвёртый шаг для мужчин",
	  				titleModifier: 'center',
	  				stepDescription: {
	  					paragraph: "Завершающий шаг ー протеиновый завтрак, обогащённый витаминами для мужчин со скидкой 4 130₽ + 5% от суммы набора.",
	  					items: [
	  						{
	  							name: '«Вэлнэс Пэк» для мужчин (Код: 540215)',
	  							id: 0
	  						}
	  					]
	  				}

	  			}, // end fourthWooman
	  			{
	  				id: 4,
	  				title: "Последний шаг для женщин",
	  				src: fourthWoomanStepImage,
	  				name: "fourthWooman",
	  				titleModifier: 'center',
	  				stepDescription: {
	  					paragraph: "Последний шаг ー полезная, питательная и здоровая еда для женщин со скидкой в 4 130₽ + 5% от суммы набора.",
	  					items: [
	  						{
	  							name: '«Вэлнэс Пэк» для женщин (Код: 540214)',
	  							id: 0
	  						}
	  						
	  					]
	  				}

	  			} // end fourthMan
	  		], // end programmItems
	  		extraInfoLinks: [
	  			{
	  				id: 0,
	  				text: "Бонусные баллы",
	  				href: "/business",
	  				hashResource:  '#scores'
	  			},
	  			{
	  				id: 1,
	  				text: "О регистрации",
	  				href: "/registration",
	  				hashResource:  '#description'
	  			},
	  			{
	  				id: 2,
	  				text: "Последние акции",
	  				href: "/shares",
	  				external: false  
	  			},
	  			{
	  				id: 3,
	  				text: "Интернет магазин",
	  				href: "https://shining-present.ru",
	  				external: true  
	  			},
	  			{
	  				id: 4,
	  				text: "О структуре бизнеса",
	  				href: "/business",

	  			},
	  			{
	  				id: 5,
	  				text: "Видео об Орифлейм ",
	  				href: "/media"
	  			},
	  		] // end extraInfoLinks
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
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_breakpoints.sass'
	
	.banner
		position: relative
		z-index: 0
		padding: .8rem 1.5rem 2rem
		color: $white
		background-color: rgba(51, 51, 51, .4)
		&__title
			@include breakpoint($sm-up)
			    max-width: 75%;
			@include breakpoint($xs)
				margin-bottom: 1.5rem;
		& a
			margin-top: 1.5rem
		&__button
			color: $darkGray
			
	.imageContainer_banner
		position: absolute
		top: 0
		z-index: -1
		left: 0
		.progressive-image-main,.progressive-image-wrapper
			height: 100%
	.imageContainer_banner
		// max-height: em(166)
		height: 100%
	.programm
		margin-top: em(77 - 29.124) $i
		&__paragraph
			margin-top: $s47 $i
			max-width: em(522.54)
	
	.programmItems
		margin-top: $s77
</style>
