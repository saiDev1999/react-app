import { useContext, useState } from "react"
import HeaderComponent from "../components/bootstrap/header/header"
import { DataSharedContext } from "../App"





const SettingScreen = ()=>{
    const {userData,changeName}=useContext(DataSharedContext)
    const [text,setText]=useState("")
    const onChange=()=>{
        // alert("clicked name change")
        console.log(text)

        changeName(text)
    }
    return(
        <div>

<HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />
            <h1>Wellcome to Setting Screen</h1>
            <h1>Hello {userData.name} Your Location is {userData.location}</h1>
         <label>Name</label>
            <input type="text" value={text}  onChange={e=>setText(e.target.value)} />
            <button onClick={onChange}  >Change name</button>
           
        </div>
    )
}

export default SettingScreen