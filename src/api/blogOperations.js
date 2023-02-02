import {get, post, put} from "./http"

export const giveALike = (blogId) => get(`/blogOperations/giveALike?blogId=${blogId}`)     // 点赞+1
export const view = (blogId) => put(`/blogOperations/viewNumAdd/${blogId}`)     // 浏览+1