import React, {ReactNode, lazy, Children} from "react";
// import type * as React from 'react';
import {
    HomeOutlined,
    DashboardOutlined,
    UserOutlined,
    SmileOutlined,
    UsergroupAddOutlined,
    CodepenOutlined
} from '@ant-design/icons'
import Login from "../pages/Login/Login";
import { MenuProps } from "antd";
import Dashboard1 from "../pages/dashboard/select1/dashboard1";
import Dashboard2 from "../pages/dashboard/select1/dashboard2";


const Dashboard =lazy(() => import("../pages/Login/Login"))
const UserList = lazy(() => import("../pages/user/UserList"))


export interface IRoute {
    key: string
    type: 'group';
    label?: React.ReactNode;
    // children?: ItemType[];

    exact?: boolean
    path: string
    title: string
    icon?: ReactNode
    component?: ReactNode
    children?: IRoute[]
}


export const routes: IRoute[] = [
    {
        key: '/dashboard',
        type: 'group',
        path: '/dashboard',
        title: 'route.index',
        icon: <HomeOutlined/>, 
    },
    {
        key: '/login',
        type: 'group',
        path: '/login',
        title: 'route.index',
        icon: <HomeOutlined/>

    },
]


export const unAuthRoutes: IRoute[] = [
    {
        key: '/login',
        type: 'group',
        path: '/login',
        exact: true,
        title: 'page404',
        component: <Login/>,
        
    },
    // {
    //     type: 'group';
    //     path: '*',
    //     title: 'page404',
    //     component: <Page404/>
    // }
]

export const leftBarRoutes: IRoute[] = [
    {
        key: '/dashboard',
        type: 'group',
        path: '/dashboard',
        title: 'route.index',
        icon: <HomeOutlined/>,
        children: [{
            key: '/dashboard/select1',
            label: '/dashboard/select1',
            type: 'group',
            path: '/dashboard/select1',
            title: 'route.index',
            icon: <HomeOutlined/>,
            component: <Dashboard/>,
            children: [
                {
                    key: '/dashboard/select1/choose1',
                    label: '/dashboard/select1/choose1',
                    type: 'group',
                    path: '/dashboard/select1/choose1',
                    title: 'route.index',
                    // icon: <HomeOutlined/>,
                    component: <Dashboard1/>
                },
                {
                    key: '/dashboard/select1/choose2',
                    label: '/dashboard/select1/choose2',
                    type: 'group',
                    path: '/dashboard/select1/choose2',
                    title: 'route.index',
                    // icon: <HomeOutlined/>,
                    component: <Dashboard2/>
                }
            ]

        },
        {
            key: '/dashboard/select2',
            label: '/dashboard/select2',
            type: 'group',
            path: '/dashboard/select2',
            title: 'route.index',
            icon: <HomeOutlined/>,
            component: <Login/>
        }
    ]

    },
    {
        key: '/login',
        type: 'group',
        path: '/login',
        title: 'route.index',
        icon: <HomeOutlined/>

    },
]



const router: IRoute[] = [
    ...routes
]

export default router
