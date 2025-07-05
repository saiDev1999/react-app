import { useMemo, useReducer ,useState} from "react"
import HeaderComponent from "../components/bootstrap/header/header"
import UseCallBack from "../components/use-callback"





const reducer =(state, action)=>{

    switch(action.type){
        case "ADD"  :

            return [...state,action.payload]

        case "DELETE":
            return state.filter((eachTodo)=>eachTodo !== action.payload)

        case "UPDATE":
            return state.map((eachTodo)=>eachTodo === action.payload ? action.payload : eachTodo)

        default :
            return state
    
    
    
    }

}


const AboutScreen = ()=>{
    const initialState=["I need to woke up at 6am"]

    
    const [todos, dispatch]=useReducer(reducer, initialState)
    const [userInput, setUserInput]=useState("")

    const [number,setNumbers] = useState(3)
    const [age,setAge] = useState(100)

    console.log(todos)

    const addTodo=()=>{
        console.log(userInput)

        dispatch({
            type :"ADD",
            payload: userInput

        })
    }


    const isEven = useMemo((num) =>{
        const isEven = num%2 === 0 
        console.log(number,isEven, "isEven")

        return isEven ?"Even Number": "Odd Number"

    }
,[number])


    const incrementHandler =()=>{
        setNumbers(number+1)
    }

    return(
        <div>
            <HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />
      <h1>Wellcome to about screen</h1>
      <UseCallBack/>
        {/* <h3>Number {number} is {isEven}</h3>

        <button onClick={incrementHandler} >Increment Number</button>


        <h1> Age is {age}</h1>
        <button onClick={()=>setAge(age-1)} >Decrease the age</button> */}
{/* <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", margin: "30px"}}> 



      <input  type="text"  value={userInput} onChange={(event)=>setUserInput(event.target.value)} />
      <button onClick={addTodo} >Add</button>
      </div> */}

            {/* <h1>Wellcome to about screen</h1> */}

            {/* {
                todos?.map((eachTodo, index)=>(
                    <div key={index}>
                        <h1>{eachTodo}</h1>
                        <button onClick={()=>dispatch({type:"DELETE", payload:eachTodo})}>Delete</button>
                    </div>
                ))
            } */}
            
        </div>  
    )
}

export default AboutScreen