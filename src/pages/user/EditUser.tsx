import { Form, Input, message, Modal } from 'antd'
import React, { Children, useEffect } from 'react'
import { IUser } from './UserList'

interface IPorps{
    user?:IUser
    visible: boolean
    cancel: () => void
}

const  EditUser:React.FC<IPorps>  = (props: IPorps) => {

console.log(333);
console.log(props);
console.log(333);




  const [from] = Form.useForm()
//   useEffect(()=>{

//   },[props.visible])

  const cancel = () => {
      message.info('取消编辑')
    props.cancel()
  }
  
    return (
    <Modal 
        visible={props.visible}
        title={'编辑用户'}
        onCancel={cancel}
        footer={null}

        >
            <Form 
                form={from}
                initialValues={{
                    ...props.user
                }}
                >
                    <Form.Item 
                    label={'IDDDD'} 
                    name={'id'}>
                </Form.Item>
                <Input/>
                
                <Form.Item 
                    label={'用户名'} 
                    name={'name'}>
                </Form.Item>
                <Input/>

            </Form>
        
    </Modal>
  )
}

export default EditUser
