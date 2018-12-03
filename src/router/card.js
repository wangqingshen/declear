const cardRouter = [
	{
         path: '/card',
         component: ()=> import('@/pages/card/index'),
         meta:{
            title: '排污许可证'
        },
        children: [
            {         
              path: '/',
              name: 'cardIndex',
              component: ()=> import('@/pages/card/main')
         	},
         	{         
              path: 'firstApply',
              name: 'firstApply',
              component: ()=> import('@/pages/card/firstApply')
         	}
         	// {         
          //     path: 'us',
          //     name: 'us',
          //     component: ()=> import('@/pages/more/us'),
          //     meta: { 
          //       title: ''
          //     },
         	// },
        ]
    },
]
export default cardRouter
