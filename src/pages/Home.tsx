import React from 'react';
import '../styles/common.scss';
import { ReactComponent as Logo } from '../assets/icons/cloud.svg';
import { ReactComponent as WifiIcon } from '../assets/icons/wifi.svg';
import { ReactComponent as BetteryIcon } from '../assets/icons/bettery.svg';
import { ReactComponent as HanIcon } from '../assets/icons/han.svg';

function Home() {
    return (
        <>
            <header>
                <nav>
                    <h1><Logo width="28" /></h1>
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
                    <HanIcon width="20" />
                    <span>(금) 오후 12:10</span>
                </div>
            </header>
        </>
    );
}

export default Home;