import HeaderComponent from "../components/bootstrap/header/header"


const HomeScreen = ()=>{
    return(
        <div>

<HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />

            <h1>Wellcome to home screen</h1>
            
        </div>
    )
}

export default HomeScreen