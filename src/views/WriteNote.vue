<template>
    <div id="WriteNote">
        <div class="content-warp">
            <Loading/>
            <div id="edit-page">
                <div class="original-editor-wrap">
                    <div class="block-wrap">
                        <editor-wrap/>
                    </div>
                    <hr class="block-hr"/>
                    <div class="block-wrap">
                        <choose-categories/>
                    </div>
                    <div class="block-wrap">
                        <choose-tags/>
                    </div>
                    <div class="block-wrap">
                        <choose-image/>
                    </div>
                    <div class="btn-group main-active-btn">
                        <button class="ui-btn blue-radius">
                            <span>提交博客</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '../components/writeNote/Loading'
    import editorWrap from '../components/writeNote/editorWrap'
    import ChooseCategories from "../components/writeNote/chooseCategories";
    import ChooseTags from "../components/writeNote/chooseTags";
    import ChooseImage from "../components/writeNote/chooseImage";
    export default {
        name: "WriteNote",
        mounted() {

        },
        components: {
            ChooseImage,
            ChooseTags,
            ChooseCategories,
            Loading,
            editorWrap
        },
    }
</script>

<style scoped>
    #WriteNote {
        background: linear-gradient(
        135deg,
        hsl(170deg,80%,70%),
        hsl(190deg,80%,70%),
        hsl(250deg,80%,70%),
        hsl(320deg,80%,70%)
        );
        animation: gradient-move 2s infinite ease-in-out;
        background-size: 200% 200%;
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        color: #2c3e50;
        font: 12px/1.5 Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    @keyframes gradient-move {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
    .content-warp {
        min-height: 100%;
        margin: 0 auto;
        width: 740px;
        position: relative;
        opacity: 0.7;
        backdrop-filter: blur(3px);
        box-shadow: 2px 2px 10px rgba(0,0,0,.2);
    }
    #edit-page {
        background: #fff;
        border-radius: 4px;
        padding: 0 40px;
        margin: 0;
        color: #222;
    }
    .original-editor-wrap {
        border: 1px solid #e5e9ef;
        border-radius: 4px;
        padding: 0 40px 20px;
        margin: 0 -40px;
    }
    #edit-page .block-wrap {
        margin-top: 30px;
    }
    #edit-page .block-hr {
        margin: 0 -30px;
        border: 0;
        border-top: 1px solid #f1f3f7;
    }
    #edit-page .btn-group.main-active-btn {
        margin: 80px 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn-group {
        text-align: center;
        margin: 10px 0;
    }
    .btn-group {
        text-align: center;
        margin: 10px 0;
    }
    #edit-page .btn-group.main-active-btn a, #edit-page .btn-group.main-active-btn button {
        width: 140px;
        height: 42px;
        line-height: 42px;
        border-radius: 50px;
        margin: 0 35px 0 5px;
        padding: 0;
    }
    .ui-btn.blue-radius {
        background-color: #37c8f7;
        border: 0;
        color: #fff;
        border-radius: 16px;
        height: 32px;
        line-height: 32px;
        padding: 0 15px;
    }
    .ui-btn.blue-radius {
        background-color: #37c8f7;
        border: 0;
        color: #fff;
        border-radius: 16px;
        height: 32px;
        line-height: 32px;
        padding: 0 15px;
    }
    .btn-group button {
        display: inline-block;
        margin: 0 10px;
    }
    .btn-group button {
        display: inline-block;
        margin: 0 10px;
    }
    .ui-btn {
        display: block;
        font-size: 14px;
        height: 32px;
        padding: 0 30px;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
        border: 1px solid transparent;
        transition: color .2s ease,background-color .2s ease,border-color .2s ease;
    }
    [type=reset], [type=submit], button, html [type=button] {
        -webkit-appearance: button;
    }
    button, select {
        text-transform: none;
    }
    button, input {
        overflow: visible;
    }
    .ui-btn i, .ui-btn span {
        vertical-align: middle;
    }
</style>