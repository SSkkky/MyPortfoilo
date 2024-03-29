import React, { useEffect, useState } from 'react';

import { Logo, WifiIcon, BetteryIcon, HanIcon, } from '../assets/icons/icons';
import '../styles/base/common.scss'
import '../styles/pages/home.scss';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useStore } from '../store';

export default function Header() {
    // 실시간 날짜
    dayjs.locale('ko');
    const [time, setTime] = useState(dayjs());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 60000);
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 해제
    }, []);

    const { nowMenu } = useStore();

    return (
        <header id="header">
            <nav>
                <h1><Logo /></h1>
            </nav>
            <div className="side">
                <WifiIcon width="20" fill="#000" />
                <div className="bettery">
                    100% <BetteryIcon width="28" stroke="#000" fill="#000" />
                </div>
                <HanIcon />
                <span>
                    {time.format("(ddd) HH시 mm분")}
                </span>
            </div>
        </header>
    );
}