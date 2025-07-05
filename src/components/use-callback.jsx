import { useCallback, useState } from "react"
import Button from "./button"




const UseCallBack = ()=>{


    const [counter1,setCounter1]=useState(1)
    const [counter2,setCounter2]=useState(1)

    const increaseCounter1 =useCallback(()=>{
    setCounter1(counter1+1)
},[counter1])


    const increaseCounter2 = useCallback(()=>{
        setCounter2(counter2+1)
    },[counter2])



    return(
        <>

        <Button title={`1. Incremase Counter  ${counter1}`} onClick={increaseCounter1} />

        <Button title={`2. Incremase Counter  ${counter2}`}  onClick={increaseCounter2}/>
   
        <h1>Use call back parent</h1>
        </>

    )
}

export default UseCallBack