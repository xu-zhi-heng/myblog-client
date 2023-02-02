import {get,post} from "./http"
// 登陆注册
export const UserLogin = (params) => post(`/user/login`,params)
export const UserRegister = (params) => post(`/user/register`,params)

export const findByUserId = (userId) => get(`/user/findByUserId?userId=${userId}`)
