import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyHeader from '../components/layout/MyHeader.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name:'Home',
    component: Home,
    redirect:'/content',
    children:[
      {
        path:'/content',
        name:'Content',
        component:()=>import('../components/layout/Content')
      },
      {
          path:'/post',
          name:'Post',
          component:()=>import(/* webpackChunkName:"post" */ '../views/Post.vue')
      },
      {
        path:'/archive',
        name:"Archive",
        component:()=>import('../views/Archive.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
