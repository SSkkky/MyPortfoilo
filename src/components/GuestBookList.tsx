import React, { useEffect, useState } from "react";
import axios from 'axios';
import { guestBookListType } from '../models/dataTypes';
import '../styles/pages/guestBookList.scss'

export default function GuestBookList() {
    const [getData, setGetData] = useState<guestBookListType[]>([]);

    useEffect(() => { // mongodb 데이터 가져오기
        const fetchGuestBook = async () => {
            const response = await axios.get('http://localhost:5000');
            setGetData(response.data);
        };
        fetchGuestBook();
        console.log(getData)
    }, []);

    return (
        <section className="GuestBookList">
            {
                getData && getData.map((item, i) => (
                    <div key={i}>{item.name}</div>
                ))
            }
        </section>
    )
}