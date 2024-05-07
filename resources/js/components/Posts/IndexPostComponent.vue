<template>

    <RouterLink :to="{name: 'posts.create'}">Add</RouterLink>

    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts">
                <th scope="row">{{ post.id }}</th>
                <td>
                    <RouterLink :to="{name: 'posts.edit', params: {id: post.id}}">{{ post.title }}</RouterLink>

                </td>
                <td>{{ post.description }}</td>
                <td>
                    <RouterLink class="btn btn-warning" :to="{name: 'posts.edit', params: {id: post.id}}">Edit
                    </RouterLink>
                </td>
                <td>
                    <a @click="$store.dispatch('destroyPost', post.id)" class="btn btn-outline-danger">Delete</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>

<script>


export default {

    name: "IndexPostComponent",

    mounted() {
        this.$store.dispatch('getPosts')
    },

    computed: {
        posts() {
            return this.$store.getters.posts
        }
    },

    components: {}
}
</script>
