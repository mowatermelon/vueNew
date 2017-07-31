import Vue from 'vue';
import Router from 'vue-router';

const login = resolve => require(['@/components/login/login'], resolve);
const news = resolve => require(['@/components/index/news'], resolve);
const mood = resolve => require(['@/components/mood/mood'], resolve);
const pic = resolve => require(['@/components/pic/pic'], resolve);
const setting = resolve => require(['@/components/setting/setting'], resolve);

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
      {
        path: '/v-news',
        name: 'v-news',
        component: news
      },
      {
        path: '/v-pic',
        name: 'v-pic',
        component: pic
      },
      {
        path: '/v-mood',
        name: 'v-mood',
        component: mood
      },
      {
        path: '/v-setting',
        name: 'v-setting',
        component: setting
      },
      {
        path: '/v-login',
        name: 'v-login',
        component: login
      },
      {
        path: '/v-login/redirect/:redirect',
       component: login,
       name: 'v-login'
     }
  ]
});
