import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import PortfolioContent from '../components/PortfolioContent';
import { useStore, zIndex } from '../store';

interface Own { name: string }
function Portfolio({ name }: Own) {
    const refDiv = useRef<Rnd>(null);
    const [zIdx, setZidx] = useState(0)

    const { portfolio, maxMenu } = useStore();
    const { zNum, setZNum } = zIndex();

    const [state, setState] = React.useState<State>({
        width: window.innerWidth * 0.6,
        height: window.innerHeight * 0.7,
        x: 60,
        y: 30
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
        <div className={`${portfolio ? "display-block" : "display-none"}`} onClick={zIndexUp}>
            <Rnd className={`${maxMenu ? "max-menu" : ""}`}
                size={{ width: state.width, height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={handleDragStop}
                onResizeStop={handleResizeStop}
                bounds="body"
                ref={refDiv}
                style={{ zIndex: zIdx }}
                dragHandleClassName='drag-handle2'
            >
                <p className='positionTitle'>PORTFOLIO</p>
                <div className="portfolio main-sec-cont">
                    <Menubg name={name} />
                    <PortfolioContent />
                </div>
            </Rnd>
        </div>
    );
}

export default Portfolio;