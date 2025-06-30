import HeaderComponent from "../components/bootstrap/header/header";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../components/bootstrap/card/card";
import { Container, Row, Col } from "react-bootstrap";
import SearchBarComponent from "../components/search-bar";

const ProductListing = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = () => {
      axios.get("https://dummyjson.com/recipes").then((response) => {
        if (response.status === 200) {
          setRecipes(response.data.recipes);
        }
      });
    };
    fetchRecipes();
  }, []);


  useEffect(() => {
    console.log(searchQuery);
    axios.get(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
    .then(response => {
      if (response.status === 200) {
        setRecipes(response.data.recipes);
      }
    });
  }, [searchQuery]);

  return (
    <div>
      <HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />
      <h1 className="text-center mt-4 mb-4">Welcome to Recipe Listing</h1>



      <Container>
      <SearchBarComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Row>
          {recipes.length>0 ?recipes.map((eachRecipe) => (
            <Col key={eachRecipe.id} xs={12} md={4} className="mb-4">
              <CardComponent
                id={eachRecipe.id}
                title={eachRecipe.name}
                text={eachRecipe.cuisine}
                imagePath={eachRecipe.image}
              />
            </Col>
          )): <h1>No recipes found</h1>}
        </Row>
      </Container>
    </div>
  );
};

export default ProductListing;
