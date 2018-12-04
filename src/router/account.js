const accountRouter = [
	{
         path: '/account',
         component: ()=> import('@/pages/account/index'),
         meta:{
            title: '个人中心'
        },
        children: [
            {         
              path: '/',
              name: 'login',
              component: ()=> import('@/pages/account/login'),
              meta: { 
                title: '',
                requireLogin: true,
                title: '登录'
              },
         	},
         	{         
              path: 'register',
              name: 'register',
              component: ()=> import('@/pages/account/register'),
              meta: { 
                title: '',
                requireLogin: true,
                title: '注册'
              },
         	},
         	{         
              path: 'about',
              name: 'about',
              component: ()=> import('@/pages/account/about'),
              meta: { 
                title: '青溪介绍'
              },
         	},
        ]
    },
]
export default accountRouter
