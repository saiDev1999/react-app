import Profile from "./components/profile"
import OrderedList from "./components/list/ordered-list"
import UnorderedList from "./components/list/unordered-list"
import H1,{Heading2 as H2,Heading3 as H3,Heading4 as H4} from "./components/headings/headings"
import TodoList from "./components/todo/todo-list"
import InstagramPost from "./components/todo/instagram-post"

import Button from "./components/class-components/button"

const App =()=>{

  const employeeData={
    nameOfPerson :"Ravi",
    salary:9090
  }
  const {nameOfPerson,salary} = employeeData

  return (
    <div>
    
   
  <InstagramPost/>
  <Button/>
     
     
    </div>
  )

}

export default App;