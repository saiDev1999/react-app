
const personData = [
    {
        name : "Sai",
        salary : 100,
        designation : "react dev",
        isEmployee : true
    },
    {
        name : "Fathima",
        salary : 50,
        designation : "angular dev",
        isEmployee : true
    },
    {
        name : "Kiran",
        salary : 50,
        designation : "mobile dev",
        isEmployee : true
    },
    {
        name : "Sarfaraz",
        salary : 50,
        designation : "angular dev",
        isEmployee : true
    },
]




const EmployeeVisibleData =()=>{

    return (

      <>

      {
        personData.map(eachPerson=>{
            return eachPerson.designation === "angular dev" ? <h2  style={{
                color:"black"
            }} >{eachPerson.name} is a {eachPerson.designation}</h2>
            :

            eachPerson.designation === "react dev" ? <h2  style={{
                color:"red"
            }} >{eachPerson.name} is a {eachPerson.designation}</h2>
            :
            <h2  style={{
                color:"green"
            }} >{eachPerson.name} is a {eachPerson.designation}</h2>

        })

      }
      
      </>

    )
}

export default EmployeeVisibleData
