const Blog = {
    state: {
        cataLog: [],                            // 某一个博客内容的目录
        isShowCataLog: false,                   // 是否显示目录
        isShowBlogContent: false,               // 是否显示博客详细内容，
        BlogIntroductions: [],                  // 博客简介列表(文章和题目) ===> cardsList.vue
        BlogContent: null,                      // 博客内容
        BlogComments: [],                       // 当前博客评论内容
        exerciseTotal: 0,                       // 算法题总个数
        isExercise: false,                      // 是否显示算法题博客内容
        BlogIntroductionsLoading: true,         // 博客简介加载动画 ===> cardsList.vue
    },
    getters: {
        isExercise: state => {
            return state.isExercise;
        },
        exerciseTotal: state => {
            let exerciseTotal = state.exerciseTotal
            if(exerciseTotal !== 0) {
                return exerciseTotal
            }else {
                return 0
            }
        },
        cataLog: state => {
            let cataLog = state.cataLog
            if(cataLog.length != 0) {
                return cataLog
            }else {
                return []
            }
        },
        isShowCataLog: state => {
            let isShowCataLog = state.isShowCataLog
            if(isShowCataLog) {
                return isShowCataLog
            }else {
                return false
            }
        },
        isShowBlogContent: state => {
            let isShowBlogContent = state.isShowBlogContent
            if(isShowBlogContent) {
                return isShowBlogContent
            }else {
                return false
            }
        },
        BlogIntroductions: state => {
            let BlogIntroductions = state.BlogIntroductions
            if(BlogIntroductions != null) {
                return BlogIntroductions
            }else {
                return []
            }
        },
        BlogIntroductionsLoading: state => {
            let BlogIntroductionsLoading = state.BlogIntroductionsLoading
            if(BlogIntroductionsLoading) {
                return BlogIntroductionsLoading
            }else {
                return false
            }
        },
        BlogContent: state => {
            let BlogContent = state.BlogContent
            if(BlogContent != null) {
                return BlogContent
            }else {
                return null
            }
        },
        BlogComments: state => {
            let BlogComments = state.BlogComments
            if(BlogComments.length != 0) {
                return BlogComments
            }else {
                return []
            }
        },
    },
    mutations: {
        setCataLog: (state,cataLog) => {
            state.cataLog = cataLog
        },
        setIsShowCataLog: (state,isShowCataLog) => {
            state.isShowCataLog = isShowCataLog
        },
        setIsShowBlogContent: (state,isShowBlogContent) => {
            state.isShowBlogContent = isShowBlogContent
        },
        setBlogIntroductions: (state,BlogIntroductions) => {
            state.BlogIntroductions = BlogIntroductions
        },
        setBlogIntroductionsLoading: (state,BlogIntroductionsLoading) => {
            state.BlogIntroductionsLoading = BlogIntroductionsLoading
        },
        setBlogContent: (state,BlogContent) => {
            state.BlogContent = BlogContent
        },
        setBlogComments: (state,BlogComments) => {
            state.BlogComments = BlogComments
        },
        pushBlogComments: (state,BlogComments) => {
            state.BlogComments.push(BlogComments)
        },
        initBlogState: (state, Blog) => {
            Object.assign(state, Blog)
        },
        setExerciseTotal: (state, exerciseTotal) => {
            state.exerciseTotal = exerciseTotal
        },
        setIsExercise: (state, isExercise) => {
            state.isExercise = isExercise
        }
    }
}
export default Blog