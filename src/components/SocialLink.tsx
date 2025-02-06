import * as React from 'react';
import {Tooltip, TooltipContent,TooltipProvider, TooltipTrigger} from '@/components/Tooltip';

type Props = {
    tooltip: string;
    href: string;
    icon: React.FC
};
const SocialLink = (props: Props) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <a className={"hover:text-foreground text-muted"} target="_blank" href={props.href}>
                        <props.icon/>
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{props.tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default SocialLink;