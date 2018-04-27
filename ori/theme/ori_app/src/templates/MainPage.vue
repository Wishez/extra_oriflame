<template>
    <div class="mainContent">
    	<section @mouseup="onMouseUpParentAwesomeButton" class="banner parent h-around v-centered prespective wrap marginCentered">
			
    		<h1 class="bold banner__title textShadow">
    			<span class="greenColor">Скидки от 20%</span> и <span class="greenColor">подарки</span> сразу после регистрации<span class="greenColor">.</span>
    		</h1>
    		<external-link to="https://ru.oriflame.com/ecatalogue/502181?per=201609"
    		 	aria-label="Текущий каталог"
    		 	showIcon="hide" 
    		 	className=" banner__image disableUnderline"
    		 >
				<blurry-image-loader 
					alt="Текущий каталог"
					src="https://ru.oriflame.com/catalogue-image.png"/>
			</external-link>
			<external-link to="https://ru.oriflame.com/ecatalogue/502181?per=201609"
				showIcon="hide" 
				aria-label="Текущий каталог"
				className=" banner__image disableUnderline fullWidth_xxs">
				<blurry-image-loader 
					alt="Текущий каталог"
					src="https://ru.oriflame.com/catalogue-image.png"/>
			</external-link>
    		<awesome-link label="Переход на страницу регистрации"
    				content="Регистрация" href="/registration" className="banner__button whiteTextShadow"></awesome-link>
			
    		<!-- <blurry-image-loader
    			:src="banner"
    			defaultMedia="(min-width: 481px)"
    			alt="Регистрация"
    			modifier="banner"
    			className="materialShadow fewRound fullWidth"
    		/> -->

    	</section>
    	<fade-translate-transition-group tag="section" className="h-between blog parent row wrap"
    	:duration="1500">
				<!-- v-for="aboutItem in aboutItems"  -->
			<about-item
			 	:key="0"
				:data-index="0"
				title="Наша компания"
			>
				<p>Oriflame – <strong>европейская косметическая компания</strong> прямых продаж №1, с которой <strong>сотрудничают более 3 миллионов</strong> консультантов по всему миру, а годовой оборот компании составляет <strong>около 1,5 млрд евро</strong>.</p>
				<p>
					Компания Oriflame предлагает <strong>более 1000</strong> наименований <strong>прогрессивных продуктов</strong> по доступной цене &mdash; косметических средств, модных аксессуаров, ароматов, средств по уходу за телом, волосами и т.п., разработанных в Швеции <strong>по уникальным инновационным технологиям</strong>.
				</p>
				<awesome-link 
					v-if="!$store.state.isUserFromMobileOrientation"
					containerClassName="parent centered marginTop_29"

					href="/registration" 
					content="К регистрации"
					modifier="burgund"
					label="Перейти на страницу регистрации"
				/>
				<!-- Oriflame &mdash; европейский <strong>создатель и поставщик</strong> разнообразной продукции. С ней <strong>сотрудничают разные люди из различных стран</strong>. Она, как нам и вам, всегда готово предложить обширное количество <strong>косметики</strong>, <strong>аксессуаров</strong>, <strong>парфюмерии</strong> и всё то, что вы сможете найти в каталоге. -->
			</about-item>
			<about-item
			 	:key="1"
				:data-index="1"
				title="Царство ароматов"
			>
			<p>Все ароматы Oriflame создаются во Франции — <strong>в самом сердце парфюмерной промышленности</strong> мира, чтобы их <i>качество</i>, <i>новизна</i> и <i>неповторимость</i> <strong>соответствовали высочайшим требованиям</strong>.</p>

			<p>Компания Oriflame разрабатывает свои ароматы в тесном сотрудничестве с парфюмерами города Грасс, который несомненно, является «мировой столицей парфюмерии».</p>
			<p>
				<strong>Описание всех ароматов</strong> Oriflame вы можете найти здесь <external-link 
				className="lightenHover"
				to="https://media-cis-cdn.oriflame.com/-/media/RU/Files/My-Pages/Sell/Product-Expert/Product-guide/Fragrance04042016.ashx?u=0101010000&la=ru-RU)">руководстве по продукции</external-link>.</p>
				<awesome-link 
					v-if="$store.state.isUserFromMobileOrientation"
					containerClassName="parent centered marginTop_29"
					href="/registration" 
					content="К регистрации"
					modifier="burgund"
					label="Перейти на страницу регистрации"
				/>



				<!-- Завлекающие ароматы Oriflame <strong>создаются во Франции</strong>. К ним также прикладывают руку <strong>парфюмеры их города Грасс</strong>! Совместными усилиями, создаётся <strong>качественный и неповторимый в запахе</strong> продукт.<br/>Возможно, вас заинтересует это краткое <external-link to="https://media-cis-cdn.oriflame.com/-/media/RU/Files/My-Pages/Sell/Product-Expert/Product-guide/Fragrance04042016.ashx?u=0101010000&la=ru-RU)">руководство по ароматам</external-link>. -->
			</about-item>
			<about-item
			 	:key="2"
				:data-index="2"
				title="Здоровье с Wellness"
			>
				<p>Продукция Wellness от Oriflame разработана с целью <strong>сбалансировать питание организма</strong> на клеточном уровне в условиях высокого темпа жизни и качества продуктов питания, которые предлагает нам современный мир, стать <i>более здоровыми</i>, <i>энергичными</i> и <i>счастливыми</i>.</p>

				<p>Продукция Wellness <strong>производится в соответствии с высочайшими международными стандартами качества</strong>. Продукты и программы разрабатывались <strong>ведущими мировыми учеными</strong> в течение 15 лет научных исследований и тестов, проводимых в Швеции</p>
				<p>
					Подробное описание вы можете прочитать здесь <external-link className="lightenHover" to="https://media-cis-cdn.oriflame.com/-/media/CIS/Images/My-Pages/Sell/Sell-Wellness/Wellness-product-guide/Wellness-product-guide.ashx?u=0101010000&la=ru-RU">Руководство по продукции Wellness</external-link>.
				</p>
				<!-- <awesome-link 
					v-if="$store.state.isUserFromMobileOrientation"
					containerClassName="parent centered marginTop_29 color_burgund"
					href="/registration" 
					content="Зарегистрироваться"
					modifier="none"
					label="Перейти на страницу регистрации"
				/> -->

				<!-- Oriflame создаёт продукцию под кодовым именем <strong>Wellness</strong>. Это <strong>сбалансированное</strong>, <strong>протеиновое</strong>, а самое главное, <strong>вкусное питание</strong>, которое тонизирует организм.  Над ним корпели, <strong>на протяжении, 15 лет</strong>. За это время, рабочая группа Wellness собрала <external-link to="https://media-cis-cdn.oriflame.com/-/media/CIS/Images/My-Pages/Sell/Sell-Wellness/Wellness-product-guide/Wellness-product-guide.ashx?u=0101010000&la=ru-RU">подробное  описание</external-link>, которые вы можете оценить. -->
			</about-item>
			
			<about-item
			 	:key="3"
				:data-index="3"
				title="Косметические средства"
			>
				<p>
					Более 50 лет компания Oriflame занимается <strong>глубокими исследованиями в области ухода за кожей</strong> и <strong>разрабатывает новаторские высокоэффективные косметические средства</strong>, которые прошли клинические, дерматологические испытания и получили международную JMP сертификацию. 
				</p>

				<p>
					Oriflame предлагает всевозможные крема, активаторы, инструменты и аксессуары для ухода за кожей, отдельную линию продукции для мужчин и многое другое.

					<awesome-link 
						containerClassName="parent centered marginTop_29"
						href="/registration" 
						content="Зарегистрироваться"
						className="min-width_240"
						modifier="green"
						label="Перейти на страницу регистрации"
					/>
				</p>


				<!-- <strong>Главный продукт</strong> Oriflame &mdash; это <strong>косметика</strong>. Специалисты разрабатывают её уже <strong>более 50-ти лет</strong>. Они её <strong>испытывают</strong> разными научными способами и <strong>улучшают</strong>, проводя разные научные исследования. После того, как они <strong>убеждаются в качестве и надёжности</strong> косметики, Oriflame преподносит её всем желающим. Но для партнёров, Oriflame даёт <i>лучшие условия</i>.
				<awesome-link 
					containerClassName="parent centered"
					href="/registration" 
					content="Регистрация" 
					label="Перейти на страницу регистрации"
				/> -->
			</about-item>
			
			
		</fade-translate-transition-group>
		<section class="programm parent column">
			<decorative-title>Бонусы со старта</decorative-title>

			<p :class="['programm__paragraph', paragraph.position]"
				v-for="paragraph in programmParagraphs"
				:key="paragraph.id"
				v-html="paragraph.text"
			/>
			<div class="programmItems parent h-between row wrap">
				
				<programm-item 
					v-for='(item, index) in programmItems'
					:key="index"
					:src="item.src"
					:title="item.title"
					:name="item.name"
					:stepDescription="item.stepDescription"
					:titleModifier="item.titleModifier"
				/>
			</div>
			
		</section>
		<!-- <section class="extraInformation parent row wrap">
			<decorative-title className="extraInformation__title container">Полезная информация</decorative-title>
			<div class="container currentCatalog baseChild halfWidth parent row wrap">
				<h3 class="currentCatalog__title marginLeft_heading fullWidth">
					Текущий каталог
				</h3>
				<external-link to="https://ru.oriflame.com/ecatalogue/502181?per=201609" showIcon="hide" className="materialShadow currentCatalog__image disableUnderline">
					<blurry-image-loader 
						relative
						alt="Текущий каталог"
						src="https://ru.oriflame.com/catalogue-image.png"/>
				</external-link>
				<external-link to="https://ru.oriflame.com/ecatalogue/502181?per=201609" showIcon="hide" className="materialShadow currentCatalog__image disableUnderline">
					<blurry-image-loader 
						relative
						alt="Текущий каталог"
						src="https://ru.oriflame.com/catalogue-image.png"/>
				</external-link>
			</div>

			<ul role="navigation" aria-label="Навигация по полезным ресурсам" class="container baseChild extraInformation__navigation">
				<li v-for="(link, index) in extraInfoLinks"
					:key="index" 
				>
					<internal-link
						:to="link.href" 
						:hashResource="link.hashResource"
						v-if="!link.external"
						className="lightenHover"
					>
						{{ link.text }}
					</internal-link>
					<external-link 
						className="lightenHover"
						:to="link.href" 
						v-if="link.external">
						{{ link.text }}
					</external-link>
					
				</li>
			</ul>
 -->
		</section>
    </div>
</template>

<script>
	// Images
	// import banner from './../assets/images/banner.png';

	import {first, second, third, fourth } from "@/assets/images/programm";
	// import mobileBanner from './../assets/images/mobile-banner.png';
 
	// Components
	import FadeTranslateTransitionGroup from '@/components/FadeTranslateTransitionGroup';
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
	  	InternalLink,
	  	FadeTranslateTransitionGroup
	  },
	  data() {
	  	return {
	  		// banner: window.innerWidth <= 480 ? 
	  		// 	mobileBanner : 
	  		// 	banner,
	  		programmParagraphs: [
	  			{
	  				id: 1,
	  				text: '<strong>Одна из многих</strong> акций, которые будут вам доступны <strong>после регистрации</strong> &mdash; это <i>«Стартовая программа»</i>.',
	  				position: 'v-s-start'
	  			},{
	  				id: 2,
	  				text: 'Данная акция устроена в <strong>виде квеста</strong>, суть которого заключается в поэтапном выполнение <strong>условий</strong> (мы оставили их ниже), а после <strong>получили подарок</strong> в виде наборов продукции Орифлэйм <strong>общей стоимостью 10 328 ₽</strong>.',
	  				position: 'v-s-centered'
	  			},{
	  				id: 3,
	  				text: `<h3 class="marginLeft_heading">Условия квеста:</h3> <ul class="unstyledList">
	  					<li class="marginTop_29"><span class="semibold">Шаг №1:</span> необходимо приобретать продукцию Oriflame, <strong>в течении 21</strong>.</li>
	  					<li class="marginTop_18"><span class="semibold">Шаг №2:</span> суммарная стоимость ваших покупок должна быть <strong>более 99 бонусных    баллов ББ</strong> (каждый продукт соответствует своему количеству ББ)</li>
	  					</ul>`,
	  				position: 'v-s-end'
	  			}
	  		], // end aboutParagraphs
	  		programmItems: [
	  			{
	  				id: 0,
	  				title: "Первый шаг",
	  				src: first,
	  				name: "first",
	  				stepDescription: {
	  					paragraph: "Выполнив условия этого квеста <strong>вы получите, совершенно бесплатно</strong>, набор продукции №1.",
	  				// 	items: [
	  				// 		{
	  				// 			name: 'Питательный крем для рук и тела',
	  				// 			id: 0
	  				// 		},
	  				// 		{
	  				// 			name: 'Крем-мыло «Молоко и мед – Золотая серия» (Код: 31604)',
	  				// 			id: 1
	  				// 		},
	  				// 		{
	  				// 			name: 'Увлажняющий крем для душа «Молоко и мед – Золотая серия» (Код: 31605)',
	  				// 			id: 2
	  				// 		},
	  				// 		{
	  				// 			name: 'Специальное смягчающее средство «Нежная забота» (Код: 1276)',
	  				// 			id: 3
	  				// 		},
	  						
	  				// 	]
	  				}

	  			}, // end first
	  			{
	  				id: 1,
	  				title: "Второй шаг",
	  				src: second,
	  				name: "second",
	  				titleModifier: 'right',
	  				stepDescription: {
	  					paragraph: "Выполнив эти условия ещё раз, в следующие 21 день, <strong>вы получите, совершенно бесплатно</strong>,  дополнительно к набору №1, набор продукции №2.",
	  					// items: [
	  					// 	{
	  					// 		name: 'Губная помада «The ONE Colour Stylist» (оттенок «Дивный пион»)',
	  					// 		id: 0
	  					// 	},
	  					// 	{
	  					// 		name: 'Тушь для ресниц 5-в-11 «The ONE Wonderlash» (оттенок «Черный»)',
	  					// 		id: 1
	  					// 	},
	  					// ]
	  				}

	  			}, // end second
	  			{
	  				id: 2,
	  				title: "Третий шаг",
	  				src: third,
	  				name: "third",
	  				stepDescription: {
	  					paragraph: "Выполнив эти <strong>условия ещё раз</strong>, в следующие 21 день, вы можете выбрать <strong>один из трёх вариантов</strong>, дополнительно к набору №1 и №2, набор продукции №3.",
	  					// items: [
	  					// 	{
	  					// 		name: 'Продукты «Optimals Age ReviveАнти»: возрастной дневной и ночной крем, а также крем для кожи вокруг глаз (Код: 540211)',
	  					// 		id: 0
	  					// 	},
	  					// 	{
	  					// 		name: 'Туалетная вода «Eclat Femme» для нее(Код: 540212) или «Eclat Homme» для него (Код: 540213)',
	  					// 		id: 2
	  					// 	},
	  					// ]
	  				}

	  			}, // end third
	  			{
	  				id: 3,
	  				name: "fourthMan",
	  				src: fourth,
	  				title: "Четвёртый шаг",
	  				titleModifier: 'center',
	  				stepDescription: {
	  					paragraph: "Выполнив эти условия <strong>ещё раз, в следующие 21 день</strong>, вы можете выбрать один из двух вариантов, <strong> совершенно бесплатно</strong>, дополнительно к набору №1, №2 и №3, набор продукции №4.",
	  					// items: [
	  					// 	{
	  					// 		name: '«Вэлнэс Пэк» для мужчин (Код: 540215)',
	  					// 		id: 0
	  					// 	}
	  					// ]
	  				}

	  			}, // end fourthWooman
	  			// {
	  			// 	id: 4,
	  			// 	title: "Последний шаг для женщин",
	  			// 	src: fourthWoomanStepImage,
	  			// 	name: "fourthWooman",
	  			// 	titleModifier: 'center',
	  			// 	stepDescription: {
	  			// 		paragraph: "Последний шаг ー полезная, питательная и здоровая еда <strong>для женщин, со скидкой в 4 130₽ + 5% от суммы набора</strong>.",
	  			// 		items: [
	  			// 			{
	  			// 				name: '«Вэлнэс Пэк» для женщин (Код: 540214)',
	  			// 				id: 0
	  			// 			}
	  						
	  			// 		]
	  			// 	}

	  			// } // end fourthMan
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
	  				id: 3,
	  				text: "Интернет магазин",
	  				href: "https://www.oriflame.ru/",
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
		padding: $s18 1.5rem $s47
		color: $white
		background-color: rgba(51, 51, 51, .4)
		max-width: 805px

		&__title
			z-index: 2
			@include breakpoint($sm-up)
			    max-width: 75%;

			@include breakpoint($xs)
				margin-bottom: 1.5rem;

		& a
			margin-top: 1.5rem

		&__button
			color: $darkGray

		&__image
			&:before
				content: ""
				z-index: 5
				background-color: rgba(51, 51, 51, .4)

			&, &:before	
				position: absolute
				height: 100%
				width: 100%
				top: 0

			z-index: 0

			max-width: 50%
			margin-top: 0 $i

			&:nth-of-type(1), &:before
				left: 0
			&:nth-of-type(2)
				right: 0
			

			.progressive-image 
				height: 100%
				width: 100%

			.progressive-image-main
				@include breakpoint($xs)
					height: 100%

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
	.currentCatalog
		@include breakpoint($xs)
			min-width: 100%
			order: 2
			margin-top: $s47
		@include breakpoint($xxs)

		&__title
			margin-bottom: $s16
		&__image
			max-width: 50%
	.extraInformation
		
		&__title
			margin-bottom: $s47
			.decorativeTitleContainer__title
				@include breakpoint($xxs)
					min-width: 80%

		&__navigation
			padding-top: em(39)
			max-width: 25%
			min-width: 45%
			@include breakpoint($xs)
				max-width: none

		&__image
			min-height: em(500)
	.extraInformation__title, .currentCatalog, .extraInformation__navigation
		@include breakpoint($xxs)
			padding: 0
	.currentCatalog, .extraInformation__navigation
		@include breakpoint($xxs)
			min-width: 100%
</style>
