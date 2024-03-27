import * as React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import '../../styles/pages/todoList.scss';

interface TodoListType {
    down768: boolean,
    down430: boolean
}
export default function TodoList({ down768, down430 }: TodoListType) {
    return (
        <Rnd
            className='todoList'
            default={{
                x: 40,
                y: 40,
                width: 280,
                height: 280
            }}
            enableResizing={false}
            bounds="parent"
        >
            <header>
                <button className="more"></button>
                <h3 className="day">{new Date().getDate()}</h3>
            </header>
            <div className="contents">
                <h4 className="title">알림</h4>
                <p>제 포트폴리오 홈페이지에 방문해주셔서 감사드립니다 😍🥰</p>
                <span className="author">하늘</span>
            </div>
        </Rnd>
    )

}