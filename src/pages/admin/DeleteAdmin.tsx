import { Button, message, Popconfirm } from 'antd'
import React from 'react'
import { deleteAdminById } from '../../api/admin'
import { IAdmin } from './AdminList'

interface IPorps {
    admin: IAdmin
    callback:(admin: IAdmin) => void
}

const DeleteAdmin:React.FC<IPorps> = (props:IPorps)=> {

  const cancel = () => {
    message.info('取消删除')
  }

  const deletAdmin=()=>{
    console.log(props.admin);
    deleteAdminById(props.admin.id).then(response=>{
      const code = response.code
      const {msg} =response
      if (code === 0) {
        message.success(msg)
        props.callback(props.admin)

      } else {
        message.error(msg)
      }
    })
  }

  return (
    <Popconfirm
        title={'删除管理员'}
        onCancel={cancel}
        onConfirm={deletAdmin}
    >
      <Button type={'primary'} danger>删除</Button>
    </Popconfirm>

  )
}

export default DeleteAdmin