import * as React from 'react';
import Header from "@/components/Header";
import {NavLinkProps} from "src/types";
import {getTranslations} from "next-intl/server";
import SocialLink from "@/components/SocialLink";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import ThemeToggle from "@/components/ThemeToggle";
import LocaleToggle from "@/components/LocaleToggle";
import Footer from "@/components/Footer";

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
                    <SocialLink tooltip={t("linkedin")} href={"https://linkedin.com/in/yassine-mouddene"}
                                icon={LinkedinIcon}/>
                    <LocaleToggle tooltip={t("language")}/>
                    <ThemeToggle tooltip={t("theme")}/>
                </div>
            </Header>
            <main className="pt-24 lg:w-[52%] lg:py-24">
                {props.children}
                <Footer/>
            </main>
        </div>
);
};

export default Layout;