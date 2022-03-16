import layoutRouts from "./layoutRouts"

export default [
  { 
    path: '/',    
    redirect: '/home',
    name: '首页'
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      ...layoutRouts
    ]
  }
]