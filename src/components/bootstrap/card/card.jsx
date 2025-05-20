import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OrderedList from '../../list/ordered-list';

function CardComponent(props) {
    const {title,text,imagePath,ingredients,instructions,difficulty}=props
  return (
    <Card style={{ flex:1,margin:"30px" }}>
      <Card.Img variant="top" src={imagePath} style={{
        width:"100px",
        height:"100px"
      }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
       Origin : {text}
        </Card.Text>
        <h1>Ingredients</h1>
        <OrderedList list={ingredients} />

        <h1>Instructions</h1>
        <OrderedList list={instructions} />

        <Button variant="primary">{difficulty}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;