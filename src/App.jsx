import Profile from "./components/profile"
import OrderedList from "./components/list/ordered-list"
import UnorderedList from "./components/list/unordered-list"
import H1,{Heading2 as H2,Heading3 as H3,Heading4 as H4} from "./components/headings/headings"
import TodoList from "./components/todo/todo-list"
import InstagramPost from "./components/todo/instagram-post"
import Greeting from "./components/greeting/greeting"
// import Button from "./components/button"

import Button from "./components/class-components/button"


const App =()=>{

  const employeeData={
    nameOfPerson :"Ravi",
    salary:9090
  }


  // array of strings

  // const personNames =["fathima","ravi","sanjay","mishra","sai","mac","max","len"]


  // array of objects

  const personNames =[
    {
      name:"sai",
      time:"10AM",
      message:"Good morning"
    },
    {
      name:"ravi",
      time:"11AM",
      message:"Good morning"
    },
    {
      name:"raju",
      time:"11AM",
      message:"Good morning"
    },
    
  ]

  const {nameOfPerson,salary} = employeeData

  return (
    <div>
    <H1>Hello i am heading 1</H1>
    <H1>Hello i am heading how are you</H1>
    <H2>Hello i am heading 2</H2>

      <Button  title={"Login"}   />
      <Button title={"Sign out"} />
      <Button  title={"Sign in"} />

    
{/* <Greeting name={personNames[0]} message={"Good morning"} time={"10AM"}/>
<Greeting name={personNames[1]} message={"Good morning"} time={"10AM"}/>
<Greeting name={personNames[2]} message={"Good morning"} time={"10AM"}/>
<Greeting name={personNames[3]} message={"Good morning"} time={"10AM"}/>
<Greeting name={personNames[4]} message={"Good morning"} time={"10AM"}/> */}


   {
    personNames.map((person)=>{
      const {name,message,time} =person
      return <Greeting name={name} message={message} time={time}/>

    })
   }


     
    </div>
  )

}

export default App;