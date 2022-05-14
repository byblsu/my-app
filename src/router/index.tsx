import React, {ReactNode, lazy} from "react";
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
    exact?: boolean
    path: string
    title: string
    icon?: ReactNode
    component?: ReactNode
    children?: IRoute[]
}


export const routes: IRoute[] = [
    {
        path: '/admin/dashboard',
        title: 'route.index',
        icon: <HomeOutlined/>

    },
]


export const unAuthRoutes: IRoute[] = [
    {
        path: '/login',
        exact: true,
        title: 'page404',
        component: <Login/>
    },
    // {
    //     path: '*',
    //     title: 'page404',
    //     component: <Page404/>
    // }
]


const router: IRoute[] = [
    ...routes
]

export default router
