
const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/welcome.vue') },
            { path: 'welcome', component: () => import('pages/welcome.vue') },
            { path: 'test', component: () => import('pages/test.vue') },
            // { path: 'serial', component: () => import('pages/serial_minimal.vue') },
            { path: 'about', component: () => import('pages/about.vue') }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes
