
import { Button, Form, Input, message, Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { getRoleAll } from '../../api/role'
import { IAdmin } from './AdminList'
import { adddAdmin1 } from '../../api/admin'

interface IProps {
    visible: boolean
    cancel: (refresh?: boolean) => void
}

interface IRole {
  id: number
  roleName: String
}

const AddAdmin: React.FC<IProps> =  (props:IProps) => {

  const [roleList, setRoleList] = useState<IRole[]>([])
  const [from] = Form.useForm()
  const cancel = () => {
    message.info('取消添加管理员')
    props.cancel()
  }
  useEffect(()=> {

    if (props.visible) {
    getRoleAll().then(response=>{

      const data=response.data

// @ts-ignore
      setRoleList(data)
    })
    return () => {
      from.resetFields()
    }
    // @ts-ignore
    }


    
    
  },[props.visible])

  const finish=(admin: IAdmin)=>{
    console.log(admin);

    adddAdmin1(admin).then(response=> {
      const {code,msg}=response
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
        title={'添加管理员'}
        visible={props.visible}
        onCancel={cancel}
        footer={null}
    >

<Form 
                labelCol={{span: 4}}
                wrapperCol={{span:16}}
                form={from}
                initialValues={{
                    // ...props.admin,
                    Password: ''
                }}
                onFinish={finish}
                // onFinish={updateUser}
                >
                    {/* <Form.Item 
                    label={'IDDDD'} 
                    name={'id'}>
                    <Input/>    
                </Form.Item> */}
                
                
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
                    label={'角色'} 
                    name={'roleId'}
                    rules={[
                      {
                        type: 'number',
                        required: true,
                        message: '角色不可以为空'
                      }
                    ]}
                    >
                      <Select>      
                {
                    roleList?.map(role => (<Select.Option value={role.id} key={role.id}>
                                              {role.roleName}
                                            </Select.Option>))                  

                }
                      </Select>
                </Form.Item>

                <Form.Item 
                    label={'密码'} 
                    name={'password'}
                    rules={[
                      {
                        type:'string',
                        required: true,
                        validator:(rule,value) => {
                          if (value === undefined || value.length < 6) {
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

export default AddAdmin