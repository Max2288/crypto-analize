import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBarSearch() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Тут что-то должно быть</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">На главную</Nav.Link>
            <Nav.Link href="/login">Логин</Nav.Link>
            <NavDropdown title="Тут дропдавн" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/charts">Графики</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Ещё действие
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Ну и здесь что-то будет
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Ещё ссылка
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Поиск"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Найти</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBarSearch;