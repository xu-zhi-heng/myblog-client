<template>
    <div class="loading" style="display: none">
        <i class="waiting"></i>
        <p>玩儿命加载中</p>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>
    .loading {
        text-align: center;
        height: calc(100% - 154px);
        padding: 100px 10px 10px;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
    }
    .loading i.waiting {
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 50px auto;
        animation: rotate .8s infinite linear;
        border: 3px solid #00bcd4;
        border-right-color: transparent;
    }
    .loading p {
        font-size: 16px;
    }
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>