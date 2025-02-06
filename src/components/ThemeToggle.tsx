"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {animate, motion, useMotionValue} from "framer-motion"
import {useEffect} from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/Tooltip"


type Props = {
    tooltip ?: string;
};

const properties = {
    dark: {
        r: 9,
        rotate: 32,
        cx: 12,
        cy: 4,
        innerCircleRadius: 9,
        opacity: 0,
        moonOpacity: 1,
        scale: 1,
    },
    light: {
        r: 5,
        rotate: 90,
        cx: 30,
        cy: 0,
        innerCircleRadius: 0,
        opacity: 1,
        moonOpacity: 0,
        scale: 0.55,
    },
    transition: { type: "spring", mass: 4, stiffness: 250, damping: 35 }
} as const;

const ThemeToggle = (props: Props) =>{
    const {theme, setTheme} = useTheme()
    console.log(theme)
    const currentTheme = theme === "dark" || theme === "light" ? theme : "dark";

    const rotate = useMotionValue(properties[currentTheme].rotate);
    const r = useMotionValue(properties[currentTheme].r);
    const cx = useMotionValue(properties[currentTheme].cx);
    const cy = useMotionValue(properties[currentTheme].cy);
    const innerCircleRadius = useMotionValue(properties[currentTheme].innerCircleRadius);
    const opacity = useMotionValue(properties[currentTheme].opacity);
    const moonOpacity = useMotionValue(properties[currentTheme].moonOpacity);
    const moonScale = useMotionValue(properties[currentTheme].scale);

    useEffect(() => {
        animate(rotate, properties[currentTheme].rotate, properties.transition);
        animate(r, properties[currentTheme].r, properties.transition);
        animate(cx, properties[currentTheme].cx, properties.transition);
        animate(cy, properties[currentTheme].cy, properties.transition);
        animate(innerCircleRadius, properties[currentTheme].innerCircleRadius, properties.transition);
        animate(opacity, properties[currentTheme].opacity, properties.transition);
        animate(moonOpacity,properties[currentTheme].moonOpacity, properties.transition);
        animate(moonScale,properties[currentTheme].scale, properties.transition);
    }, [currentTheme]);


    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className={"hover:text-foreground flex items-center cursor-pointer"}
                            onClick={() => setTheme(theme === "system" || theme === "dark" ? "light" : "dark")}>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{rotate}}
                            transition={properties.transition}
                        >
                            <motion.mask id={"mask"}>
                                <rect x="0" y="0" width="100%" height="100%" fill="white"/>
                                <motion.circle cx="12" cy="4" r={innerCircleRadius} stroke="black" fill="black"/>
                            </motion.mask>
                            <motion.circle stroke="currentColor" cx="12" cy="12" r={r} mask="url(#mask)"
                                           opacity={opacity}/>
                            <motion.g style={{scale: moonScale}} opacity={moonOpacity}>
                                <motion.path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                            </motion.g>
                            <motion.g stroke="currentColor" style={{opacity}}>
                                <motion.path d="M12 2v2"/>
                                <motion.path d="M12 20v2"/>
                                <motion.path d="m4.93 4.93 1.41 1.41"/>
                                <motion.path d="m17.66 17.66 1.41 1.41"/>
                                <motion.path d="M2 12h2"/>
                                <motion.path d="M20 12h2"/>
                                <motion.path d="m6.34 17.66-1.41 1.41"/>
                                <motion.path d="m19.07 4.93-1.41 1.41"/>
                            </motion.g>
                        </motion.svg>
                        <span className="sr-only">Toggle theme</span>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <span>{props.tooltip ?? "Change Theme"}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>


    )
}

export default ThemeToggle;