import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import AwesomeLink from '../src/components/AwesomeLink.vue';

// Install Vue plugins.
Vue.use(Vuex);

// Register custom components.
Vue.component('awesome-link', AwesomeLink);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');

  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);