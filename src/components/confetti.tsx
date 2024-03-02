"use client";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import {TConductorInstance} from "react-canvas-confetti/src/types";
import {useEffect, useState} from "react";

export default function Confetti() {
    const [conductor, setConductor] = useState<TConductorInstance>();

    useEffect(() => {
        conductor?.run({ speed: 1});

        return () => {
            conductor?.stop();
        };
    }, [conductor]);

    const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
        setConductor(conductor);
    };

    return <Realistic onInit={onInit}/>
}
