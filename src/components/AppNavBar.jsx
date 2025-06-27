import {NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Social from "./Social";
import CartWidget from "./CartWidget";
import {Container} from "react-bootstrap";
import  styled from 'styled-components'

const Image = styled.img`
  width:40px;
  margin-right:20px;
  `


function AppNavBar() {  
    return (  
  <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* Logo o botón a Home */}
         <Image src={"src/img/brand_icon.jpg"} />         
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
          Wild Urban Sport
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/products" className="nav-link">
              Productos
            </NavLink>
            <NavLink to="/about" className="nav-link">
              Sobre Nosotros
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contacto
            </NavLink>           
            <NavLink to="/admin" className="nav-link">
              Ingresar
            </NavLink>
          </Nav>

          {/* Social icons y carrito a la derecha */}
          <div className="d-flex align-items-center gap-3">
            <Social />
            <Link to="/cart" className="nav-link p-0">
              <CartWidget />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );  
}  


export default AppNavBar;