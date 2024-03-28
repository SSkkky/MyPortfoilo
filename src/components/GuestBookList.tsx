import React, { useEffect, useState } from "react";
import axios from 'axios';
import { guestBookListType } from '../models/dataTypes';
import '../styles/pages/guestBookList.scss'

export default function GuestBookList() {
    const [getData, setGetData] = useState<guestBookListType[]>([]);
    const serverURI = process.env.REACT_APP_SERVER_URI as string;

    useEffect(() => {
        const fetchGuestBook = async () => {
            const response = await axios.get(serverURI);
            setGetData(response.data);
        };
        fetchGuestBook();
        console.log(getData)
    }, []);

    return (
        <section className="GuestBookList">
            {
                getData && getData.map((item, i) => (
                    <div key={i}>
                        <p>작성자 : {item.name}</p>
                        <p>메시지 : {item.message}</p>
                        <p>작성일 : {item.date}</p>
                    </div>
                ))
            }
        </section>
    )
}