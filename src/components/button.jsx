import React from "react"





const Button = ({title="Click",onClick})=>{

    console.log(title,"Title")

    const handleClick=()=>{
        onClick()
    }
  
    return(
        <button onClick={handleClick}  >{title}</button>
    )
}

export default React.memo(Button)