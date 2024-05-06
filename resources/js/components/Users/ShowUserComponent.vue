<template>

    <tr :class="this.$parent.isEdit(userData.id) ? 'd-none': ''">
        <th scope="row">{{ userData.id }}</th>
        <td>{{ userData.name }}</td>
        <td>{{ userData.email }}</td>
        <td>{{ userData.created_at }}</td>
        <td><a href="#" class="btn btn-warning"
               @click.prevent="changeEditUserId(userData.id, userData.name, userData.email)">Edit</a></td>
        <td><a href="#" class="btn btn-danger" @click.prevent="deleteUser(userData.id)">Delete</a></td>
    </tr>

</template>

<style scoped>

</style>

<script>


export default {

    name: "ShowUserComponent",


    data() {
        return {}
    },

    props: [
        'userData'
    ],

    methods: {

        changeEditUserId(id, name, email) {
            this.$parent.editUserId = id
            let editName = `edit_${id}`
            let fullName = this.$parent.$refs[editName][0]
            fullName.name = name
            fullName.email = email
        },

        deleteUser(id) {
            return axios.delete(`api/users/${id}`).then(
                response => {
                    this.$parent.getUsers()
                }
            )
        }

    },
    mounted() {

    },

    components: {}
}
</script>
