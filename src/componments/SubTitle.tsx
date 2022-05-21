// import { Breadcrumb } from 'antd'
import { Breadcrumb } from 'antd'
import { match } from 'assert'
import React, { Component } from 'react'
import { matchPath, RouteComponentProps, withRouter } from 'react-router-dom'
import { IRoute, leftBarRoutes, unAuthRoutes } from '../router'
import {Content} from './BppLayout'
import './css/BppLayout.css'


interface IPorps extends RouteComponentProps {

}

interface IState {
    routeList: IRoute[]
}

 class SubTitle extends Component<IPorps,IState> {

    constructor(props: IPorps) {
        super(props);
        this.state = {
            routeList: []
        }
    }

    static getRouterList(routes1:IRoute[],path:string): IRoute[] {
        let arr: IRoute[] = []
        for (let r of routes1) {

            if (r.children) {
                arr.push(...SubTitle.getRouterList(r.children,path)) 
                // // @ts-ignore
                // if(r.children.children) {
                //   // @ts-ignore
                //   arr.push(...SubTitle.getRouterList(r.children.children,path))
                // }
            }
            console.log(444);
            
            console.log('-----')
            console.log(path)
            console.log(r.path)
            console.log(matchPath(path,r.path))
            console.log('-----');
            console.log(444);
            
            
            if (matchPath(path,r.path) !== null ) {
                arr.push(r)
                arr = arr.reverse()
            }

        } 
        return arr
    }

     static getDerivedStateFromProps(props: Readonly<IPorps>, state: Readonly<IState>){
        return {
            routeList: SubTitle.getRouterList(leftBarRoutes,props.location.pathname)
        }
     }
  render() {
    return (
      <>
        <Breadcrumb
          // style={{
          //   margin: '16px 0',
          // }}
        >
            {
                this.state.routeList.map(r => (<Breadcrumb.Item key={r.path}>
                  {r.path}
                  {/* {i18n.t(r.title)} */}
                  </Breadcrumb.Item>))
            }
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb> 
      </>
    )
  }
}

export default withRouter(SubTitle) 