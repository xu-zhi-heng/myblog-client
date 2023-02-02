import {get,post} from "./http"

// 根据博客简介id获取博客内容
export const getBlogContentByBlogIntroductionId = (blogIntroductionId) => get(`/blogContent/findBlogContentByBlogIntroductionId?blogIntroductionId=${blogIntroductionId}`)