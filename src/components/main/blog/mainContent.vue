<template>
    <div id="mainContent">
        <profile/>      <!--个人信息-->
        <for-flow/>     <!--博客内容-->
    </div>
</template>

<script>
    import Profile from "../other/profile";
    import ForFlow from "./forFlow";
    export default {
        name: "mainContent",
        components: {ForFlow, Profile}
    }
</script>

<style scoped>
    #mainContent {
        position: relative;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 40vh 1fr;
        padding: 20px;
        background-color: var(--mainContent-bg);
        overflow: auto;
    }
</style>