"use client"

import * as React from 'react';
import {cn} from '@/lib/utils';
import {AnimatePresence, HTMLMotionProps, motion} from 'motion/react';


interface NavLinkProps
    extends HTMLMotionProps<"a"> {
    active: boolean;
}


const defaultStyle = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium hover:text-foreground origin-[0]";

const NavLink: React.FC<NavLinkProps> = ({active, className, ...props}) => {


    return (
        <li  className="relative list-none flex flex-col items-start pl-2">
            <motion.a
                {...props}
                className={cn(
                    defaultStyle,
                    active ? "text-foreground" : "text-muted",
                    className
                )}
              initial={false}
            />
            <AnimatePresence>
                {active && (
                    <motion.div
                        layoutId="underline"
                        className="h-3 w-0.5 bg-foreground rounded absolute left-0 top-1"
                        transition={{ type: "spring", stiffness: 500, damping: 50 }}
                    />
                )}
            </AnimatePresence>
        </li>
    );
};


export {NavLink, type NavLinkProps};