import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// TODO: c какой целью вы решили использовать react-router, если все равно используете якорные ссылки?
// TODO: при переходе по меню у вас не должна каждый раз перезагружаться страница
// TODO: решение данной проблемы: https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together

// TODO: еще было бы неплохо использовать .map, так как присувствует большое нагромождение из кода
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
              <Nav.Link to="/" as={Link}>На главную</Nav.Link>
              <Nav.Link to="/login" as={Link}>Логин</Nav.Link>
              <NavDropdown title="Тут дропдавн" id="navbarScrollingDropdown">
                <NavDropdown.Item to="/charts" as={Link}>Графики</NavDropdown.Item>
                <NavDropdown.Item to="#action4" as={Link}>
                  Ещё действие
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action5" as={Link}>
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