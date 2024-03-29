import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import { State } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import ContactContent from '../components/ContactContent';
import { useStore, zIndex } from '../store';
import '../styles/pages/contect.scss';

interface Own { name: string }
function Contact({ name }: Own) {
    const { maxMenu, popupKeyword, contact, isOnDelAndUpdate, setDelAndUpdate } = useStore();
    const refDiv = useRef<Rnd>(null);
    const [down960, setDown960] = useState(false);
    const [down600, setDown600] = useState(false);
    const [zIdx, setZidx] = useState(0)

    const { zNum, setZNum } = zIndex();

    const [state, setState] = React.useState<State>({
        width: window.innerWidth * 0.7,
        height: window.innerHeight * 0.6,
        x: 50,
        y: 60
    });

    const updateWindowDimensions = () => {
        setState(prevState => ({
            ...prevState,
            width: Math.min(window.innerWidth * 0.7, prevState.width),
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
            height: parseInt(ref.style.height),
            x: position.x,
            y: position.y
        }));
    };

    // z-index
    const zIndexUp = () => {
        setZidx(zNum + 1);
        setZNum(zNum + 1)
    }


    // ------------------- 반응형
    useEffect(() => {
        if (600 < state.width && state.width < 960) {
            if (down960 === true) {
                return
            } else {
                setDown960(true)
                setDown600(false)
            }
            setDown960(true)
        } else if (state.width < 600) {
            if (down600 === true) {
                return
            } else {
                setDown960(false)
                setDown600(true)
            }
        } else if (state.width >= 960) {
            setDown960(false)
            setDown600(false)
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.width]);

    // ------------------- 비밀번호 입력 팝업
    const delAndUpdatePopupHandler = (type:string) => {
        switch (type) {
            case 'cancle':
                setDelAndUpdate(false)
                break;
        
            case 'submit':
                console.log('비밀번호 대조 함수')
                setDelAndUpdate(false)
                break;
        }
    }

    return (
        <div className={`${contact ? "display-block" : "display-none"}`} onClick={zIndexUp}>
            <Rnd className={`${maxMenu ? "max-menu" : ""}`}
                size={{ width: state.width, height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={handleDragStop}
                onResizeStop={handleResizeStop}
                bounds="body"
                ref={refDiv}
                style={{ zIndex: zIdx }}
                dragHandleClassName='drag-handle3'
            >
                <p className='positionTitle'>CONTECT</p>
                <div className="contact main-sec-cont">
                    <Menubg name={name} />
                    <ContactContent
                        down960={down960}
                        down600={down600} />
                </div>
                <div className={'isOnDeleteAndUpdate' + (isOnDelAndUpdate ? ' active' : ' ')}>
                    <div className='popupCont'>
                        <h4>정말 {popupKeyword}하시겠습니까?</h4>
                        <p>비밀번호를 입력해주세요!</p>
                        <input type="text" />
                        <div>
                            <button onClick={()=>{delAndUpdatePopupHandler('cancle')}}>취소</button>
                            <button onClick={()=>{delAndUpdatePopupHandler('submit')}}>확인</button>
                        </div>
                    </div>
                </div>
            </Rnd>
        </div>
    );
}

export default Contact;