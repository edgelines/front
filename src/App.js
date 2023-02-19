import './App.css';
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

// components
import { Card } from './components/card.js';
import { Detail } from './components/detail'

function App() {
    let [shoes] = useState(data)
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Parctice</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/about/member') }}>Member</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/about/location') }}>Location</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path='/' element={
                    <>
                        <div className='main-bg'></div>
                        <Container>
                            <Row>
                                {shoes.map(function (item, i) {
                                    return (<Card shoes={shoes[i]} key={i} />)
                                })
                                }
                            </Row>
                        </Container>
                    </>

                } />

                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="*" element={<div>없는페이지</div>} />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>Outlet</div>} />
                    <Route path="location" element={<div>Location</div>} />

                </Route>
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
