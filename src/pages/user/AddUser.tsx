import { Button, Form,Input,message,Modal } from 'antd'
import React, { useEffect } from 'react'
import { addUser } from '../../api/User'
import { IUser } from './UserList'

interface IPorps {
    visible: boolean
    cancel: (refresh: boolean) => void
}

const AddUser:React.FC<IPorps> =  (props:IPorps) => {
    const [form] = Form.useForm()

    const cancel=()=>{
        props.cancel(true)
    }

    const add=(user:IUser)=>{
        console.log(999);
        
        console.log(user)
        
        console.log(999);
        
        addUser(user).then(response=>{
            console.log(888);
            
            console.log(response);

            console.log(888);
            

            const code = response.code
            const {msg}=response
            if (code === 0) {
                message.success(msg)
            } else {
                message.error(msg)
            }
        })
    }

    useEffect( ()=>{
        return ()=> {
            form.resetFields()
            
        }
         // eslint-disable-next-line
    }, [props.visible] )


  return (
    <Modal 
        title={'添加用户'}
        visible={props.visible}
        onCancel={cancel}
        footer={null}    
    >
        <Form
            labelCol={{span: 4}}
            wrapperCol={{span:16}}
            form={form}
            onFinish={add}
        >



        <Form.Item 
                    label={'IDDDD'} 
                    name={'id'}>
                    <Input/>    
                </Form.Item>
                
                <Form.Item 
                    label={'用户名'} 
                    name={'name'}
                    rules={[
                        {
                            type: 'string',
                            message: '用户名不可以为空',
                            required: true
                        }
                    ]}
                    >
                    
                <Input/>
                </Form.Item>

                <Form.Item 
                    label={'手机号'} 
                    name={'moblie'}>
                <Input/>
                </Form.Item>

                <Form.Item 
                    label={'邮箱'} 
                    name={'email'}
                    // rules={[
                    //     {
                    //         type: 'email',
                    //         message: '邮箱格式不合法'
                    //     }
                    // ]}
                    >
                <Input/>
                </Form.Item>

                <Form.Item 
                    label={'密码'} 
                    name={'password'}
                    rules={[
                        {
                            type:'string',
                            required: true,
                            validator: (rule,value) =>{
                                if (value === '' || value=== undefined) {
                                    return Promise.reject('密码不可以为空')
                                }
                                if (value.length < 6) {
                                    return Promise.reject('密码长度至少为6位')
                                }
                                return Promise.resolve()

                            }
                        }
                    ]}
                    >
                <Input.Password/>
                </Form.Item>

        <Form.Item wrapperCol={{offset: 8, span: 16}}>
                {/* onClick={cancel} */}
                    <Button type='primary' htmlType='submit'>
                        添加
                    </Button>
                </Form.Item>
                </Form>
    </Modal>
  )
}

export default AddUser
