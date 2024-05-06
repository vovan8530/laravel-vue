<template>
    <div>
        <RouterLink :to="{name: 'users.index'}">Users</RouterLink>
        <RouterLink :to="{name: 'users.create'}">Add</RouterLink>
        <RouterView/>

    </div>
</template>

<style scoped>

</style>
<script>
export default {
    name: "Index"
}
</script>
