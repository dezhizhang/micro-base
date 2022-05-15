
export default [

  {
    path: '/welcome',
    name: 'welcome',
    MicroApp: 'micro-sales',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
