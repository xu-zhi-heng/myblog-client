<template>
    <div class="post-message" v-if="!isExercise && BlogContent !== null">
        <div class="message-top">
            <div class="message-categories">
                📂
                <span v-for="(item,index) in getCategories" :key="index">
                    {{item}}
                </span>
            </div>
            <div class="message-tags">
                🔖
                <span to="/" v-for="(item,index) in getTags" :key="index">
                    {{item}}
                </span>
            </div>
        </div>
        <div class="message-bottom">
            <span>{{BlogContent.create_time}}</span>
            <span v-for="(item,index) in this.statistics" :key="index">
                {{item.name}}: {{item.num}}
            </span>
        </div>
    </div>

    <div v-else></div>
</template>

<script>
    import {getBlogIntroductionById} from "../../../api/blogIntroduction";
    import {mapGetters} from 'vuex'
    export default {
        name: "postMessage",
        data() {
            return {
                categories: [],
                tags: [],
                statistics: []
            }
        },
        methods: {
            // 获取该评论的点赞...的个数
            getStatistics() {
                getBlogIntroductionById(this.$route.query.contentId).then(res => {
                    if(res.code == 1) {
                        this.statistics.push({
                            name: '阅读',
                            num: res.data.viewedNum
                        })
                        this.statistics.push({
                            name: '评论',
                            num: res.data.commentNum
                        })
                        this.statistics.push({
                            name: '点赞',
                            num: res.data.thumbNum
                        })
                    }else {
                        this.$message({
                            message: '查询失败',
                            type: 'error',
                            showClose: true
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        computed: {
            ...mapGetters([
                'BlogContent',
                'isExercise'
            ]),
            getCategories() {
                return this.BlogContent.categories.split(";")
            },
            getTags() {
                return this.BlogContent.tags.split(";")
            },
        },
        watch: {
            BlogContent: {
                handler(newValue,oldValue) {
                    if (!this.isExercise) {
                        this.categories = newValue.categories.split(";")
                        this.tags = newValue.tags.split(";")
                    }
                },
                deep: true
            }
        },
        created() {
            if(!this.isExercise) {
                this.getStatistics()
            }
        },
        destroyed() {

        }
    }
</script>

<style scoped>
    .post-message {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
    }
    .message-top {
        display: flex;
        flex-wrap: wrap;
    }
    .message-top .message-categories, .message-top .message-tags {
        display: flex;
        align-items: center;
        margin: 8px 0;
    }
    .message-top .message-categories {
        margin: 0 16px 0 0;
    }
    .message-top .message-categories span, .message-top .message-tags span {
        padding: 4px 8px;
        font-size: 13px;
        line-height: 14px;
        border-radius: 4px;
        margin: 0 0 0 8px;
    }
    .message-categories span {
        color: #fff;
        background-color: #ff6b6b;
        border: 1px solid #ff6b6b;
        text-decoration: none;
    }
    .message-tags {
        display: flex;
        align-items: center;
        margin: 8px 0;
    }
    .message-top .message-tags span {
        border: 1px solid;
        color: var(--body-color);
    }
    .message-tags a:nth-child(1) {
        border-color: #22a6b3;
    }
    .message-tags a:nth-child(2) {
        border-color: #0097e6;
    }
    .message-bottom {
        display: flex;
        gap: 8px;
        color: #999;
        white-space: nowrap;
        overflow: auto;
        font-size: 13px;
    }
</style>