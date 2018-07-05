import Vue from 'vue';
import {storiesOf} from '@storybook/vue';

storiesOf('FadeTransitionTranslateGroup', module)
    .add('Падающие вниз компоненты',
        () => ({
            template: `<div class="parent row wrap centered simpleWrapper">
                <fade-translate-transition-group 
                    tag="article" 
                    class-name="content"
                >
                    <section v-for="(section, index) in sections"
                        :key="index"
                        :data-index="index" 
                    >
                        <h2>{{section.title}}</h2>
                        <p>{{section.text}}</p>
                    </section>
                </fade-translate-transition-group>
            
            </div>`,
            data() {
                return {
                    sections: [
                        {
                            title: "Hello World!",
                            text: "You can cover the content to this component."
                        },
                        {
                        	title: "Next heading",
                        	text: "It is important attribute \"data-index\" for the content container."
                        },
                        {
                        	title: "Important",
                        	text: "Without that attribute, you won't see for falling down blocks' animation!"
                        },
                        {
                        	title: "And so on",
                        	text: "There is the attribute called \"delay\" for handling speed of falled down blocks."
                        },
                        {
                        	title: "Conclusion",
                        	text: "Reuse it everywhere you want!"
                        }
                    ]
                }
            }
        })
    );