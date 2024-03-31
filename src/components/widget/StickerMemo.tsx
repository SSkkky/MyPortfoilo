import { useRef } from "react";
import { Rnd } from "react-rnd";
import useWindowSize from '../../hooks/useWindowSize';
import '../../styles/pages/stickerMemo.scss';


export default function StickerMemo() {
    const { width } = useWindowSize();

    const refDiv = useRef<Rnd>(null);

    let defaultValue;
    if (width > 768) {
    defaultValue = {
      x: 340,
      y: 40,
      width: 280,
      height: 280,
    };
  } else if (width <= 768 && width > 430) {
    defaultValue = {
      x: 40,
      y: 300,
      width: 240,
      height: 240,
    };
  } else {
    defaultValue = {
      x: 40,
      y: 260,
      width: 200,
      height: 200,
    };
  }

    return (
        <Rnd
            className={'stickerMemo drag-handle100'}
            default={defaultValue}
            enableResizing={false}
            ref={refDiv}
            dragHandleClassName='drag-handle100'
            bounds="body"
        >
            <h3>Readme.md</h3>
            <div className="contents">
                <div>
                    <p className="responsiveNone">개발자 손하늘과 프로젝트들을 소개합니다!</p>
                    <p>궁금하시다면 OS의 <b>아이콘들을 클릭</b>해보세요!</p>
                </div>
                <span>최종업데이트 2024-03-26</span>
            </div>
        </Rnd>
    )

}