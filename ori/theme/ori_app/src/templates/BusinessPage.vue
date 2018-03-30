<template>
	<section class="businessPage">
		<main-title>Внутренняя структура</main-title>
		<fade-translate-transition-group tag="div" class="content">
			<article :key="index"
				:data-index="index"
				v-for="(paragraph, index) in paragraphs">
				<h2 :id="paragraph.id">{{ paragraph.title }}</h2>		
				<p v-html="paragraph.text" />		
				<p :key="counter"
					v-for="(additionalParagraph, counter) in paragraph.additionalParagraphs"
					v-html="additionalParagraph" />
			</article>
			<TheLadder :key="paragraphs.length" />
		</fade-translate-transition-group>
	</section>
</template>

<script>
	
	import SlideToLink from '@/components/SlideToLink';
	import MainTitle from '@/components/MainTitle';
	// import ConsultantTooltip from '@/components/ConsultantTooltip';
	import FadeTranslateTransitionGroup from '@/components/FadeTranslateTransitionGroup';
	
	import TheLadder from '@/components/TheLadder';

	export default {
		name: "BusinessPage",
		props: {
			className: {
				type: String,
				required: false,
				default: null
			},
			modifier: {
				type: String,
				required: false,
			},
		},
  	    components: {
  	    	SlideToLink,
  	    	FadeTranslateTransitionGroup,
  	    	MainTitle,
  	    	TheLadder
	    },
	    mixins: [],
	    data: () => ({
	    	paragraphs: [
		    	{
		    		title: 'Взгляд изнутри',
		    		id: "review",
		    		text: 'Наш бизнес <strong>построен на взаимоотношениях</strong> между людьми. Мы <strong>собираем группы</strong> из людей, а после <strong>обучаем их</strong> тому, как <strong>собирать собственные группы</strong> и как <strong>увеличивать их товарооборот</strong>.'
		    	},
		    	{
		    		title: 'Общий капитал',
		    		id: 'scores',
		    		text: 'Товарооборот <strong>состоит из заказов</strong>. Люди зказывают  у вас множество предметов. Ко всему прочему, в вашей группе <strong>происходит движение</strong> (заказы набирают оборот). За <strong>завершённые заказы вы получаете бонусные баллы</strong>. '
		    	},
		    	{
		    		title: 'Внутренний рынок',
		    		id: 'market',
		    		text: 'Бонусные быллы — <strong>фирменная валюта</strong>, у которой <strong>есть свой курс</strong>. Приблизительно <i>37 Российских рублей</i>. <strong>Каждый предмет</strong> в каталоге <strong>имеет своё определённое количество бонусных баллов</strong>.',
		    		additionalParagraphs: ['Сделав заказ из нескольких предметов, баллы суммируются и <strong>начисляются на ваш счёт</strong>.']
		    	},
		    	{
		    		title: 'Командная работа',
		    		id: 'team',
		    		text: 'Когда у вас есть группа людей, которые делаю заказы, то <strong>процент от</strong>  общей <strong>суммы заказов переходит вам</strong>. Этот процент <strong>определяется разницей между вашим процентом и процентом консультанта</strong> в вашей группе, который сделал заказ.',
		    		additionalParagraphs: [
		    			'Если <i>ваш процент 22%</i>, а <i>вашего партнёра 18%</i>, то <strong>вы получите 4% от его общей прибыли</strong>. ',
		    			'Самое главное, что <strong>при достижение 22-х процентов вашим партнёром</strong> (звание старшего менеджера), вам остаётся <strong>постоянный процент от его товараоборота в 5%</strong>.'
		    		]
		    	},
	    	]
	    }),
	    beforeCreate() {
	    },
	    created() {
	    },
	    beforeMount () {
	    },
	    mounted() {
	    },
	    computed: {
	    },
	    methods: {
	    },
	    beforeUpdate() {
	    },
	    updated() {
	    },
	    beforeDestroy() {
	    }
	};
</script>

<style lang="sass">
	@import './../styles/conf/_sizes.sass'
	@import './../styles/conf/_colors.sass'
	@import './../styles/conf/_breakpoints.sass'
	.ladder

</style>