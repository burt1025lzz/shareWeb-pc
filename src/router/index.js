import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {path: '', name: 'Home', component: () => import('@/views/home/Home')},
      {path: 'article', name: 'Article', component: () => import('@/views/article/Article')},
      {path: 'video', name: 'Video', component: () => import('@/views/video/Video')}
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
