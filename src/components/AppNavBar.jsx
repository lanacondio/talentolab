import {NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Social from "./Social";
import CartWidget from "./CartWidget";

function AppNavBar() {  
    return (  
        <Navbar bg="light" expand="lg">        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">                           
            
            <NavLink to="/login" className="nav-link">Ingresar</NavLink>            
            <NavLink to="/about" className="nav-link">Sobre Nosotros</NavLink>
            <NavLink to="/products" className="nav-link">Productos</NavLink>
            <NavLink to="/contact" className="nav-link">Contacto</NavLink>            
            <NavLink to="/admin" className="nav-link">Administrar</NavLink>         
            <Social />
          </Nav>
        </Navbar.Collapse>
        
        <Navbar.Brand >
        <CartWidget />
        </Navbar.Brand>
      </Navbar>

    );  
}  


export default AppNavBar;