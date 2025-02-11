"use client"

import {useParams} from 'next/navigation';
import {usePathname, useRouter} from '@/i18n/routing';

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/Tooltip"
import EnIcon from "@/components/icons/EnIcon";
import FrIcon from "@/components/icons/FrIcon";

type Props = {
    tooltip: string,
};
const LocaleToggle = (props: Props) => {

    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const changeLocale = () => {
        const newLocale = params.locale == "en" ? "fr": "en";
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            {pathname, params},
            {locale: newLocale},
        );
    }

    if (!params.locale)
        return null;


    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className={"cursor-pointer hover:text-foreground p-1"} onClick={changeLocale}>
                        {params.locale == "en"? (
                            <EnIcon/>
                        ): (
                            <FrIcon/>
                        )}
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>{props.tooltip}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default LocaleToggle;