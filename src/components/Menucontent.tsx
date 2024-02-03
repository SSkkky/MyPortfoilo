import React from 'react';
import { Logo, WifiIcon, BetteryIcon, HanIcon, MeIcon, PfIcon, CtIcon, GitIcon, VelogIcon, TrIcon } from '../assets/icons/icons';
import Contentbg from './Contentbg';

function Menucontent() {
    return (
        <div className='content about'>
            <section className='about-top'>
                <span>LV.1</span>
                <MeIcon />
            </section>
            <section className='about-introduce'>
                <Contentbg />
                <div className='introduce-cont'>
                    <p>손하늘</p>
                    <p>안녕하세요 손하늘입니다!</p>
                </div>
            </section>
        </div>
    );
}

export default Menucontent;