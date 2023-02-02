<template>

    <div class="cards-list" v-loading="BlogIntroductionsLoading" v-if="BlogIntroductions.length != 0 && $route.query.BlogType != '算法刷题'">
        <div class="custom-card" v-for="item in BlogIntroductions" :key="item.id" @mouseenter="enter($event)" @mouseleave="leave($event)">
            <router-link :to="{path: '/blogContent',query: {contentId: item.id}}">
                <div class="custom-card-title">
                    <i class="iconfont icon-ic_description_file24px"></i>
                    {{item.title}}
                </div>
            </router-link>
            <div class="custom-card-desc">
                <div class="c_b_p_desc">
                    摘要：{{item.digest}}
                </div>
<!--                <div class="c_b_p_desc" v-else>-->
<!--                    摘要：-->
<!--                    <img :src="item.picture" class="desc_img"/>-->
<!--                </div>-->
            </div>
            <div class="custom-card-actions">
                <div>
                    <i class="iconfont icon-yulan1"></i>
                    <span>{{item.viewedNum}}</span>
                </div>
                <div>
                    <i class="iconfont icon-xinxi-01"></i>
                    <span>{{item.commentNum}}</span>
                </div>
                <div>
                    <i class="iconfont icon-dianzan" style="cursor: pointer;" @click="giveALike($event, item.id)"></i>
                    <span>{{item.thumbNum}}</span>
                </div>
                <router-link :to="{path: '/blogContent',query: {contentId: item.id}}">
                    <button>阅读</button>
                </router-link>
                <router-link to="/">
                    <button>编辑</button>
                </router-link>
            </div>
        </div>
    </div>


    <div class="exercises" v-else-if="$route.query.BlogType === '算法刷题'" v-loading="BlogIntroductionsLoading">
        <div class="exerciseNav">
            <div style="display: flex;justify-content: space-between;align-items: center">
                <div style="display: flex;">
                    <div style="margin-right: 0.65rem;width: 110px">
                        <el-select v-model="exerciseType" placeholder="请选择" size="small" @change="filter" clearable>
                            <el-option
                                    v-for="item in exerciseTypes"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                            </el-option>
                        </el-select>
                    </div>
                    <div style="margin-right: 0.65rem;width: 110px">
                        <el-select v-model="exerciseLabel" placeholder="请选择" size="small" @change="filter" multiple clearable>
                            <el-option
                                    v-for="item in exerciseLabels"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div style="margin-right: 0.65rem">
                        <el-date-picker
                                v-model="dateTime"
                                type="daterange"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期" size="small" @change="filter" clearable>
                        </el-date-picker>
                    </div>
                </div>
                <div style="display: flex;padding-left: 9.5rem">
                    <div>
                        <el-input
                                placeholder="输入题号"
                                v-model="number" size="small" clearable @keyup.enter.native="searchExercise" @blur="searchExercise">
                            <el-button slot="append" icon="el-icon-search" @click="searchExercise"></el-button>
                        </el-input>
                    </div>
                </div>
            </div>
        </div>
        <div class="exerciseWrapper">
            <el-table
                    :data="BlogIntroductions"
                    style="width: 100%;box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);border-radius: 10px" @cell-click="toExercisePage">
                <el-table-column
                        prop="number"
                        label="题号"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="题目"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="createTime"
                        label="日期"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="exerciseType"
                        label="来源" width="100">
                </el-table-column>
                <el-table-column
                        prop="labelName"
                        label="标签" align="center">
                </el-table-column>
            </el-table>
        </div>
        <div class="exercisePage">
            <el-pagination
                    background
                    layout="prev, pager, next, jumper"
                    :total="exerciseTotal"
                    :page-size="pageSize"
                    :current-page="currentPage"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    >
            </el-pagination>
        </div>
    </div>
    <div v-else class="emptyInfo">
        没有内容
    </div>
</template>

<script>
    import $ from 'jquery'
    import {getAllBlogIntroduction} from "../../../api/blogIntroduction";
    import {mapGetters} from 'vuex'
    import {giveALike} from "../../../api/blogOperations";
    import {publicMethods} from "../../../mixins/publicMethods";
    import {filter, findByNumber} from "../../../api/exercise";
    export default {
        name: "cardsList",
        mixins: [publicMethods],
        data() {
            return {
                exerciseTypes: [
                    {
                        value: '1',
                        label: 'LeetCode'
                    },
                    {
                        value: '2',
                        label: '其他'
                    },
                    {
                        value: '3',
                        label: '牛客网'
                    },
                    {
                        value: '4',
                        label: '蓝桥杯'
                    }
                ],
                exerciseType: '',
                exerciseLabels: [
                    {
                        label: '数组',
                        value: '1'
                    },
                    {
                        label: '动态规划',
                        value: '2'
                    },
                    {
                        label: '链表',
                        value: '3'
                    },
                    {
                        label: '图',
                        value: '4'
                    },
                    {
                        label: '递归',
                        value: '5'
                    },
                    {
                        label: '排序',
                        value: '6'
                    },
                ],
                exerciseLabel: '',
                dateTime: '',
                number: '',
                currentPage: 1,
                pageSize: 15
            }
        },
        methods: {
            giveALike(e, blogId) {
                e.target.style.color = "orangered"
                $(e.target).addClass('animate')
                giveALike(blogId).then(res => {
                    if (res.code == 1) {
                        setTimeout(function () {
                            e.target.style.color = "#000"
                            $(e.target).removeClass('animate')
                        }, 1000)
                        this.getBlogIntroductions()
                    }
                    this.$message.success(res.msg)
                }).catch(err => {
                    console.log(err)
                })
            },
            getBlogIntroductions() {
                getAllBlogIntroduction().then(res => {
                    if(res.code == 1) {
                        this.$store.commit('setBlogIntroductions',res.data)
                        this.$store.commit('setBlogIntroductionsLoading',false)
                    }else {
                        this.$message({
                            message: "查询失败",
                            type: 'error',
                            showClose: true
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            enter(event) {
                $(event.target).css({
                    transform: `translateY(-10px)`
                })
            },
            leave(event) {
                $(event.target).css({
                    transform: `translateY(0px)`
                })
            },
            handleSizeChange(value) {
                console.log(value)
            },
            handleCurrentChange(value) {
                this.currentPage = value
                this.$store.commit('setBlogIntroductions', [])
                this.getAllExercises(this.currentPage, this.pageSize)
            },
            filter() {
                filter(this.exerciseType, this.exerciseLabel, this.dateTime == null ? 'undefined' : String(this.dateTime[0]),
                    this.dateTime == null ? 'undefined' : String(this.dateTime[1]))
                    .then(res => {
                        if(res.code === 1) {
                            this.$store.commit('setBlogIntroductions', [])
                            res.data = this.converExercises(res.data)
                            this.$store.commit('setBlogIntroductions', res.data)
                        }else {
                            this.$message.error(res.msg)
                        }
                    }).catch(err => {
                    console.log(err)
                })
            },
            searchExercise() {
                if(this.number === '') {
                    this.$store.commit('setBlogIntroductions', [])
                    this.getAllExercises(1, 15);
                } else {
                    findByNumber(this.number).then(res => {
                        if(res.code == 1) {
                            this.$store.commit('setBlogIntroductions', [])
                            res.data = this.converExercises(res.data)
                            this.$store.commit('setBlogIntroductions', res.data)
                        } else {
                            this.$message.error(res.msg)
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
            toExercisePage(value) {
                console.log(value)
                this.$store.commit('setBlogContent', value)
                this.$store.commit('setIsShowBlogContent', true)
                this.$store.commit('setIsExercise', true)
                let exerciseName = value.name
                this.$router.push({path: '/exercise', query: {name: exerciseName}})
            }
        },
        created() {
            if(this.$route.path === '/' || this.$route.path === 'allBlogs') {
                this.getBlogIntroductions()
            }
        },
        destroyed() {
            this.currentPage = 1
        },
        computed: {
            ...mapGetters([
                'BlogIntroductions',
                'BlogIntroductionsLoading',
                'exerciseTotal'
            ])
        }
    }
</script>

<style scoped>
    .cards-list {
        margin: 1rem 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .custom-card {
        display: flex;
        flex-direction: column;
        word-break: break-all;
    }
    .custom-card {
        background-color: var(--card-bg);
        border-radius: 4px;
        box-sizing: border-box;
        flex-grow: 1;
        -webkit-animation: content-in .5s ease-in 0s;
        /*animation: content-in .5s ease-in 0s;*/
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        transition: all 0.5s ease-in-out;
    }
    .custom-card-title {
        padding: 20px 20px 8px;
        font-weight: 700;
    }
    .custom-card-title i {
        font-weight: 400;
        margin-right: 8px;
    }
    .custom-card-title:hover {
        color: #1b86f9;
    }

    .custom-card-desc {
        color: #5c5e6e;
        padding: 0 20px 8px;
        flex-grow: 1;
    }
    .c_b_p_desc {
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        line-height: 1.5;
    }
    .custom-card-actions {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-top: 1px solid var(--color-basic-200);;
    }
    .custom-card-actions div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }
    .custom-card-actions div i{
        font-weight: 500;
        margin-right: 4px;
    }
    .custom-card-actions a:first-of-type {
        margin-left: auto;
        margin-right: 10px;
    }
    .custom-card-actions button {
        margin-left: auto;
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
    .custom-card-actions button:hover {
        opacity: 0.8;
        transition: all 0.5s;
    }
    .desc_img {
        float: right;
        max-height: 200px;
    }
    .emptyInfo {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #e51818;
        font-size: 35px;
        margin-top: 50px;
    }

    .animate {
        animation: scaleDraw 1s ease-in-out;
    }
    /*点赞动画*/
    @keyframes thumbAnimate {
        0% {
            transform: scale(1);  /*开始为原始大小*/
        }
        25% {
            transform: scale(1.1); /*放大1.1倍*/
        }
        50% {
            transform: scale(1);
        }
        75% {
            transform: scale(1.1);
        }
    }

    /*算法题*/
    .exercises {
        margin: 1rem 0;
    }
    .exerciseNav {
        display: flex;
        align-items: center;
        justify-content: stretch;
        margin-bottom: 0.8rem;
    }
    .exerciseWrapper {
        margin-bottom: 1.5rem;
    }
    .exercisePage {
        text-align: right;
    }

    /*表格*/
    /deep/ .el-table__row td:nth-child(2) {
        cursor: pointer;
    }
    /deep/ .el-table__row td:nth-child(2):hover {
        color: #1b86f9;
    }
    /deep/ .el-table__row:hover {
        color: rgba(33,34,36,1);
    }
    /deep/ .el-table__row {
        color: var(--tableColor);
    }
    /deep/ .el-table__row:nth-child(even) {
        background-color: var(--tr-even-bg);
    }
    /deep/ .el-table__row:nth-child(odd) {
        background-color: var(--tr-odd-bg);
    }
    /deep/ .el-table td {
        border: none;
    }
    /deep/ .el-table th {
        background-color: var(--tr-odd-bg);
    }
    /deep/ .has-gutter tr .is-leaf {
        border-bottom: 1px solid var(--th-border-color);
    }
</style>