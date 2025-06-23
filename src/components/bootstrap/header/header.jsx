import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function HeaderComponent(props) {
  const { title, navItems } = props;

  const handlNavigation =()=>{
    console.log("hey hello")
    

  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Nav className="me-4">

            <Link   className="px-3 text-light nav-link-custom" to="/">Home</Link> 
            <Link   className="px-3 text-light nav-link-custom" to="/about">About</Link> 
            <Link   className="px-3 text-light nav-link-custom" to="/setting">Settings</Link> 
            <Link   className="px-3 text-light nav-link-custom" to="/product-listing">Products</Link> 
              {/* {navItems.map((eachItem, index) => (

 <Link               className="px-3 text-light nav-link-custom" to="/about">Home</Link> 
               
              ))} */}
            </Nav>
            <Navbar.Brand
              href="#home"
              className="fw-bold text-uppercase mb-0"
              style={{ letterSpacing: '1px' }}
            >
              {title}
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>

      <style jsx="true">{`
        .nav-link-custom:hover {
          color: #0dcaf0 !important;
          text-decoration: underline;
          transition: all 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default HeaderComponent;
