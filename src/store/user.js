import { defineStore } from 'pinia'
import router from '@/router/index'
import path from 'path-browserify'

export default defineStore('user', {
    state: () => ({
        token: '',
        userInfo: {},
        authKey: [],
        permissionRoute: [],
        topNavActivePath: '',
        currentRouter: []
    }),
    actions: {
        async getUserInfo() {
            this.permissionRoute = router.options.routes
        },
        setTopNavActivePath(activePath) {
            this.topNavActivePath = activePath
            this.permissionRoute.map(v => {
                if (v.path == activePath) {
                    this.currentRouter = this.resetPath(JSON.parse(JSON.stringify(v.children)), path.resolve('/', v.path))
                }
            })
        },
        resetPath(routers, basePath) {
            const tags = []
            routers.forEach(r => {
                const newPath = path.resolve(basePath, r.path)
                tags.push({ ...r, path: newPath })

                if (r.children && r.children.length > 0) {
                    r.children = this.resetPath(r.children, newPath)
                }
            })
            return tags
        }
    },
    persist: {
        paths: ['token']
    }
})
