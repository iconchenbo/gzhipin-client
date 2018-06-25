/*
用户登陆的路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/actions'


class Login extends Component {


    state ={
        username:'',
        password:''
    }

    handleChange = (name,value) => {
        this.setState({
            [name]:value
        })
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    Login = () => {
       const {username,password} = this.state
        this.props.login(username,password)
    }


    render() {
        const {redirectTo,msg} = this.props.user
        if (redirectTo){
            return <Redirect to={redirectTo}/>
        }

        return (
            <div>
                <NavBar>用户登陆</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        {msg ? <p className='error-msg'>{msg}</p> : null}
                        <WhiteSpace/>
                        <InputItem placeholder='请输入用户名' onChange={val => this.handleChange('username',val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码' onChange={val => this.handleChange('password',val)}>密码:</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.Login}>登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}


export default connect(
    state => ({user:state.user}),
    {login}
)(Login)