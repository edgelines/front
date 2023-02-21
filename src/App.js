import './App.css';
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Row, Col, NavDropdown, Offcanvas, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import ImageGallery from 'react-image-gallery';

// components
import NavbarEx from './components/Navbar'
import { Card } from './components/card.jsx';
import { Detail } from './components/detail'
import { Cart } from './components/Cart'

function App() {

    const homeImgSlider = [
        {
            original: './img/Main/1.jpg',
            thumbnail: './img/Main/1.jpg',
        },
        {
            original: './img/Main/2.jpg',
            thumbnail: './img/Main/2.jpg',
        },
        {
            original: './img/Main/3.jpg',
            thumbnail: './img/Main/3.jpg',
        },
        {
            original: './img/Main/4.jpg',
            thumbnail: './img/Main/4.jpg',
        },
        {
            original: './img/Main/5.jpg',
            thumbnail: './img/Main/5.jpg',
        },
        {
            original: './img/Main/6.jpg',
            thumbnail: './img/Main/6.jpg',
        },
        {
            original: './img/Main/7.jpg',
            thumbnail: './img/Main/7.jpg',
        },
    ];

    let [shoes, setShoes] = useState(data)
    let [more, setMore] = useState(2)
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="white" expand='xl' className="mb-3">
                <Container fluid>
                    <Navbar.Brand id="nav-font-Brand" href="/">HIJO NAM</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xl'}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'xl'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'xl'}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xl'}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-grow-1 nav-list">
                                <Nav.Link className='nav-font' onClick={() => { navigate('/') }}>BIO</Nav.Link>
                                <Nav.Link className='nav-font' onClick={() => { navigate('/detail') }}>ARTWORKS</Nav.Link>
                                <NavDropdown className='nav-font' title="EXHIBITION" id="nav-dropdown">
                                    <NavDropdown.Item className='nav-font' onClick={() => { navigate('/about/member') }}>Past Exhibition</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-font' onClick={() => { navigate('/about/location') }}>Upcoming Exhibition</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className='nav-font' onClick={() => { navigate('/cart') }}>PORTFOLIO</Nav.Link>
                            </Nav>
                            <Form className="d-flex sns">
                                <img class="me-5" src="./img/Etc/facebook.png" />
                                <img class="me-5" src="./img/Etc/instagram.png" />
                                <img class="me-5" src="./img/Etc/mail.png" />
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


            <Routes>
                <Route path='/' element={
                    <>
                        <div className='mt-3'>
                            <ImageGallery
                                items={homeImgSlider} autoPlay={true} slideDuration={15000} slideInterval={3500}
                                showNav={false} showPlayButton={false} showThumbnails={false} showFullscreenButton={false}
                            />
                        </div>
                    </>
                } />

                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="*" element={<div>없는페이지</div>} />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>Outlet</div>} />
                    <Route path="location" element={<div>Location</div>} />
                </Route>
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보</h4>
            <Outlet></Outlet>
        </div>
    )
}



export default App;
