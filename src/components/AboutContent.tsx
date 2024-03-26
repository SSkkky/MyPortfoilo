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
            setLevel(++i);
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
            setLevel(1)
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
                            <li className='HTML'>
                                <h4>HTML</h4>
                                <p>시멘틱 태그를 작성하여 마크업 할 수 있습니다.</p>
                            </li>
                            <li className='CSS'>
                                <h4>CSS</h4>
                                <p>디자인 의도에 맞게 스타일을 적용할 수 있습니다.</p></li>
                            <li className='SASS'>
                                <h4>SASS</h4>
                                <p>Mixin, 변수를 활용해 스타일을 적용할 수 있습니다.</p></li>
                            <li className='JavaScript'>
                                <h4>JavaScript</h4>
                                <p>동적인 기능을 추가하거나 수정할 수 있습니다.</p></li>
                            <li className='TypeScript'>
                                <h4>TypeScript</h4>
                                <p>데이터 타입과 인터페이스를 선언해 활용할 수 있습니다.</p></li>
                            <li className='React'>
                                <h4>React</h4>
                                <p>리액트 훅을 활용한 프로젝트를 개발할 수 있습니다.</p></li>
                            <li className='NextJS'>
                                <h4>Next.js</h4>
                                <p>App Route를 활용한 프로젝트를 개발할 수 있습니다.</p></li>
                            <li className='Git'>
                                <h4>Git</h4>
                                <p>branch pull, push, commit등을 사용할 수 있습니다.</p></li>
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
                                    <b className='title'>01.</b>
                                    <span>2023.10 ~ 2024.04</span>
                                    <p>강남 그린컴퓨터 아카데미<br></br>프론트엔드(React&Vue) 웹&앱 SW개발자 양성과정</p>
                                </li>
                                <li>
                                    <b className='title'>02.</b>
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