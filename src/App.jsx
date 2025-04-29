
const App =()=>{

  const employeeData={
    nameOfPerson :"Ravi",
    salary:9090
  }
  const {nameOfPerson,salary} = employeeData

  return (
    <div>
      <h1>Hello Good morning {nameOfPerson} </h1>
      <h4>salary : {salary}</h4>
    </div>
  )

}

export default App;