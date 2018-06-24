/*
* 包含多个用于生成新的state的reducer函数的模块
* */

import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from './action-types'
import {getRedirectPath} from '../utils'

const initUser = {
    username: '',
    type: '',
    msg:'',  //错误信息
    redirectTo:''  //需要自动重定向的path
}

function user(state=initUser,action) {
    switch (action.type){
        case AUTH_SUCCESS:
            const user = action.data
            return{...user,redirectTo:getRedirectPath(user.type,user.header)}
        case ERROR_MSG:
            return{...state,msg:action.data}
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return{...initUser,msg:action.data}
        default:
            return state
    }
}



//返回合并后的reducer函数
export default combineReducers({
    user
})