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
		    		title: 'Взгляд инутри',
		    		id: "review",
		    		text: 'Наш бизнес построен на взаимоотношениях между людьми. Мы собираем группы из людей, а после обучаем их тому, как собирать собственные группы и увеличивать их товарооборот.'
		    	},
		    	{
		    		title: 'Общий капитал',
		    		id: 'scores',
		    		text: 'Товарооборот состоит из заказов. Люди зказывают  у вас множество предметов. Ко всему прочему, в вашей группе также происходит движение. За завершённые заказы вы получаете бонусные баллы. '
		    	},
		    	{
		    		title: 'Внутренний рынок',
		    		id: 'market',
		    		text: 'Бонусные быллы — фирменная валюта, у которой есть свой курс. Приблизительно 37 Российских рублей. Каждый предмет в каталоге имеет своё определённое количество бонусных баллов.',
		    		additionalParagraphs: ['Сделав заказ из нескольких предметов, баллы суммируются и начисляются на ваш счёт.']
		    	},
		    	{
		    		title: 'Командная работа',
		    		id: 'team',
		    		text: 'Когда вы имеете группу людей, которые делаю заказы, то процент от общей суммы заказов переходит вам. Этот процент определяется разницей между вашим процентом и процентом консультанта в вашей группе, который сделал заказ.',
		    		additionalParagraphs: [
		    			'Если ваш процент 22%, а вашего партнёра 18%, то вы получите 4% от его общей прибыли.',
		    			'Но это только вершина айзберга!'
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