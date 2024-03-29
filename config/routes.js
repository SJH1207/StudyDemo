export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/danji',
    name: 'danji',
    component: './DanJi',
  },
  {
    path: '/fengkelian',
    name: 'fengkelian',
    component: './FengKeLian',
  },
  {
    path: '/sangong',
    name: 'sangong',
    component: './SanGong',
  },
  {
    path: '/sanshangyouya',
    name: 'sanshangyouya',
    component: './SanShangYouYa',
  },
  {
    path: '/qiaobenyoucai',
    name: 'qiaobenyoucai',
    component: './QiaoBenYouCai',
  },


  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
