import * as React from 'react';
import {About, allAbouts} from 'contentlayer/generated'
import { getLocale } from "next-intl/server";
import {notFound} from "next/navigation";
import {Mdx} from "@/components/MdRendrer";

const AboutCard = async () => {

    const locale = await getLocale();

    const about : About|undefined = allAbouts.find(
        (about) => about.lang === locale
    )

    if (!about) {
        notFound()
    }


    return (
        <div id={"about"} className={"h-screen"}>
            <Mdx code={about.body.code}/>
        </div>
    );
};

export default AboutCard;