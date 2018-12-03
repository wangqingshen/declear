const categoryRouter = [
	{
        path: '/category',
        component: ()=> import('@/pages/category/index'),
        children: [
            {         
              path: ':secondTitle',
              name: 'category',
              component: ()=> import('@/pages/category/main')
         	}
        ]
    },
]
export default categoryRouter
