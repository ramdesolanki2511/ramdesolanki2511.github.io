export default function Head({ currentPage = "Home" }) {
  const pageTitle = `${
    currentPage === "Home"
      ? "Ramde Solanki - AI-first Full Stack Developer  | React.js · Next.js · Node.js · TypeScript · Magento · WordPress"
      : `${currentPage} - Ramde Solanki`
  }`;
  const desc =
    "Building AI-powered web applications, SaaS platforms, and business automation solutions that help companies save time, increase revenue, and scale faster.";
  return (
    <>
      <link rel="manifest" href={`/static/favicon/site.webmanifest`} />
      <title>{pageTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="keywords"
        content="Ramde Solanki, , freelancers, react developer, Frontend Developer, Full Stack Developer, nextjs"
      />
      <link rel="icon" href={`/static/favicon/favicon.ico`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/static/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/static/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`static/favicon/favicon-16x16.png`}
      />
      <link rel="manifest" href={`/static/favicon/site.webmanifest`} />
      <link rel="canonical" href="https://ramdesolanki2511.github.io/" />
      <meta name="title" content={pageTitle} />
      <meta name="description" content={desc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ramdesolanki2511.github.io/" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta
        property="og:image"
        content="https://ramdesolanki2511.github.io/static/misc/og.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ramdesolanki2511.github.io/" />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={desc} />
      <meta
        property="twitter:image"
        content="https://ramdesolanki2511.github.io/static/misc/og.png"
      ></meta>
    </>
  );
}
