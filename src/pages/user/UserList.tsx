import { Button, Space, Table } from 'antd'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { getUserList } from '../../api/User'
import DeleteUser from './DeleteUser'
import EditUser from './EditUser'

interface IPorps extends RouteComponentProps {

}
 
export interface IUser{
  id: number
  name: string
  moblie: string
  emaile: string
}

interface IState{
  dataList: IUser[],
  loading: boolean,
  current: number,
  pageSize: number,
  total: number,
  user?: IUser,
  isShowEditUserModal:boolean
}

 class UserList extends Component<IPorps,IState> {

  constructor(props: IPorps, context: any){
    super(props, context);
    this.state = {
      dataList: [],
      loading: true,
      current: 1,
      pageSize: 15,
      total:0,
      isShowEditUserModal: false,
    }

  }

  getUserList = (page: number = 1) => {

    this.setState({
      loading: true
    })

    getUserList(page).then(response => {
      
      // if (response.data.dataList!= null) {

      // }
      
      

      // while(response.code !== 0){
      //     console.log(response);
      // }
      
      if (response.code === 0) {
      const {dataList, currentPage, limit, totalCount} = response.data         
      
      this.setState({
        dataList: dataList,
        loading: false,
        current: currentPage,
        pageSize: limit,
        total: totalCount
      
      })
      
      }
      
      
    })
  }

  componentDidMount() {
    this.getUserList()
  }

  change=(current:number)=>{
    this.getUserList(current)
  }

  deleteUser=(user: IUser) => {
    this.setState((state) => {
      dataLsit: state.dataList.filter(u => u.id !== user.id)
    })
  }

  showEditUserModel=(user:IUser) => {
    console.log('555showEditUserModel');
    
    console.log(user)

    console.log('555showEditUserModel');
    

    this.setState({
      isShowEditUserModal: true,
      user: user
    })
  }

  hideEditUserModal=() => {
    this.setState({
      isShowEditUserModal: false
    })
  }

  render() {
    return (
      <>
        <EditUser user={this.state.user} 
                  visible={this.state.isShowEditUserModal}
                  cancel={this.hideEditUserModal} />
        <Table  dataSource={this.state.dataList}
                rowKey={'id'}
                loading={this.state.loading}
                pagination={{
                  position: ['bottomCenter'],
                  current: this.state.current,
                  pageSize: this.state.pageSize,
                  total: this.state.total,
                  onChange: this.change
                }}

        >
          <Table.Column title={'id'} dataIndex={'id'} ></Table.Column>
          <Table.Column title={'用户名'} dataIndex={'name'} ></Table.Column>
          <Table.Column title={'邮箱'} dataIndex={'email'} ></Table.Column>
          <Table.Column title={'手机号'} dataIndex={'moblie'} ></Table.Column>
          <Table.Column title={'管理'} 
                        render={(user: IUser) => (
                           <Space>
                            <Button type='primary' onClick={()=>{this.showEditUserModel(user)}} >编辑</Button>
                            <DeleteUser user={user} callback={this.deleteUser}/>
                          </Space>
    )}
    
    />                
        </Table>
      </>

    )
  }
}

export default withRouter(UserList); 