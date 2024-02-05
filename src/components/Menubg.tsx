import { useStore } from '../store';

function Menubg() {
    const { menuActive, setMenuActive } = useStore();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
        setMenuActive(false);
    }

    return (
        <div className='main-cont-bg'>
                        <div className='btns'>
                            <button className='close-btn' onClick={handleClick}></button>
                            <button className='mini-btn'></button>
                            <button className='max-btn'></button>
                        </div>
                        <div className="bg-box-1"></div>
                        <div className="bg-box-2 about_me_cont">
                            <p className='title'>ABOUT_ME</p>
                        </div>
                        <div className="bg-box-3"></div>
                    </div>
    );
}

export default Menubg;