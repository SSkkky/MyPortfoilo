import React from 'react';
import Menu from './Menu';
import { useStore } from '../store';

function About() {
    const { menuActive} = useStore();

    return (
        <div className={`${menuActive ? "display-block" : "display-none"}`}>
            <Menu />
        </div>
    );
}

export default About;