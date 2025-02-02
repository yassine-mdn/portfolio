// @flow
import * as React from 'react';
import Header from "@/app/component/Header";
import Nav from "@/app/component/Nav";
import {NavLinkProps} from "@/app/types";

type Props = {
    children: React.ReactNode;
    location: string
};


const links: NavLinkProps[] = [
    {
        href: "about",
        title: "About",
    },
    {
        href: "experience",
        title: "Experience",
    },
    {
        href: "projects",
        title: "Projects",
    }
]


const Layout = (props: Props) => {


    return (
        <div className="lg:flex lg:justify-between lg:gap-4">
            <Header>
                <Nav links={links}/>
            </Header>
            {props.children}
        </div>
    );
};

export default Layout;