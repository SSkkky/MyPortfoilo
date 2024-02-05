import React from 'react'
import Menu from '../pages/Menu'
import { MeIcon, TitleIcon} from '../assets/icons/icons';

function PortfolioContent() {
  return (
    <div className='content portfolio'>
        <section className='dot-bg'>
            <div className='dot-bg-inner'>
                <div className="content-bg-title">
                    <TitleIcon />
                    <p>포폴 제목</p>
                </div>
                <div className="content-bg-text pf-content-bg">
                    <img src="https://t1.daumcdn.net/cafeattach/1YVY7/0ff149c4738c2f01fcde7e983292079d83c15ea9" alt="" />
                    이미지가 들어감
                </div>
            </div>
        </section>
    </div>
  )
}

export default PortfolioContent