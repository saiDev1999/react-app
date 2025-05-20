import { useEffect, useState } from "react"
import CardComponent from "../../../bootstrap/card/card"








export const UseEffectExample = () =>{
    const productsAPI ="https://dummyjson.com/products"
    const recipeAPI = "https://dummyjson.com/recipes/search?q=pizza"

    const[recipes,setRecipes]=useState([])

    useEffect(()=>{
        console.log("useeffect")
        // api calls - communication between server and client
        fetch(productsAPI)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            const {recipes}= res
            console.log(recipes)
            setRecipes(recipes)
        })

    },[])
    


    return (
        <> 
        <h1>Use effect example</h1>
        {/* {
            recipes.map(eachRecipe=>{
                return(
                
                     <CardComponent key={eachRecipe.id} difficulty={eachRecipe.difficulty}  title={eachRecipe.name} text={eachRecipe.cuisine} imagePath={eachRecipe.image} ingredients={eachRecipe.ingredients} instructions={eachRecipe.instructions} />
                
                )
            })
        } */}
        </>
    )
}