import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { MenuInfo } from 'rc-menu/lib/interface'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './css/BppLayout.css'


interface Iprop extends RouteComponentProps{
    items3: ItemType[] | undefined
}

 class LeftBar extends Component<Iprop> {
     myClick=(item:MenuInfo)=>{
       console.log('----')
         console.log(item);
         console.log('====');
         
         
        this.props.history.push(item.key)
     }
  render() {
    return (
     <>
        <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          onClick={this.myClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          // onSelect={}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={this.props.items3}
        />
      </Sider> 
     </>
    )
  }
}


export default withRouter(LeftBar)