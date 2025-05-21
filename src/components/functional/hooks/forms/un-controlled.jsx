import { useEffect, useRef, useState } from "react"






const UncontrolledComponent  = () =>{
    const usernameRef=useRef("")
    const passwordRef=useRef("")
    
    const [usernameErr,setUserNameErr] = useState("")
    const [passwordErr,setPasswordErr] = useState("")

    const handleSubmit=()=>{
        const userNameInput = usernameRef.current.value
        const passwordInput = passwordRef.current.value

        if(userNameInput.length>10){
            setUserNameErr("Please enter valid name <10")
        }else{
            if(passwordInput.length>10){
                setPasswordErr("Please enter valid password <10") 
            }
           
        }
    }



    useEffect(()=>{
        passwordRef.current.focus()

    },[])

    return(
        <>
        <h1>Use ref example</h1>
        <label>User name</label>
        <input  type="text"  ref={usernameRef}  />
        <span style={{color:"red"}} >{usernameErr}</span>  

              <label>Password</label>

        <input  type="password"  ref={passwordRef}  />
        <span style={{color:"red"}} >{passwordErr}</span>  
        <button onClick={handleSubmit} >Submit</button>
        </>
    )
}
export default UncontrolledComponent