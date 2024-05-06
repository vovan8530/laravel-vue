<template>

    <StoreUserComponent ref="store"></StoreUserComponent>
    <IndexUserComponent ref="index"></IndexUserComponent>

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
