import { Button, Space, Table } from 'antd'
import React, { Component } from 'react'
import { getAdminList } from '../../api/admin'
import AddAdmin from './AddAdmin'
import DeleteAdmin from './DeleteAdmin'
import EditAdmin from './EditAdmin'


 export interface IAdmin {
    id: number
    name: string
    mobile: string
    email: string
    roleId: number
  }

  interface IState {
    loading: boolean
    dataList: IAdmin[]
    current: number
    pageSize: number
    total: number
    admin?: IAdmin
    isShowEditAdminModel: boolean
    isShowAddAdmiinModel: boolean
  }


 class AdminList extends Component<any,IState> {

  constructor(props: any) {
    super(props)
    this.state={
      loading: true,
      dataList: [],
      current: 1,
      pageSize: 15,
      total: 0,
      isShowEditAdminModel: false,
      isShowAddAdmiinModel: false
    }
  }

  getAdminList = (page: number = 1) => {
    getAdminList(page).then(response=>{
      const {dataList, currentPage, limit, totalCount} = response.data
      this.setState({
        dataList: dataList,
        loading: false,
        current: currentPage,
        pageSize: limit,
        total: totalCount
      })
    })
  }

  componentDidMount() {
    this.getAdminList()
  }

  change = (current:number) => {

    this.getAdminList(current)

  }

  deleteAdmin = (admin:IAdmin) => {
    this.setState((state) => ({
      dataList: state.dataList.filter(a => a.id !== admin.id)
    }))
  }

  showEditAdminModal=(admin:IAdmin)=>{
    console.log(admin);
    this.setState({
      admin: admin,
      isShowEditAdminModel: true
    })
  }

  hideEditAdminModel=()=>{
    this.setState({
      isShowEditAdminModel: false
    })
  }

  showAddAdminModel = ()=>{
    this.setState({
      isShowAddAdmiinModel: true
    })
  }
  hideAddAdminModel = (refresh?:boolean)=>{
    if (refresh) {
      this.getAdminList()
    }
    this.setState({
      isShowAddAdmiinModel: false
    })
  }


  render() {
    return (
      <>
      <Button type='primary' onClick={this.showAddAdminModel}>???????????????</Button>
      <AddAdmin 
          visible={this.state.isShowAddAdmiinModel} 
          cancel={this.hideAddAdminModel} 
          />
      <EditAdmin 
            admin={this.state.admin} 
            visible={this.state.isShowEditAdminModel}
            cancel={this.hideEditAdminModel}
            
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
             <Table.Column 
                            title={'ID'}
                            dataIndex={'id'}              
                            
              />
              <Table.Column 
                            title={'??????'}
                            dataIndex={'email'}              
                            
              />
              <Table.Column 
                            title={'?????????'}
                            dataIndex={'name'}              
                            
              />
              <Table.Column 
                            title={'?????????'}
                            dataIndex={'mobile'}                       
              />
              <Table.Column 
                            title={'??????'}
                            render={(admin: IAdmin) => (
                              <Space>
                                <Button type={'primary'} onClick={()=>{this.showEditAdminModal(admin)}} >??????</Button>
                                <DeleteAdmin admin={admin} callback={this.deleteAdmin}/>
                              </Space>
                            )}                    
              />
              


        </Table>

      </>
    )
  }
}

export default AdminList