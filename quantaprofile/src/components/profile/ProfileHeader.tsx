import { Button, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { LoginBtn, CartBtn, StyledInputGroup } from "../../assets/styles/profile.styles";
import Arrow from '../../assets/img/in 01.svg';
import Cart from '../../assets/img/cart.svg';
import Logo from '../../assets/img/Frame 3 (1).svg';
import Search from '../../assets/img/search 01.svg';
import Slash from '../../assets/img/Frame 59.svg';

import { StyledNavbar, StyledNavLink } from "../../assets/styles/profile.styles";

export const UserProfileHeader = () => {


    return (
        <StyledNavbar expand='lg' className="bg-body-dark mb-3">
            <Container fluid>
                <Navbar.Brand href="#"> <img src={Logo} /> </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />

                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >

                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="justify-content-around align-items-center flex-grow-1 pe-3">

                            <div className="d-flex gap-xl-4 gap-lg-3">
                                <StyledNavLink href="#action1">Home</StyledNavLink>
                                <StyledNavLink href="#action2">Map</StyledNavLink>
                                <StyledNavLink href="#action2">FAQ</StyledNavLink>
                            </div>

                            <Form className="d-flex">
                                <StyledInputGroup>
                                    <InputGroup.Text>
                                        <img height={24} width={24} src={Search} alt="search icon" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <InputGroup.Text>
                                        <img height={22} width={22} src={Slash} alt="search" />
                                    </InputGroup.Text>
                                </StyledInputGroup>
                            </Form>

                            <div></div>
                            <div></div>
                        </Nav>

                        <LoginBtn><img width={22} height={22} src={Arrow} /> Login</LoginBtn>

                        <CartBtn><img width={22} height={22} src={Cart} /></CartBtn>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </StyledNavbar>
    );
}