<template>
    <!--文章博客-->
    <div class="postBody" v-if='!isExercise && BlogContent != null'>
        <div id="cnblogs_post_body" class="blogpost-body cnblogs-markdown">
            <mavon-editor defaultOpen="preview" :toolbarsFlag="false" :ishljs="true" :subfield="false" v-model="content" :codeStyle="codeStyle" :navigation="true"/>
        </div>
    </div>

    <!--算法博客-->
    <div class="postBody" v-else>
        <div id="exercise_body">
            <exercise-page/>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import {markdown} from "../../../utils/markdown";
    import ClipboardJS from 'clipboard'
    import {mapGetters} from "vuex";
    import exercisePage from "./exercisePage";
    import $ from 'jquery'
    export default {
        name: "postBody",
        data() {
            return {
                content: '',
                codeStyle: ''
            }
        },
        computed: {
            ...mapGetters([
                'cataLog',
                'BlogContent',
                'isExercise'
            ])
        },
        components: {
            mavonEditor,
            exercisePage
        },
        mounted() {
            this.content = markdown(mavonEditor,this.BlogContent.content)
            // 生成目录
            this.$nextTick(() => {
                const aArr = $(
                    ".v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content a"
                ).toArray();
                let toc = [];
                aArr.forEach((item) => {
                    let href = $(item).attr("id");
                    let tag = $(item).parent()[0].tagName
                    let name = $(item).parent().text();
                    if (href) { // 这里判断是因为我们只需要有id的内容，没有id的则过滤掉。
                        toc.push({
                            href: "#" + href,
                            name,
                            tag: tag
                        });
                    }
                });
                this.$store.commit('setCataLog',toc)
            });
            // 对应的主题对应的代码高亮
            let theme = document.getElementsByTagName("html")[0].getAttribute('theme')
            if(theme == 'dark') {
                this.codeStyle = 'far'
            }else {
                this.codeStyle = 'tomorrow-night-eighties'
            }
            // 复制成功失败的提示
            this.$nextTick(() => {
                let clipboard = new ClipboardJS(".copy-btn");
                clipboard.on("success", () => {
                    this.$message({
                        showClose: true,
                        message: '复制成功',
                        type: 'success'
                    });
                });
                clipboard.on("error", () => {
                    this.$message({
                        showClose: true,
                        message: '复制失败',
                        type: 'error'
                    });
                });
            });
        }
    }
</script>

<style scoped>
    .postBody {
        margin-top: 45px;
    }
    #cnblogs_post_body {
        margin-bottom: 20px;
    }
    #exercise_body {
        margin-bottom: 20px;
    }

    /deep/ .v-note-wrapper {
        background-color: var(--profileMenu-bg) !important;
    }
    /deep/ .v-show-content {
        background-color: var(--profileMenu-bg) !important;
    }
    /deep/ .markdown-body {
        color: var(--body-color);
        font-family: UbuntuMono,"Varela Round","PingFang SC","Microsoft YaHei",Helvetica,Arial,Menlo,Monaco,monospace,sans-serif;
        word-break: break-word !important;
        line-height: 1.75 !important;
        font-weight: 400 !important;
        font-size: 15px !important;
    }
    /deep/ .v-note-navigation-wrapper {
        display: none !important;
    }
    /deep/ .hljs {
        color: var(--md-blockquote-color) !important;
    }
</style>