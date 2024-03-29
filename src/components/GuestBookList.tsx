import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Types } from 'mongoose';
import { guestBookListType } from '../models/dataTypes';
import '../styles/pages/guestBookList.scss'
import { useStore } from '../store';

interface guestBookType {
    getData: guestBookListType[]
}

export default function GuestBookList({ getData }: guestBookType) {
    const { setGuestBookDataObject, setPopupKeyword, setDelAndUpdate } = useStore();

    // 비밀번호 입력 팝업 active
    const setInputPassword = (item:guestBookListType, type:string) => {
        setGuestBookDataObject(item)
        setPopupKeyword(type)
        setDelAndUpdate(true)
    }

    return (
        <section className="GuestBookList">
            {
                getData.map((item, i) => (
                    <article className="GuestBookMsg" key={i}>
                        <header className="GuestBookMsgHeader">
                            <p className="btnCont">⚪⚪</p>
                            <p className="name">{item.name}</p>
                        </header>
                        <section className="GuestBookMsgCont">
                            <p className="message">{item.message}</p>
                            <p className="date">{item.date}</p>
                            <div className="deleteAndUpdate">
                                <button onClick={()=>{setInputPassword(item, '수정')}}>수정</button>
                                <button onClick={()=>{setInputPassword(item, '삭제')}}>삭제</button>
                            </div>
                        </section>
                    </article>
                ))
            }
        </section>
    )
}