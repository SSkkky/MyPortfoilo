"use client"

import React, { useEffect, useState } from 'react';

export default function TextAnimation() {
    const content = "화면을 개발하는 손하늘입니다 :)";
    const [txtAni, setTxtAni] = useState<string>(content[0]);
    let i = 0;

    const typing = () => {
        if (i < content.length - 1) {
            i++;
            setTxtAni((prevTxt) => prevTxt + content[i]);
        } else {
            setTxtAni(content[0]);
            i = 0;
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(typing, 300);
            return () => clearInterval(interval);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div id="main-left-cont">
            <span className="text">{txtAni}</span>
        </div>
    )
}