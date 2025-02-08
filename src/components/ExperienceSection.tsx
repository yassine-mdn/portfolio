import * as React from 'react';
import {getLocale, getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/Card"
import Badge from "@/components/Badge";
import {ReactIcon} from "redev-icons";
import {Mdx} from "@/components/MdRendrer";
import {allExperiences, Experience} from "contentlayer/generated";


const ExperienceSection = async () => {

    const locale = await getLocale();

    const experiences:  Experience[]| undefined = allExperiences.filter(
        (experience) => experience.lang === locale
    ).sort (({date: a}, {date: b}) => a > b ? -1 : a < b ? 1 : 0)

    if (!experiences) {
        notFound()
    }

    const t = await getTranslations("Layout");
    return (
        <div className={"mt-16"}>
            <SectionHeader title={t("experience")}/>
            <div id={"experience"} className={"flex flex-col gap-y-4"}>
                {experiences.map((experience, key) => (
                    <Card key={key}>
                        <CardHeader>
                            <CardTitle>{experience.jobTitle} · {experience.company}</CardTitle>
                            <CardDescription>{experience.timeFrame}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Mdx code={experience.body.code}/>
                        </CardContent>
                        {experience.techStack &&(
                            <CardFooter>
                                <div className={"flex flex-wrap gap-2"}>
                                    {experience.techStack.map((techStack, key) => (
                                        <Badge key={key} icon={ReactIcon}>{techStack}</Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        )}
                    </Card>
                ))}

            </div>
        </div>
    );
};

export default ExperienceSection;