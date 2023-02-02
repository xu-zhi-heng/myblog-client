<template>
    <div id="logo">
        <router-link to="/allBlogs">SweetFun</router-link>
    </div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>
    #logo {
        font-family: "DM Sans",sans-serif;
        font-size: 15px;
        color: var(--logo-color);
        font-weight: 600;
        text-align: center;
        height: 68px;
        line-height: 68px;
        letter-spacing: 4px;
        position: sticky;
        top: 0;
        background: var(--logo-bg);
    }
</style>