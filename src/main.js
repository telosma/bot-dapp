// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Web3 from 'web3';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import App from './App';
import router from './router';


Vue.config.productionTip = false;

window.addEventListener('load', () => {
  if (typeof web3 !== 'undefined') {
    console.log('Web3 injected browser: OK.');
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('Web3 injected browser: Fail. You should consider trying MetaMask.');
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
  });
});
