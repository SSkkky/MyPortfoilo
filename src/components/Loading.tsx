import React, { useEffect, useState } from 'react';
import { useStore } from '../store';
import { Logo } from '../assets/icons/icons';

import '../styles/pages/loading.scss'

export default function Loading() {
    return (
        <>
            <section id='Loading'>
                <Logo />
                <div className='loadingBar'></div>
            </section>
        </>
    );
}