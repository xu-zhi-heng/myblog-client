<template>
    <div id="leftcontentcontainer">
        <div class="blog-sidecolumn">
            <div class="sidebar-block" id="sidebar_shortcut">
                <div class="catListLink">
                    <h3 class="catListTitle">
                        我的博客
                    </h3>
                    <ul>
                        <li>
                            <router-link to="/">笔记</router-link>
                        </li>
                        <li>
                            <router-link to="/">旅游</router-link>
                        </li>
                        <li>
                            <router-link to="/">图片</router-link>
                        </li>
                        <li>
                            <router-link to="/">美食</router-link>
                        </li>
                        <li>
                            <router-link to="/">电影</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="sidebar_toptags" class="sidebar-block">
                <div class="catListTag">
                    <h3 class="catListTitle">算法</h3>
                    <ul>
                        <li>
                            <router-link to="/">LeetCode</router-link>
                        </li>
                        <li>
                            <router-link to="/">牛客网</router-link>
                        </li>
                        <li>
                            <router-link to="/">蓝桥网</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="sidebar_categories">
                <div id="sidebar_postcategory" class="catListPostCategory sidebar-block">
                    <h3 class="catListTitle">
                        前端小案例
                    </h3>
                    <ul>
                        <li data-category-list-item-visible="true" style="display: block">
                            <router-link to="/">CSS</router-link>
                        </li>
                        <li data-category-list-item-visible="true" style="display: block">
                            <router-link to="/">JavaScript</router-link>
                        </li>
                        <li data-category-list-item-visible="true" style="display: block">
                            <router-link to="/">Vue</router-link>
                        </li>
                        <li data-category-list-item-visible="true" style="display: block">
                            <router-link to="/">React</router-link>
                        </li>
                    </ul>
                </div>
                <div id="sidebar_postarchive" class="sidebar-block catListPostArchive">
                    <h3 class="catListTitle">
                        随笔档案
                    </h3>
                    <ul>
                        <li data-category-list-item-visible="true" style="display: block">
                            <router-link to="/">
                                2021年7月5日
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="sidebar_recentcomments" class="sidebar-block">
                <div class="catListComment">
                    <h3 class="catListTitle">最新评论</h3>
                    <div class="RecentCommentBlock">
                        <ul>
                            <li class="recent_comment_title">
                                <router-link to="/">1.Vue学习</router-link>
                            </li>
                            <li class="recent_comment_body">
                                <p>Welcome 🥤</p>
                            </li>
                            <li class="recent_comment_author">
                                --sweetfun
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="sidebar_topviewedposts" class="sidebar-block">
                <div class="catListView">
                    <h3 class="catListTitle">阅读排行榜</h3>
                    <div class="TopViewPostsBlock">
                        <ul style="word-break:break-all">
                            <li>
                                <router-link to="/">
                                    1.Vue(1200)
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    2.React(1200)
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    3.jQuery(1200)
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    4.SpringBoot(1200)
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="sidebar_topcommentedposts" class="sidebar-block">
                <div class="catListFeedback">
                    <h3 class="catListTitle">评论排行榜</h3>
                    <div id="TopFeedbackPostsBlock">
                        <ul style="word-break:break-all">
                            <li>
                                <router-link to="/">
                                    1.Vue学习
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="sidebar_topdiggedposts" class="sidebar-block">
                <div class="topdigg_posts_wrap">
                    <div class="catListView">
                        <h3 class="catListTitle">推荐排行榜</h3>
                        <div class="TopDiggPostsBlock">
                            <ul style="word-break: break-all">
                                <li>
                                    <router-link to="/">
                                        1.SpringBoot
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        2.Vue
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        3.React
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/">
                                        4.Java
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftContentContainer",
        data() {
            return {

            }
        },
        methods: {

        },
        created() {

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .sidebar-block {
        padding: 20px 20px 0;
    }
    .sidebar-block h3 {
        color: var(--sidebarTitle-color);
        font-size: 16px;
        margin-bottom: 16px;
        font-weight: 500;
    }
    #sidebar_shortcut ul, #sidebar_toptags ul {
        display: flex;
        flex-wrap: wrap;
    }
    ol,ul {
        list-style: none;
    }
    #sidebar_shortcut ul li, #sidebar_toptags ul li {
        margin: 0 6px 6px 0;
        padding: 2px 4px;
        background-color: var(--tags-bg);
        font-size: 13px;
        border-radius: 2px;
    }
    .sidebar-block ul li {
        padding: 4px 8px;
        font-size: 12px;
        cursor: pointer;
    }
    #sidebar_recentposts ul li, .recent_comment_title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #sidebar_recentcomments .recent_comment_body {
        padding: 12px;
    }
    .recent_comment_body {
        background-color: var(--tags-bg);
        border-radius: 4px;
    }
    .recent_comment_body {
        word-wrap: break-word;
    }
    .recent_comment_author {
        text-align: right;
        margin-right: 4px;
    }
</style>