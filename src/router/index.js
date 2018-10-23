import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import BotDApp from '@/components/BotDApp';
import UserDApp from '@/components/UserDApp';

Vue.use(Vuetify);
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BotDApp',
      component: BotDApp,
    },
    {
      path: '/user',
      name: 'UserDApp',
      component: UserDApp,
    },
  ],
});
