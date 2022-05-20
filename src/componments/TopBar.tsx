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

interface IPorps extends RouteComponentProps {
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
      this.props.history.push('/login')
      // history.pushState(_,)
    }

    const menu = (
      <Menu
        items={[
          {
            label: (
              // href="http://localhost:3000/login"
              <a target="_blank" rel="noopener noreferrer" onClick={logout}>
                1st menu item
              </a>
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
      <Space>
        退出
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>





    </Header>
      
      </>
    )
  }
}


export default withRouter(TopBar)

