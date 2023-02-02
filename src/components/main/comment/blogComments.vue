<template>
    <div id="blog-comments-placeholder">
        <div class="feedback_area_title">
            <i class="iconfont icon-icon--"></i>
            评论列表
        </div>
        <div class="feedbackItem" v-for="(item,index) in BlogComments" :key="item.id">
            <div class="feedbackListSubtitle">
                <div class="feedbackManage">
                    <div class="comment_actions">
                        <span>修改</span>
                        <span @click="deleteComment(item.userId,item.id)">删除</span>
                    </div>
                </div>
                <span class="layer">#{{index + 1}}楼</span>
                <span class="comment_date">{{item.createTime}}</span>
                <span class="user_name">{{item.userName}}</span>
                <div class="comment_vote">
                    <span class="comment_error" style="color: red;display: none">不能推荐自己的内容</span>
                    <span class="comment_digg">支持({{item.supportNum}})</span>
                    <span class="comment_burry">反对({{item.againstNum}})</span>
                </div>
            </div>
            <div class="feedbackCon">
                <div class="custom-comment-avatar">
                    <img :src="item.userAvator" class="avatar" alt="用户的头像" v-if="item.userAvator" :class="{isMyself: isMyself(item.userId)}"/>
                    <img src="../../../../src/assets/image/avatar.jpg" class="avatar" alt="默认头像" v-else/>
                </div>
                <div data-format-type="MarkDown" class="blog_comment_body cnblogs-markdown">
                    <p>{{item.commentContent}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {deleteCommentByUserId} from "../../../api/comments";
    import {watchRoute} from "../../../mixins/watchRoute";

    export default {
        name: "blogComments",
        mixins: [watchRoute],
        methods: {
            deleteComment(userId,id) {
                if(this.user == null) {
                    this.$message.warning("您还没有登陆")
                    return
                }
                if(this.user.userId !== userId) {
                    this.$message.warning("您只能删除自己的评论内容😀")
                    return
                }
                deleteCommentByUserId(id).then(res => {
                    console.log(res)
                    if(res.code === 1) {
                        this.$message.success(res.msg)
                        this.getUserComments()
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
                'BlogComments',
                'user'
            ]),
            isMyself() {
                return function (userId) {
                    if(this.user != null && this.user.userId === userId) {
                        return true
                    }else {
                        return false
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #blog-comments-placeholder {
        border-radius: 4px;
        padding: 0 16px;
        background-color: var(--form-bg);
        overflow: hidden;
    }
    #blog-comments-placeholder .feedback_area_title {
        padding: 7.56px 10.8px;
        border: 1px solid var(--form-border-color);
        background-color: var(--formTitle-bg);
        border-radius: 2px 2px 0 0;
        font-size: 12px;
        font-weight: 700;
        display: flex;
        align-items: center;
    }
    .feedback_area_title .iconfont {
        margin-right: 8px;
    }
    #blog-comments-placeholder .feedbackItem {
        border-left: 1px solid var(--form-border-color);
        border-bottom: 1px solid var(--form-border-color);
        border-right: 1px solid var(--form-border-color);
        padding: 17.982px 10.8px;
    }
    .feedbackListSubtitle {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 5px;
        font-size: 0;
        color: var(--sidebarTitle-color);
    }
    .feedbackListSubtitle .feedbackManage {
        order: 3;
        font-size: 14px;
    }
    .feedbackListSubtitle .feedbackManage .comment_actions {
        border-bottom: 1px solid #3273dc;
        margin-left: 10px;
    }
    .comment_actions span {
        padding-right: 10px;
        cursor: pointer;
    }
    .comment_actions span:last-child {
        padding: 0;
    }
    #blog-comments-placeholder .layer {
        padding: 0 5.4px;
        background-color: var(--layer-bg);
        color: var(--layer-color);
        font-weight: 700;
        border-radius: 4px;
        margin-right: 5.4px;
        order: 0;
        font-size: 12px;
    }
    #blog-comments-placeholder .comment_date {
        margin: 0 5.4px;
        order: 2;
        font-size: 14px;
    }
    #blog-comments-placeholder .user_name {
        margin-left: 8px;
        color: #00a1d6;
        order: 1;
        font-size: 14px;
    }
    .feedbackListSubtitle .comment_vote {
        order: 4;
        font-size: 14px;
    }
    .comment_vote {
        text-align: right;
    }
    .feedbackListSubtitle .comment_vote span {
        padding-left: 8px;
    }
    .comment_vote span {
        text-decoration: none !important;
        padding-left: 10px;
    }
    .feedbackCon {
        display: flex;
        align-items: center;
        margin-top: 5px;
        align-items: flex-start;
    }
    .custom-comment-avatar {
        position: relative;
    }
    .feedbackCon .avatar {
        border-radius: 50%;
        transform: scale(0.8);
    }
    .custom-comment-avatar img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .cnblogs-markdown {
        word-break: break-word;
        line-height: 1.75;
        font-weight: 400;
        font-size: 15px;
    }
    .feedbackCon .blog_comment_body {
        position: relative;
        margin: 16px 0 0 10px;
        max-width: 72%;
        border-radius: 4px;
        color: var(--commonBody-color);
        font-size: 14px;
        line-height: 1.6;
        padding: 5.4px 10.8px;
        background-color: var(--commonBody-bg);
        box-shadow: 0 4px 8px rgba(0 0 0 / 20%);
    }
    .blog_comment_body {
        word-wrap: break-word;
        overflow-wrap: break-word;
    }
    .feedbackCon .blog_comment_body:before {
        content: "";
        display: block;
        position: absolute;
        left: -24.84px;
        top: 5.4px;
        width: 12.258px;
        height: 0;
        border-right: solid 12.96px var(--commonBody-bg);
        border-top: solid 3.24px rgba(0,0,0,0);
        border-bottom: solid 7.182px rgba(0,0,0,0);
    }
    #mainContent #blog-comments-placeholder blockquote, #mainContent #blog-comments-placeholder p {
        margin: 4px 0;
    }
    #cnblogs_post_body.blogpost-body-html p, #mainContent .cnblogs-markdown p {
        margin: 22px 0;
        line-height: inherit;
    }

    .isMyself {
        border: 2px solid #00bcd4;
    }
</style>