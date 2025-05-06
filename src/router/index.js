import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [

        {
            path: '/404',
            component: () => import('@/views/404.vue'),
            hidden: true
        },
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            // 如果设置了 useTopNav = true ,则需要每个路由都设置 meta
            // meta: { title: '首页' },
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/dashboard/index.vue'),
                    meta: { title: '首页', icon: 'dashboard', affix: true }
                }
            ]
        },
        {
            path: '/workflow',
            component: Layout,
            redirect: '/index',
            children: [
                {
                    path: 'index',
                    name: 'workflow',
                    component: () => import('@/views/workflow/index.vue'),
                    meta: { title: '工作流', icon: 'dashboard' }
                }
            ]
        },
        {
            path: '/redirect',
            component: Layout,
            hidden: true,
            children: [
                {
                    path: '/redirect/:path(.*)',
                    component: () => import('@/views/redirect/index.vue')
                }
            ]
        },
        // 404 page must be placed at the end !!!
        { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
    ]
})

export default router
