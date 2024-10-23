import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '', // 子路由1
    component: () => import('@/views/FrontPage.vue'), // 加载FlashcardBox组件
  },
  {
    path: '/add', // 子路由1
    component: () => import('@/views/AddFlashcard.vue'), // 加载FlashcardBox组件
  },
  {
    path: '/list', // 子路由1
    component: () => import('@/views/DisplayFlashcard.vue'), // 加载FlashcardBox组件
  },
  {
    path: '/folder', // 子路由1
    component: () => import('@/views/DisplayFolder.vue'), // 加载
  },
  {
    path: '/folder/details', // 独立页面2
    component: () => import('@/views/FolderDetails.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
