import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(props) {
    const {title,text,imagePath}=props
  return (
    <Card style={{ flex:1,margin:"30px" }}>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;