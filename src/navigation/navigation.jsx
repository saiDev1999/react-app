
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import ProductListing from "../screens/product-listing";
import ProductDetailScreen from "../screens/product-detail";
import SettingScreen from "../screens/setting-screen";



const NavigationRoot = () =>{
    return (
        <BrowserRouter>
        <Routes>

            <Route  path="/" element={<HomeScreen/>} />
            <Route  path="/about" element={<AboutScreen/>} />
            <Route  path="/setting" element={<SettingScreen/>} />
            <Route  path="/product-listing" element={<ProductListing/>} />

            <Route  path="/product/:id/info" element={<ProductDetailScreen/>} />


        </Routes>

        </BrowserRouter>
    )
}

export default NavigationRoot