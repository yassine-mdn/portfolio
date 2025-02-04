import * as React from "react"
import {useMDXComponent} from "next-contentlayer2/hooks"

import {cn} from "@/lib/utils"
import {ComponentPropsWithoutRef} from "react";

const components = {
    h1: ({className, ...props}:ComponentPropsWithoutRef<"h1">) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h2: ({className, ...props}:ComponentPropsWithoutRef<"h2">) => (
        <h2
            className={cn(
                "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        />
    ),
    h3: ({className, ...props}:ComponentPropsWithoutRef<"h3">) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h4: ({className, ...props}:ComponentPropsWithoutRef<"h4">) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h5: ({className, ...props}:ComponentPropsWithoutRef<"h5">) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h6: ({className, ...props}:ComponentPropsWithoutRef<"h6">) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    a: ({className, ...props}:ComponentPropsWithoutRef<"a">) => (
        <a
            className={cn("font-medium underline underline-offset-4", className)}
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
        <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({className, ...props}:ComponentPropsWithoutRef<"ol">) => (
        <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({className, ...props}:ComponentPropsWithoutRef<"li">) => (
        <li className={cn("mt-2", className)} {...props} />
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
        <strong className={cn("text-neutral-200 font-medium", className)} {...props} />
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