import * as React from 'react';

type Props = {
    icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    children: string
}
const Badge = (props: Props) => {
    return (
        <span className={"bg-badge rounded-md py-0.5 px-1.5 w-fit leading-none inline-flex items-center gap-0.5 align-middle border border-border"}>
            {props.icon && (
                    <props.icon className={"block rounded-sm"}/>
            )}
            <span className={"text-muted text-sm font-light "}>{props.children}</span>
        </span>
    );
};

export default Badge;