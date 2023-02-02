<template>
    <div id="profile">
        <div class="profile-banner">
            <div class="profile-signature">
                <div class="custom-signature">
                    <span ref="word" class="word"></span>
                </div>
            </div>
        </div>
        <div class="profile-menu">
            <router-link target="_blank" to="/">收藏</router-link>
            <router-link target="_blank" to="/">闪存</router-link>
            <router-link target="_blank" to="/">小组</router-link>
            <router-link target="_blank" to="/">博问</router-link>
        </div>
        <div class="profile-blur"></div>
        <div class="profile-avatar">
            <span>
                <img src="../../../assets/image/avatar.jpg" alt="头像">
            </span>
        </div>
        <div class="profile-msg">
            <p>
                <span class="profile-nickname">sweetFun</span>
                <button class="profile-followstate">点赞</button>
            </p>
            <p>
                <span class="profile-age">
                    年龄：21岁
                </span>
                <span class="profile-followers">
                    性别：男
                </span>
                <span class="profile-followers">
                    爱好：敲代码
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    import Typed from 'typed.js'
    export default {
        name: "profile",
        data() {
            return {
                options: {
                    strings: ["My name is <b style='color: #23ceb0;'>SweetFun.</b>","It's <b style='color: #FFE066;'>nice</b> to <b style='color: #F4A261;'>meet</b> you.🍺",],
                    typeSpeed: 50
                }
            }
        },
        methods: {

        },
        mounted() {
            let typed = new Typed(".word", this.options);
        }
    }
</script>

<style scoped>
    #profile {
        position: relative;
        display: flex;
        flex-direction: column;
        z-index: 1;
    }
    .profile-banner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border-radius: 4px 4px 0 0;
        background-image: url('../../../assets/image/JZEhl3qcx6eID5N.jpg');
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }
    .profile-banner .profile-signature {
        position: relative;
        max-width: 60%;
        bottom: 24px;
        text-align: center;
        white-space: nowrap;
        font-size: 16px;
        color: #fff;
        text-shadow: 0 0 3px #151728;
        z-index: 2;
    }
    .custom-signature {
        padding: 1rem 14px;
        font-size: 1rem;
        line-height: 1.5rem;
    }
    .profile-menu {
        display: flex;
        padding-left: 185px;
        background:var(--profileMenu-bg);
        border-radius: 0 0 4px 4px;
    }
    .profile-menu a {
        padding: 12px 16px;
        color: var(--color-profile-links);
        cursor: pointer;
        font-size: 14px;
    }
    .profile-menu a:hover{
        color: #1b86f9;
        background-color:  var(--color-catalog-border);
        transition: all 0.3s;
        font-weight: 500;
    }
    .profile-blur {
        background-image: url('../../../assets/image/JZEhl3qcx6eID5N.jpg');
        position: absolute;
        left: 0;
        top: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: .9;
        z-index: -1;
        filter: blur(50px);
    }
    .profile-avatar {
        position: absolute;
        align-items: center;
        display: flex;
        z-index: 1;
        bottom: 16px;
        left: 24px;
    }
    .profile-avatar img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        -o-object-fit: cover;
        object-fit: cover;
        border: 3px solid rgb(240 239 239);
    }
    .profile-msg {
        position: absolute;
        left: 200px;
        bottom: 80px;
        z-index: 1;
    }
    .profile-msg p:nth-child(1) {
        font-size: 22px;
        color: #fff;
        font-weight: 600;
        font-family: "DM Sans",sans-serif;
        text-shadow: 0 0 3px #151728;
    }
    .profile-msg p:nth-child(2) {
        margin-top: 5px;
        font-size: 13px;
        color: #fff;
        text-shadow: 0 0 3px #151728;
    }
    .profile-msg p {
        display: flex;
        align-items: center;
    }
    .profile-msg p span {
        cursor: pointer;
        color: inherit;
    }
    .profile-msg p button {
        margin-left: 10px;
        background-color: #ffc312;
        border: none;
        color: #fff;
        border-radius: 4px;
        padding: 3px 7px;
        box-shadow: 0 0 3px #ffc312;
        cursor: pointer;
    }
    button {
        outline: none;
    }
    .profile-msg p:nth-child(2) a, .profile-msg p:nth-child(2) span {
        margin-right: 16px;
    }
</style>