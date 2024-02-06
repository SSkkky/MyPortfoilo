import React, { useEffect, useRef, useState } from 'react'
import { TitleIcon } from '../assets/icons/icons';
import axios from 'axios';
import Detail from '../pages/Detail';
import { ListType } from '../models/dataTypes';
import { useStore } from '../store';

function PortfolioContent() {
  const { data, setData, loading, setLoading, index, setIndex, isOnTrue, setIsOnTrue } = useStore();
  const refPF = useRef<HTMLDivElement>(null);
  // 데이터 로딩 함수
  const fetchData = async () => {
    setLoading(true);
    try {
      await axios.get('./data.json')
        .then(response => {
          setData(response.data);
        });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 로딩 중일 때 로딩 화면 노출
  if (loading) {
    return <div className='content portfolio nowLoading'>

    </div>
  }

  // 데이터가 없을 때
  if (!data) {
    return <div className='content portfolio nowError'>오류! 새로고침해주세요</div>;
  }

  const clickThumbHandler = (i: number) => {
    setIndex(i)
    refPF.current?.classList.add('display-none');
    setIsOnTrue(true)
  }

  return (
    <>
      <div className={`content portfolio ${isOnTrue ? "display-none" : "display-block"}`} ref={refPF}>
        {
          data?.map((item: ListType, i: number) =>
            <section className='dot-bg portfolio-section' key={item.id}>
              <div className='dot-bg-inner'>
                <div className="content-bg-title">
                  <TitleIcon />
                  <p>{item.name}</p>
                </div>
                <div className="content-bg-text pf-content-bg" onClick={() => { clickThumbHandler(i) }}>
                  <img src={item.imageurl} alt="썸네일이미지"></img>
                </div>
              </div>
            </section>
          )
        }
      </div>
      <Detail />
    </>
  )
}

export default PortfolioContent