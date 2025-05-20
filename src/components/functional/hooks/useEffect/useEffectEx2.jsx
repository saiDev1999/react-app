import { useEffect, useState } from "react"









const UseEffectEx2 =()=>{

    const [count,setCount]=useState(0)


    useEffect(()=>{
        console.log(count,"inside use effect")
        document.title=`React next ${count}`
    },[count])


    const incrementHandler=()=>{
        setCount(count+1)
    }
console.log("re-rendering the component")
    return(
        <>
        

         <h1>Use effect example 2</h1>
         <h1>{count}</h1>
         <button onClick={incrementHandler} >Increment</button>
        </>
    )


    
    
}

export default UseEffectEx2
