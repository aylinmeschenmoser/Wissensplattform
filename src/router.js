import Vue from 'vue';
import Router from 'vue-router';
import Blog from './views/Blog.vue';
import Company from './views/Company.vue';
import Knowledge from './views/Knowledge.vue';
import News from './views/News.vue';
import Skills from './views/Skills.vue';
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
      path: '/user',
      name: 'user',
      component: User
    }
  ]
});
