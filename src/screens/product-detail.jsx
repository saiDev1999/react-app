import HeaderComponent from "../components/bootstrap/header/header"






const ProductDetailScreen = ()=>{
    return(
        <div>

<HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />

            <h1>Wellcome to  Product Detail Screen </h1>
            <h4>This is the mango screen detail screen</h4>
            
        </div>
    )
}

export default ProductDetailScreen