"use client"
import * as React from 'react';
import useSticky from "@/hooks/useSticky";
import {cn} from "@/lib/utils";

type Props = {
    title: string;
};

const baseStyle = "sticky top-0 left-0 z-20 -mx-6 mb-6 w-screen px-6 py-5 bg-transparent opacity-100 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
const dotsBg = "bg-[radial-gradient(transparent_1px,var(--background)_1px)] bg-[size:4px_4px] backdrop-blur-[3px] [mask:linear-gradient(rgb(0,0,0)_80%,rgba(0,0,0,0)_100%)]"

const SectionHeader = (props: Props) => {
    const {ref, isSticky} = useSticky();
    return (
        <div ref={ref} className={cn(baseStyle, isSticky ? dotsBg : "")}>
            <h4 className={"text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only"} >{props.title}</h4>
        </div>
    );
};

export default SectionHeader;