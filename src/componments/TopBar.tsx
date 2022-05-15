import { Header } from 'antd/lib/layout/layout'
import Menu from 'antd/lib/menu'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { MenuInfo } from 'rc-menu/lib/interface'
import './css/BppLayout.css'

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
    return (
      <>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={this.props.items4} onClick={this.myClick} />
    </Header>
      
      </>
    )
  }
}


export default withRouter(TopBar)