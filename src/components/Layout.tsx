import * as React from 'react';
import Header from "@/components/Header";
import {NavLinkProps} from "src/types";
import {getTranslations} from "next-intl/server";
import SocialLink from "@/components/SocialLink";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import ThemeToggle from "@/components/ThemeToggle";

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
            <Header links={links}>
                <div className="mt-8 inline-flex gap-2 items-center">
                    <SocialLink tooltip={t("github")} href={"https://github.com/yassine-mdn"} icon={GithubIcon}/>
                    <SocialLink tooltip={t("linkedin")} href={"https://linkedin.com/in/yassine-mouddene"} icon={LinkedinIcon}/>
                    <ThemeToggle tooltip={t("theme")} />
                </div>
            </Header>
            {props.children}
        </div>
    );
};

export default Layout;