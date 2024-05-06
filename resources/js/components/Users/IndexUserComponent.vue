<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Created At</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="user in users">

                <ShowUserComponent :userData="user"></ShowUserComponent>
                <EditUserComponent :userData="user" :ref="`edit_${user.id}`"></EditUserComponent>

            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>

<script>

import EditUserComponent from "./EditUserComponent.vue";
import ShowUserComponent from "./ShowUserComponent.vue";


export default {

    name: "IndexUserComponent",


    data() {
        return {
            users: null,
            editUserId: null,
            name: '',
            email: ''
        }
    },

    methods: {
        getUsers() {
            return axios.get('api/users').then(
                response => {
                    this.users = response.data.data
                }
            ).catch(error => {

            }).finally({})
        },

        isEdit(id) {
            return this.editUserId === id
        },

    },
    mounted() {
        this.getUsers()
    },

    components: {
        EditUserComponent,
        ShowUserComponent
    }
}
</script>
