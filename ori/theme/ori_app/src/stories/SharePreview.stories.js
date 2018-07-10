import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';
import russianBreakfest from '../assets/images/russian-breakfest.jpg';
import cat from '../assets/images/cat.jpg';
import {transformDate} from '../constants/pureFunctions';

storiesOf('Share Preview', module)
    .add('Единичная',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <div class="baseChild marginBottom_47 shareContainer container grid_four fullWidth_xxs notRestAlone halfWidth_xs removeOffsetWithGrid"> 
                    <share-preview 
                        :title="share.title"
                        :announce="share.announce"
                        :published="transformDate(share.published_date)"
                        :image="share.img"
                        url="/"
                    />
                </div>
            </div>`,
            data() {
                return {
                    share: {
                        img: russianBreakfest,
                        title: "Hello World!",
                        announce: "Text beneath the title.",
                        published_date: Date.now()
                    }
                }
            },
            methods: {
                transformDate
            }
        })
    )
    .add('Группа акций',
        () => ({
            router,
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <fade-translate-transition-group
                    :delay="50"
                    tag="div"
                    class-name="sharesList parent row wrap h-between display_grid gap_increased grid_base-columns fullWidth"
                >
                    <div v-for="(share, index) in shares"
                        :key="index" 
                        :data-index="index"
                        class="baseChild marginBottom_47 shareContainer container grid_four fullWidth_xxs notRestAlone halfWidth_xs removeOffsetWithGrid"> 
                        <share-preview 
                        :title="share.title"
                        :announce="share.announce"
                        :published="transformDate(share.published_date)"
                        :image="share.img"
                        url="/"
                        />
                    </div>
                </fade-translate-transition-group>  
            </div>`,
            data() {
                return {
                    shares: [
                        {
                            img: cat,
                            title: "一",
                            announce: "С другой стороны консультация с широким активом требуют определения и уточнения систем массового участия. Повседневная практика показывает, что консультация с широким активом в значительной степени обуславливает создание соответствующий условий активизации.",
                            published_date: Date.now()
                        },
                        {
                        	img: russianBreakfest,
                        	title: "二",
                        	announce: "Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет оценить значение соответствующий условий активизации. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Таким образом сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Разнообразный и богатый опыт новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Равным образом новая модель организационной деятельности в значительной степени обуславливает создание соответствующий условий активизации. Задача организации, в особенности же укрепление и развитие структуры требуют от нас анализа модели развития.",
                        	published_date: Date.now()
                        },
                        {
                        	img: russianBreakfest,
                        	title: "三",
                        	announce: "Значимость этих проблем настолько очевидна, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Разнообразный и богатый опыт начало повседневной работы по формированию позиции играет важную роль в формировании дальнейших направлений развития. Товарищи! сложившаяся структура организации требуют от нас анализа новых предложений. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение соответствующий условий активизации.",
                        	published_date: Date.now()
                        },
                        {
                        	img: cat,
                        	title: "四",
                        	announce: "Товарищи! укрепление и развитие структуры влечет за собой процесс внедрения и модернизации систем массового участия. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания по разработке соответствующий условий активизации.",
                        	published_date: Date.now()
                        }
                    ]
                }
            },
            methods: {
                transformDate
            }
        })
    )
