import React, {Component} from "react"
import {Button, Form, Input, message} from "antd"
import "../../static/css/login/login.css"
import { login } from "../../api/Login"
import { set } from "../../utils/storage"
import { AxiosPromise } from "axios"
import { request } from "https"
import { RouteComponentProps, withRouter } from "react-router-dom"
// import { withRouter } from "react-router-dom"

interface IPorps extends RouteComponentProps {}




class Login extends Component<IPorps> {




  Login = (admin: any) => {
    login(admin).then(response =>{
      console.log(response,'response');

      // const {code, msg} = response
      // sessionStorage.getItem("token",response.data.token)
      console.log(response,'response');
      
      if (response.code === 0){
        // const {token}=response.data
        // set(`token`,token)
        
        sessionStorage.setItem("token",response.data.token)
          message.success('success')
          console.log(response)
          console.log(response.msg)
          this.props.history.push('/dashboard')

      } else {
        message.error(response.msg)
        console.log(response)
      }
    })
    // console.log('admin')
  }

  render() {

    return (
      <div id="login-container">
        <Form
              id={'login-from'}
              labelCol={{ span: 4 }}
              wrapperCol={{span: 16}}
              onFinish={this.Login}
              
        >
            <Form.Item 
            label={'用户名'} 
            name={'name'}
              rules={[
                  {
                      type: "string",
                      required: true,
                      message: '用户名不可以为空'
                  }
              ]}
            >
                <Input></Input>
            </Form.Item>
            <Form.Item label={'密码'} name={'password'}>
                <Input.Password/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button htmlType={"submit"} type={"primary"}>登录</Button>
            </Form.Item>
        </Form>
      </div>
    )


  }


}

export default withRouter(Login);
