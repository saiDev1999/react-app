import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderComponent(props) {
  const { title, navItems } = props;

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Nav className="me-4">
              {navItems.map((eachItem, index) => (
                <Nav.Link
                  key={index}
                  href="#"
                  className="px-3 text-light nav-link-custom"
                >
                  {eachItem}
                </Nav.Link>
              ))}
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
