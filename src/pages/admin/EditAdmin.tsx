import { Button, Form, Input, message, Modal, Select } from 'antd'
import React, { SetStateAction, useEffect, useState } from 'react'
import { updateAdminById } from '../../api/admin'
import { getRoleAll } from '../../api/role'
import { IAdmin } from './AdminList'

interface IPorps {
    admin?: IAdmin
    visible: boolean
    cancel: () => void
}

interface IRole {
  id: number
  roleName: String
}

const EditAdmin: React.FC<IPorps> = (props: IPorps) => {
  const [roleList,setRoleList] =useState<IRole[]>([])
  const [from] = Form.useForm()

  useEffect(()=> {

    if (props.visible) {
    getRoleAll().then(response=>{

      const data=response.data

// @ts-ignore
      setRoleList(data)
    })
    }


    
    
  },[props.visible])

    const cancel= ()=>{
      message.info('取消编辑')
        props.cancel()
    }

    const finish=(admin:IAdmin)=>{
      updateAdminById(props.admin?.id as number,admin).then(response => {
        const {code,msg}=response
        if (code === 0) {
          message.success(msg)
          props.cancel()
        } else {
          message.error(msg)
          
        }
      })
    }



  return (
    <Modal 
        visible={props.visible}
        title={'编辑管理员'}
        onCancel={cancel}
        footer={null} 
    >

<Form 
                labelCol={{span: 4}}
                wrapperCol={{span:16}}
                form={from}
                initialValues={{
                    ...props.admin,
                    Password: ''
                }}
                onFinish={finish}
                // onFinish={updateUser}
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
                    label={'角色'} 
                    name={'roleId'}>
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

export default EditAdmin