// @flow
import * as React from 'react';
import {NavLink} from "@/app/component/NavLink";
import {NavLinkProps} from "@/app/types";

type Props = {
    links: NavLinkProps[];
}

const Nav = (props: Props) => {
    return (
        <nav className={"nav hidden lg:block"}>
            <ul className={"mt-16 w-max"}>
                {props.links.map((link: NavLinkProps, key: number) => (
                    <li key={key}>
                        <NavLink href={`#${link.href}`} active={true}>{link.title} </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;