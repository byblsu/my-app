import React, {ReactNode, lazy} from "react";
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

const Dashboard =lazy(() => import("../pages/Login/Login"))
const UserList = lazy(() => import("../pages/user/UserList"))


export interface IRoute {
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
        type: 'group',
        path: '/dashboard',
        title: 'route.index',
        icon: <HomeOutlined/>

    },
    {
        type: 'group',
        path: '/login',
        title: 'route.index',
        icon: <HomeOutlined/>

    },
]


export const unAuthRoutes: IRoute[] = [
    {
        type: 'group',
        path: '/login',
        exact: true,
        title: 'page404',
        component: <Login/>
    },
    // {
    //     type: 'group';
    //     path: '*',
    //     title: 'page404',
    //     component: <Page404/>
    // }
]


const router: IRoute[] = [
    ...routes
]

export default router
