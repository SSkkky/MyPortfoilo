"use client"

import GuestBook from './GuestBook';
import StickerMemo from './StickerMemo';
import { useEffect, useState } from 'react';

export default function Widget() {
    const [down768, setDown768] = useState(false);
    const [down430, setDown430] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (430 < window.innerWidth && window.innerWidth < 768) {
                if (down768 === true) {
                    return
                } else {
                    setDown768(true)
                    setDown430(false)
                }
                setDown768(true)
            } else if (window.innerWidth < 430) {
                if (down430 === true) {
                    return
                } else {
                    setDown768(false)
                    setDown430(true)
                }
            } else if (window.innerWidth >= 768) {
                setDown768(false)
                setDown430(false)
            } // eslint-disable-next-line react-hooks/exhaustive-deps
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);


    return (
        <>
            <GuestBook down768={down768} down430={down430} />
            <StickerMemo down768={down768} down430={down430} />
        </>
    )
}