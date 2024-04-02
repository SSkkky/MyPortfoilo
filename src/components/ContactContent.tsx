import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { guestBookListType } from '../models/dataTypes';
import { Tel2, Email } from '../assets/icons/icons';
import 'react-toastify/dist/ReactToastify.css';
import GuestBookList from './GuestBookList';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface contentType {
  down960: boolean;
  down600: boolean;
  getData: guestBookListType[];
  setGetData: React.Dispatch<React.SetStateAction<guestBookListType[]>>
}

function ContactContent({ down960, down600, getData, setGetData }: contentType) {
  const serverURI = process.env.REACT_APP_SERVER_URI as string;
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (userName.length < 1) {
      toast.error('작성자 이름을 입력해주세요', { position: 'bottom-right' });
      return
    }
    else if (userPassword.length < 1) {
      toast.error('비밀번호를 입력해주세요', { position: 'bottom-right' });
      return
    }
    else if (userMessage.length < 2) {
      toast.error('메시지를 2글자 이상 입력해주세요 💌', { position: 'bottom-right' });
      return
    }

    dayjs.locale('ko');
    const today = dayjs().format("YYYY년 MM월 D일");

    let userData = {
      name: userName,
      message: userMessage,
      password: userPassword,
      date: today
    }

    const fetchGuestBook = async () => {
      try {
        const response = await axios.post(serverURI, userData);
        setGetData([...getData, response.data]);
        toast.success('방명록이 정상적으로 등록되었습니다!', { position: 'bottom-right' });
      } catch (error) {
        toast.error('전송중 오류가 발생했습니다!', { position: 'bottom-right' });
      }
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