// @flow
import * as React from 'react';


const Header = ({children}: {children:React.ReactNode}) => {
    return (
        <header
            className={"lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"}>
            <div>
                <h1 className={"text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl"}>Yassine Mouddene</h1>
                <h2 className={"mt-3 text-lg font-medium tracking-tight text-gray-200 sm:text-xl"}>FullStack Software
                    Engineer</h2>
                <p className={"mt-4 max-w-xs leading-normal text-gray-400"}>Something something something</p>
                {children}
            </div>
        </header>
    );
};

export default Header;