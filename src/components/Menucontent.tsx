import React from 'react';
import { MeIcon, TitleIcon, BgDot, TextBox, TextDesS, TextDesL, TextDesM} from '../assets/icons/icons';
import Contentbg from './Contentbg';

function Menucontent() {
    return (
        <div className='content about'>
            <section className='about-top'>
            <div className="about-ani">
                    <p className="ani1">FRONT_END</p>
                    <p className="ani2">DEVELOPER</p>
                </div>
                <div className="about-chara">
                    <span>LV.1</span>
                    <MeIcon />
                </div>
            </section>
            <section className='about-introduce dot-bg'>
                <div className='introduce-cont'>
                    <div className="content-bg-title">
                        <TitleIcon />
                        <p>About ME</p>
                    </div>
                    <div className="content-bg-text content-bg-s">
                        빡세게 열심히하는 신입 프론트엔드 <br></br>개발자 손하늘입니다!
                    </div>
                </div>
            </section>
            <section className='about-introduce dot-bg about-edu'>
                <div className='introduce-cont'>
                    <div className="content-bg-title">
                        <TitleIcon />
                        <p>사용 기술</p>
                    </div>
                    <div className="content-bg-text content-bg-l">
                        <div className='skills'>
                            <ul>
                                <li>
                                    <span>HTML</span>
                                    <p></p>
                                </li>
                                <li>
                                    <span>CSS3</span>
                                    <p></p>
                                </li>
                                <li>
                                    <span>SASS</span>
                                    <p></p>
                                </li>
                                <li>
                                    <span>JavaScript</span>
                                    <p></p>
                                </li>
                                <li>
                                    <span>TypeScript</span>
                                    <p></p>
                                </li>
                                <li>
                                    <span>REACT</span>
                                    <p></p>
                                </li>
                                <li>
                                    <span>Express</span>
                                    <p></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about-introduce dot-bg'>
                {/* <Contentbg /> */}
                <div className='introduce-cont'>
                    <div className="content-bg-title">
                        <TitleIcon />
                        <p>교육 이력</p>
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

export default Menucontent;