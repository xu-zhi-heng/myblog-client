<template>
    <div id="footer">
        Copyright © 2021 sweetFun<br/>
        <span id="poweredby">Powered by .NET 5.0 on Kubernetes</span>
    </div>
</template>

<script>
    export default {
        name: "Bottom"
    }
</script>

<style scoped>
    #footer {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--footer-bg);
        color: var(--footer-color);
        font-size: 13px;
    }
    #footer #poweredby {
        margin-left: 12px;
    }
</style>