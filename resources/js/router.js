import { createMemoryHistory, createRouter } from 'vue-router'



const routes = [
    { path: '/users', component: () => import('./components/Users/IndexUserComponent.vue'), name: 'users.index' },
    { path: '/users/create', component: import('./components/Users/CreateUserComponent.vue'), name: 'users.create' },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
