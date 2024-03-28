import { Rnd } from "react-rnd";
import { useStore, zIndex } from '../../store';
import '../../styles/pages/guestBook.scss';

interface GuestBookType {
    down768: boolean,
    down430: boolean
}
export default function GuestBook({ down768, down430 }: GuestBookType) {
    const { setContact } = useStore();


    const onClickMenuBtnHandler = () => {
        setContact(true)
    }

    return (
        <Rnd
            className='GuestBook'
            default={{
                x: 40,
                y: 40,
                width: 280,
                height: 280
            }}
            enableResizing={false}
            bounds="parent"
        >
            <header>
                <button className="more" onClick={onClickMenuBtnHandler} />
                <h3 className="day">{new Date().getDate()}</h3>
            </header>
            <div className="contents">
                <h4 className="title">알림</h4>
                <p>제 포트폴리오 홈페이지에 방문해주셔서 감사드립니다 😍🥰</p>
                <span className="author">하늘</span>
            </div>
        </Rnd>
    )

}