import Button from "./components/button"
import Profile from "./components/profile"
import OrderedList from "./components/list/ordered-list"
import UnorderedList from "./components/list/unordered-list"
import H1,{Heading2 as H2,Heading3 as H3,Heading4 as H4} from "./components/headings/headings"

const App =()=>{

  const employeeData={
    nameOfPerson :"Ravi",
    salary:9090
  }
  const {nameOfPerson,salary} = employeeData

  return (
    <div>
      <h1>Hello Good morning {nameOfPerson} </h1>
      <H1></H1>
      <H2/>
      <H3/>
      <H4/>

    <Button/>
    <Button/>
    <Button/>
    <Profile/>
    <Profile/>
    <Profile/>
    <OrderedList/>
    <UnorderedList/>
     
     
    </div>
  )

}

export default App;