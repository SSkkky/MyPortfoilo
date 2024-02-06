import React from 'react'
import { Tel2, Email } from '../assets/icons/icons';

function ContectContent() {
  return (
    <div className='content contect'>
      <div className='contect-top'>
        <span>Thx:)</span>
        <p>이 포트폴리오가 흥미롭다면<br></br>피드백 부탁드립니다!</p>
      </div>
      <div className='contect-cont'>
        <div className='contect-email'>
          <Email height="60"/>
          <p>worte5633@gmail.com</p>
        </div>
        <div className='contect-phone'>
          <Tel2 height="60"/>
          <p>010-7569-1925</p>
        </div>
      </div>
    </div>
  )
}

export default ContectContent