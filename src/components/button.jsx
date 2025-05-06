




const Button = ({title="Click"})=>{




    const handleClick=()=>{

        alert(title)

    }
  
    return(
        <button onClick={handleClick}  >{title}</button>
    )
}

export default Button