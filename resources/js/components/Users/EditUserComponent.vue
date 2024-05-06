<template>

    <tr :class="this.$parent.isEdit(userData.id) ? '': 'd-none'">
        <th scope="row">{{ userData.id }}</th>
        <td><input type="text" v-model="name"></td>
        <td><input type="email" v-model="email"></td>
        <td>{{ userData.created_at }}</td>
        <td class=""><a class="btn btn-success" @click.prevent="updateUser(userData.id)">Update</a></td>
        <td class=""><a href="#" class="btn btn-danger" @click.prevent="this.$parent.deleteUser(userData.id)">Delete</a>
        </td>
    </tr>

</template>

<style scoped>

</style>

<script>


export default {

    name: "EditUserComponent",


    data() {
        return {
            name: '',
            email: ''
        }
    },

    props: [
        'userData'
    ],

    methods: {

        updateUser(id) {
            this.$parent.editUserId = null
            return axios.put(`api/users/${id}`, {
                name: this.name,
                email: this.email
            }).then(
                response => {
                    this.$parent.getUsers()
                }
            ).catch(error => {

            }).finally({})
        },


    },
    mounted() {

    }
}
</script>
