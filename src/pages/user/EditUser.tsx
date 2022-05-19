import { Button, Form, Input, message, Modal } from 'antd'
import Password from 'antd/lib/input/Password'
import React, { Children, useEffect } from 'react'
import { updateUserById } from '../../api/User'
import { IUser } from './UserList'

interface IPorps{
    user?:IUser
    visible: boolean
    cancel: (refresh?:boolean) => void
}

const  EditUser:React.FC<IPorps>  = (props: IPorps) => {

console.log(333);
console.log(props);
console.log(333);




  const [from] = Form.useForm()
  useEffect(()=>{

    return ()=> {
        from.resetFields()
    }

  },[props.visible])

  const cancel = () => {
    message.info('取消编辑')
    props.cancel()
  }

  const updateUser=(user: IUser)=>{
    console.log(user);
    updateUserById(props.user?.id as number, user).then(response=>{

        console.log(999);
        console.log(props.user);
        console.log(user);
        
        
        console.log(response);
        
        console.log(999);
        
        

        const code = response.code
        const {msg}= response.data

        
        if (code === 0) {
            message.success(msg)
            props.cancel(true)
        } else {
            message.error(msg)
        }

        
        
    })
    
  }
  
    return (
    <Modal 
        visible={props.visible}
        title={'编辑用户'}
        onCancel={cancel}
        footer={null}

        >
            <Form 
                labelCol={{span: 4}}
                wrapperCol={{span:16}}
                form={from}
                initialValues={{
                    ...props.user,
                    Password: ''
                }}
                onFinish={updateUser}
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
                    name={'email'}>
                <Input/>
                </Form.Item>

                <Form.Item 
                    label={'密码'} 
                    name={'password'}>
                <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                {/* onClick={cancel} */}
                    <Button type='primary' htmlType='submit'>
                        更新
                    </Button>
                </Form.Item>

            </Form>
        
    </Modal>
  )
}

export default EditUser
