import {useMDXComponent} from "next-contentlayer2/hooks"

import {cn} from "@/lib/utils"
import {ComponentPropsWithoutRef} from "react";
import Badge from "@/components/Badge";
import {
    AngularIcon,
    ArgoCDIcon,
    DjangoIcon,
    DockerIcon,
    JavaIcon,
    JenkinsIcon,
    LangchainIcon,
    NextJsIcon,
    OllamaIcon,
    PostgreSqlIcon,
    PythonIcon,
    ReactIcon,
    SpringIcon,
    TypeScriptIcon
} from "redev-icons";

const components = {
    h1: ({className, ...props}:ComponentPropsWithoutRef<"h1">) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-foreground text-4xl font-bold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h2: ({className, ...props}:ComponentPropsWithoutRef<"h2">) => (
        <h2
            className={cn(
                "mt-10 scroll-m-20 border-b pb-1 text-foreground text-3xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        />
    ),
    h3: ({className, ...props}:ComponentPropsWithoutRef<"h3">) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-foreground text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h4: ({className, ...props}:ComponentPropsWithoutRef<"h4">) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-foreground text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h5: ({className, ...props}:ComponentPropsWithoutRef<"h5">) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-foreground text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h6: ({className, ...props}:ComponentPropsWithoutRef<"h6">) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-muted font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    a: ({className, ...props}:ComponentPropsWithoutRef<"a">) => (
        <a
            className={cn("font-medium text-foreground underline underline-offset-4 after:content-['_↗']", className)}
            {...props}
        />
    ),
    p: ({className, ...props}:ComponentPropsWithoutRef<"p">) => (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-4", className)}
            {...props}
        />
    ),
    ul: ({className, ...props}:ComponentPropsWithoutRef<"ul">) => (
        <ul className={cn("list-inside marker:content-['»']", className)} {...props} />
    ),
    ol: ({className, ...props}:ComponentPropsWithoutRef<"ol">) => (
        <ol className={cn("list-inside list-decimal pl-1 ", className)} {...props} />
    ),
    li: ({className, ...props}:ComponentPropsWithoutRef<"li">) => (
        <li className={cn(" marker:text-foreground before:pl-1", className)} {...props} />
    ),
    blockquote: ({className, ...props}:ComponentPropsWithoutRef<"blockquote">) => (
        <blockquote
            className={cn(
                "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
                className
            )}
            {...props}
        />
    ),
    strong: ({className, ...props}:ComponentPropsWithoutRef<"strong">) => (
        <strong className={cn("text-foreground font-medium", className)} {...props} />
    ),
    img: ({
              className,
              alt,
              ...props
          }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={cn("rounded-md border", className)} alt={alt} {...props} />
    ),
    hr: ({...props}) => <hr className="my-4 md:my-8" {...props} />,
    Angular : () => <Badge className={"mr-2 mb-2"} icon={AngularIcon}>Angular</Badge>,
    Spring:() => <Badge className={"mr-2 mb-2"} icon={SpringIcon}>Spring</Badge>,
    Java:() => <Badge className={"mr-2 mb-2"} icon={JavaIcon}>Java</Badge>,
    React: () => <Badge className={"mr-2 mb-2"} icon={ReactIcon}>React</Badge>,
    Typescript: () => <Badge className={"mr-2 mb-2"} icon={TypeScriptIcon}>Typescript</Badge>,
    Python: () => <Badge className={"mr-2 mb-2"} icon={PythonIcon}>Python</Badge>,
    Django: () => <Badge className={"mr-2 mb-2"} icon={DjangoIcon}>Django</Badge>,
    Docker: () => <Badge className={"mr-2 mb-2"} icon={DockerIcon}>Docker</Badge>,
    Postgres: () => <Badge className={"mr-2 mb-2"} icon={PostgreSqlIcon}>PostgreSQL</Badge>,
    Jenkins: () => <Badge className={"mr-2 mb-2"} icon={JenkinsIcon}>Jenkins</Badge>,
    NextJs: () => <Badge className={"mr-2 mb-2"} icon={NextJsIcon}>Next.js</Badge>,
    Argo: () => <Badge className={"mr-2 mb-2"} icon={ArgoCDIcon}>Argo CD</Badge>,
    Langchain: () => <Badge className={"mr-2 mb-2"} icon={LangchainIcon}>Langchain</Badge>,
    Ollama: () => <Badge className={"mr-2 mb-2"} icon={OllamaIcon}>Ollama</Badge>

}

interface MdxProps {
    code: string
}

export function Mdx({code}: MdxProps) {
    const Component = useMDXComponent(code)

    return (
        <div className="mdx">
            <Component components={components}/>
        </div>
    )
}