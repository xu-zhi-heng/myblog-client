import {publicMethods} from "./publicMethods";

export const watchRoute = {
  mixins: [publicMethods],
  watch:{
    $route(to, from) {
      console.log(to)
      this.$store.commit('setBlogIntroductionsLoading',true)      // 设置打开cardList.vue中列表加载动画
      if (to.path.indexOf('/partBlogs') !== -1) {
        this.partBlog(to)
      } else if(to.path.indexOf('/allBlogs') !== -1){
        this.allBlog(to)
      } else if(to.path.indexOf('/blogContent') !== -1) {
        this.blogContent(to)
      } else if(to.path === '/') {
        this.Home(to)
      } else if(to.path.indexOf('exercise') !== -1) {

      }
    }
  },
  methods: {
    partBlog(to) {
      this.StateSwitch('partBlog')
      // 思路: 根据路由所带参数的博客类型名称获取对应数字，如果是5代表是算法刷题，否则就是其他的博客文章内容。
      let blogType = this.getBlogTypeNumber(to.query.BlogType)
      if (blogType === 5) {
        this.getAllExercises(1, 15);    // 获取题目列表
      } else {
        this.getBlogIntroductionByType(blogType)          // 获取文章简介列表
      }
    },
    allBlog() {
      this.StateSwitch('partBlog')
      this.getAllBlogIntroduction()                                 // 获取所有的博客列表
    },
    blogContent(to) {
      this.getBlogContentByBlogIntroductionId()     // 获取博客内容
      this.getUserComments()                        // 获取用户评论信息
      this.viewNumAdd(to.query.contentId)           // 浏览记录+1
    },
    Home() {
      this.StateSwitch('partBlog')
      this.getAllBlogIntroduction()
    },
    Exercise() {

    },



    // 基本状态切换
    StateSwitch(type) {
      switch (type) {
        case 'partBlog':
          this.$store.commit('setCataLog', []);
          this.$store.commit('setIsShowCataLog', false);
          this.$store.commit('setIsShowBlogContent', false);
          this.$store.commit('setBlogContent', null);
          this.$store.commit('setBlogComments', null);
          this.$store.commit('setExerciseTotal', 0);
          this.$store.commit('setIsExercise', false)
          break

        case 'blogContent':
          this.$store.commit('setCataLog', []);
          this.$store.commit('setIsShowCataLog', true)
          this.$store.commit('setIsShowBlogContent', true);
          this.$store.commit('setBlogIntroductions', []);
          this.$store.commit('setBlogComments', [])
          this.$store.commit('setExerciseTotal', 0);
          this.$store.commit('setIsExercise', false)
          break
      }
    }
  }
}
