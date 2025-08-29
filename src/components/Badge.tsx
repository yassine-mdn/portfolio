import * as React from 'react';
import {cn} from "@/lib/utils";


interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    children: string
}

const Badge: React.FC<BadgeProps> = ({ icon: Icon, children, className, ...props }) => {
    return (
        <span className={cn("bg-badge backdrop-blur-lg rounded-md py-0.5 px-1.5 w-fit leading-none inline-flex items-center gap-0.5 align-middle border border-border", className)} {...props}>
            {Icon && (
                    <Icon className={"block rounded-sm"}/>
            )}
            <span className={"text-muted text-sm font-light "}>{children}</span>
        </span>
    );
};

export default Badge;