/*
* 包含多个action creator函数的模块
* 同步action（与type的个数一样）
*异步action（与异步ajax请求个数一样）
* */

import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from './action-types'
import {reqLogin,reqRegister,reqUpdateUser} from '../api'

//请求成功的同步action
const authSuccess = (user) => ({type:AUTH_SUCCESS,data:user})

//请求失败的同步action
const errorMsg = (msg) => ({type:ERROR_MSG,data:msg})

//接收用户的同步action
const receiveUser = (user) => ({type:RECEIVE_USER,data:user})

//重置用户的同步action
const resetUser = (msg) => ({type:RESET_USER,data:msg})

//注册的异步action
export const register = ({username,password,password2,type}) =>{
    if (!username){
        return errorMsg('必须指定用户名')
    } else if (!password){
        return errorMsg('必须指定密码')
    }
    return async dispatch => {
        if (password!==password2){
            dispatch(errorMsg('两个密码必须一致'))
            return
        }
        //执行异步ajax请求注册接口
        //以同步编码方式得到promise异步执行的结果
     const response= await reqRegister({username,password,type})
            const result = response.data
            if(result.code ===0){
                const user = result.data
                dispatch(authSuccess(user))
            }else {
                dispatch(errorMsg(result.msg))
            }
    }
}

//登陆的异步action
export const login = (username,password) => {

    if (!username){
        return errorMsg('必须指定用户名')
    }else if (!password){
        return errorMsg('必须指定密码')
    }

    return async dispatch => {
        //执行异步ajax请求登陆接口
      const response=await reqLogin(username,password)
            const result = response.data
            if (result.code ===0){
                const user = result.data
                dispatch(authSuccess(user))
            }else {
                dispatch(errorMsg(result.msg))
            }
    }
}

// 更新用户的异步action
export const updateUser = (user) => {
    return async dispatch => {
        const response = await reqUpdateUser(user)
        const result = response.data
        if(result.code===0) {
            dispatch(receiveUser(result.data))
        } else {
            dispatch(resetUser(result.msg))
        }
    }
}