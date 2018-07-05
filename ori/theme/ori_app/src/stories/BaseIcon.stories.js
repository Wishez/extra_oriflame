import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import store from '../store';

storiesOf('Base Icon', module)
    .add('Салатовая',
        () => ({
            store,
            template: `<div class="parent row wrap centered simpleWrapper">
                <base-icon class-name="marginRight_6" icon="fab fa-angellist" modifier="green"></base-icon>
                <base-icon class-name="marginRight_6" icon="fas fa-hand-spock" modifier="green"></base-icon>
                <base-icon class-name="marginRight_6" icon="far fa-hand-lizard" modifier="green"></base-icon>
                <base-icon icon="fas fa-hands" modifier="green"></base-icon>
            </div>`
        })
    )
    .add('Розовая',
    	() => ({
            store,
    		template: `<div class="parent row wrap centered simpleWrapper">
                <base-icon class-name="marginRight_6" icon="fas fa-grin-stars" modifier="pink"></base-icon>
                <base-icon class-name="marginRight_6" icon="fas fa-grimace" modifier="pink"></base-icon>
                <base-icon class-name="marginRight_6" icon="fas fa-grin-hearts" modifier="pink"></base-icon>
                <base-icon icon="fas fa-grin-tongue-squint" modifier="pink"></base-icon>
            </div>`,
    	})
    );