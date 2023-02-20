import './App.css';
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
// components
import { Card } from './components/card.jsx';
import { Detail } from './components/detail'
import { Cart } from './components/Cart'

function App() {
    let [shoes, setShoes] = useState(data)
    let [more, setMore] = useState(2)
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="light" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Parctice</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/about/member') }}>Member</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/about/location') }}>Location</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
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
                                    return (
                                        <Col xs="4" key={i}>
                                            <Nav.Link href={`/detail/${i}`} className="Card-ID">
                                                <Card shoes={shoes[i]} />
                                            </Nav.Link>
                                        </Col>
                                    )
                                })
                                }
                            </Row>
                            <button onClick={() => {
                                axios.get('https://codingapple1.github.io/shop/data' + more + '.json').then((res) => {
                                    var copy = [...shoes, ...res.data];
                                    // res.data.map(function (item, i) {
                                    //     copy.push(item)
                                    // })
                                    setShoes(copy)
                                })
                                setMore(more + 1);
                            }}>더보기</button>
                        </Container>
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
