<template>
    <div class="editor-wrap">
        <div class="ui-input-textarea article-title" type="text">
            <textarea placeholder="请输入标题（建议30字以内）" maxlength style="overflow-y: hidden;height: 64px">

            </textarea>
            <span class="count">0/40</span>
        </div>
        <div class="editor-box">
            <mavon-editor :ishljs="true" codeStyle="tomorrow-night-eighties"/>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "editorWrap",
        components: {
            mavonEditor
        },
    }
</script>

<style scoped>
    .editor-wrap {
        overflow: hidden;
        position: relative;
    }
    .editor-wrap .article-title {
        width: 100%;
        margin-bottom: 18px;
        border: none;
        padding: 0;
        display: block;
    }
    .ui-input-textarea {
        position: relative;
        display: inline-block;
        transition: color .2s ease,background-color .2s ease,border-color .2s ease;
        border: 1px solid #ccd0d7;
        outline: 0;
        border-radius: 4px;
        overflow: hidden;
        padding: 7px 12px 35px;
        cursor: text;
    }
    .editor-wrap .article-title textarea {
        display: block;
        height: 64px;
        word-break: break-all;
    }
    .editor-wrap .article-title input, .editor-wrap .article-title textarea {
        border: 0;
        font-size: 28px;
        padding: 12px 50px 12px 0;
        font-weight: 700;
        line-height: 40px;
    }
    .ui-input-textarea textarea {
        width: 100%;
        height: 100%;
        font-size: 14px;
        line-height: 1.4;
        border: 0;
        background-color: transparent;
        outline: none;
        resize: none;
        text-align: justify;
    }
    .ui-input-textarea textarea::-webkit-input-placeholder { /* WebKit browsers */
        color: #ced2d6;
    }
    .ui-input-textarea textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #ced2d6;
    }
    .ui-input-textarea textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #ced2d6;
    }
    .ui-input-textarea textarea:-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #ced2d6;
    }
    .ui-input-textarea:focus {
        border-color: #00b5ef !important;
    }
    textarea {
        overflow: auto;
    }
    .editor-wrap .article-title .count {
        position: absolute;
        top: 50%;
        margin-top: -9px;
        right: 0;
        text-align: right;
        width: 40px;
        color: #99a2aa;
    }
    .ui-input-textarea .count {
        position: absolute;
        bottom: 7px;
        right: 20px;
        margin-left: -50px;
        text-align: right;
        width: 80px;
        color: #99a2aa;
    }
    .editor-box {
        background-color: #fff;
    }
</style>