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
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

    const goToLink = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        scrollTo(href);
    };

    const scrollTo = (href: string) => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        setActiveLink(href);
        setIsScrolling(true);

        const el = document.getElementById(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            el.focus();

            const timeout = setTimeout(() => {
                setIsScrolling(false);
            }, 800);

            setScrollTimeout(timeout);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrolling) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                        window.history.replaceState(null, "", `#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.8 }
        );

        props.links.forEach((link) => {
            const section = document.getElementById(link.href);
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        }
    }, [props.links, isScrolling, scrollTimeout]);


    return (
        <nav className={"nav hidden lg:block"}>
            <ul className={"mt-16 w-max"}>
                {props.links.map((link: NavLinkProps, key: number) => (
                        <NavLink key={key} href={`#${link.href}`}
                                 active={activeLink === link.href}
                                 onClick={(event) => goToLink(event, link.href)}>
                            {link.title}
                        </NavLink>

                ))}
            </ul>
        </nav>
    );
};

export default Nav;