<template>
    <div id="account">
        <button class="account-button email">
            <router-link to="/login">
                <i class="iconfont icon-xinxi" title="通知" v-if="user != null"></i>
                <i v-else class="iconfont icon-logindenglu" title="去登陆" style="color: #FF1461"></i>
            </router-link>
        </button>
        <button class="account-button message">
            <router-link to="/login">
                <i class="iconfont icon-xiaoxi" title="发送消息" v-if="user != null"></i>
                <i v-else class="iconfont icon-zhuce" title="去注册" style="color: #5A86FF"></i>
            </router-link>
        </button>
        <div class="account-avatar">
            <router-link to="/login" v-if="user != null">
                <img :src="user.avator === null ? defaultAvatar : user.avator" alt="用户头像" :title="user.username === null ? '' : user.username">
            </router-link>
            <router-link to="/login" v-else>
                <span class="notice">你还没登陆</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Account",
        data() {
            return {
                defaultAvatar: require('../../assets/image/avatar.jpg')
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        }
    }
</script>

<style scoped>
    #account {
        display: flex;
        align-items: center;
        height: 60px;
        position: sticky;
        top: 0;
        background-color: var(--account-bg);
        z-index: 2;
        flex-shrink: 0;
    }
    .account-button {
        border: 0;
        background: 0;
        color: var(--account-color);
        padding: 0;
        cursor: pointer;
        position: relative;
        margin-left: 20px;
    }
    button {
        outline: none;
    }
    .iconfont {
        font-size: 20px;
        font-weight: 600;
    }
    .account-avatar {
        margin-left: auto;
    }
    .account-avatar img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin: 0 10px;
    }
    .notice {
        background: linear-gradient(to right, #5A86FF, #18FF92);
        -webkit-background-clip: text;
        color: transparent;
        margin-right: 10px;
    }
</style>