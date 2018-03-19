<template>
	<section class="businessPage">
		<main-title>Внутренняя структура</main-title>
		<fade-translate-transition-group tag="div" class="content">
			<article :key="index"
				:data-index="index"
				v-for="(paragraph, index) in paragraphs">
				<h2>{{ paragraph.title }}</h2>		
				<p v-html="paragraph.text" />		
				<p :key="counter"
					v-for="(additionalParagraph, counter) in paragraph.additionalParagraphs"
					v-html="additionalParagraph" />
			</article>
			<!-- <article :key="paragraphs.length"
				>
				<h2>Карьерная лестница</h2>
				<fade-translate-transition-group
					class="ladder unstyledList perspective">
					<li :key="index"
						:data-index="index"
						v-for="(step, index) in ladder"
						class="step fewRound materialShadow"
					>
						<h3 class="step__title italic textCentered paddingContainer">{{ step.title }}</h3>
						<div class="whiteBackground stepContent paddingContainer stepContent__paragraph zeroTopMargin">
							<p class="stepContent__paragraph zeroTopMargin"  v-html="step.achieve" />
							<p class="stepContent__paragraph" 	v-html="step.income" />
							<h4 v-if="step.benifit.length" class="italic textCentered stepContent__subtitle">Бонусы по достижению</h4>
							<ul v-if="step.benifit.length">
								<li :key="benifitIndex" 
									v-for="(benifit, benifitIndex) in step.benifit" 
									v-html="benifit"/>
							</ul>
						</div>
					</li>
				</fade-translate-transition-group>
			</article> -->
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
	// import {ladder} from '@/constants/business';

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
		    		text: 'Наш бизнес построен на взаимоотношениях между людьми. Мы собираем группы из людей, а после обучаем их тому, как собирать собственные группы и увеличивать их товарооборот.'
		    	},
		    	{
		    		title: 'Общий капитал',
		    		text: 'Товарооборот состоит из заказов. Люди зказывают  у вас множество предметов. Ко всему прочему, в вашей группе также происходит движение. За завершённые заказы вы получаете бонусные баллы. '
		    	},
		    	{
		    		title: 'Внутренний рынок',
		    		text: 'Бонусные быллы — фирменная валюта, у которой есть свой курс. Приблизительно 37 Российских рублей. Каждый предмет в каталоге имеет своё определённое количество бонусных баллов.',
		    		additionalParagraphs: ['Сделав заказ из нескольких предметов, баллы суммируются и начисляются на ваш счёт.']
		    	},
		    	{
		    		title: 'Командная работа',
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

	.step__title
		background-color: rgba($pink, .85)
</style>