// import Counter from "./components/class-components/counter";
import GreetingComponent from "./components/class-components/greeting";
import EmployeeVisibleData from "./components/employee-data";
import EvenOdd from "./components/even-odd"
import PackedItemList from "./components/trip-todo-list";
import "../src/components/class-components/styles/counter.css"
import CardComponent from "./components/bootstrap/card/card";
import HeaderComponent from "./components/bootstrap/header/header";
import StripedTable from "./components/bootstrap/table/table";
import Counter from "./components/functional/hooks/useState/counter";
import { UseEffectExample } from "./components/functional/hooks/useEffect/useEffect";
import UseEffectEx2 from "./components/functional/hooks/useEffect/useEffectEx2";
import UncontrolledComponent from "./components/functional/hooks/forms/un-controlled";

const App =()=>{

  const employeeData = [
    {
      serialNumber:1,
      firstName:"mark",
      secondName:"otto",
      userName:"@otto"
    },
    {
      serialNumber:2,
      firstName:"max",
      secondName:"well",
      userName:"@max"
    },
    {
      serialNumber:3,
      firstName:"cumin",
      secondName:"sefo",
      userName:"@cmn"
    },
    {
      serialNumber:3,
      firstName:"grace",
      secondName:"sefo",
      userName:"@cmn"
    },

  ]


  const headingList =   {
      heading1 :"Seral Number",
      heading2:"FirstName",
      heading3:"Last Name",
      heading4:"Username"
       }
  



  return (
<>
<HeaderComponent  title={"Flipkaart"}  navItems={["Home","Features","Pricing","About","Blog"]} />
<UncontrolledComponent/>
{/* <UseEffectExample/>
<UseEffectEx2/> */}

{/* <Counter/> */}
{/* <HeaderComponent  title={"Amazoon"}  navItems={["Home","Features","Pricing","About","Blog"]} />
<StripedTable tableData={employeeData}  headings={headingList}  /> */}
{/* <div style={{
      flexDirection:"row",
      flex:1,
      display:"flex",

    }} >
      <CardComponent imagePath={"https://cdn.dummyjson.com/recipe-images/1.webp"} 
      title ={"Pizza"}
      text ={"Delicious pizza topped with cheese"}
      />
       <CardComponent imagePath={"https://cdn.dummyjson.com/recipe-images/2.webp"} 
      title ={"Vegetarian Stir-Fry"}
      text ={"Delicious Vegetarian Stir-Fry topped with veggies"}
      />
       <CardComponent imagePath={"https://cdn.dummyjson.com/recipe-images/3.webp"} 
      title ={"Chocolate Chip Cookies"}
      text ={"Delicious Chocolate Chip Cookies"}
      />
    
   
    </div> */}


</>


  
  )

}

export default App;