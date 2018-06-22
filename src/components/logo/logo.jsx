import React from 'react'
import logo from './imgs/logo.png'
import './logo.less'
/*
* 简单的显示Logo的组件
* */
export default function Logo() {
        return(
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
        )
}