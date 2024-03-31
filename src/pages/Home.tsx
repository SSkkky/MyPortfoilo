import React, { useEffect, useState } from 'react';
import { useStore } from '../store';

import { MeIcon, PfIcon, CtIcon, GitIcon, VelogIcon, Resume } from '../assets/icons/icons';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import TextAnimation from '../components/TextAnimation';
import Widget from '../components/widget/Widget';
import Header from '../components/Header';

import '../styles/base/common.scss'
import '../styles/pages/home.scss';

function Home() {
    // 실시간 날짜
    dayjs.locale('ko');
    const [time, setTime] = useState(dayjs());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 60000);
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 해제
    }, []);

    // 메뉴 오픈
    const { about, nowMenu, setNowMenu, setAbout, setPortfolio, setContact } = useStore();
    const handleClick = (e: string) => {
        if (e === 'About') {
            setAbout(true); // display:block
            setNowMenu('About');
        }
        else if (e === 'Portfolio') {
            setPortfolio(true);
            setNowMenu('Portfolio');
        }
        else {
            setContact(true);
            setNowMenu('Contact')
        }
    }

    // 휴지통 애니메이션
    const [trashSrc, setTrashSrc] = useState('/img/trash.svg');
    const onClickTrash = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const icon = e.currentTarget.parentElement;
        if (icon) { icon.style.transform = 'translateY(-0.5rem)' }
        setTrashSrc('/img/trashClick.gif')

        const setTime = setTimeout(() => {
            if (icon) { icon.style.transform = 'translateY(0)' }
            setTrashSrc('/img/trash.svg')
        }, 1000);
    }

    return (
        <>
            <Header />
            <section id="main-section">
                <TextAnimation />
                <Widget />
                <div id="main-right-cont">
                    <ul>
                        <li onClick={() => { handleClick('About') }}><MeIcon /><p>ABOUT_ME</p></li>
                        <li onClick={() => { handleClick('Portfolio') }}><PfIcon /><p>PORTFOLIO</p></li>
                        <li onClick={() => { handleClick('Contact') }}><CtIcon /><p>CONTECT_ME</p></li>
                    </ul>
                </div>
            </section>
            <aside>
                <div className="main-side-icons" >
                    <a href="https://github.com/SSkkky" target='_blank'
                    rel="noreferrer"
                    className='GitIcon ballon'>
                        <GitIcon />
                        </a>
                    <a href="https://velog.io/@worte5633/posts" target='_blank'
                    rel="noreferrer"
                     className='VelogIcon ballon'>
                        <VelogIcon />
                        </a>
                    <a href="./resume.pdf" download="프론트엔드_손하늘"
                    rel="noreferrer"
                    className='Resume ballon'>
                        <Resume/>
                        </a>
                    <div className='trash ballon'>
                        <img src={process.env.PUBLIC_URL + trashSrc} onClick={onClickTrash} id="TrIcon"
                        alt="휴지통"/>
                    </div>
                </div>
            </aside>
            <footer>
                <p>ⓒ 2024. 손하늘 all rights reserved.</p>
            </footer>
            <About name="about" />
            <Portfolio name="portfolio" />
            <Contact name="contact" />
        </>
    );
}

export default Home;
