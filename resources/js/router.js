import { createRouter, createWebHistory } from "vue-router";



const routes = [
    // { path: '/', component: () => import('./components/Index.vue') },

    // {path: '/users', component: () => import('./components/Users/UserComponent.vue'), name: 'users'},
    {path: '/users', component: () => import('./components/Users/IndexUserComponent.vue'), name: 'users.index' },
    {path: '/users/create', component: () => import('./components/Users/CreateUserComponent.vue'), name: 'users.create' },

    {path: '/posts', component: () => import('./components/Posts/IndexPostComponent.vue'), name: 'posts.index'},
    {path: '/posts/create', component: () => import('./components/Posts/CreatePostComponent.vue'), name: 'posts.create'},
    {path: '/posts/:id/edit', component: () => import('./components/Posts/EditPostComponent.vue'), name: 'posts.edit'},
    {path: '/posts/:id', component: () => import('./components/Posts/ShowPostComponent.vue'), name: 'posts.show'},


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
