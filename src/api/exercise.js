import {deleteFu, get, post} from "./http"

// 获取所以的刷题列表
export const getAllExercise = (pageNum,pageSize) => get(`/exercise/getAllExercise?pageNum=${pageNum}&pageSize=${pageSize}`)
// 过滤数据
export const filter = (exerciseType, label, startTime, endTime) => get(`/exercise/filter?exerciseType=${exerciseType}&label=${label}&startTime=${startTime}&endTime=${endTime}`)

export const findByNumber = (number) => get(`/exercise/findByNumber?number=${number}`)
