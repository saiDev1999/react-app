import HeaderComponent from "../components/bootstrap/header/header";
import './HomeScreen.css'; // Create this file for styling
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <HeaderComponent
        title={"Flipkaart"}
        navItems={["Home", "Features", "Pricing", "About", "Blog"]}
      />

      <Container className="home-content text-center">
        <h1 className="display-4">Welcome to Flipkaart Recipes</h1>
        <p className="lead">
          Discover amazing recipes from around the world.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="mt-3"
          onClick={() => navigate("/product-listing")}
        >
          Explore Recipes
        </Button>
      </Container>
    </div>
  );
};

export default HomeScreen;
