import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import BotDApp from '@/components/BotDApp';

Vue.use(Vuetify);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BotDApp',
      component: BotDApp,
    },
  ],
});
