const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'library-list',
				component: () => import('pages/LibraryList.vue'),
				meta: {withSidebar: true}
			},
			{path: 'library/:id', name: 'library', component: () => import('pages/Library.vue')}
		]
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
];

export default routes
