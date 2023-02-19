import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let BtnCustom = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'dodgerblue' ? 'black' : 'white'};
    padding : 10px`

export function Detail(props) {
    useEffect(() => {
        setTimeout(() => {
            setEvent(false)
        }, 2000)
    }, [])
    // useEffect(() => {
    //    const time =  setTimeout(() => { setEvent(false) }, 2000)
    // return () => {
    // clearTimeout(time) => 재랜더링 또는 페이지 이탈시  먼저 실행됨 
    // }
    // })

    let [event, setEvent] = useState(true)
    let [count, setCount] = useState(0)

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (x) {
        return x.id == id
    });
    // let 찾은상품 = props.shoes.find(x => x.id == id);
    return (
        <Container>
            {event ? <Alert /> : null}
            <Row>
                <Col md="6">
                    <img src={찾은상품.img} className='img-fluid' />
                </Col>

                <Col md="6">
                    <h4>{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{(찾은상품.price).toLocaleString('KR')} 원</p>
                    <BtnCustom bg="tomato" >주문하기</BtnCustom>
                    <BtnCustom bg="dodgerblue" onClick={() => { setCount(count + 1) }} >주문하기</BtnCustom>
                </Col>

                count : {count}
            </Row>
        </Container>
    )
}

function Alert() {
    return (
        <div className="alert alert-warning">
            2초 이내 구매시 할인
        </div>
    )
}