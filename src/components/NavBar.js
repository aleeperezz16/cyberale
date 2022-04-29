import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const cartItems = useContext(CartContext);

  return (
    <Navbar bg="primary" variant="dark" className="position-relative">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2>Cyberale</h2>
        </Navbar.Brand>
        <Nav className="center">
          <Nav.Item>
            <Button as={Link} to="/categoria/perifericos">
              Periféricos
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button as={Link} to="/categoria/componentes-pc">
              Componentes de PC
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button as={Link} to="/categoria/monitores">
              Monitores
            </Button>
          </Nav.Item>
        </Nav>

        <CartWidget count={cartItems.getTotalItems()} />
      </Container>
    </Navbar>
  );
};

export default NavBar;
