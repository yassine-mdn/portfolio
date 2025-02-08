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
        <div id={"about"} className={"pt-24"}>
            <SectionHeader title={t("about")}/>
            <div className="px-4">
                <Mdx code={about.body.code}/>
            </div>
        </div>
    );
};

export default AboutSection;