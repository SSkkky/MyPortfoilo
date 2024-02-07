import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import AboutContent from '../components/AboutContent';

import { useStore } from '../store';
interface Own { name: string }
function About({ name }: Own) {

    const { about } = useStore();
    const refDiv = useRef<Rnd>(null);

    const { setNowMenu, maxMenu, aboutZNum, setAboutZNum, setPortfolioZNum, setContactZNum, onClickMenu, setOnClickMenu } = useStore();

    const [state, setState] = React.useState<State>({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.7,
        x: 0,
        y: 0
    });

    const updateWindowDimensions = () => {
        setState(prevState => ({
            ...prevState,
            width: Math.min(window.innerWidth * 0.8, prevState.width),
            height: Math.min(window.innerHeight * 0.7, prevState.height)
        }));
    };

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);
        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, []);

    const handleDragStop = (e: any, d: DraggableData) => {
        setState(prevState => ({
            ...prevState,
            x: d.x,
            y: d.y
        }));
    };

    // z-index
    const zIndexUp = () => {
        setNowMenu('About')
        let div = refDiv.current;
        if (div) {
            if (onClickMenu !== 'About') {
                setOnClickMenu('About');
            }
        }
    }

    useEffect(() => {
        if (onClickMenu == 'About') {
            setAboutZNum(1);
            setPortfolioZNum(0);
            setContactZNum(0);
        }
    }, [onClickMenu]);


    const handleResizeStop = (e: any, direction: string, ref: HTMLElement, delta: ResizableDelta, position: { x: number, y: number }) => {
        setState(prevState => ({
            ...prevState,
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height)
        }));
    };

    useEffect(() => {
        // console.log(state.width, '<-- state.width')
        if (state.width < 420) {
            // about window width가 420 이하일때 style

        }
    }, [state.width])

    return (
        <div className={`${about ? "display-block" : "display-none"}`} onClick={zIndexUp}>
            <Rnd className={`${maxMenu ? "max-menu" : ""}`}
                size={{ width: state.width, height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={handleDragStop}
                onResizeStop={handleResizeStop}
                bounds="body"
                ref={refDiv}
                style={{ zIndex: aboutZNum }}
            >
                <div className="about_me main-sec-cont">
                    <Menubg name={name} />
                    <AboutContent />
                </div>
            </Rnd>
        </div>
    );
}

export default About;