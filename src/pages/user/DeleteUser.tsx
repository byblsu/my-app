import { Button, message, Popconfirm } from 'antd'
import React from 'react'
import { deleteUserList } from '../../api/User'
import { IUser } from './UserList'

interface IPorps {
    user: IUser 
    callback: (user: IUser) => void
}

const DeleteUser: React.FC<IPorps> = (props: IPorps) => {
  const deleteUser=()=>{
      deleteUserList(props.user.id).then(response=>{
          const {msg}= response.data
          if (response.code === 0) {

            
                message.success("删除成功")
                props.callback(props.user)
                
          } else {
                message.error(msg)
                console.log(555);
                
          }
      })
    //   console.log(props.user);
      
  }
  const cancel = () => {
      message.info("取消删除")
  }
  
    return (
    <>
        <Popconfirm 
        title={'删除用户'}
        onConfirm={deleteUser}
        onCancel={cancel}
        >
        <Button type={'primary'} danger>删除</Button>
        </Popconfirm>
    </>
  )
}

export default DeleteUser