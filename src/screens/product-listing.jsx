import { Link } from "react-router-dom"
import HeaderComponent from "../components/bootstrap/header/header"
import { UseEffectExample } from "../components/functional/hooks/useEffect/useEffect"

const ProductListing = ()=>{
    return(
        <div>
   <HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />
            <h1>Wellcome to Product Listing screen</h1>
            {/* <UseEffectExample/> */}
            <ol>
                <li><Link to={"/product/apple/info"}>Apple</Link></li>
                <li><Link to={"/product/orange/info"}>Orange</Link></li>
                <li><Link to={"/product/pineapple/info"}>Pineapple</Link></li>
      
            </ol>
            
        </div>
    )
}

export default ProductListing