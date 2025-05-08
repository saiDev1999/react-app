


const PackedItemsInTheBag = [
{
    name:"dress",
    isPacked:true
},
{
    name: "shoes",
    isPacked:true
},
{
    name: "lipstick",
    isPacked:true
},
{
    name: "sunscreen",
    isPacked:true
},
{
    name: "perfume",
    isPacked:false
},

]




const PackedItemList =()=>{

    return (
        <>
        <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        {
            PackedItemsInTheBag.map(eachItem=><Item name={eachItem.name} isPacked={eachItem.isPacked}  />)
        }
      
      </ul>
    </section>
        
   

        </>
    )
}

export default PackedItemList

function Item({ name, isPacked }) {
    return isPacked && (
      <li className="item">

         <del>
            {name + ' ✅'}
          </del>
     
      
      </li>
    );
  }
  










