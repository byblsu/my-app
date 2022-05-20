
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { MenuInfo } from 'rc-menu/lib/interface'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './css/BppLayout.css'
import {Sider} from './BppLayout'
import { Menu } from 'antd'


interface Iprop extends RouteComponentProps{
    items3: ItemType[] | undefined
    collapsed: boolean
}

 class LeftBar extends Component<Iprop> {
     myClick=(item:MenuInfo)=>{
      //  console.log('====')
      //    console.log(item);
      //    console.log('====');
         
         
        this.props.history.push(item.key)
     }
  render() {

    console.log('====')
    console.log(this.props.items3)
    console.log('====')

    return (
     <>
        <Sider width={200} trigger={null} collapsed={this.props.collapsed} collapsible className="site-layout-background">
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
          // icon ={this.props.items3.icon}
          items={this.props.items3}
        />
      </Sider> 
     </>
    )
  }
}


export default withRouter(LeftBar)