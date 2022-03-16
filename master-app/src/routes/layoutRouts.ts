export default [
  {
    path: '/home',
    component: '@/pages/Home',
    name: '首页',
  },
  {
    path: '/page1',
    component: '@/pages/page1/Page1',
    name: 'PAGE-1',
  },
  {
    path: '/page2',
    name: 'PAGE-2',
    routes: [
      {
        path: '/page2/children1',
        name: 'PAGE2-CHILDREN1',
        component: '@/pages/page2/children1'
      },
      {
        path: '/page2/children2',
        name: 'PAGE2-CHILDREN2',
        component: '@/pages/page2/children2'
      },
      {
        path: '/page2/children3',
        name: 'PAGE2-CHILDREN3',
        component: '@/pages/page2/children3'
      },
    ]
  }
]