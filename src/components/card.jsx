import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Card(props) {
    return (
        <div>
            <img src={props.shoes.img} className='img-fluid' />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{(props.shoes.price).toLocaleString('KR')} 원</p>
        </div>
    )
}

