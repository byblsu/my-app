import React, { Component } from 'react'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import LeftBar from './LeftBar';
import { routes } from '../router';
import TopBar from './TopBar';
import SubTitle from './SubTitle';



interface IPorps {
    children: any
}


 class AppLayout extends Component<IPorps> {




  render() {

    const items1: MenuProps['items'] = routes.map(key => ({
        key:key.path,
        label:key.path,
      })) as MenuProps['items'] ;
      

      

      // [UserOutlined, LaptopOutlined, NotificationOutlined]

      const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
        (icon, index) => {
          const key = String(index + 1);
      
          return {
            key: `sub${key}`,
            // icon: React.createElement(icon),
            label: `仪表板 ${key}`,
      
            children: new Array(2).fill(null).map((_, j) => {
              const subKey = index * 2 + j + 1;
              return {
                key: subKey,
                label: `子选项${subKey}`,
              };
            }),
          };
        },
      )as MenuProps['items'] ;



    return (

      <>

 <Layout>
    {/* <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header> */}

    <TopBar items4={items1}>

    </TopBar>

    <Layout>
       {/* <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>  */}

      <LeftBar items3={items2}></LeftBar>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <SubTitle></SubTitle>        

        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
            {this.props.children}
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>

      </>
    )
  }
}
 
export default AppLayout
