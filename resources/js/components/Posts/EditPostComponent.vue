<template>
    <div class="w-50" v-if="post">
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input v-model="post.title" type="text" class="form-control" placeholder="title">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Description</label>
            <textarea v-model="post.description" class="form-control" placeholder="text">{{post.description}}</textarea>
        </div>
        <button :disabled="!isDisabled" @click.prevent="$store.dispatch('updatePost', {id: post.id, title: post.title, description: post.description})" class="btn btn-primary">Update</button>
    </div>
</template>

<style scoped>

</style>

<script>


export default {

    name: "EditPostComponent",


    computed: {
        isDisabled() {
            return this.post.title && this.post.description
        },
        post() {
            return this.$store.getters.post
        }
    },

    mounted() {
        this.$store.dispatch('getPost', this.$route.params.id)
    },

    components: {}
}
</script>
