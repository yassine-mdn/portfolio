// @flow
"use client"

import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavLink} from "@/components/NavLink";
import {NavLinkProps} from "src/types";

type Props = {
    links: NavLinkProps[];
}

const Nav = (props: Props) => {

    const [activeLink, setActiveLink] = useState<string | null>(null);


    const goToLink = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        scrollTo(href);
    }

    const scrollTo = (href: string) => {
        setActiveLink(href);
        const el = document.getElementById(href);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
            });
            el.focus();
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                        window.history.replaceState(null, "", `#${entry.target.id}`);
                    }
                });
            },
            {threshold: 0.8}
        );

        props.links.forEach((link) => {
            const section = document.getElementById(link.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [props.links]);

    return (
        <nav className={"nav hidden lg:block"}>
            <ul className={"mt-16 w-max"}>
                {props.links.map((link: NavLinkProps, key: number) => (
                    <li key={key}>
                        <NavLink href={`#${link.href}`}
                                 active={activeLink === link.href}
                                 onClick={(event) => goToLink(event, link.href)}>
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;