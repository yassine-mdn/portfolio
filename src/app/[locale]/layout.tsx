import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from "@/i18n/routing";
import {ThemeProvider} from "@/components/ThemeProvider";
import {Warp} from "@paper-design/shaders-react";


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

    const { locale  } = await props.params;

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
          className={`${interFont.className} antialiased bg-background mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 leading-7  text-muted font-normal`}
      >
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
              colors={[
                  "rgb(15, 17, 21)",
                  "hsl(255, 100%, 72%)",
                  "rgb(15, 17, 21)"
              ]}
              className={"fixed inset-0 pointer-events-none -z-10 flex-none h-screen w-screen"}
          />
          {/*<div className={"fixed inset-0 pointer-events-none -z-10 flex-none"}>
              <div
                  className="absolute -z-10 inset-0 h-full w-full bg-background bg-[radial-gradient(var(--muted)_1px,transparent_1px)] bg-repeat [background-size:12px_12px] motion-safe:animate-bgMove opacity-5"/>
          </div>*/}
      </ThemeProvider>
      </body>
      </html>
  );
}
