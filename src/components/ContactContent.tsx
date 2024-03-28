import React from 'react'
import { Tel2, Email } from '../assets/icons/icons';
import GuestBookList from './GuestBookList';
import '../styles/pages/contect.scss';

function ContactContent() {
  return (
    <section className='content contect'>
      <section className='contectFirst'>
        <span>🖤감사합니다🖤</span>
        <p>이 포트폴리오가 흥미롭다면 메시지를 남겨주세요!</p>
        <div className='iconCont'>
          <div className='myEmail'>
            <Email height="60" />
            <p>worte5633@gmail.com</p>
          </div>
          <div className='myPhone'>
            <Tel2 height="60" />
            <p>010-7569-1925</p>
          </div>
        </div>
      </section>
      {/* <section className='contectSecond'>
        <section className='guestBookList'>
          <GuestBookList />
        </section>
        <div className='inputForm'>
          <form>
            <textarea placeholder='메시지를 입력해주세요' />
            <button type='submit'>전송</button>
          </form>
        </div>
      </section> */}
    </section>
  )
}

export default ContactContent