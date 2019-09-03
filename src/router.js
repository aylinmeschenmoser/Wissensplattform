import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import News from './views/News.vue';
import Blog from './views/Blog.vue';
import Knowledge from './views/Knowledge.vue';
import Skills from './views/Skills.vue';
import Company from './views/Company.vue';
import Hub from './views/Hub.vue';
import User from './views/User.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/news'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/hub',
      name: 'hub',
      component: Hub
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
});
