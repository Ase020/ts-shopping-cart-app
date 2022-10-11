import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import shoppingCart from "../assets/shoppingCart.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white mb-3 shadow-sm">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="" as={NavLink}>
            Home
          </Nav.Link>

          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>

          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCart}
          >
            <img src={shoppingCart} alt="" />
            <div
              className="bg-danger d-flex align-items-center justify-content-center rounded-circle"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                color: "white",
                height: "1.5rem",
                width: "1.5rem",
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};
