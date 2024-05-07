<template>
    <div class="w-50">
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="name" type="text" class="form-control" placeholder="name">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" placeholder="email">
        </div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="password">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button @click="storeUser" class="btn btn-primary">Submit</button>
    </div>
</template>

<style scoped>

</style>

<script>

import router from "../../router.js";

export default {

    name: "StoreUserComponent",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            obj: {
                color: 'yellow',
                number: 10,
                isPublished: false
            }
        }
    },

    methods: {
        storeUser() {
            return axios.post('api/users', {
                name: this.name,
                email: this.email,
                password: this.password
            }).then(
                response => {
                router.push({name: 'users.index'})
                }
            ).catch(error => {

            }).finally({})
        }
    },

    components: {

    }
}
</script>
