import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const siteName = "Together Advanced Technologies";
const siteUrl = "https://togetherat.in";
const sharedDescription =
  "TAT delivers Salesforce Marketing Cloud, Data Cloud, Sales Cloud and Service Cloud solutions, AEM sites and authoring, web design, React app development, UI engineering and digital marketing.";
const sharedKeywords =
  "Salesforce Marketing Cloud, Salesforce Data Cloud, Salesforce Sales Cloud, Salesforce Service Cloud, Salesforce, web design, frontend development, UI development, email marketing, digital marketing, AEM Sites, AEM authoring, AEM development, app development, ReactJS apps, React routing, Redux, component development";

const pageMetadata = {
  "/": {
    title:
      "Together Advanced Technologies | design, development, marketing and data to build digital experiences",
    description: sharedDescription,
    keywords: sharedKeywords,
  },
  "/about": {
    title: "About Together Advanced Technologies",
    description: sharedDescription,
    keywords: sharedKeywords,
  },
  "/services": {
    title: "Salesforce, AEM & React Development Services",
    description: sharedDescription,
    keywords: sharedKeywords,
  },
  "/careers": {
    title: "Careers at Together Advanced Technologies",
    description: sharedDescription,
    keywords: sharedKeywords,
  },
  "/contact": {
    title: "Contact Together Advanced Technologies",
    description: sharedDescription,
    keywords: sharedKeywords,
  },
};

const SEO = () => {
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname] || pageMetadata["/"];
  const title = pathname === "/" ? metadata.title : `${metadata.title} | ${siteName}`;
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;
  const imageUrl = `${siteUrl}/TAT-Logo.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: imageUrl,
    description: metadata.description,
    sameAs: [],
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a0a0a" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${siteName} logo`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${siteName} logo`} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
