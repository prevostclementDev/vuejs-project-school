import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/tous-les-concerts',
    name: 'concerts',
    component: () => import('../pages/concerts.vue'),
  },
  {
    path: '/mes-reservations',
    name: 'reservations',
    component: () => import('../pages/reservations.vue'),
  },
  {
    path: '/concert/:id',
    name: 'concert',
    component: () => import('../pages/single_concert.vue'),
    props : true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router;