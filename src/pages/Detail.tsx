import React, { useRef, useState } from 'react';
import { useStore } from '../store';
import { ListType, goal, fn, skill, trouble } from '../models/dataTypes';
import { Back } from '../assets/icons/icons';

function Detail() {
    const { data, setData, loading, setLoading, index, setIndex, isOnTrue, setIsOnTrue } = useStore();
    const accoRef = useRef<HTMLUListElement>(null);


    // 트러블슈팅 - 메뉴
    const clickAccHandler = (i: number) => {
        accoRef.current?.children[i].children[1].classList.toggle('active');
        let currentIcon: ChildNode | undefined = accoRef?.current?.childNodes[i].childNodes[0].childNodes[1];

        if (currentIcon?.textContent == '-') {
            currentIcon.textContent = '+';
        } else if (currentIcon?.textContent == '+') {
            currentIcon.textContent = '-';
        }
    }

    if (index < 0) { setIndex(4); }
    if (index > 4) { setIndex(0); }

    // 뒤로가기
    const backFn = () => {
        setIsOnTrue(!isOnTrue)
    }

    return (
        <>
            {
                data.map((obj: ListType, i: number) => {
                    if (i === index) {
                        return <div key={i} className={`content portfolio-detail ${isOnTrue ? "display-block" : "display-none"}`}>
                            <div className='detail-header'>
                                <button className='pdBack' onClick={backFn}><Back />뒤로가기</button>
                                <div className='pdIndex'>
                                    <button className='leftBtn' onClick={() => { setIndex(i - 1) }}>←</button>
                                    <p>{i + 1}/5</p>
                                    <button className='rightBtn' onClick={() => { setIndex(i + 1) }}>→</button>
                                </div>
                            </div>
                            <div className='detail-introduce'>
                                <div className='detail-left'>
                                    <div className='detail-title'>
                                        <h3>{obj.name}</h3>
                                        <span>{obj.dateteam}</span>
                                    </div>
                                    <div className='detail-image'>
                                        <img src={obj.imageurl} alt="썸네일이미지" ></img>
                                    </div>
                                    <div className='develop-link'>
                                        <h4 className='title'>⛪ 링크</h4>
                                        <a href={obj.deployurl} target='_blank'>배포 주소</a>
                                        <a href={obj.link} target='_blank'>Github</a>
                                    </div>
                                </div>
                                <div className='detail-right'>
                                    <div className='develop-goal'>
                                        <h4 className='title'>⭐ 프로젝트 개요</h4>
                                        <p>{obj.overview}</p>
                                    </div>
                                    <div className='develop-goal'>
                                        <h4 className='title'>🌈 주요 기능</h4>
                                        <ul>
                                            {
                                                obj.function.map((item: fn, i: number) =>
                                                    <li key={i}>{item.fn}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className='develop-skill'>
                                        <h4 className='title'>🌊 활용 기술</h4>
                                        <ul>
                                            {
                                                obj.skill.map((item: skill, i: number) =>
                                                    <li key={i}><span>{item.name}</span> : {item.skills}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className='develop-review'>
                                        <h4 className='title'>✨ 개발 후기</h4>
                                        <p>{obj.review}</p>
                                    </div>
                                    <div className='develop-trouble'>
                                        <h4 className='title'>🔥 트러블 슈팅</h4>
                                        <ul ref={accoRef}>
                                            {
                                                obj.trouble.map((item: trouble, i: number) =>
                                                    <li key={i} className="troubleAccordion" onClick={() => { clickAccHandler(i) }}>
                                                        <div className='title'>
                                                            <h4>{item.id + 1}. {item.title}</h4>
                                                            <p>+</p>
                                                        </div>
                                                        <ul className="troubleText">
                                                            <li><span>문제</span> {item.problem}</li>
                                                            <li><span>원인</span> {item.reason}</li>
                                                            <li><span>해결</span> {item.solve}</li>
                                                        </ul>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                })
            }
        </>
    );
}

export default Detail;