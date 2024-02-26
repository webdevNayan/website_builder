import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BreadCrumbs from './BreadCrumbs';
import navigation_scss from "./Navigation.module.scss"; 

function Navigation() {
  return (
    <>
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="me-auto my-2 my-lg-0 text-white" style={{ maxHeight: '100px' }} navbarScroll>
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#websiteBuilders">Website Builders</Nav.Link>
            <Nav.Link href="#todaysDeals">Today's deals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
       <section className={navigation_scss.navgation_container}>
        <h1> Best Website builders in the US </h1>
        <h5> 🕕 Last Updated - February 22, 2020 🕒 Advertising Disclosure </h5>
        <ul>
            <li> Tools </li>
            <li> AWS Builder </li>
            <li> Start Build </li>
            <li> Build Supplies </li>
            <li> Tooling </li>
            <li> BlueHosting </li>
        </ul>
        <BreadCrumbs/>
    </section>
    </Container>
 
    </>
  );
}

export default Navigation;
