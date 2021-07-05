import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Body',
    component: () => import('../layouts/Home.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          title: '首页',
        },
        component: () => import('../components/Home/Welcome.vue'),
      },
      {
        path: '/doc',
        name: 'Doc',
        meta: {
          title: '食用指南',
        },
        component: () => import('../views/Document.vue'),
      },
      {
        path: '/create',
        name: 'Create',
        meta: {
          title: '创建函数',
        },
        component: () => import('../views/CreateFunc.vue'),
      },
      {
        path: '/list',
        name: 'List',
        meta: {
          title: '函数列表',
        },
        component: () => import('../views/ListFunc.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
