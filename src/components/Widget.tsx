"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import '../styles/pages/widget.scss';

export default function Widget() {
    const refDiv = useRef<Rnd>(null);
    const [state, setState] = React.useState({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.7,
        x: 40,
        y: 40
    });

    const updateWindowDimensions = () => {
        setState(prevState => ({
            ...prevState,
            width: Math.min(window.innerWidth * 1, prevState.width),
            height: Math.min(window.innerHeight * 1, prevState.height)
        }));
    };

    const handleDragStop = (e: any, d: DraggableData) => {
        setState(prevState => ({
            ...prevState,
            x: d.x,
            y: d.y
        }));
    };

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);
        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, []);

    const handleResizeStop = (e: any, direction: string, ref: HTMLElement, delta: ResizableDelta, position: { x: number, y: number }) => {
        setState(prevState => ({
            ...prevState,
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height),
            x: position.x,
            y: position.y
        }));
    };

    return (
        <Rnd id='mainWiget'
            size={{ width: state.width, height: state.height }}
            position={{ x: state.x, y: state.y }}
            onDragStop={handleDragStop}
            onResizeStop={handleResizeStop}
            bounds="body"
            ref={refDiv}
            dragHandleClassName='drag-handle10'
        >
            <div className='wigetLeftCont'>
                <div className='picture'></div>
                <div className='notice'></div>
            </div>
            <div className='stickerMemo'>
                <h3>Readme.md</h3>
                <p>제 포트폴리오 홈페이지에 오신 것을 환영합니다!<br />OS의 <b>아이콘들을 클릭</b>해보세요!</p>
                <span>2024-03-26</span>
            </div>
        </Rnd>
    )
}