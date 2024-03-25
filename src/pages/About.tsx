import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import AboutContent from '../components/AboutContent';
import '../styles/pages/about.scss';

import { useStore, zIndex } from '../store';
interface Own { name: string }
function About({ name }: Own) {
    const refDiv = useRef<Rnd>(null);
    const [zIdx, setZidx] = useState(0);

    //store
    const { about, maxMenu } = useStore();
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

    const zIndexUp = () => {
        setZidx(zNum + 1);
        setZNum(zNum + 1)
    }

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
                dragHandleClassName='drag-handle1'
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