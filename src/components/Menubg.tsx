import { useEffect } from 'react';
import { useStore } from '../store';
interface Own { name: string }
function Menubg({ name }: Own) {
    const { setAbout, setPortfolio, setContact, maxMenu, setMaxMenu } = useStore();

    //event: React.MouseEvent<HTMLButtonElement>
    const handleClickClose = () => {
        console.log(name)
        if (name == 'about') {
            setAbout(false);
        } else if (name == 'portfolio') {
            setPortfolio(false)
        } else {
            setContact(false)
        }
    }

    const handleClickMax = () => {
        setMaxMenu(!maxMenu);
    }

    const handleClickMin = () => { // 축소버튼
        //도크로 쏙 들어가야해용
    }

    return (
        <div className='main-cont-bg drag-handle'>
            <div className='btns'>
                <button className='close-btn' onClick={handleClickClose}></button>
                <button className='mini-btn' onClick={handleClickMin}></button>
                <button className='max-btn' onClick={handleClickMax}></button>
            </div>
            <div className="bg-box-1"></div>
            <div className="bg-box-2"></div>
            <div className="bg-box-3"></div>
        </div>
    );
}

export default Menubg;