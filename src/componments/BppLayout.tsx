import React, { Children, Component } from 'react'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
// import {  Content, Header } from 'antd/lib/layout/layout'
// import Sider from 'antd/lib/layout/Sider'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import LeftBar from './LeftBar';
import { leftBarRoutes, unAuthRoutes } from '../router';
import TopBar from './TopBar';
import SubTitle from './SubTitle';
import './css/BppLayout.css'

const { Header, Content, Footer, Sider } = Layout;


interface IPorps {
    children: any
}


 class AppLayout extends Component<IPorps> {




  render() {

    const items1: MenuProps['items'] = unAuthRoutes.map(key => ({
        key:key.path,
        label:key.path,
      })) as MenuProps['items'] ;
      

      

      // [UserOutlined, LaptopOutlined, NotificationOutlined]

      // const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
      //   (icon, index) => {
      //     const key = String(index + 1);
      
      //     return {
      //       key: `sub${key}`,
      //       // icon: React.createElement(icon),
      //       label: `仪表板 ${key}`,
      
      //       children: new Array(2).fill(null).map((_, j) => {
      //         const subKey = index * 2 + j + 1;
      //         return {
      //           key: subKey,
      //           label: `子选项${subKey}`,
      //         };
      //       }),
      //     };
      //   },
      // )as MenuProps['items'] ;

      const items2: MenuProps['items'] = leftBarRoutes.map((key1) => {
        
        // console.log("---");
        // console.log(key)
        // console.log(key.children)
        // console.log(key1.children);
        // console.log("---");
        const ch = key1.children?.map((key2) => {

          const ch2 = key2.children?.map((key3) => {
            return {
              key: key3.key,
              label: key3.label,
              icon: key3.icon,
              // children:
            }
          })


         return { 
           key: key2.key,
           label: key2.label,
           icon: key2.icon,
           children: ch2
          }
        }) 
        

        return {
          key: key1.path,
          label: key1.path,
          icon: key1.icon,
          children:ch
        }
      }) as MenuProps['items'] ;



    return (

      // <>

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

      <LeftBar items3={items2}  ></LeftBar>
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
            minHeight: 1000,
          }}
        >
            
            {this.props.children}
          Content
            {/* {this.props.children} */}
        </Content>
      </Layout>
    </Layout>
  </Layout>

      // </>
    )
  }
}
 
export   {AppLayout,Sider,Footer,Header}

// export default Sider
