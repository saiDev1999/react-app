import HeaderComponent from "../components/bootstrap/header/header"





const SettingScreen = ()=>{
    return(
        <div>

<HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />
            <h1>Wellcome to Setting Screen</h1>
           
        </div>
    )
}

export default SettingScreen