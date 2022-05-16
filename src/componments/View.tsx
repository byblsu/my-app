import { Component, Fragment, ReactNode } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
  import Login from '../pages/Login/Login';
import UserList from "../pages/user/UserList";
import { IRoute, leftBarRoutes, routes } from "../router";
import {AppLayout} from "./BppLayout";



class View extends Component {
    generateRoute = (routes: IRoute[]): ReactNode =>{
      return (
        <>
        {
          routes.map(r=> {
            if (r?.children){
              return (
                <Fragment key={r.path}>
                  <Route path={r.path} key={r.path} exact={r.exact}>
                    {this.generateRoute(r.children)}
                  </Route>
                  
                </Fragment>

                // <Fragment key={r.path}>
                //                         <Route path={r.path} key={r.path} exact={r.exact}>
                //                             {r.component}
                //                         </Route>
                //                         {this.generateRoute(r.children)}
                //                     </Fragment>


                // <></>
              )

        
        
        }
            return (
              <>
                  <Route path={r.path} key={r.path} exact={r.exact}>
                      {r.component}
                  </Route>
              </>
            )

          })
        }
        </>
      )
    }

    render() {
         return (
          // {this.generateRoute(routes)}
          <Router>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              {/* <Route path="/dashboard">
                <AppLayout>
                  <Dashboard/>
                </AppLayout>
                
              </Route>
              <Route path="/user/list">
                <AppLayout>
                  <UserList/>
                </AppLayout>
                
              </Route> */}

              <AppLayout>
               {this.generateRoute(leftBarRoutes)}
              </AppLayout>


            </Switch>
          </Router>


         );
    
     
    }

}

export default View



