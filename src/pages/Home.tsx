import React, { useEffect, useState } from 'react';

import { Logo, WifiIcon, BetteryIcon, HanIcon, MeIcon, PfIcon, CtIcon, GitIcon, VelogIcon, TrIcon } from '../assets/icons/icons';
import '../styles/main.min.css';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';


function Home() {
    dayjs.locale('ko');
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 60000);
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 해제
    }, []);


    const content = "프론트엔드 개발자 손하늘입니다 :)";
    const [txtAni, setTxtAni] = useState<string>(content[0]);
    let i = 0;

    const typing = () => {
        if (i < content.length - 1) {
            i++;
            setTxtAni((prevTxt) => prevTxt + content[i]);
        } else {
            setTxtAni(content[0]);
            i = 0;
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(typing, 300);
            return () => clearInterval(interval);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <>
            <header>
                <nav>
                    <h1><Logo /></h1>
                    <ul>
                        <li>ABOUT_ME</li>
                        <li>PORTFOLIO</li>
                        <li>CONTECT_ME</li>
                    </ul>
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
            <section id="main-section">
                <div id="main-left-cont">
                    <span className="text">{txtAni}</span>
                </div>
                <div id="main-right-cont">
                    <ul>
                        <li><MeIcon /><p>ABOUT_ME</p></li>
                        <li><PfIcon /><p>PORTFOLIO</p></li>
                        <li><CtIcon /><p>CONTECT_ME</p></li>
                    </ul>
                </div>
            </section>
            <aside>
                <div className="main-side-icons">
                    <a href="https://github.com/SSkkky" target='_blank'><GitIcon /></a>
                    <a href="https://velog.io/@worte5633/posts" target='_blank'><VelogIcon /></a>
                    <TrIcon />
                </div>
            </aside>
            <footer>
                <p>ⓒ 2024. 손하늘 all rights reserved.</p>
            </footer>
        </>
    );
}

export default Home;