import { createContext, useState } from "react";
import HeaderComponent from "./components/bootstrap/header/header";

import NavigationRoot from "./navigation/navigation";



export const DataSharedContext = createContext()

const App = () => {

  const name = "sai"



  const[userData,setUserData] = useState({
    name:"Revi",
    location :"USA"
  })


  const changeName = (newName)=>{

    setUserData({...userData,name:newName})


  }




  return (
    <>
     <DataSharedContext.Provider value={{userData,changeName}} >
     <NavigationRoot />
     </DataSharedContext.Provider>

    </>
  );
};

export default App;
