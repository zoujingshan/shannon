import { createWebHistory, createRouter } from "vue-router";

import Home from '../view/home.vue'
import XunshiGongzuoFangan from './../components/card-1.vue'
import Pianqu from './../components/card-2.vue'
import CaozuoShuoming from './../components/card-3.vue'
import Baoming from './../components/card-4.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/xunshigongzuofangan',
    name: 'XunshiGongzuoFangan',
    component: XunshiGongzuoFangan
  },
  {
    path: '/pianqu',
    name: 'pianqu',
    component: Pianqu
  },
  {
    path: '/caozuoshuoming',
    name: 'caozuoshuoming',
    component: CaozuoShuoming
  },
  {
    path: '/baoming',
    name: 'Baoming',
    component: Baoming
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
