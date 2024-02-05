import React, { useEffect, useState } from 'react'
import Menu from '../pages/Menu'
import { MeIcon, TitleIcon} from '../assets/icons/icons';
import jsonData from '../data.json';

function PortfolioContent() {
    const data = jsonData;

    useEffect(() => {
        console.log(data, 'data');
    }, [data]);
    

  return (
    <div className='content portfolio'>
        {
            data.map((item)=>
                <section className='dot-bg portfolio-section' key={item.id}>
                    <div className='dot-bg-inner'>
                        <div className="content-bg-title">
                            <TitleIcon />
                            <p>{item.name}</p>
                        </div>
                        <div className={`content-bg-text pf-content-bg ${item.keyword}`}>
                            <img src={item.image_url} alt="썸네일이미지"></img>
                        </div>
                    </div>
                </section>
            )
        }
    </div>
  )
}

export default PortfolioContent