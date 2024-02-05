import React, { useEffect } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import Menucontent from '../components/Menucontent';

import { useStore } from '../store';

const Menu = () => {
    const { menuActive } = useStore();

    const [state, setState] = React.useState<State>({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.7,
        x: 60,
        y: 90
    });

    const updateWindowDimensions = () => {
        setState(prevState => ({
            ...prevState,
            width: Math.min(window.innerWidth * 0.8, prevState.width),
            height: Math.min(window.innerHeight * 0.6, prevState.height)
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

    return (
        <div style={{ display: menuActive ? "block" : "none" }}>
        <Rnd className={menuActive ? "display-block" : "display-none"}
            size={{ width: state.width, height: state.height }}
            position={{ x: state.x, y: state.y }}
            onDragStop={handleDragStop}
            onResizeStop={handleResizeStop}
            bounds="parent"
        >
            <div className="about_me main-sec-cont">
                <Menubg />
                <Menucontent />
            </div>
        </Rnd>
        </div>
    );
};

export default Menu;
