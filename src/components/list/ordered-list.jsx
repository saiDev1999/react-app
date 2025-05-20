

import ListItems from "./list-items"



const OrderedList =(props)=>{
    const {list}=props

    return(
  
        <ol>
           <ListItems  list={list} />
        </ol>

    )

}
export default OrderedList

