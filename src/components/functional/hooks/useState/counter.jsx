
import {useState} from "react"





const Counter = () =>{

    // state creation
    const [count,setCount] = useState(5)


    const incrementCount =()=>{
        // update of the state
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)
    }

    const decrementCount=()=>{
        if(count>0){
            setCount(count-1)
        }

    }

    const resetCount=()=>{
        setCount(0)
    }

//   const counterHandler=(type)=>{
//      console.log(type)
//     switch(type){
//         case "INCREMENT":
//             setCount(count+1)
//             break;
//         case "DECREMENT":
//            if(count>0){
//             setCount(count-1)
//            }
//             break;
//         case "RESET":
//             setCount(0)
//             break;
//         default :
//             setCount(100)
//     }
//   }


const startTimer=()=>{


    setInterval(()=>{
        console.log(count)

        if(count>0){
            if(count===0){
                alert("Time up")
            }
            setCount(count=>count-1)
        }

    },1000)
}

    return(

        <>
        <h3 style={{
            color:count<10 ?"red":"black"
        }} >Timer {count}</h3>
        <button onClick={startTimer} >Timer start</button>
        <button onClick={incrementCount} >Increment</button>
        <button onClick={decrementCount} >Decrement</button>
        <button onClick={resetCount} >Reset</button>
        
        </>
    )
}

export default Counter


