import {useRef} from "react";
import { Rnd } from 'react-rnd';
import { useStore } from '../../store';
import '../../styles/pages/guestBook.scss';

interface GuestBookType {
    down768: boolean,
    down430: boolean
}
export default function GuestBook({ down768, down430 }: GuestBookType) {
    const refDiv = useRef<Rnd>(null);
    const { setContact } = useStore();

    const onClickMenuBtnHandler = () => {
        setContact(true)
    }

    return (
        <Rnd
            className={'GuestBook drag-handle101' + (down768 ? ' down768' : '') + (down430 ? ' down430' : '')}
            default={{
                x: 40,
                y: 40,
                width: 280,
                height: 280
            }}
            enableResizing={false}
            ref={refDiv}
            dragHandleClassName='drag-handle101'
            bounds="body"
            cancel=".no-drag"
        >
            <header>
                <button className="more no-drag" onClick={onClickMenuBtnHandler} />
                <h3 className="day">{new Date().getDate()}</h3>
            </header>
            <div className="contents">
                <h4 className="title">알림</h4>
                <p>버튼을 클릭해 응원의 메시지를 작성해주세요! 😍🥰</p>
                <span className="author">하늘</span>
            </div>
        </Rnd>
    )

}