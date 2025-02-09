import * as React from 'react';
import {getLocale, getTranslations} from "next-intl/server";
import SectionHeader from "@/components/SectionHeader";
import {allProjects, Project} from "contentlayer/generated";
import {notFound} from "next/navigation";
import {Card, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/Card"
import {Mdx} from "@/components/MdRendrer";
import Badge from "@/components/Badge";
import {techIconsRecord} from "@/lib/utils";


const ProjectsSection = async () => {

    const locale = await getLocale();
    console.log(locale);

    const projects:  Project[]| undefined = allProjects.filter(
        (project) => project.lang === locale && project.featured
    ).sort (({date: a}, {date: b}) => a > b ? -1 : a < b ? 1 : 0)

    if (!projects) {
        notFound()
    }

    const t = await getTranslations("Layout");
    return (
        <div id={"projects"} className={"mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"}>
            <SectionHeader title={t("projects")}/>
            <div  className={"flex flex-col gap-y-4"}>
                {projects.map((project, key) => (
                    <a key={key} href={project.demo} target="_blank">
                        <Card>
                            <CardHeader>
                                <CardTitle
                                    className={project.demo && "after:content-['_↗'] after:inline-block after:ml-1 after:transition-transform after:duration-200 group-hover:after:animate-floatArrow"}>
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Mdx code={project.body.code}/>
                                {project.links && (
                                    <div className={"flex flex-wrap gap-2 mt-2"}>
                                        {project.links.map((link, key) => {
                                            return <a key={key} href={link.url} target="_blank"
                                                      className={"before:content-['🔗'] hover:underline underline-offset-4"}>{link.label}</a>
                                        })}
                                    </div>
                                )}
                            </CardContent>
                            {project.techStack &&(
                                <CardFooter>
                                    <div className={"flex flex-wrap gap-2"}>
                                        {project.techStack.map((techStack, key) => {
                                            return <Badge key={`${techStack}-${key}`} icon={techIconsRecord[techStack.replace(/[\n\r\t]/gm, "")]}>{techStack}</Badge>
                                        })}
                                    </div>
                                </CardFooter>
                            )}
                        </Card>
                    </a>
                ))}

            </div>
        </div>
    );
};

export default ProjectsSection;