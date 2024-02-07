import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import ContactContent from '../components/ContactContent';

import { useStore } from '../store';
interface Own { name: string }
function Contact({ name }: Own) {
    const { contact } = useStore();
    const refDiv = useRef<Rnd>(null);

    const { menuActive, maxMenu, nowMenu, contactZNum, setAboutZNum, setPortfolioZNum, setContactZNum, onClickMenu, setOnClickMenu } = useStore();

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

    const handleResizeStop = (e: any, direction: string, ref: HTMLElement, delta: ResizableDelta, position: { x: number, y: number }) => {
        setState(prevState => ({
            ...prevState,
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height)
        }));
    };

    // z-index
    const zIndexUp = () => {
        let div = refDiv.current;
        if (div) {
            if (onClickMenu !== 'Contact') {
                setOnClickMenu('Contact');
            }
        }
    }

    useEffect(() => {
        if (onClickMenu == 'Contact') {
            setAboutZNum(0);
            setPortfolioZNum(0);
            setContactZNum(1);
        }
    }, [onClickMenu]);

    return (
        <div className={`${contact ? "display-block" : "display-none"}`} onClick={zIndexUp}>
            <Rnd className={`${maxMenu ? "max-menu" : ""}`}
                dragHandleClassName="drag-handle"
                size={{ width: state.width, height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={handleDragStop}
                onResizeStop={handleResizeStop}
                bounds="body"
                ref={refDiv}
                style={{ zIndex: contactZNum }}
            >
                <div className="contact main-sec-cont">
                    <Menubg name={name} />
                    <ContactContent />
                </div>
            </Rnd>
        </div>
    );
}

export default Contact;