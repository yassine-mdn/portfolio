type Props = {
    locale: string;
    text: string;
};
const ViewResumeButton = (props: Props) => {

    const version = props.locale === "fr"?"FR":"EN"


    return (
        <a
            className={"block mt-8 lg:px-4 font-semibold text-foreground leading-none tracking-tight hover:underline underline-offset-4 after:content-['_↗'] after:inline-block after:ml-1 after:transition-transform after:duration-200 hover:after:animate-floatArrow"}
            href={`/cv/CV%20-%20Yassine%20Mouddene%20(${version}).pdf`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.text}
        </a>
    );
};

export default ViewResumeButton;