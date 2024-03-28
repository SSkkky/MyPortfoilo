import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Types } from 'mongoose';
import { guestBookListType } from '../models/dataTypes';
import '../styles/pages/guestBookList.scss'

interface guestBookType {
    getData: guestBookListType[]
}

export default function GuestBookList({ getData }: guestBookType) {

    const updateHandler = (id:Types.ObjectId) => {
        console.log(id)
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
                            {/* <p className="deleteAndUpdate">
                                <button onClick={()=>{updateHandler(item._id)}}>수정</button>
                                <button>삭제</button>
                            </p> */}
                        </section>
                    </article>
                ))
            }
        </section>
    )
}