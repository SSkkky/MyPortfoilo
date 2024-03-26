import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';

function AboutContent() {
    const pRefs = useRef<null[] | HTMLParagraphElement[]>([]);
    const [level, setLevel] = useState<number>(1);
    const [active, setActive] = useState(false);
    const { about } = useStore();

    const textAnimation = () => {
        let i = 1;
        let delay = 1000;

        const levelUp = () => {
            setLevel(i++);
            if (7 > i && i > 2) { delay /= 5; }
            else if (15 > i && i >= 7) { delay /= 10; }
            else if (i > 15) { delay /= 100; }
            const timeoutId = setTimeout(levelUp, delay);
            if (i === 100) {
                clearTimeout(timeoutId);
                setActive(true);
            }
            return () => clearTimeout(timeoutId);
        };
        const timeoutId = setTimeout(levelUp, delay);
        return () => clearTimeout(timeoutId);
    }

    useEffect(() => {
        if (about === false) { // 창 닫으면 애니메이션 reset
            setActive(false)
            setLevel(0)
        } else {
            textAnimation();
        }
    }, [about])

    return (
        <div className='content about'>
            <section className='about-top'>
                <div className={active ? 'about-ani active' : 'about-ani'}>
                    <p className="ani1">{active ? '프론트엔드 개발자 손하늘' : '레벨업중....레벨업중....'}</p>
                    <p className="ani2">{active ? '프론트엔드 개발자 손하늘' : '레벨업중....레벨업중....'}</p>
                </div>
                <div className={active ? 'about-chara active' : 'about-chara'}>
                    <p>LV.<span>{level}</span> 하늘하늘</p>
                    <img src={active ? process.env.PUBLIC_URL + '/img/about.gif' : process.env.PUBLIC_URL + '/img/aboutGray.gif'} />
                    <img className={active ? 'active sparkles' : 'sparkles'}
                        src={process.env.PUBLIC_URL + '/img/sparkles.gif'} />
                    <img className={active ? 'active sparkles sparklesLeft' : 'sparkles'}
                        src={process.env.PUBLIC_URL + '/img/sparkles.gif'} />
                </div>
            </section>
            <section className='about-introduce dot-bg'>
                <div className='introduce-cont dot-bg-inner'>
                    <div className="content-bg-text content-bg-s self">
                        <div className='arrowUp'></div>
                        <h3>안녕하세요!<br />깔끔한 코드를 고민하고 추구하는 <span className='color'>프론트엔드 개발자 손하늘</span>입니다.</h3>
                        <ul>
                            <li>#근면성실한_ISTJ</li>
                            <li>#변수이름_하나하나_신중하게</li>
                            <li>#고민_또_고민</li>
                            <li>#커뮤니케이션_좋아용👍</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='about-introduce dot-bg about-skill'>
                <div className='introduce-cont dot-bg-inner'>
                    <div className="content-bg-title">
                        <p className="about-title" ref={(ref) => { pRefs.current[1] = ref }}>사용 기술</p>
                    </div>
                    <div className="content-bg-text content-bg-l skills-cont">
                        <ul className='skills'>
                            <li>HTML</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Next.js</li>
                            <li>REACT</li>
                            <li>Git</li>
                        </ul>
                        <ul className='skills-level'>
                            <li className="HTML"></li>
                            <li className="SASS"></li>
                            <li className="JavaScript"></li>
                            <li className="TypeScript"></li>
                            <li className="Next.js"></li>
                            <li className="REACT"></li>
                            <li className="CSS3"></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='about-introduce dot-bg about-edu'>
                <div className='introduce-cont dot-bg-inner'>
                    <div className="content-bg-title">
                        <p className="about-title" ref={(ref) => { pRefs.current[2] = ref }}>교육 이력</p>
                    </div>
                    <div className="content-bg-text content-bg-m">
                        <div className='edus'>
                            <ul>
                                <li>
                                    <span>2023.10 ~</span>
                                    <p>강남 그린컴퓨터 아카데미<br></br>프론트엔드(React&Vue) 웹&앱 SW개발자 양성과정</p>
                                </li>
                                <li>
                                    <span>2022.06 ~ 2022.08</span>
                                    <p>인프런<br></br>풀스택을 위한 탄탄한 프런트엔드 부트캠프</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutContent;