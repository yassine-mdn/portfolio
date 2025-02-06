// @flow
import * as React from 'react';
import {NavLinkProps} from "@/types";
import Nav from "@/components/Nav";

type Props = {
    links: NavLinkProps[];
    children: React.ReactNode;
}

const Header = (props: Props) => {
    return (
        <header
            className={"lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"}>
            <div>
                <h1 className={"text-4xl font-bold tracking-tight text-foreground sm:text-5xl"}>Yassine Mouddene</h1>
                <h2 className={"mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl"}>FullStack Software
                    Engineer</h2>
                <p className={"mt-4 max-w-xs leading-normal"}>Something something something</p>
                <Nav links={props.links}/>
            </div>
            {props.children}
        </header>
    );
};

export default Header;