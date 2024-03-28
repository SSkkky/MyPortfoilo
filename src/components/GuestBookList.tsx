import React, { useEffect, useState } from "react";
import axios from 'axios';
import { guestBookListType } from '../models/dataTypes';
import '../styles/pages/guestBookList.scss'

interface guestBookType {
    getData: guestBookListType[]
}

export default function GuestBookList({ getData }: guestBookType) {
    return (
        <section className="GuestBookList">
            {
                getData.map((item, i) => (
                    <div className="GuestBookMsg" key={i}>
                        <p className="name">작성자 : {item.name}</p>
                        <p>메시지 : {item.message}</p>
                        <p>작성일 : {item.date}</p>
                        <p className="deleteAndUpdate">
                            <button>수정</button>
                            <button>삭제</button>
                        </p>
                    </div>
                ))
            }
        </section>
    )
}