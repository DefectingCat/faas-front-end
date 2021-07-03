import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: () => import('../layouts/Home.vue'),
    children: [
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

export default router;
