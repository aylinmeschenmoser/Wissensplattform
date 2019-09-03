import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const userToken = window.sessionStorage.getItem('userToken') || window.localStorage.getItem('userToken');

  if (userToken) {
    if (to.name !== 'login') {
      next();
    } else {
      console.warn('User is already logged in.');
    }
  } else if (to.name !== 'login') {
    next('login');
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
