import React , { Component, Fragment} from 'react';
import './_login.css';



class Login extends Component{

    constructor(){
        super();
        this.state={
            Style:'1',
        }
    }

    render(){
        
        return(
             <Fragment>
                <div style={{opacity:this.state.Style}}  className="modalDialog">
                 <h3>SCHEDULING</h3>
               <div>	
        	
              <center><h2 className="user"><span className="fa fa-user"></span></h2></center>
              <center><h2><span>
                   Scheduling sytem Login
                </span></h2></center>
            <div className="LoginMain">
        <label htmlFor="email">Email</label>
        
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text"><span className="fa fa-envelope"></span></div>
         </div>
       <input type="email" className="form-control"placeholder="email"/>
     </div>

     <label htmlFor="password">Password</label>
     <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text"><span className="fa fa-lock"></span></div>
         </div>
       <input type="password" className="form-control" placeholder="password"/>
     </div>

     <div className="custom-control custom-checkbox my-1 mr-sm-2">
       <input type="checkbox" id="check" className="custom-control-input"/>
       <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
     </div>

       <button>Login</button>
        
        </div>
       
             </div>
             </div>
             </Fragment>
        )
    }
}

export default Login;