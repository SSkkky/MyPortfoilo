import * as React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import '../../styles/pages/stickerMemo.scss';

interface StickerMemoType {
    down768: boolean,
    down430: boolean
}

export default function StickerMemo({ down768, down430 }: StickerMemoType) {
    return (
        <Rnd
            className={'stickerMemo' + (down768 ? ' down768' : '') + (down430 ? ' down430' : '')}
            default={{
                x: down768 ? 40 : 0,
                y: down768 ? 0 : 340,
                width: 280,
                height: 280
            }}
            enableResizing={false}
            bounds="parent"
        >
            <h3>Readme.md</h3>
            <div className="contents">
                <p>개발자 손하늘과 프로젝트들을 소개합니다! 궁금하시다면 OS의 <b>아이콘들을 클릭</b>해보세요!</p>
                <span>최종업데이트 2024-03-26</span>
            </div>
        </Rnd>
    )

}