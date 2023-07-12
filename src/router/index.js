import { createRouter, createWebHistory } from 'vue-router'
import Goods from "@/page/route/Goods.vue";
import page from "@/page/Page.vue";
import Collection from "@/page/route/Collection.vue";
import theOrderPage from "@/page/route/theOrderPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:import('../page/Page.vue')
    },
    {
      path:'/detail',
      component:Goods
    },
    {
      path:'/collection',
      component:Collection
    },
    {
      path:'/orderPage',
      component:theOrderPage
    }
  ]
})

export default router
