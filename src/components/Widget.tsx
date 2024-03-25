"use client"

import React, { useEffect, useState } from 'react';
import '../styles/pages/widget.scss';

export default function Widget() {
    return (
        <div id="mainWiget">
            <div className='wigetLeftCont'>
                <div className='picture'></div>
                <div className='notice'></div>
            </div>
            <div className='stickerMemo'>
                <h3>Readme.md</h3>
                <p>제 포트폴리오 홈페이지에 오신 것을 환영합니다!<br/>OS의 <b>아이콘들을 클릭</b>해보세요!</p>
                <span>2024-03-26</span>
            </div>
        </div>
    )
}