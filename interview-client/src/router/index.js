import { createRouter, createWebHistory } from 'vue-router';
import Count from '@/components/Count.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Count,
    },
  ],
})

export default router;
