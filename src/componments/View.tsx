import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
  import Login from '../pages/Login/Login';
import UserList from "../pages/user/UserList";
import AppLayout from "./BppLayout";



class View extends Component {


    render() {
         return (
          
          <Router>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/dashboard">
                <AppLayout>
                  <Dashboard/>
                </AppLayout>
                
              </Route>
              <Route path="/user/list">
                <AppLayout>
                  <UserList/>
                </AppLayout>
                
              </Route>
            </Switch>
          </Router>


         );
    
     
    }

}

export default View



