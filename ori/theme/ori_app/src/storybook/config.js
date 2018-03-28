import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import VueRouter from 'vue-router';

// Import your custom components.
// import AwesomeLink from '../components/AwesomeLink.vue';
import TheLadder from '../components/TheLadder.vue';
import '../index.sass';

Vue.config.devtools = true
// Install Vue plugins.
// Vue.use(VueRouter);
Vue.use(Vuex);

// Register custom components.
// Vue.component('awesome-link', AwesomeLink);

// Vue.component('the-ladder', TheLadder);

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');

  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);