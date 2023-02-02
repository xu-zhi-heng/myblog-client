import {getAllBlogIntroduction, getBlogIntroductionByType} from "../api/blogIntroduction";
import {getBlogContentByBlogIntroductionId} from "../api/blogContent";
import {getCommentsByBlogIntroductionId, getUserCommentsByBlogIntroductionId} from "../api/comments";
import {findByUserId} from "../api/user";
import {view} from "../api/blogOperations";
import {getAllExercise} from "../api/exercise";

export const publicMethods = {
    data() {
        return {
            username: '',
            userAvatar: '',
        }
    },
    methods: {
        getBlogTypeNumber(blogType) {
            let number;
            switch (blogType) {
                case '前端': number = 1;break
                case 'Java': number = 2;break
                case 'Python': number = 3;break
                case '机器学习': number = 4;break
                case '算法刷题': number = 5;break
            }
            return number
        },

        // 根据博客获取博客简介
        getBlogIntroductionByType(blogType) {
            getBlogIntroductionByType(blogType).then(res => {
                if(res.code == 1) {
                    this.$store.commit('setBlogIntroductions',res.data)             // 设置对应的内容
                    this.$store.commit('setBlogIntroductionsLoading',false)
                }else {
                    this.$message({
                        message: res.msg,
                        type: 'error',
                        showClose: true
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        },

        // 获取所有博客简介
        getAllBlogIntroduction() {
            getAllBlogIntroduction().then(res => {
                if(res.code == 1) {
                    this.$store.commit('setBlogIntroductions',res.data)
                    this.$store.commit('setBlogIntroductionsLoading',false)
                }else {
                    this.$message({
                        message: res.msg,
                        type: 'error',
                        showClose: true
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        },

        setIsShowBlogContent(state) {
            this.$store.commit('setIsShowBlogContent',state)
        },

        // 获取博客内容
        getBlogContentByBlogIntroductionId() {
            getBlogContentByBlogIntroductionId(this.$route.query.contentId).then(res => {
                if(res.code === 1) {
                    this.$store.commit("setBlogContent",null)
                    this.$store.commit("setBlogContent",res.data)
                    if(this.$store.state.BlogContent !== null) {
                        this.StateSwitch('blogContent')         // 设置状态为blogContent，用于控制页面显示
                    }
                }else {
                    this.$message({
                        message: res.msg,
                        type: 'error',
                        showClose: true
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        },

        // 获取评论列表
        async getCommentsByBlogIntroductionId() {
            await getCommentsByBlogIntroductionId(this.$route.query.contentId).then(res => {
                if(res.code == 1) {
                    for(let item of res.data) {
                        console.log(item)
                        let userId = item.userId
                        this.getUserInfoByUserId(userId)

                        this.$nextTick(() => {
                            let comment = {
                                username: this.username,
                                userAvatar: this.userAvatar,
                                commentContent: item.commentContent,
                                createTime: item.createTime,
                                updateTime: item.updateTime,
                                againstNum: item.againstNum,
                                supportNum: item.supportNum,
                                id: item.id,
                                userId: item.userId,
                                blogIntroductionId: item.blogIntroductionId
                            }
                            console.log(comment)
                            this.$store.commit("pushBlogComments",comment)
                        })
                    }
                } else {
                    this.$message({
                        message: res.msg,
                        type: 'error',
                        showClose: true
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        },

        // 获取用户的信息
        async getUserInfoByUserId(userId) {
            await findByUserId(userId).then(res => {
                if(res.code == 1) {
                    this.username = res.data.username
                    this.userAvatar = res.data.avator
                }else {
                    this.$message({
                        message: res.msg,
                        type: 'error',
                        showClose: true
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        },

        // 同时获取博客评论和评论博客的用户信息
        getUserComments() {
            getUserCommentsByBlogIntroductionId(this.$route.query.contentId).then(res => {
                if(res.code == 1) {
                    this.$store.commit('setBlogComments', res.data)
                }
            }).catch(err => {
                console.log(err)
            })
        },

        //浏览量+1
        viewNumAdd(blogId) {
            view(blogId).then(res => {
                if(res.code === 0) {
                    this.$message.success(res.msg)
                }
            }).catch(err => {
                console.log(err)
            })
        },

        converExercises(data) {
            for(let i = 0; i < data.length; i++) {
                let item = data[i]
                switch (item.exerciseType) {
                    case 1: data[i].exerciseType = 'LeetCode'; break
                    case 2: data[i].exerciseType = '其他'; break
                    case 3: data[i].exerciseType = '牛客网'; break
                    case 4: data[i].exerciseType = '蓝桥网'; break
                }
                if(item.labelName != null) {
                    item.labelName = item.labelName.join('😀')
                }
            }
            return data;
        },

        getAllExercises(pageNum, pageSize) {
            getAllExercise(pageNum,pageSize).then(res => {
                if(res.code == 1) {
                    res.data = this.converExercises(res.data)
                    this.$store.commit('setExerciseTotal', res.total)
                    this.$store.commit('setBlogIntroductions',res.data)
                    this.$store.commit('setBlogIntroductionsLoading', false)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    },
}