<template>
    <div class="card" style="width: 18rem;">
        <img src="https://laravel.com/assets/img/welcome/background.svg" class="card-img-top" alt="#">
        <div class="card-body" v-if="post">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
            <RouterLink :to="{name: 'posts.edit', params: {id: post.id}}">Edit</RouterLink>
        </div>
    </div>

</template>

<style scoped>

</style>

<script>
export default {

    name: "ShowPostComponent",

    mounted() {
        this.$store.dispatch('getPost', this.$route.params.id)
    },

    computed: {
        post() {
            return this.$store.getters.post
        }
    },

    components: {}
}
</script>
