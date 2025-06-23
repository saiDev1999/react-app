import HeaderComponent from "../components/bootstrap/header/header"




const AboutScreen = ()=>{
    return(
        <div>
            <HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />

            <h1>Wellcome to about screen</h1>
            
        </div>
    )
}

export default AboutScreen