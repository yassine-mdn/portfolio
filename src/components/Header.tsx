// @flow
import * as React from 'react';
import {NavLinkProps} from "@/types";
import Nav from "@/components/Nav";
import Link from "next/link";

type Props = {
    links: NavLinkProps[];
    jobTitle: string;
    subTitle: string;
    children: React.ReactNode;
}

const Header = (props: Props) => {
    return (
        <header
            className={"lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 cursor-pointer"}>
            <div>
                <Link href={"/"} className={"text-4xl font-bold tracking-tight text-foreground sm:text-5xl cursor-pointer"}>Yassine Mouddene</Link>
                <h2 className={"mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl"}>{props.jobTitle}</h2>
                <p className={"mt-4 max-w-xs leading-normal"}>{props.subTitle}</p>
                <Nav links={props.links}/>
            </div>
            {props.children}
        </header>
    );
};

export default Header;