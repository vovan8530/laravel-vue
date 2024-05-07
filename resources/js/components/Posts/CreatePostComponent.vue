<template>
    <div class="w-50">
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input v-model="title" type="text" class="form-control" placeholder="title">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Description</label>
            <input v-model="description" type="text" class="form-control" placeholder="text">
        </div>
        <button :disabled="!isDisabled" @click="$store.dispatch('storePost', {title, description})" class="btn btn-primary">Create</button>
    </div>
</template>

<style scoped>

</style>

<script>

export default {

    name: "CreatePostComponent",

    data() {
        return {
            title: null,
            description: null,
        }
    },

    computed: {
        isDisabled() {
            return this.title && this.description
        }
    },

    components: {}
}
</script>
