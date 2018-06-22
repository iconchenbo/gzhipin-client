/*
用户登陆的路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

const ListItem = List.Item

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

    register = () => {
        this.props.history.push('/main')
        console.log(this.state)
    }

    goLogin = () => {
        this.props.history.replace('/register')
    }


    render() {
        return (
            <div>
                <NavBar>用户登陆</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入用户名' onChange={val => this.handleChange('username',val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' placeholder='请输入密码' onChange={val => this.handleChange('password',val)}>密码:</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goLogin}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}


export default connect()(Login)