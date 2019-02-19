import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import { metaTagsInjector } from './guards';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: '_active',
  linkExactActiveClass: '_exact-active',
  routes,
});

router.beforeEach(metaTagsInjector);

export default router;
