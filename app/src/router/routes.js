
const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/welcome.vue') },
            { path: 'welcome', component: () => import('pages/welcome.vue') },
            { path: 'dev', component: () => import('pages/dev.vue') },
            { path: 'select_package', component: () => import('pages/select_package.vue') },
            { path: 'select_plants', component: () => import('pages/select_plants.vue') },
            { path: 'select_place', component: () => import('pages/select_place.vue') },
            { path: 'save_entry', component: () => import('pages/save_entry.vue') },
            { path: 'about', component: () => import('pages/about.vue') }
        ]
    },
    {
        path: '/dev/',
        component: () => import('layouts/DevLayout.vue'),
        children: [
            { path: '', component: () => import('pages/welcome.vue') },
            { path: 'welcome', component: () => import('pages/welcome.vue') },
            { path: 'dev', component: () => import('pages/dev.vue') },
            { path: 'select_package', component: () => import('pages/select_package.vue') },
            { path: 'select_plants', component: () => import('pages/select_plants.vue') },
            { path: 'select_place', component: () => import('pages/select_place.vue') },
            { path: 'save_entry', component: () => import('pages/save_entry.vue') },
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
