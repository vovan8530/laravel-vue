<template>

    <RouterLink :to="{name: 'users.index'}">Users all</RouterLink>
    <RouterLink :to="{name: 'users.create'}">Add</RouterLink>


</template>

<style scoped>

</style>

<script>

import CreateUserComponent from "./CreateUserComponent.vue";
import IndexUserComponent from "./IndexUserComponent.vue";

export default {

    name: "UserComponent",

    data() {
        return {}
    },

    methods: {},
    mounted() {

    },
    components: {
        CreateUserComponent,
        IndexUserComponent
    },
}
</script>
