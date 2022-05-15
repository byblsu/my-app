import { Breadcrumb } from 'antd'
import { match } from 'assert'
import React, { Component } from 'react'
import { matchPath, RouteComponentProps, withRouter } from 'react-router-dom'
import { IRoute, routes } from '../router'
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

    static getRouterList(routes:IRoute[],path:string): IRoute[] {
        let arr: IRoute[] = []
        for (let r of routes) {
            if (r.children) {
                arr.push(...SubTitle.getRouterList(r.children,path)) 
            }
            console.log(matchPath(path,r.path))
            if (matchPath(path,r.path) !== null ) {
                arr.push(r)
            }
        } 
        return arr
    }

     static getDerivedStateFromProps(props: Readonly<IPorps>, state: Readonly<IState>){
        return {
            routeList: SubTitle.getRouterList(routes,props.location.pathname)
        }
     }
  render() {
    return (
      <>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
            {
                this.state.routeList.map(r => (<Breadcrumb.Item key={r.path}>{r.path}</Breadcrumb.Item>))
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