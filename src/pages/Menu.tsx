import React, { useEffect } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import AboutContent from '../components/AboutContent';
import PortfolioContent from '../components/PortfolioContent';
import ContactContent from '../components/ContactContent';

import { useStore } from '../store';

const Menu = () => {
    const { menuActive, maxMenu, nowMenu } = useStore();

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

    const selectContent = (ContentName:string)=>{
        if(ContentName == 'ABOUT_ME'){
            return <AboutContent />
        } if(ContentName == 'PORTFOLIO'){
            return <PortfolioContent />
        } else{
            return <ContactContent />
        }
    }

    
    // console.log(nowMenu, "<-selectContent")

    return (
        <Rnd className={`${menuActive ? "display-block" : "display-none"} ${maxMenu ? "max-menu" : ""}`}
            size={{ width: state.width, height: state.height }}
            position={{ x: state.x, y: state.y }}
            onDragStop={handleDragStop}
            onResizeStop={handleResizeStop}
            bounds="body"
        >
            <div className="about_me main-sec-cont">
                <Menubg />
                {selectContent(nowMenu)}
            </div>
        </Rnd>
    );
};

export default Menu;
