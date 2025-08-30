import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from "@/i18n/routing";
import {ThemeProvider} from "@/components/ThemeProvider";
import {Warp} from "@paper-design/shaders-react";
import ElasticCursor from "@/components/ElasticCursor";


const interFont = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
    title: "Yassine Mouddene",
    description: "My portfolio",
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}

export default async function RootLayout(props: Props) {

    const {locale} = await props.params;

    // Ensure that the incoming `locale` is valid
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
    setRequestLocale(locale);

    return (
        <html lang={locale} suppressHydrationWarning={true}>
        <body
            className={`${interFont.className} antialiased bg-background leading-7  text-muted font-normal cursor-none`}
        >
        <ElasticCursor/>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <NextIntlClientProvider messages={messages}>
                {props.children}
            </NextIntlClientProvider>
            <Warp
                proportion={0}
                softness={0.3}
                distortion={0.25}
                swirl={0.55}
                swirlIterations={10}
                shape="stripes"
                shapeScale={0.06}
                scale={1.8}
                rotation={0}
                speed={9.2}
                colors={["hsl(51,33%,92%)", "hsl(215, 85%, 77%)", "hsl(51,33%,92%)"]}
                className="fixed inset-0 pointer-events-none -z-10 h-screen w-screen dark:hidden"
            />
            <Warp
                proportion={0}
                softness={0.3}
                distortion={0.25}
                swirl={0.55}
                swirlIterations={10}
                shape="stripes"
                shapeScale={0.06}
                scale={1.8}
                rotation={0}
                speed={9.2}
                colors={["hsl(220,17%,7%)", "hsl(255, 100%, 72%)", "hsl(220,17%,7%)"]}
                className="fixed inset-0 pointer-events-none -z-10 h-screen w-screen hidden dark:block"
            />
        </ThemeProvider>
        </body>
        </html>
    );
}
