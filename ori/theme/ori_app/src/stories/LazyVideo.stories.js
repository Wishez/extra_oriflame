import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';
import router from '../router';

storiesOf('Lazy Video', module)
    .add('Клип',
        () => ({
            template: `<div class="parent row wrap centered simpleWrapper">
                <fade-translate-transition-group 
					tag="ul"
                    :delay="50" 
					class-name="unstyledList videos wrap parent row display_grid gap_increased grid_base-columns">
                    <lazy-video 
                        :key="0"
                        :data-index="0"
                        label="Буерак."
                        src="9kcYWnX0QqU"></lazy-loading>
                </fade-translate-transition-group>
            </div>`,
            data: () => ({})
        })
    )
    .add('RXjs tutorial',
    	() => ({
    		template: `<div class="parent row wrap centered simpleWrapper fullWidth">
                <fade-translate-transition-group 
					tag="ul"
                    :delay="50" 
					class-name="unstyledList videos wrap parent row display_grid gap_increased grid_base-columns fullWidth">
                    <lazy-video 
                        v-for="(video, index) in videos" 
                        :key="index" 
                        :data-index="index"
                        :src="video.embed" 
                        :label="video.label"
                    />
                </fade-translate-transition-group>
            </div>`,
    		data: () => ({
                videos: [
                    {
                        embed: 'T9wOu11uU6U',
                        label: "1"
                    },
                    {
                    	embed: 'Tux1nhBPl_w',
                    	label: "2"
                    },
                    {
                    	embed: '-nYQJkMpOHU',
                    	label: "3"
                    },
                    {
                    	embed: 'X9fdpGthrXA',
                    	label: "4"
                    },
                    {
                    	embed: 'rdK92pf3abs',
                    	label: "5"
                    },
                    {
                    	embed: 'tk5x8By3yYk',
                    	label: "6"
                    },
                    {
                    	embed: 'QbNUD5ca99A',
                    	label: "7"
                    },
                    {
                    	embed: 'myEeo2rZc3g',
                    	label: "8"
                    },
                    {
                    	embed: 'IVBJ3-M_YsQ',
                    	label: "9"
                    },
                    {
                    	embed: 'b59tcUwfpWU',
                    	label: "10"
                    },
                    {
                    	embed: '6lKoLwGlglE',
                    	label: "11"
                    },
                    {
                    	embed: '-mwNLRbfKmU',
                    	label: "12"
                    }
                ]
            })
    	})
    )