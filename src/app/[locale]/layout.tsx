import {ThemeProvider} from "@/components/theme-provider";
import {MainNav} from "@/components/main-nav";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Inter} from "next/font/google";
import {ReactNode} from "react";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {i18nConfig} from "../../../messages/config";

const inter = Inter({subsets: ["latin"]});

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
                                           params: {locale}
                                       }: Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'Home'});

    return {
        title: t('title')
    };
}

export default function LocaleLayout({children, params: {locale}}: Props) {
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale} suppressHydrationWarning={true}>
        <body className={`${inter.className} h-screen`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <div className="hidden flex-col md:flex">
                <div className="border-b">
                    <MainNav className="mx-6"/>
                </div>
            </div>
                {children}
            <Analytics/>
            <SpeedInsights/>
        </ThemeProvider>
        </body>
        </html>
    );
}
