import { createWebHistory, createRouter } from "vue-router";

import Home from "../view/home.vue";
import XunshiGongzuoFangan from "./../components/card-1.vue";
import Pianqu from "./../components/card-2.vue";
import CaozuoShuoming from "./../components/card-3.vue";
import Baoming from "./../components/card-4.vue";

import Bmzj from "./../components/bmzj.vue";
import Ggwz from "./../components/ggwz.vue";
import Xxxq from "./../components/xxxq.vue";
import Cjwt from "./../components/cjwt.vue";

import Xqyd from "./../components/xqyd.vue";
import Tjyj from "./../components/tjyj.vue";
import Zntb4 from "../components/zntb4.vue";
import Zntb3 from "../components/zntb3.vue";
import Zntb5 from "../components/zntb5.vue";
import Zntb6 from "../components/zntb6.vue";
import Zntb15 from "../components/zntb15.vue";
import Zntb16 from "../components/zntb16.vue";

import Cltj4 from "../components/cltj4.vue";
import Cltj3 from "../components/cltj3.vue";
import Cltj5 from "../components/cltj5.vue";
import Cltj6 from "../components/cltj6.vue";
import Cltj15 from "../components/cltj15.vue";
import Cltj16 from "../components/cltj16.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  },
  {
    path: "/bmzj",
    name: "Bmzj",
    component: Bmzj,
  },
  {
    path: "/ggwz",
    name: "Ggwz",
    component: Ggwz,
  },
  {
    path: "/xxxq",
    name: "Xxxq",
    component: Xxxq,
  },
  {
    path: "/cjwt",
    name: "Cjwt",
    component: Cjwt,
  },

  {
    path: "/xqyd",
    name: "Xqyd",
    component: Xqyd,
  },
  {
    path: "/tjyj",
    name: "Tjyj",
    component: Tjyj,
  },
  {
    path: "/zntb4",
    name: "Zntb4",
    component: Zntb4,
  },
  {
    path: "/zntb3",
    name: "Zntb3",
    component: Zntb3,
  },
  {
    path: "/zntb5",
    name: "Zntb5",
    component: Zntb5,
  },
  {
    path: "/zntb6",
    name: "Zntb6",
    component: Zntb6,
  },
  {
    path: "/zntb15",
    name: "Zntb15",
    component: Zntb15,
  },
  {
    path: "/zntb16",
    name: "Zntb16",
    component: Zntb16,
  },
  {
    path: "/cltj4",
    name: "cltj4",
    component: Cltj4,
  },
  {
    path: "/cltj3",
    name: "cltj3",
    component: Cltj3,
  },
  {
    path: "/cltj5",
    name: "cltj5",
    component: Cltj5,
  },
  {
    path: "/cltj6",
    name: "cltj6",
    component: Cltj6,
  },
  {
    path: "/cltj15",
    name: "cltj15",
    component: Cltj15,
  },
  {
    path: "/cltj16",
    name: "cltj16",
    component: Cltj16,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pathToStep = {
  "/xqyd": 1,
  "/tjyj": 2,
  "/zntb3": 3,
  "/zntb4": 3,
  "/zntb5": 3,
  "/zntb6": 3,
  "/zntb15": 3,
  "/zntb16": 3,
  "/cltj3": 4,
  "/cltj4": 4,
  "/cltj5": 4,
  "/cltj6": 4,
  "/cltj15": 4,
  "/cltj16": 4,
};

router.beforeEach((to, from, next) => {
  console.log("to", to);
  console.log("form", from);
  console.log("next", next);

  // if(to.path == '/xqyd'){
  //   localStorage.setItem('step', 1);
  // }

  // if(to.path == '/tjyj'){
  //   localStorage.setItem('step', 2);
  // }

  // if(to.path == '/zntb4'){
  //   localStorage.setItem('step', 3);
  // }

  // if(to.path == '/zntb3'){
  //   localStorage.setItem('step', 3);
  // }

  // if(to.path == '/zntb5'){
  //   localStorage.setItem('step', 3);
  // }

  // if(to.path == '/zntb6'){
  //   localStorage.setItem('step', 3);
  // }

  if (pathToStep[to.path]) {
    localStorage.setItem("step", pathToStep[to.path]);
  }

  next();
});

export default router;
