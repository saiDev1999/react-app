// CardComponent.js
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OrderedList from '../../list/ordered-list';
import { useNavigate } from 'react-router-dom';
import './CardComponent.css'; // Add styling here

function CardComponent({
  id,
  title,
  text,
  imagePath,
  ingredients = [],
  instructions = [],
  difficulty,
  mode = "compact"
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (mode === "compact") {
      navigate(`/product/${id}/info`);
    }
  };

  return (
    <Card className={`recipe-card ${mode}`} onClick={handleClick}>
      <Card.Img variant="top" src={imagePath} className="recipe-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Cuisine: {text}</Card.Text>

        {mode === "detailed" && (
          <>
            <h5>Ingredients</h5>
            <OrderedList list={ingredients} />

            <h5>Instructions</h5>
            <OrderedList list={instructions} />

            <p><strong>Difficulty:</strong> {difficulty}</p>
          </>
        )}

        {mode === "compact" && (
          <Button variant="primary" className="mt-2">
            View Details
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
