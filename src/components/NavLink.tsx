"use client"


import * as React from 'react';
import {useState} from 'react';
import {cva, VariantProps} from "class-variance-authority";
import {cn} from '@/lib/utils';
import {HTMLMotionProps, motion, Variants} from 'motion/react';


const navLinkState = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10  hover:text-foreground",
    {
        variants: {
            active: {
                false: "text-muted",
                true: "text-foreground",
            }
        },
        defaultVariants: {
            active: false
        }
    }
)

interface NavLinkProps
    extends HTMLMotionProps<"a">,
        VariantProps<typeof navLinkState> {
}

const navAnimation: Variants = {
    rest: {
        y: 0,
    },
    hover: {
        y: -30,
        transition: {
            duration: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "tween",
        }
    }
}

const navAnimationTwo: Variants = {
    rest: {
        y: 30,
    },
    hover: {
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "tween",
        }
    }
}

const NavLink = (props: NavLinkProps) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                    className={"relative items-start overflow-hidden flex flex-col"} initial={"rest"} animate={"hover"}>
            <motion.a className={cn(navLinkState({active: props.active, className: props.className}))} {...props}
                      variants={navAnimation} animate={isHovered ? "hover" : "rest"}
            />
            <div className={"absolute top-0 left-0"}>
                <motion.a className={cn(navLinkState({active: props.active, className: props.className}))} {...props}
                          variants={navAnimationTwo} animate={isHovered ? "hover" : "rest"}
                />
            </div>
        </motion.div>
    );
};


export {NavLink, type NavLinkProps};