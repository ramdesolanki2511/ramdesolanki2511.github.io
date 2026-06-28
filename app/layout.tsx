/* eslint-disable @next/next/next-script-for-ga */
import { ReactNode } from "react";
import "./globals.css";
import Head from "next/head";
// import "tailwindcss/tailwind.css";

export const metadata = {
  applicationName: "Ramde Solanki",
  keywords: [
    "Ramde Solanki",
    "Ramde Solanki",
    "freelancers",
    "react developer",
    "reactjs freelancer",
    "nextjs"
  ],
  title: "Ramde Solanki - Web Developer, Designer and Creator.",
  description:
    "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
  alternates: {
    canonical: "https://ramdesolanki2511.github.io/"
  },
  metadataBase: new URL("https://ramdesolanki2511.github.io/"),
  openGraph: {
    title: "Ramde Solanki - Web Developer, Designer and Creator.",
    description:
      "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
    url: "https://ramdesolanki2511.github.io/",
    siteName: "Ramde Solanki",
    images: [
      {
        url: "https://ramdesolanki2511.github.io/static/misc/og.png",
        alt: "Ramde Solanki"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: [
      { rel: "icon", url: `/static/favicon/favicon.ico` },
      {
        rel: "icon",
        url: `/static/favicon/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png"
      },
      {
        rel: "icon",
        url: `/static/favicon/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png"
      },
      {
        rel: "icon",
        url: `/static/favicon/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png"
      }
    ],
    shortcut: [`/static/favicon/favicon.ico`],
    apple: [
      {
        url: `/static/favicon/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  manifest: `/static/favicon/site.webmanifest`,
  twitter: {
    card: "summary_large_image",
    title: "Ramde Solanki - Web Developer, Designer and Creator.",
    description:
      "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
    url: "https://ramdesolanki2511.github.io/",
    images: {
      url: "https://ramdesolanki2511.github.io/static/misc/og.png",
      alt: "Ramde Solanki"
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href={`/static/favicon/favicon.ico`}
          sizes="16x16"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-4H4HEZKQT1');`
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4H4HEZKQT1', {
                page_path: window.location.pathname,
              });
          `
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
