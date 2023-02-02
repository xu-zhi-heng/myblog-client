import {deleteFu, get, post} from "./http"

// 获取当前的博客的评论列表
export const getCommentsByBlogIntroductionId = (blogIntroductionId) => get(`/comments/findCommentsByBlogIntroductionId?blogIntroductionId=${blogIntroductionId}`)

// 同时获取博客内容和评论博客的用户信息
export const getUserCommentsByBlogIntroductionId = (blogIntroductionId) => get(`/comments/findUserComments?blogIntroductionId=${blogIntroductionId}`)

// 保存用户评论博客内容
export const saveUserComments = (comment) => post(`/comments/saveUserComments`,comment)

// 删除评论
export const deleteCommentByUserId = (id) => deleteFu(`/comments/deleteComment/${id}`)
