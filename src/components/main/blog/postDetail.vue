<template>
    <div id="post_detail">
        <div id="topics">
            <div id="post">
                <post-message/>                                                                     <!--博客消息（点赞，浏览等等）-->
                <h1 class="postTitle" v-if="BlogContent !== null">{{isExercise ? BlogContent.name : BlogContent.title}}</h1>    <!--博客标题-->
                <post-body/>                                                                        <!--显示博客详细内容-->
                <blog-comments/>                                                                    <!--用户评论博客的信息-->
                <comment-form/>                                                                     <!--评论框-->
            </div>
        </div>
    </div>
</template>

<script>
    import PostMessage from "./postMessage";
    import PostBody from "./postBody";
    import BlogComments from "../comment/blogComments";
    import CommentForm from "../comment/commentForm";
    import {mapGetters} from 'vuex'
    export default {
        name: "postDetail",
        components: {CommentForm, BlogComments, PostBody, PostMessage},
        computed: {
            ...mapGetters([
                'BlogContent',
                'isExercise'
            ]),
        }
    }
</script>

<style scoped>
    #post_detail {
        margin-top: 20px;
        padding: 16px;
        border-radius: 4px;
        background-color: var(--form-bg);
        overflow: hidden;
        animation: content-in .5s ease-in 0s;
    }
    @keyframes content-in {
        from {
            transform: translateY(300px);
        }
        to {
            transform: translateY(0px);
        }
    }
    #post .postTitle {
        font-size: 30px;
    }
</style>