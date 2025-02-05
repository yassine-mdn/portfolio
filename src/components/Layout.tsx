import * as React from 'react';
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import {NavLinkProps} from "src/types";
import {getTranslations} from "next-intl/server";

type Props = {
    children: React.ReactNode;
    location: string,
};


const Layout = async (props: Props) => {

    const t = await getTranslations("Layout");

    const links: NavLinkProps[] = [
        {
            href: "about",
            title: t("about"),
        },
        {
            href: "experience",
            title: t("experience"),
        },
        {
            href: "projects",
            title: t("projects"),
        },
    ]

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