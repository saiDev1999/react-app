import { Component } from "react";
import EmployeeVisibleData from "../employee-data";




class GreetingComponent extends Component{

    constructor(){
        super()
        this.state={
            isLogin : false,
            name :"heena"
        }
    }


    handleClick =()=>{
        this.setState({
            isLogin : !this.state.isLogin
        });
    }


    render(){
        return(
            <>
      
      {
        this.state.isLogin ? <h2>wellcome {this.state.name}</h2> :         <h3>Please login to access the content</h3>
      }

      {
        this.state.isLogin && <EmployeeVisibleData/>
      }


            <button onClick={this.handleClick} >{this.state.isLogin ? "logout":"login"}</button>
            </>
        )
    }
}

export default GreetingComponent