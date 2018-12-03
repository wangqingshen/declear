const moreRouter = [
	{
         path: '/more',
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
                title: ''
              },
         	},
         	{         
              path: 'register',
              name: 'register',
              component: ()=> import('@/pages/account/register'),
              meta: { 
                title: ''
              },
         	},
         	{         
              path: 'us',
              name: 'us',
              component: ()=> import('@/pages/more/us'),
              meta: { 
                title: ''
              },
         	},
        ]
    },
]
export default moreRouter
