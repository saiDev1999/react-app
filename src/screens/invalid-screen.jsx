




import { Link } from "react-router-dom"
import HeaderComponent from "../components/bootstrap/header/header"


const InvalidScreen = ()=>{
    return(
        <div>

<HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />

  <h1>404 ERROR. please check the url</h1>
  <Link to={"/"} >Back To Home</Link>
            
        </div>
    )
}

export default InvalidScreen