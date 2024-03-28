import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import PortfolioContent from '../components/PortfolioContent';
import { useStore, zIndex } from '../store';
import '../styles/pages/portfolio.scss';

interface Own { name: string }
function Portfolio({ name }: Own) {
    const refDiv = useRef<Rnd>(null);
    const [zIdx, setZidx] = useState(0);
    const [down880, setDown880] = useState(false);
    const [down600, setDown600] = useState(false);
    const [zIndexUp, setZIndexUp] = useState(false);

    const { portfolio, maxMenu, setIsOnTrue } = useStore();
    const { zNum, setZNum } = zIndex();

    const [state, setState] = React.useState<State>({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
        x: 60,
        y: 40
    });

    const updateWindowDimensions = () => {
        setState(prevState => ({
            ...prevState,
            width: Math.min(window.innerWidth * 0.8, prevState.width),
            height: Math.min(window.innerHeight * 0.8, prevState.height)
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

    useEffect(() => {
        setZidx(zNum + 1);
        setZNum(zNum + 1) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zIndexUp])


    // ---------------------------------------반응형
    useEffect(() => {
        if (600 < state.width && state.width < 880) {
            if (down880 === true) {
                return
            } else {
                setDown880(true)
                setDown600(false)
            }
            setDown880(true)
        } else if (state.width < 600) {
            if (down600 === true) {
                return
            } else {
                setDown880(false)
                setDown600(true)
            }
        } else if (state.width >= 880) {
            setDown880(false)
            setDown600(false)
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.width]);

    useEffect(() => {
        if (portfolio === false) {
            // 포트폴리오 창 닫으면 디테일 닫음(초기화)
            setIsOnTrue(false)
        }  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [portfolio])

    return (
        <div className={`${portfolio ? "display-block" : "display-none"}`} onClick={() => { setZIndexUp(!zIndexUp) }}>
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
                    <PortfolioContent
                        down880={down880}
                        down600={down600} />
                </div>
            </Rnd>
        </div>
    );
}

export default Portfolio;