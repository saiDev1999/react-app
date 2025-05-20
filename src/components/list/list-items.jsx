
import React from "react"



const ListItems =(props)=>{
    const {list}=props
    return(
        <React.Fragment>
        {
            list.map((each,index)=><li key={index} >{each}</li>)
        }
        </React.Fragment>
    )
}

export default ListItems