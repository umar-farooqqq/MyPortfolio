import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umar's Portfolio",
  description:
    "Portfolio of Umar Farooq — a Computer Engineering student at FAST NUCES and Full-Stack Developer specializing in the MERN stack, Next.js, and modern web technologies.",
  keywords: [
    "Umar Farooq",
    "Portfolio",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Computer Engineering",
    "FAST NUCES",
  ],
  authors: [{ name: "Umar Farooq" }],
  icons: {
    icon: "/letter-u.png",
    shortcut: "/letter-u.png",
    apple: "/letter-u.png",
  },
  openGraph: {
    title: "Umar Farooq — Full-Stack Developer",
    description:
      "Computer Engineering student at FAST NUCES and Full-Stack Developer specializing in modern web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Umar Farooq Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umar Farooq — Full-Stack Developer",
    description:
      "Computer Engineering student at FAST NUCES and Full-Stack Developer specializing in modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-background text-primary min-h-screen transition-colors duration-300`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
