import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavBarSearch() {
  const navLinks = [
    { to: "/login", label: "Логин" },
    { to: "/charts", label: "Графики" },
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/" className="navbar-brand">Тут что-то должно быть</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {navLinks.map((link, index) => (
              <Nav.Link key={index} to={link.to} as={Link}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Поиск" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Найти</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarSearch;
