import Vue from 'vue';
import Router from 'vue-router';

const login = resolve => require(['@/components/login/login'], resolve);
const news = resolve => require(['@/components/index/news'], resolve);
const mood = resolve => require(['@/components/mood/mood'], resolve);
const pic = resolve => require(['@/components/pic/pic'], resolve);
const setting = resolve => require(['@/components/setting/setting'], resolve);

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0;
      position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position;
  }
};

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  linkActiveClass: 'mdui-bottom-nav-active',
  routes: [
      {
        path: '/v-news',
        name: 'v-news',
        component: news,
        meta: { scrollToTop: true }
        // beforeEnter: requireAuth
      },
      {
        path: '/v-pic',
        name: 'v-pic',
        component: pic,
        meta: { scrollToTop: true }
        // beforeEnter: requireAuth
      },
      {
        path: '/v-mood',
        name: 'v-mood',
        component: mood,
        meta: { scrollToTop: true }
        // beforeEnter: requireAuth
      },
      {
        path: '/v-setting',
        name: 'v-setting',
        component: setting,
        meta: { scrollToTop: true }
        // beforeEnter: requireAuth
      },
      {
        path: '/v-login',
        name: 'v-login',
        component: login,
        meta: { scrollToTop: true }
      },
      {
        path: '/v-login/redirect/:redirect',
       component: login,
       name: 'v-login',
       meta: { scrollToTop: true }
     }
  ]
});
