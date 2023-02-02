import content from '../../main'

function initBlogStore(data) {
    content.$store.commit('initBlogState',data)
}

/**
 * 页面刷新
 */
window.addEventListener("beforeunload", function (e) {
    // if (content.$route.path === '/') {
    //     initBlogStore({
    //         cataLog: [],
    //         isShowCataLog: false,
    //         isShowBlogContent: false,
    //         BlogIntroductions: [],
    //         BlogIntroductionsLoading: true,
    //         BlogContent: null,
    //         BlogComments: [],
    //     })
    // } else {
    //     window.localStorage.setItem("store",JSON.stringify(content.$store.state))
    // }
    window.localStorage.setItem("store",JSON.stringify(content.$store.state))
});


window.addEventListener("load", function () {
    if (content.$route.path === '/') {
        initBlogStore({
            cataLog: [],
            isShowCataLog: false,
            isShowBlogContent: false,
            BlogIntroductions: [],
            BlogIntroductionsLoading: true,
            BlogContent: null,
            BlogComments: [],
        })
    }
})
