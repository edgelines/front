import './App.css';
import React, { useState } from 'react';

function App() {
    const [글제목, 글제목변경] = useState(
        [
            {
                title: '리액트 독학',
                date: '23.2.17',
                detail: '코딩애플 리액트편 독학중',
            },
            {
                title: 'Vue => React',
                date: '23.2.19',
                detail: 'hijonam Vue버전을 React로 변경 시작',
            },
            {
                title: 'hijonam.com Hosting',
                date: '23.2.16',
                detail: '호스팅 시작함'
            },
        ]
    )
    let [따봉, 따봉변경] = useState([2, 5, 20]);
    let [modal, setModal] = useState(false);
    let [글번호, set글번호] = useState(0)
    let [inputValue, setInput] = useState('')

    return (
        <div className="App">
            <header className="App-header">
                ReactBlog
            </header>
            <div className='Main'>
                {
                    글제목.map(function (item, i) {
                        return (
                            <div className='List' key={i}>
                                <h4 onClick={() => { setModal(!modal); set글번호(i) }}>{item.title}
                                    <span onClick={(e) => {
                                        e.stopPropagation();
                                        let copy = [...따봉];
                                        copy[i] = 따봉[i] + 1;
                                        따봉변경(copy)
                                    }} >👍</span> {따봉[i]}

                                </h4>
                                <p>Date : {item.date}</p>
                                <button onClick={() => {
                                    let copy = [...글제목];
                                    copy.splice(i, 1)
                                    글제목변경(copy)
                                }}>삭제하기</button>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                입력값 : {inputValue}
            </div>
            <div>
                <input onChange={(e) => { setInput(e.target.value) }} />
                <button onClick={() => {
                    let copy = [...글제목]
                    var add = {
                        title: inputValue,
                        date: '23.2.18',
                        detail: 'Object 추가하기'
                    }
                    copy.unshift(add)
                    글제목변경(copy)
                }}>글추가</button>

            </div>

            {modal ? <Modal 글제목={글제목} color='#eee' 글제목변경={글제목변경} 글번호={글번호} /> : null}

        </div>
    );
}

function Modal(props) {
    return (
        <div className='modal' style={{ background: props.color }}>
            <h4>{props.글제목[props.글번호].title}</h4>
            <p>{props.글제목[props.글번호].date}</p>
            <p>{props.글제목[props.글번호].detail}</p>
            <button onClick={() => {
                let copy = [...props.글제목];
                copy[0].title = 'useState 변경'
                props.글제목변경(copy)
            }}>글수정</button>
        </div>
    )
}


export default App;
