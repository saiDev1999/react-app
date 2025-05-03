import { person1 } from "./person"






const TodoList = () =>{
    console.log(person1)

    const {name,imageURl,todo} = person1

    return (
        <>
        <h1>{name}</h1>
        <img
        src={imageURl}
        alt="johnson"
        />
        <button  onClick={()=>alert(`i am ${name}`)} >Click for info</button>

        <ul>
          

        {
           todo.map((item)=>{
            return (
               <li className="list-item" >{item}</li>
            )
           }) 
        }



  

        </ul>
        
        </>

    )
}

export default TodoList