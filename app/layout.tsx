import { ThemeProvider } from 'next-themes';
import '../styles/globals.scss';

export const metadata = {
    title: "Are we headless yet? Yes! | Wagtail",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="preload"
                    href="/fonts/inter/inter-regular.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/inter/inter-bold.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/inter/inter-black.woff2"
                    as="font"
                    crossOrigin=""
                />
            </head>
            <body>
                <ThemeProvider defaultTheme="dark">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

