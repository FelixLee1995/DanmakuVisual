import UserHome from './component/UserHome.vue'
import Index from './component/Index.vue'


const routers = [
  {
    path: '/',
    component: UserHome,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: '/login',
    component: Index
  },
]

export default routers

