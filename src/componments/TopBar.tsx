// import { Header } from 'antd/lib/layout/layout'
import Menu from 'antd/lib/menu'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { Component } from 'react'
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom'
import { MenuInfo } from 'rc-menu/lib/interface'
import './css/BppLayout.css'
import { Header } from './BppLayout'
import { Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import {inject, observer} from 'mobx-react'
import AdminStore from '../store/AdminStore'
import { rm } from '../utils/storage'



interface IPorps extends RouteComponentProps {
    adminStore?:AdminStore
    items4: ItemType[] | undefined
    children: any
} 


 class TopBar extends Component<IPorps> {



  myClick=(item:MenuInfo)=>{
    console.log(item);
    
   this.props.history.push(item.key)
}

  render() {

    const logout = () => {
      rm('token')
      this.props.history.replace('/login')
      // history.pushState(_,)
    }

    const menu = (
      <Menu
        items={[
          {
            label: (
              // href="http://localhost:3000/login"
              // target="_blank"
              // rel="noopener noreferrer"
              <span   onClick={logout}>
                退出
              </span>
            ),
            key: '0',
          },
          // {
          //   label: (
          //     <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          //       2nd menu item
          //     </a>
          //   ),
          //   key: '1',
          // },
          // {
          //   type: 'divider',
          // },
          // {
          //   label: '3rd menu item（disabled）',
          //   key: '3',
          //   disabled: true,
          // },
        ]}
      />
    );

    return (
      <>
    <Header className="header" style={{display:'flex'}} >
      <div className="logo" ></div>
<Menu style={{flex: 'auto'}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={this.props.items4} onClick={this.myClick} />
      <Dropdown overlay={menu}>
{/* e => e.preventDefault() */}
      
    <a onClick={e => e.preventDefault()}>
      {/* <Space> */}
      
        {this.props.adminStore?.admin.name} 
        <DownOutlined />
     
      {/* </Space> */}
    </a>
  </Dropdown>





    </Header>
      
      </>
    )
  }
}


export default withRouter(inject('adminStore')(observer(TopBar)))

// export default inject()(observer(TopBar))