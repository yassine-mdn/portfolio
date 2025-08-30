"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import {useEffect, useState} from "react"


const ElasticCursor = () => {

    const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const followerX = useSpring(mouseX, { mass: 0.1})
    const followerY = useSpring(mouseY, { mass: 0.1 })


    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("A , BUTTON")) {
                setIsHoveringInteractive(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("A, BUTTON")) {
                setIsHoveringInteractive(false);
            }
        };

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };

    }, [mouseX, mouseY,isHoveringInteractive]);

    if (isHoveringInteractive) {
        console.log("interactive")
    }

    return (
        <div className="max-lg:hidden z-10">
            <motion.div
                className="follower w-[50px] h-[50px] rounded-full bg-[transparent] border-white border-2 border-solid fixed z-50 mix-blend-difference pointer-events-none"
                style={{
                    x: followerX,
                    y: followerY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isHoveringInteractive ? 0 : 100,
                }}

            />
            <motion.div
                className="cursorCustom w-[10px] h-[10px] rounded-full bg-white fixed z-50 mix-blend-difference pointer-events-none"
                style={{
                    x: mouseX,
                    y: mouseY ,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHoveringInteractive ? 50 : 10,
                    height: isHoveringInteractive ? 50 : 10,
                }}
            />
        </div>
    )
};

export default ElasticCursor;