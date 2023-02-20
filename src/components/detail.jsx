import { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
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
    // 디팬던시 안에 변수가 있으면, 변수가 업데이트 될때마다 업데이트됨, 그 안에 아무것도 없으면 첫 랜더링시에만 업데이트됨

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
    let [content, setContent] = useState(0)
    // let 찾은상품 = props.shoes.find(x => x.id == id);
    return (
        <Container className='mt-5'>
            {event ? <Alert /> : null}
            <Row>
                <Col xs="8" md="7">
                    <img src={찾은상품.img} className='img-fluid' />
                </Col>

                <Col xs md="5">
                    <h4>{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{(찾은상품.price).toLocaleString('KR')} 원</p>
                    <BtnCustom bg="tomato" >주문하기</BtnCustom>
                    <BtnCustom bg="dodgerblue" onClick={() => { setCount(count + 1) }} >주문하기</BtnCustom>
                </Col>

                <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link eventKey="link0" onClick={() => { setContent(0) }}>버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link1" onClick={() => { setContent(1) }} >버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link2" onClick={() => { setContent(2) }} >버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Content content={content} />
            </Row>
        </Container>
    )
}

// function Content(props) {
//     if (props.content == 0) {
//         return <div >내용0</div>
//     } else if (props.content == 1) {
//         return <div>내용1</div>
//     } else if (props.content == 2) {
//         return <div>내용2</div>
//     }
// }
function Content({ content }) {
    let [fade, setFade] = useState('')
    useEffect(() => {
        let timer = setTimeout(() => {
            setFade('end')
        }, 1000)
        return () => {
            clearTimeout(timer);
        }
    }, [content])
    return (<div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][content]}
    </div>)
}

function Alert() {
    return (
        <div className="alert alert-warning">
            2초 이내 구매시 할인
        </div>
    )
}