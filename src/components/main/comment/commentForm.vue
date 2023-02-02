<template>
    <div id="comment_form" class="commentform">
        <div id="comment_form_container" style="visibility: visible">
            <div id="commentform_title">
                <i class="iconfont icon-pinglun"></i>
                发表评论
            </div>
            <div class="commentbox_main comment_textarea">
                <mavon-editor defaultOpen="edit" :ishljs="true" :subfield="false" :toolbars="toolbars" :boxShadow="false" placeholder="编写评论..." ref="commentsContent" v-model="value"/>
            </div>
            <p id="commentbox_opt">
                <el-button type="primary" size="small" id="btn_comment_submit" class="comment_btn" title="提交评论(Ctrl + Enter)" @click="saveComment">提交评论</el-button>
                <span id="span_comment_canceledit" style="display: none">
                    <span>不改了</span>
                </span>
            </p>
            <p>[Ctrl+Enter快捷键提交]</p>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import {markdown} from "../../../utils/markdown";
    import {saveUserComments} from "../../../api/comments";
    import {mapGetters} from 'vuex'
    import {watchRoute} from "../../../mixins/watchRoute";
    export default {
        name: "commentForm",
        mixins: [watchRoute],
        data() {
            return {
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    // fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    // htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    // save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    // navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    // preview: true, // 预览
                },
                value: '',
                img_file: {}        // 一次上传多张图片
            }
        },
        methods: {
            saveComment() {
                let htmlCode = this.$refs.commentsContent.d_render          // <p>123132</p>
                let markdownCode = this.$refs.commentsContent.d_value       //  123132
                if(htmlCode.length === 0 || markdownCode.length === 0){
                    this.$message.warning("请填写评论内容")
                    return;
                }
                if(this.user == null) {
                    this.$message.warning("您还没有登陆")
                    return;
                }
                let contentId = this.$route.query.contentId
                let userId = this.user.userId
                saveUserComments(
                    {
                        blogIntroductionId: contentId,
                        userId: userId,
                        commentContent: markdownCode
                    }
                ).then(res => {
                    if(res.code == 1) {
                        this.$message.success(res.msg)
                        this.getUserComments()
                        this.value = ""
                    }else {
                        this.$message.error(res.msg)
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        components: {
            mavonEditor
        },
    }
</script>

<style scoped>
    #comment_form {
        padding: 32px 16px 0;
        background-color: var(--form-bg);
        overflow: hidden;
    }
    #comment_form #comment_form_container {
        position: relative;
        border: 1px solid var(--form-border-color);
        border-radius: 4px;
    }
    #comment_form #comment_form_container #commentform_title {
        background: none;
        margin-bottom: 0;
        padding: 7.56px 10.8px;
        border-bottom: 1px solid var(--form-border-color);
        background-color: var(--formTitle-bg);
        border-radius: 2px 2px 0 0;
        font-size: 12px;
        font-weight: 700;
        display: flex;
        align-items: center;
    }
    #comment_form #comment_form_container #commentform_title .iconfont {
        margin-right: 8px;
    }
    #comment_form #comment_form_container .comment_textarea {
        width: 100%;
        border-color: var(--text-9);
        background: none;
        border: none;
    }
    .comment_textarea {
        padding: 8px 14px;
        background-color: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #ddd;
        width: 600px;
        max-width: 100%;
        border-radius: 3px;
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        margin-bottom: 10px;
    }
    .comment_preview p, div.commentform p {
        margin-top: 25px;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 10px;
    }
    #comment_form #comment_form_container #commentbox_opt #btn_comment_submit {
        z-index: 1510;
        position: absolute;
        bottom: 10.8px;
        right: 10.8px;
        width: 75.6px;
        height: 32px;
        padding: 4px 12px;
        background-color: var(--themeColor);
        outline: none;
        border: 1px solid var(--themeColor);
        box-shadow: 0 2px 4px var(--theme-primary-4);
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        box-sizing: border-box;
        white-space: nowrap;
    }
    #commentbox_opt span {
        padding-left: 7px;
    }
    input[type=button] {
        -webkit-appearance: button;
    }
    .comment_btn {
        height: 26px;
        width: 68px;
        margin: 0;
        padding: 0;
        line-height: 22px;
    }
    #comment_form #comment_form_container>p:last-of-type {
        color: var(--formDesc-color);
        margin-left: 10.8px;
        font-size: 14px;
    }
    /deep/ .markdown-body {
        border-bottom: 1px dashed var(--form-border-color);
    }
</style>