import * as React from 'react';
import {About, allAbouts} from 'contentlayer/generated'

const AboutCard = () => {

    const about : About|undefined = allAbouts.find(
        (about) => about.lang === 'en'
    )

    if (!about) {
        return null
    }

    return (
        <div id={"about"} className={"h-screen w-96"}>
            {about.body.raw}
        </div>
    );
};

export default AboutCard;