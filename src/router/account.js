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
                requireLogin: true
              },
         	},
         	{         
              path: 'register',
              name: 'register',
              component: ()=> import('@/pages/account/register'),
              meta: { 
                title: '',
                requireLogin: true
              },
         	},
         	{         
              path: 'about',
              name: 'about',
              component: ()=> import('@/pages/account/about'),
              meta: { 
                title: ''
              },
         	},
        ]
    },
]
export default accountRouter
