import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {
    AngularIcon,
    DjangoIcon,
    DockerIcon,
    ElasticsearchIcon,
    JavaIcon,
    JiraIcon,
    PostgreSqlIcon,
    PythonIcon,
    ReactIcon,
    RedisIcon, ScikitLearnIcon,
    SpringIcon,
    TypeScriptIcon,
    ViteJSIcon
} from "redev-icons";
import * as React from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const techIconsRecord: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    "Angular": AngularIcon,
    "Spring": SpringIcon,
    "Java": JavaIcon,
    "React": ReactIcon,
    "Typescript": TypeScriptIcon,
    "Python": PythonIcon,
    "Django": DjangoIcon,
    "Docker": DockerIcon,
    "Postgres": PostgreSqlIcon,
    "PostgreSql": PostgreSqlIcon,
    "PostgreSQL": PostgreSqlIcon,
    "Redis": RedisIcon,
    "Elasticsearch": ElasticsearchIcon,
    "Elastic Stack": ElasticsearchIcon,
    "Jira": JiraIcon,
    "Vite": ViteJSIcon,
    "ScikitLearn": ScikitLearnIcon,
};

