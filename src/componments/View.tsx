import { Component } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
  import Login from '../pages/Login/Login';



class View extends Component {


    render() {
         return (

<BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />}>
      </Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  </BrowserRouter>


         );
    
     
    }

}

export default View



