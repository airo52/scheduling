import React, { Component } from "react"
import Login from '../components/auth/login/login';
class Router extends Component{
    render(){
        return(
            <React.Fragment>
              <Login/>
            </React.Fragment>
        );
    }
}

export default Router;