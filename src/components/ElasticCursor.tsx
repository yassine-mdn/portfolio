"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"


const ElasticCursor = () => {

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const followerX = useSpring(mouseX, { mass: 0.6})
    const followerY = useSpring(mouseY, { mass: 0.6 })

    const cursorX = mouseX
    const cursorY = mouseY

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener("mousemove", moveCursor)
        return () => window.removeEventListener("mousemove", moveCursor)
    }, [mouseX, mouseY])

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
            />
            <motion.div
                className="cursorCustom w-[10px] h-[10px] rounded-full bg-white fixed z-50 mix-blend-difference pointer-events-none"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    )
};

export default ElasticCursor;