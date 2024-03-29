import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { guestBookListType } from '../models/dataTypes';
import { Tel2, Email } from '../assets/icons/icons';
import GuestBookList from './GuestBookList';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface contentType {
  down960: boolean;
  down600: boolean;
}

function ContactContent({ down960, down600 }: contentType) {
  const [getData, setGetData] = useState<guestBookListType[]>([]);
  const serverURI = process.env.REACT_APP_SERVER_URI as string;
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    dayjs.locale('ko');
    const today = dayjs().format("YYYY년 MM월 D일");

    let userData = {
      name: userName,
      message: userMessage,
      password: userPassword,
      date: today
    }

    const fetchGuestBook = async () => {
      const response = await axios.post(serverURI, userData);
      setGetData([...getData, response.data]);
    };

    fetchGuestBook();

    setUserName('');
    setUserPassword('');
    setUserMessage('');
  }

  const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value)
  }

  const messageOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(e.target.value)
  }


  useEffect(() => {
    const fetchGuestBook = async () => {
      const response = await axios.get(serverURI);
      setGetData(response.data);
    };
    fetchGuestBook();
  }, []);

  return (
    <section className={'contect content' + (down960 ? ' down960' : '') + (down600 ? ' down600' : '')}>
      <section className='contectFirst'>
        <span>🖤감사합니다🖤</span>
        <p>이 포트폴리오가 흥미롭다면 메시지를 남겨주세요!</p>
        <div className='iconCont'>
          <div className='myEmail'>
            <Email height="40" />
            <p>worte5633@gmail.com</p>
          </div>
          <div className='myPhone'>
            <Tel2 height="45" />
            <p>010-7569-1925</p>
          </div>
        </div>
      </section>

      <section className='contectSecond'>
        <GuestBookList getData={getData} />
        <div className='inputForm'>
          <form onSubmit={(e) => { onSubmitHandler(e) }}>
            <section className="inputTopCont">
              <div className='inputCont'>
                <label htmlFor='name'>작성자</label>
                <input
                  id="name"
                  type="text"
                  placeholder='적어주세용'
                  onChange={(e) => { nameOnChangeHandler(e) }}
                  value={userName} />
              </div>
              <div className='inputCont'>
                <label htmlFor='password'>비밀번호</label>
                <input
                  id='password'
                  type="password"
                  placeholder='적어주세용'
                  onChange={(e) => { passwordOnChangeHandler(e) }}
                  value={userPassword} />
              </div>
            </section>
            <textarea
              placeholder='메시지를 입력해주세요'
              onChange={(e) => { messageOnChangeHandler(e) }}
              value={userMessage} />
            <button type='submit'>전송</button>
          </form>
        </div>
      </section>
    </section>
  )
}

export default ContactContent