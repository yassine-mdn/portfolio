import * as React from 'react';
import {About, allAbouts} from 'contentlayer/generated'
import {getLocale, getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import {Mdx} from "@/components/MdRendrer";
import SectionHeader from "@/components/SectionHeader";

const AboutSection = async () => {

    const locale = await getLocale();

    const about : About|undefined = allAbouts.find(
        (about) => about.lang === locale
    )

    if (!about) {
        notFound()
    }

    const t = await getTranslations("Layout");


    return (
        <section id={"about"} className={"mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"}>
            <SectionHeader title={t("about")}/>
            <div className="lg:px-4">
                <Mdx code={about.body.code}/>
            </div>
        </section>
    );
};

export default AboutSection;