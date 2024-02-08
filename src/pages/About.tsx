import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import AboutContent from '../components/AboutContent';

import { useStore, zIndex } from '../store';
interface Own { name: string }
function About({ name }: Own) {
    const refDiv = useRef<Rnd>(null);
    const [zIdx, setZidx] = useState(0)

    //store
    const { about } = useStore();
    const { maxMenu } = useStore();
    const { zNum, setZNum } = zIndex();


    const [state, setState] = React.useState<State>({
        width: window.innerWidth * 0.5,
        height: window.innerHeight * 0.7,
        x: 20,
        y: 20
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

    useEffect(() => {
        console.log('setState값', state.x, state.y)
    }, [state])

    useEffect(() => {
        console.log(state.width, '<-- state.width')
        if (state.width < 360) {
            // about window width가 360 이하일때 style

        } else if (state.width < 420) {
            // about window width가 420 이하일때 style
        } else {
            // 적용되고 났을때 냅두면 안되니까
            // 혹시모를 css classList 삭제
        }
    }, [state.width])

    const zIndexUp = () => {
        setZidx(zNum + 1);
        setZNum(zNum + 1)
    }

    //**style inline style={{ zIndex: aboutZNum, display: 'none' }}
    return (
        <div className={`${about ? "display-block" : "display-none"}`} onClick={zIndexUp}>
            <Rnd className={`${maxMenu ? "max-menu" : ""}`}
                size={{ width: state.width, height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={handleDragStop}
                onResizeStop={handleResizeStop}
                bounds="body"
                ref={refDiv}
                style={{ zIndex: zIdx }}
            >
                <p className='positionTitle'>ABOUT_ME</p>
                <div className="about_me main-sec-cont">
                    <Menubg name={name} />
                    <AboutContent />
                </div>
            </Rnd>
        </div>
    );
}

export default About;