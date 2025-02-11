"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/Tooltip"
import {flushSync} from "react-dom";


type Props = {
    tooltip ?: string;
};


const ThemeToggle = (props: Props) =>{
    const {theme, setTheme} = useTheme()



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
                <TooltipTrigger asChild>
                    <button className={"hover:text-foreground flex items-center p-1 cursor-pointers"}
                         onClick={() => handleThemeToggle()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={"rotate-0 scale-100 dark:-rotate-90 dark:scale-0"}
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
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={"absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100"}
                            >
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                            </svg>

                        <span className="sr-only">Toggle theme</span>
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>{props.tooltip ?? "Change Theme"}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>


    )
}

export default ThemeToggle;