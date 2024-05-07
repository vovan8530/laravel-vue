<template>
    <div>

        <RouterLink :to="{name: 'users.index'}">Users</RouterLink>
        <RouterLink :to="{name: 'posts.index'}">Posts</RouterLink>


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
