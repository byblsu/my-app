import { Button, Space, Table } from 'antd'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { getUserList } from '../../api/User'
import AddUser from './AddUser'
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
  isShowAddUserModal: boolean
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
      isShowAddUserModal: false
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

  hideEditUserModal=(refresh?: boolean) => {
    if (refresh) {
      console.log(666);
      console.log(refresh);
      console.log(666);
      
      
      this.getUserList()
    }

    // console.log(666);
    //   console.log(refresh);
    //   console.log(666);

    this.setState({
      
      
      isShowEditUserModal: false
    })
  }

  showAddUserModal=()=>{
    this.setState({
      isShowAddUserModal:true
    })

  }
  hideAddUserModal=(refresh?:boolean)=>{

    if (refresh) {
      this.getUserList()
    }

    this.setState({
      isShowAddUserModal: false
    })
  }


  render() {
    return (
      <>
        <Button 
            type='primary' 
            onClick={this.showAddUserModal}
            
            >
              ????????????
        </Button>
        <AddUser 
            visible={this.state.isShowAddUserModal} 
            cancel={this.hideAddUserModal}
        />
        <EditUser user={this.state.user} 
                  visible={this.state.isShowEditUserModal}
                  cancel={this.hideEditUserModal} 
        />
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
          <Table.Column title={'?????????'} dataIndex={'name'} ></Table.Column>
          <Table.Column title={'??????'} dataIndex={'email'} ></Table.Column>
          <Table.Column title={'?????????'} dataIndex={'moblie'} ></Table.Column>
          <Table.Column title={'??????'} 
                        render={(user: IUser) => (
                           <Space>
                            <Button type='primary' onClick={()=>{this.showEditUserModel(user)}} >??????</Button>
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