import React, { useEffect, useRef, useState } from 'react';
import { Rnd, DraggableData, ResizableDelta } from 'react-rnd';
import axios from 'axios';
import { State, guestBookListType } from '../models/dataTypes';
import Menubg from '../components/Menubg';
import ContactContent from '../components/ContactContent';
import { useStore, zIndex } from '../store';
import '../styles/pages/contect.scss';

interface Own { name: string }
function Contact({ name }: Own) {
  const [getData, setGetData] = useState<guestBookListType[]>([]);
  const [isPasswordRight, setIsPasswordRight] = useState(true)
  const [guestBookUpdate, setGuestBookUpdate] = useState(false)
    const serverURI = process.env.REACT_APP_SERVER_URI as string;
    const { maxMenu, popupKeyword, contact, isOnDelAndUpdate, setDelAndUpdate, popupInputUserPassword, setPopupInputUserPassword, guestBookDataObject } = useStore();
    const [updateTextAreaValue, setUpdateTextAreaValue] = useState('');
    const refDiv = useRef<Rnd>(null);
    const [down960, setDown960] = useState(false);
    const [down600, setDown600] = useState(false);
    const [zIdx, setZidx] = useState(0)
    const { zNum, setZNum } = zIndex();

    useEffect(() => {
    const fetchGuestBook = async () => {
      const response = await axios.get(serverURI);
      setGetData(response.data);
    };
    fetchGuestBook();
  }, []);

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
        setIsPasswordRight(true) // 초기화

        switch (type) {
            case 'cancle':
                setDelAndUpdate(false)
                setGuestBookUpdate(false)
                break;
        
            case 'submit':
                console.log('------------비밀번호 대조 함수---------------')
                console.log(guestBookDataObject)
                console.log('입력한 비밀번호는 ', popupInputUserPassword)
                if(guestBookDataObject?.password === popupInputUserPassword){ // 일치
                    if(popupKeyword === '수정'){
                        setGuestBookUpdate(true)
                    } else if(popupKeyword === '삭제'){
                        console.log('삭제합니다');
                        const fetchGuestBook = async () => {
                          const response = await axios.delete(`${serverURI}/${guestBookDataObject._id}`
                        );
                          setGetData(response.data);
                        };
                        fetchGuestBook();
                        setDelAndUpdate(false)
                    } else{
                        window.alert('[오류 발생] 새로고침 후 다시 시도해주세요!')
                    }
                } else{ // 불일치
                    setIsPasswordRight(false)
                }
                break;
        }

        setPopupInputUserPassword(''); // 초기화
    }

    const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPopupInputUserPassword(e.target.value)
    }

    const updateDataHandler = () => {
        const updateData = {
            "name" : guestBookDataObject?.name,
            "message" : updateTextAreaValue,
            "date" : guestBookDataObject?.date,
            "password" : guestBookDataObject?.password
        }
        const fetchGuestBook = async () => {
          const response = await axios.put(`${serverURI}/${guestBookDataObject?._id}`, updateData
        );
        setGetData(response.data);
        };
        
        fetchGuestBook();
        setGuestBookUpdate(false)
        setDelAndUpdate(false); // 팝업 닫음
    }

    const setUpdateTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setUpdateTextAreaValue(e.target.value)
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
                        down600={down600}
                        getData={getData}
                        setGetData={setGetData}
                        />
                </div>
                <div className={'isOnDeleteAndUpdate' + (isOnDelAndUpdate ? ' active' : ' ')}>
                    {
                        guestBookUpdate
                        ? <div className='popupCont popupContUpdate'>
                            <header>🧡 글을 수정합니다 🧡</header>
                            <textarea
                            name="updateArea"
                            id="updateArea" 
                            defaultValue={guestBookDataObject?.message}
                            onChange={(e)=>setUpdateTextArea(e)}/>
                            <div className='popupContBtns'>
                                <button onClick={()=>{delAndUpdatePopupHandler('cancle')}}>취소</button>
                                <button onClick={updateDataHandler}>확인</button>
                            </div>
                        </div>
                        : <div className="popupCont">
                            <header>잠깐!</header>
                            <h4 className={isPasswordRight ? '' : 'isPasswordFalse'}>{isPasswordRight ? ` 정말 ${popupKeyword}하시겠습니까?` : `비밀번호가 일치하지 않습니다!`}</h4>
                            <div className='popupContInput'>
                                <label htmlFor='password'>비밀번호</label>
                                <input type="password" name="password" value={popupInputUserPassword} onChange={(e)=>{inputChangeHandler(e)}} />
                            </div>
                            <div className='popupContBtns'>
                                <button onClick={()=>{delAndUpdatePopupHandler('cancle')}}>취소</button>
                                <button onClick={()=>{delAndUpdatePopupHandler('submit')}}>확인</button>
                            </div>
                        </div>
                    }
                </div>
            </Rnd>
        </div>
    );
}

export default Contact;