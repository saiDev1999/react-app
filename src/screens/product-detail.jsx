import { useParams } from "react-router-dom";
import HeaderComponent from "../components/bootstrap/header/header";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../components/bootstrap/card/card";
import Spinner from "react-bootstrap/Spinner";

const ProductDetailScreen = () => {
  const { id } = useParams();
  const [eachRecipe, setEachRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`).then((response) => {
      if (response.status === 200) {
        setEachRecipe(response.data);
      }
    });
  }, [id]);

  return (
    <div>
      <HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />

      <div className="text-center mt-4 mb-3">
        <h1>Welcome to Recipe Detail</h1>
        <p className="text-muted">Explore the full recipe below</p>
      </div>

      {!eachRecipe ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <CardComponent
          id={eachRecipe.id}
          title={eachRecipe.name}
          text={eachRecipe.cuisine}
          imagePath={eachRecipe.image}
          ingredients={eachRecipe.ingredients}
          instructions={eachRecipe.instructions}
          difficulty={eachRecipe.difficulty}
          mode="detailed"
        />
      )}
    </div>
  );
};

export default ProductDetailScreen;
