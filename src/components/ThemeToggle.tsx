"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {motion} from "framer-motion"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/Tooltip"
import {flushSync} from "react-dom";
import {Variants} from "motion/react";


type Props = {
    tooltip ?: string;
};


const ThemeToggle = (props: Props) =>{
    const {theme, setTheme} = useTheme()

    const transition = {type: "spring", mass: 4, stiffness: 1350, damping: 35}

    const sunVariants: Variants = {
        visible: {
            opacity: 1,
            rotate: 90,
            transition: transition
        },
        hidden: {
            opacity: 0,
            rotate: 32,
            transition: transition
        }
    }

    const moonVariants: Variants = {
        visible: {
            opacity: 1,
            rotate: 31,
            fill: "none",
            transition: transition
        },
        hidden: {
            opacity: 0,
            rotate: 0,
            fill: "currentColor",
            transition: transition
        }
    }



    const handleThemeToggle = async () => {
        await document.startViewTransition(() => {
            flushSync(() => {
                setTheme(theme === "system" || theme === "dark" ? "light" : "dark")
            })
        }).ready;

        document.documentElement.animate(
            {
                clipPath: [
                    "polygon(0 0, -20% 0, 0 100%, 0 100%)",
                    "polygon(0 0, 120% 0, 100% 100%, 0 100%)",
                ],
            },
            {
                duration: 1500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            }
        );

    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className={"hover:text-foreground flex items-center cursor-pointer relative"}
                         onClick={() => handleThemeToggle()}>
                        {theme !== "dark" ? (
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
                                initial="hidden" animate="visible" exit="hidden"
                                variants={sunVariants}
                            >
                                <circle stroke="currentColor" cx="12" cy="12" r={5}/>

                                <g stroke="currentColor">
                                    <path d="M12 2v2"/>
                                    <path d="M12 20v2"/>
                                    <path d="m4.93 4.93 1.41 1.41"/>
                                    <path d="m17.66 17.66 1.41 1.41"/>
                                    <path d="M2 12h2"/>
                                    <path d="M20 12h2"/>
                                    <path d="m6.34 17.66-1.41 1.41"/>
                                    <path d="m19.07 4.93-1.41 1.41"/>
                                </g>
                            </motion.svg>
                        ) : (
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
                                initial="hidden" animate="visible" exit="hidden"
                                variants={moonVariants}
                            >
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                            </motion.svg>
                        )}
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