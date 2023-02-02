import {get,post} from "./http"

export const getAllBlogIntroduction = () => get('/blogIntroduction/findAll')     // 获取所有的博客简介
export const getBlogIntroductionByType = (type) => get(`/blogIntroduction/findByType?type=${type}`)     // 根据type获取博客简介
export const getBlogIntroductionById = (id) => get(`/blogIntroduction/findById?id=${id}`)     // 根据id获取博客简介