import { useState } from "react"







const LoginForm=()=>{
    const[userName,setUserName] =useState("")
    const [userNameErr,setUserNameErr] = useState(false)

    const[password,setPassword] =useState("")
    const [passwordErr,setPassErr] = useState(false)

    const userNameHandler=(event)=>{
       const userEnteredValue= event.target.value
       console.log(userEnteredValue)
       setUserName(userEnteredValue)
  
        if(userEnteredValue.length>10){
            setUserNameErr(true)
        }else{
          setUserNameErr(false)
        }

    }

    const handlePasswordHandler =(event)=>{
      const pass = event.target.value
      console.log(pass)
      setPassword(pass)


      if(validatePassword(pass)){
        setPassErr(false)
    }else{
      setPassErr(true)
    }

    }

   const  validatePassword=(password)=> {
      const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/
      return re.test(password);
  }

    return(
        <> 
        <h2>Form control: input</h2>
  <p>The form below contains two input elements; one of type text and one of type password:</p>
  <form>
    <div class="form-group">
      <label for="usr">Name:</label>
      <input type="text" class="form-control" id="usr" value={userName} onChange={userNameHandler} />
{  userNameErr &&    <span style={{color:"red"}} >Please enter less than 10 characters</span>}
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" value={password} onChange={handlePasswordHandler} />
      {   passwordErr &&   <span style={{color:"red"}} >Please enter strong password it should contains small characters, capital, numbers, special characters </span>}

    </div>
  </form>
        </>
    )
}

export default LoginForm