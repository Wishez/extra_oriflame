<template>
  <section class="businessPage">
    <main-title>Внутренняя структура</main-title>
    <fade-translate-transition-group
      tag="div"
      class="content">
      <section
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        :data-index="index"
      >
        <h2 :id="paragraph.id">{{ paragraph.title }}</h2>
        <p v-html="paragraph.text" />
        <p
          v-for="(additionalParagraph, counter) in paragraph.additionalParagraphs"
          :key="counter"
          v-html="additionalParagraph" />
      </section>
      <TheLadder :key="paragraphs.length" />
    </fade-translate-transition-group>
  </section>
</template>

<script>
import TheLadder from "@/components/TheLadder";
import { businessUrl } from "@/constants/conf";

export default {
  name: "BusinessPage",
  components: {
    TheLadder
  },
  mixins: [],
  props: {
    className: {
      type: String,
      required: false,
      default: ""
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    }
  },
  data: () => ({
    paragraphs: [
      {
        title: "Взгляд изнутри",
        id: "review",
        text:
          "Наш бизнес <strong>построен на взаимоотношениях</strong> между людьми. Мы <strong>собираем группы</strong> из людей, а после <strong>обучаем их</strong> тому, как <strong>собирать собственные группы</strong> и как <strong>увеличивать их товарооборот</strong>."
      },
      {
        title: "Общий капитал",
        id: "scores",
        text:
          "Товарооборот <strong>состоит из заказов</strong>. Люди зказывают  у вас множество предметов. Ко всему прочему, в вашей группе <strong>происходит движение</strong> (заказы набирают оборот). За <strong>завершённые заказы вы получаете бонусные баллы</strong>. "
      },
      {
        title: "Внутренний рынок",
        id: "market",
        text:
          "Бонусные быллы — <strong>фирменная валюта</strong>, у которой <strong>есть свой курс</strong>. Приблизительно <i>37 Российских рублей</i>. <strong>Каждый предмет</strong> в каталоге <strong>имеет своё определённое количество бонусных баллов</strong>.",
        additionalParagraphs: [
          "Сделав заказ из нескольких предметов, баллы суммируются и <strong>начисляются на ваш счёт</strong>."
        ]
      },
      {
        title: "Командная работа",
        id: "team",
        text:
          "Когда у вас есть группа людей, которые делаю заказы, то <strong>процент от</strong>  общей <strong>суммы заказов переходит вам</strong>. Этот процент <strong>определяется разницей между вашим процентом и процентом консультанта</strong> в вашей группе, который сделал заказ.",
        additionalParagraphs: [
          "Если <i>ваш процент 22%</i>, а <i>вашего партнёра 18%</i>, то <strong>вы получите 4% от его общей прибыли</strong>. ",
          "Самое главное, что <strong>при достижение 22-х процентов вашим партнёром</strong> (звание старшего менеджера), вам остаётся <strong>постоянный процент от его товараоборота в 5%</strong>."
        ]
      }
    ]
  }),

  beforeMount() {
    window.open(businessUrl);
  }
};
</script>
