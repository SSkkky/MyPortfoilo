import { useStore } from '../store';

function Menubg() {
    const { setMenuActive, menuActive, setMaxMenu, nowMenu } = useStore();

    //event: React.MouseEvent<HTMLButtonElement>
    const handleClickClose = ()=>{
            setMenuActive(!menuActive);
            console.log(menuActive, '<--close maxMenu')
    }

    const handleClickMax = ()=>{
        setMaxMenu(true);
    }

    const handleClickMin= ()=>{
        setMaxMenu(false);
    }

    return (
        <div className='main-cont-bg'>
                        <div className='btns'>
                            <button className='close-btn' onClick={handleClickClose}></button>
                            <button className='mini-btn' onClick={handleClickMin}></button>
                            <button className='max-btn' onClick={handleClickMax}></button>
                        </div>
                        <div className="bg-box-1"></div>
                        <div className="bg-box-2">
                            <p className='title'>{nowMenu}</p>
                        </div>
                        <div className="bg-box-3"></div>
                    </div>
    );
}

export default Menubg;