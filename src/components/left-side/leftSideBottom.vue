<template>
    <div class="leftside-bottom" @mouseover="over" @mouseout="out">
        <router-link to="/" class="follow-me" target="_blank" tag="a">
            <span class="follow-text">
                <i class="iconfont icon-GitHub" style="margin-right: 8px"></i>
                <span>Fork me on GitHub</span>
            </span>
            <span class="developer">
                <img src="../../assets/image/avatar.jpg"/>
                <span>sweetfun</span>
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "leftSideBottom",
        methods: {
            over() {
                document.getElementsByClassName("developer")[0].style.transform = 'translateY(51px)'
                document.getElementsByClassName("follow-text")[0].style.transform = 'translateY(51px)'
            },
            out() {
                document.getElementsByClassName("developer")[0].style.transform = 'translateY(-51px)'
                document.getElementsByClassName("follow-text")[0].style.transform = 'translateY(0px)'
            }
        }
    }
</script>

<style scoped>
    .leftside-bottom {
        margin-top: auto;
    }
    .follow-me {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 14px;
        overflow: hidden;
        color: #9c9cab;
        padding: 0 20px;
        height: 52px;
        border-top: 1px solid var(--sidebarBlock-border-color);
        position: relative;
    }
    .follow-me .follow-text {
        display: flex;
        align-items: center;
        transition: .3s;
    }
    .follow-me .developer {
        position: absolute;
        left: 0;
        top: -100%;
        display: flex;
        transition: .3s;
        padding: 0 20px;
        align-items: center;
        background-color: var(--sidebar-bg);
        width: 100%;
        height: 100%;
    }
    .follow-me .developer img {
        border-radius: 50%;
        width: 26px;
        height: 26px;
        -o-object-fit: cover;
        object-fit: cover;
        margin-right: 10px;
    }
</style>