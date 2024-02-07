import React, { useRef } from 'react';
import { MeIcon, TitleIcon } from '../assets/icons/icons';

function AboutContent() {
    const pRefs = useRef<null[] | HTMLParagraphElement[]>([]);

    return (
        <div className='content about'>
            <section className='about-top'>
                <div className="about-ani">
                    <p className="ani1">FRONT_END DEVELOPER</p>
                    <p className="ani2">FRONT_END DEVELOPER</p>
                </div>
                <div className="about-chara">
                    <span>LV.1</span>
                    <MeIcon />
                </div>
            </section>
            <section className='about-introduce dot-bg'>
                <div className='introduce-cont dot-bg-inner'>
                    <div className="content-bg-title">
                        <TitleIcon />
                        <p className="about-title mobile" ref={(ref) => { pRefs.current[0] = ref }}>About ME</p>
                    </div>
                    <div className="content-bg-text content-bg-s">
                        빡세게 열심히하는 신입 프론트엔드 <br></br>개발자 손하늘입니다!
                    </div>
                </div>
            </section>
            <section className='about-introduce dot-bg about-skill'>
                <div className='introduce-cont dot-bg-inner'>
                    <div className="content-bg-title">
                        <TitleIcon />
                        <p className="about-title" ref={(ref) => { pRefs.current[1] = ref }}>사용 기술</p>
                    </div>
                    <div className="content-bg-text content-bg-l skills-cont">
                        <ul className='skills'>
                            <li>HTML</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>REACT</li>
                            <li>Express</li>
                        </ul>
                        <ul className='skills-level'>
                            <li className="HTML"></li>
                            <li className="CSS3"></li>
                            <li className="SASS"></li>
                            <li className="JavaScript"></li>
                            <li className="TypeScript"></li>
                            <li className="REACT"></li>
                            <li className="Express"></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='about-introduce dot-bg about-edu'>
                <div className='introduce-cont dot-bg-inner'>
                    <div className="content-bg-title">
                        <TitleIcon />
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