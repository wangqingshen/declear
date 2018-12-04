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
              component: ()=> import('@/pages/card/main'),
              meta: { 
                title: '排污许可证'
              },
         	},
         	{         
              path: 'firstApply',
              name: 'firstApply',
              component: ()=> import('@/pages/card/firstApply'),
              meta: { 
                title: '首次申请'
              },
         	},
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
