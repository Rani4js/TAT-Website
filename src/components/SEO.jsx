import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const siteName = "Together Advanced Technologies";
const siteUrl = "https://togetherat.in";
const sharedKeywords =
  "Salesforce Marketing Cloud, Salesforce Data Cloud, Salesforce Sales Cloud, Salesforce Service Cloud, Salesforce, web design, frontend development, UI development, email marketing, digital marketing, AEM Sites, AEM authoring, AEM development, app development, ReactJS apps, React routing, Redux, component development";

const pageMetadata = {
  "/": {
    title: "Together Advanced Technologies | Digital Experience & Enterprise Technology",
    description:
      "Together Advanced Technologies builds modern digital experiences with React, Adobe Experience Manager, Salesforce Marketing Cloud, Data Cloud, web development and intelligent automation.",
    keywords: sharedKeywords,
  },
  "/about": {
    title: "About Together Advanced Technologies",
    description:
      "Learn how Together Advanced Technologies brings design, development, marketing technology and customer data together to build digital experiences.",
    keywords: sharedKeywords,
  },
  "/services": {
    title: "Salesforce, AEM & React Development Services",
    description:
      "Explore web development, React applications, UI/UX, AEM Sites, Salesforce Marketing Cloud, Data Cloud, email marketing and AI automation services.",
    keywords: sharedKeywords,
  },
  "/careers": {
    title: "Careers at Together Advanced Technologies",
    description:
      "Join Together Advanced Technologies to work on modern digital experiences, enterprise technology, marketing automation and customer data solutions.",
    keywords: sharedKeywords,
  },
  "/contact": {
    title: "Contact Together Advanced Technologies",
    description:
      "Talk to Together Advanced Technologies about web development, React, AEM, Salesforce, marketing automation or intelligent digital solutions.",
    keywords: sharedKeywords,
  },
  "/privacy": {
    title: "Privacy Policy",
    description: "Read the Together Advanced Technologies privacy policy.",
    keywords: "",
    noindex: true,
  },
  "/terms": {
    title: "Terms of Use",
    description: "Read the Together Advanced Technologies terms of use.",
    keywords: "",
    noindex: true,
  },
};

const SEO = () => {
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname] || pageMetadata["/"];
  const title = pathname === "/" ? metadata.title : `${metadata.title} | ${siteName}`;
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;
  const imageUrl = `${siteUrl}/TAT-Logo.png`;
  const robots = metadata.noindex ? "noindex, follow" : "index, follow";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: imageUrl,
    description: metadata.description,
    sameAs: [],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content={robots} />
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
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
};

export default SEO;
