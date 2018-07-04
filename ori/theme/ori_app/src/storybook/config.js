import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import VueRouter from 'vue-router';
import VueProgressiveImage from 'vue-progressive-image'
import VeeValidate from 'vee-validate';

import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// Import your custom components.
import AwesomeLink from '../components/AwesomeLink.vue';
import TheLadder from '../components/TheLadder.vue';
import AboutItem from '../components/AboutItem.vue';
import InfoIcon from '../components/InfoIcon.vue';
import BaseIcon from '../components/BaseIcon.vue';
import ArrowButton from '../components/ArrowButton.vue';
import BlurryImageLoader from '../components/BlurryImageLoader.vue';
import BaseButton from '../components/BaseButton.vue';
// import ProgrammItem from '../components/ProgrammItem.vue';    
import DecorativeTitle from '../components/DecorativeTitle.vue';
import ContentPreloader from '../components/ContentPreloader.vue';
import MainTitle from '../components/MainTitle.vue';
import FadeTraslateTransitionGroup from '../components/FadeTranslateTransitionGroup.vue';


import store from '../store';
import '../js/font-awesome.js';
import '../index.sass';
import '../fonts.sass';

Vue.config.devtools = true
// Install Vue plugins.
Vue.use(VueRouter);
Vue.use(VeeValidate);

Vue.use(VueProgressiveImage, {
  blur: 30,
  delay: 1000
});

function registerComponents() {
  const requireComponent = require.context('../components', false,  /\.vue$/);
  
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);

    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    );

    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}

registerComponents();

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');

  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);