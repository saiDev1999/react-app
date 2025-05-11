import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderComponent(props) {
    const {title,navItems}=props

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Nav className="me-auto">
           {
            navItems.map(eachItem=><Nav.Link href="#home">{eachItem}</Nav.Link>)
           }


            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default HeaderComponent;