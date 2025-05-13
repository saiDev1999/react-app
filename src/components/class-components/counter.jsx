import { Component } from "react";

import styles from "./styles/counter.module.css"
// import "./styles/counter1.css"







class Counter extends Component{
    



    // direct object way
    state={
        count:1
    }


    // constructor way
    // constructor(){
    //     super()
    //     this.state={
    //         count:1
    //     }
    // }

    incrementCount =()=>{
        this.setState({
          count: this.state.count + 1
        })
    }

    decrementCount =()=>{


        if(this.state.count>0){
            this.setState({
                count:this.state.count-1
            })

        }else{
            alert("please check the current count. its already 0")
        }


      
    }

    resetCount = ()=>{
        this.setState({
            count: 1
        })
    }


    isEven=()=>{
       let isEven = this.state.count%2==0
       return isEven
    }


    render(){
        return(
            <>
            <h1>Counter app</h1>

            <h2>Count value : {this.state.count}</h2>


            <p className={this.isEven()?styles.evenStyle: "odd-style"} >{this.isEven() ? `${this.state.count} is a Even number`:`${this.state.count} is a odd number`}</p>

            {/* <p style={{
                color:this.isEven() ? "blue":"red"

            }} >{this.isEven() ? `${this.state.count} is a Even number`:`${this.state.count} is a odd number`}</p> */}
            <button onClick={this.incrementCount} >Increment</button>
            <button onClick={this.decrementCount} >Decrement</button>
            <button onClick={this.resetCount} >Reset</button>
            
            
            </>
        )
    }
}
export default Counter
