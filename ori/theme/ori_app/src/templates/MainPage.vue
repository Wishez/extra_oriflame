<template>
  <div class="mainContent">
    <section 
      class="banner parent h-around v-centered wrap marginCentered materialShadow fewRound"
      @mouseup="onMouseUpParentAwesomeButton" 
    >
      <div class="bannerInfo  wrap parent h-around prespective v-centered">
        <h1 :class="`bold banner__title textShadow ${bannerTextColor}`">
          <span :class="bannerTextHighlightColor">Скидки от 20%</span> и <span :class="bannerTextHighlightColor">подарки</span> сразу после регистрации<span :class="bannerTextHighlightColor">.</span>
        </h1>
	    		
        <awesome-link 
          label="Переход на страницу регистрации"
          content="Регистрация" 
          href="/registration" 
          class-name="banner__button whiteTextShadow"/>
      </div>
      <blurry-image-loader
        v-if="isDecorativeBanner"        
        :src="banner"
        default-media="(min-width: 481px)"
        alt="Регистрация"
        modifier="banner"
        class-name="materialShadow fewRound fullWidth"
      />

      <external-link 
        v-if="!isDecorativeBanner"
        to="https://ru.oriflame.com/ecatalogue/502181?per=201609"
        aria-label="Текущий каталог"
        show-icon="hide" 
        class-name="banner__image disableUnderline"

      >
        <blurry-image-loader 
          v-if="$store.state.currentSiteTheme.bannerType === 'catalog'"
          alt="Текущий каталог"
          src="https://ru.oriflame.com/catalogue-image.png"
          relative />
      </external-link>
      <external-link
        v-if="!isDecorativeBanner" 
        to="https://ru.oriflame.com/ecatalogue/502181?per=201609"
        show-icon="hide" 
        aria-label="Текущий каталог"
        class-name=" banner__image disableUnderline fullWidth_xxs">
        <blurry-image-loader 
          alt="Текущий каталог"
          src="https://ru.oriflame.com/catalogue-image.png"
          relative
        />
      </external-link>
    </section>

    <fade-translate-transition-group 
      :duration="1500"
      tag="section" 
      class-name="h-between blog parent row wrap"
    >
				
      <about-item
        :key="0"
        :data-index="0"
        :image="aboutImages.oriflame"
        title="Наша компания"
        class-name="parent column"

      >
        <p>
					
          Oriflame – <strong>европейская косметическая компания</strong> прямых продаж №1, с которой <strong>сотрудничают более 3 миллионов</strong> консультантов по всему миру, а годовой оборот компании составляет <strong>около 1,5 млрд евро</strong>.</p>
        <p>
          Компания Oriflame предлагает <strong>более 1000</strong> наименований <strong>прогрессивных продуктов</strong> по доступной цене &mdash; косметических средств, модных аксессуаров, ароматов, средств по уходу за телом, волосами и т.п., разработанных в Швеции <strong>по уникальным инновационным технологиям</strong>.
        </p>
      </about-item>

      <about-item
        :key="1"
        :data-index="1"
        :image="aboutImages.smell"
        title="Царство ароматов"
      >
        <p>Все ароматы Oriflame создаются во Франции — <strong>в самом сердце парфюмерной промышленности</strong> мира, чтобы их <i>качество</i>, <i>новизна</i> и <i>неповторимость</i> <strong>соответствовали высочайшим требованиям</strong>.</p>

        <p>Компания Oriflame разрабатывает свои ароматы в тесном сотрудничестве с парфюмерами города Грасс, который несомненно, является «мировой столицей парфюмерии».</p>
        <p>
          <strong>Описание всех ароматов</strong> Oriflame вы можете найти здесь <external-link 
            class-name="lightenHover"
            to="https://media-cis-cdn.oriflame.com/-/media/RU/Files/My-Pages/Sell/Product-Expert/Product-guide/Fragrance04042016.ashx?u=0101010000&la=ru-RU)">руководстве по продукции</external-link>.
        </p>
      </about-item>
      <about-item
        :key="2"
        :data-index="2"
        :image="aboutImages.wellness"
        title="Здоровье с Wellness"
      >
        <p>Продукция Wellness от Oriflame разработана с целью <strong>сбалансировать питание организма</strong> на клеточном уровне в условиях высокого темпа жизни и качества продуктов питания, которые предлагает нам современный мир, стать <i>более здоровыми</i>, <i>энергичными</i> и <i>счастливыми</i>.</p>

        <p>Продукция Wellness <strong>производится в соответствии с высочайшими международными стандартами качества</strong>. Продукты и программы разрабатывались <strong>ведущими мировыми учеными</strong> в течение 15 лет научных исследований и тестов, проводимых в Швеции</p>
        <p>
          Подробное описание вы можете прочитать здесь <external-link 
            class-name="lightenHover" 
            to="https://media-cis-cdn.oriflame.com/-/media/CIS/Images/My-Pages/Sell/Sell-Wellness/Wellness-product-guide/Wellness-product-guide.ashx?u=0101010000&la=ru-RU">Руководство по продукции Wellness</external-link>.
        </p>
      </about-item>
			
      <about-item
        :key="3"
        :data-index="3"
        :image="aboutImages.skin"
        image-class="aboutItemImage_big"
        title="Уход за кожей"
      >
        <p>
          Более 50 лет компания Oriflame занимается <strong>глубокими исследованиями в области ухода за кожей</strong> и <strong>разрабатывает новаторские высокоэффективные косметические средства</strong>, которые прошли клинические, дерматологические испытания и получили международную JMP сертификацию. 
        </p>

        <p>
          Oriflame предлагает всевозможные крема, активаторы, инструменты и аксессуары для ухода за кожей, отдельную линию продукции для мужчин и многое другое.
        </p>
      </about-item>
			
      <awesome-link 
        :key="4"
        :data-index="4"
        container-class-name="parent centered marginCentered marginTop_6"

        href="/registration" 
        content="Регистрация"
        modifier="burgund"
        label="Перейти на страницу регистрации"
      />
    </fade-translate-transition-group>

    <section class="programm parent column">
      <decorative-title>Бонусы со старта</decorative-title>

      <p 
        v-for="paragraph in programmParagraphs"
        :class="['programm__paragraph', paragraph.position]"
        :key="paragraph.id"
        v-html="paragraph.text"
      />
      <div class="programmItems parent h-between row wrap">
				
        <programm-item 
          v-for="(item, index) in programmItems"
          :key="index"
          :src="item.src"
          :title="item.title"
          :name="item.name"
          :step-description="item.stepDescription"
          :title-modifier="item.titleModifier"
        />
      </div>

      <awesome-link 
        container-class-name="parent centered marginTop_47"
        href="/registration" 
        content="Зарегистрироваться"
        class-name="min-width_240"
        modifier="green"
        label="Перейти на страницу регистрации"
      />
			
    </section>
    <section 
      v-if="isDecorativeBanner" 
      class="extraInformation parent row wrap">
      <decorative-title class-name="extraInformation__title container">Полезная информация</decorative-title>
      <div class="container currentCatalog baseChild halfWidth parent row wrap">
        <h3 class="currentCatalog__title marginLeft_heading fullWidth">
          Текущий каталог
        </h3>
        <external-link 
          to="https://ru.oriflame.com/ecatalogue/502181?per=201609" 
          show-icon="hide" 
          class-name="materialShadow currentCatalog__image disableUnderline">
          <blurry-image-loader 
            relative
            alt="Текущий каталог"
            src="https://ru.oriflame.com/catalogue-image.png"/>
        </external-link>
        <external-link 
          to="https://ru.oriflame.com/ecatalogue/502181?per=201609" 
          show-icon="hide" 
          class-name="materialShadow currentCatalog__image disableUnderline">
          <blurry-image-loader 
            relative
            alt="Текущий каталог"
            src="https://ru.oriflame.com/catalogue-image.png"/>
        </external-link>
      </div>

      <ul 
        role="navigation" 
        aria-label="Навигация по полезным ресурсам" 
        class="container baseChild extraInformation__navigation">
        <li 
          v-for="(link, index) in extraInfoLinks"
          :key="index" 
        >
          <internal-link
            v-if="!link.external"
            :to="link.href" 
            :hash-resource="link.hashResource"
            class-name="lightenHover"
          >
            {{ link.text }}
          </internal-link>
          <external-link 
            v-if="link.external"
            :to="link.href" 
            class-name="lightenHover"
          >
            {{ link.text }}
          </external-link>
					
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
// Images
import banner from "./../assets/images/banner.png";

import { first, second, third, fourth } from "@/assets/images/programm";
import mobileBanner from "./../assets/images/mobile-banner.png";

// Components

import AwesomeLink from "@/components/AwesomeLink";
import AboutItem from "@/components/AboutItem";
import DecorativeTitle from "@/components/DecorativeTitle";
import ProgrammItem from "@/components/ProgrammItem";

import { onMouseUpParentAwesomeButton } from "./../constants/pureFunctions";
import aboutImages from "@/assets/images/about";

export default {
  name: "MainPage",
  components: {
    AwesomeLink,
    AboutItem,
    DecorativeTitle,
    ProgrammItem
  },
  data() {
    return {
      banner: window.innerWidth <= 480 ? mobileBanner : banner,
      aboutImages,
      programmParagraphs: [
        {
          id: 1,
          text:
            "<strong>Одна из многих</strong> акций, которые будут вам доступны <strong>после регистрации</strong> &mdash; это <i>«Стартовая программа»</i>.",
          position: "v-s-start"
        },
        {
          id: 2,
          text:
            "Данная акция устроена в <strong>виде квеста</strong>, суть которого заключается в поэтапном выполнение <strong>условий</strong> (мы оставили их ниже), а после <strong>получили подарок</strong> в виде наборов продукции Орифлэйм <strong>общей стоимостью 10 328 ₽</strong>.",
          position: "v-s-centered"
        },
        {
          id: 3,
          text: `<h3 class="marginLeft_heading">Условия квеста:</h3> <ul class="unstyledList">
  					<li class="marginTop_29"><span class="semibold">Шаг №1:</span> необходимо приобретать продукцию Oriflame, <strong>в течении 21</strong>.</li>
  					<li class="marginTop_18"><span class="semibold">Шаг №2:</span> суммарная стоимость ваших покупок должна быть <strong>более 99 бонусных    баллов ББ</strong> (каждый продукт соответствует своему количеству ББ)</li>
  					</ul>`,
          position: "v-s-end"
        }
      ], // end aboutParagraphs
      programmItems: [
        {
          id: 0,
          title: "Первый шаг",
          src: first,
          name: "first",
          stepDescription: {
            paragraph:
              "Выполнив условия этого квеста <strong>вы получите, совершенно бесплатно</strong>, набор продукции №1."
          }
        }, // end first
        {
          id: 1,
          title: "Второй шаг",
          src: second,
          name: "second",
          titleModifier: "right",
          stepDescription: {
            paragraph:
              "Выполнив эти условия ещё раз, в следующие 21 день, <strong>вы получите, совершенно бесплатно</strong>,  дополнительно к набору №1, набор продукции №2."
          }
        }, // end second
        {
          id: 2,
          title: "Третий шаг",
          src: third,
          name: "third",
          stepDescription: {
            paragraph:
              "Выполнив эти <strong>условия ещё раз</strong>, в следующие 21 день, вы можете выбрать <strong>один из трёх вариантов</strong>, дополнительно к набору №1 и №2, набор продукции №3."
          }
        }, // end third
        {
          id: 3,
          name: "fourthMan",
          src: fourth,
          title: "Четвёртый шаг",
          titleModifier: "center",
          stepDescription: {
            paragraph:
              "Выполнив эти условия <strong>ещё раз, в следующие 21 день</strong>, вы можете выбрать один из двух вариантов, <strong> совершенно бесплатно</strong>, дополнительно к набору №1, №2 и №3, набор продукции №4."
          }
        } // end fourthWooman
      ], // end programmItems
      extraInfoLinks: [
        {
          id: 0,
          text: "Бонусные баллы",
          href: "/business",
          hashResource: "#scores"
        },
        {
          id: 1,
          text: "О регистрации",
          href: "/registration",
          hashResource: "#description"
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
          href: "/business"
        },
        {
          id: 5,
          text: "Видео об Орифлейм ",
          href: "/media"
        }
      ] // end extraInfoLinks
    };
  },
  computed: {
    isDecorativeBanner() {
      return "decorative" === this.$store.state.currentSiteTheme.bannerType;
    },
    bannerTextHighlightColor() {
      return this.isDecorativeBanner ? "pinkColor" : "darkenGreenColor";
    },
    bannerTextColor() {
      return this.isDecorativeBanner ? "whiteColor" : "darkGrayColor";
    }
  },
  methods: {
    onMouseUpParentAwesomeButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
// Variables and helpful functions
@import './../styles/conf/_sizes.sass'
@import './../styles/conf/_colors.sass'
@import './../styles/conf/_breakpoints.sass'

.bannerInfo
	padding: $s18 $s29 $s47 $s47
	color: $darkGray
	
.banner
	position: relative
	z-index: 0
	
	background-color: #fff
	max-width: 805px

	&__title
		z-index: 2
		@include breakpoint($sm-up)
		    max-width: 70%;

		@include breakpoint($xs)
			margin-bottom: 1.5rem;

	& a
		margin-top: 1.5rem

	&__button
		color: $darkGray

	&__image
		order: -1

		max-width: 50%
		margin-top: 0 $i

		&:nth-of-type(1)
			@include breakpoint($xxs)
				display: none
			
		&:nth-of-type(2)
			
		

		.progressive-image 
			height: 100%
			width: 100%

		.progressive-image-main
			@include breakpoint($xs)
				height: 100%
.aboutItemImage
	max-width: 25%

	&_big
		max-width: 30%

	@include breakpoint($xxs) 
		max-width: 100%
		margin: 0 auto .75rem


.imageContainer_banner
	position: absolute
	top: 0
	z-index: -1
	left: 0

	.progressive-image-main,.progressive-image-wrapper
		height: 100%

.imageContainer_banner
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
