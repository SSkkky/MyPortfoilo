import React, {useState, useEffect, useRef} from "react";
import { render } from "react-dom";
import { Rnd, DraggableData } from "react-rnd";
import '../../styles/pages/stickerMemo.scss';

interface StickerMemoType {
    down768: boolean,
    down430: boolean
}

export default function StickerMemo({ down768, down430 }: StickerMemoType) {
    const refDiv = useRef<Rnd>(null);

    return (
        <Rnd
            className={'stickerMemo drag-handle100' + (down768 ? ' down768' : '') + (down430 ? ' down430' : '')}
            default={{
                x: 340,
                y: 40,
                width: 280,
                height: 280
            }}
            enableResizing={false}
            ref={refDiv}
            dragHandleClassName='drag-handle100'
            bounds="body"
        >
            <h3>Readme.md</h3>
            <div className="contents">
                <p>
                    <p className="responsiveNone">개발자 손하늘과 프로젝트들을 소개합니다!</p>
                    <p>궁금하시다면 OS의 <b>아이콘들을 클릭</b>해보세요!</p>
                </p>
                <span>최종업데이트 2024-03-26</span>
            </div>
        </Rnd>
    )

}