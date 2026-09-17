import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const siteName = "Together Advanced Technologies";
const siteUrl = "https://togetherat.in";

const pageMetadata = {
  "/": {
    title: "Digital Technology Partner for What's Next",
    description:
      "Together Advanced Technologies connects design, development, marketing and data to build digital experiences that move businesses forward.",
    keywords:
      "digital technology partner, web design, React development, AEM development, Salesforce, digital marketing, application support",
  },
  "/about": {
    title: "About Together Advanced Technologies",
    description:
      "Learn how Together Advanced Technologies brings people, purpose and technology together to create useful, lasting digital experiences.",
    keywords:
      "about TAT, digital technology company, digital transformation partner, technology consulting, product development",
  },
  "/services": {
    title: "Digital Design, Development and Technology Services",
    description:
      "Explore TAT services across web design, React apps, AEM development, Salesforce, marketing, application support and technical staffing.",
    keywords:
      "web design services, React development, AEM development, Salesforce services, marketing technology, application maintenance, technical staffing",
  },
  "/careers": {
    title: "Careers at Together Advanced Technologies",
    description:
      "Build meaningful digital work with a curious, collaborative team at Together Advanced Technologies.",
    keywords:
      "TAT careers, technology jobs, React developer jobs, AEM jobs, Salesforce careers, digital marketing careers",
  },
  "/contact": {
    title: "Contact Together Advanced Technologies",
    description:
      "Start a conversation with Together Advanced Technologies about your digital product, technology, marketing or support needs.",
    keywords:
      "contact TAT, digital technology consultation, web development enquiry, technology partner, project consultation",
  },
};

const SEO = () => {
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname] || pageMetadata["/"];
  const title = `${metadata.title} | ${siteName}`;
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;
  const imageUrl = `${siteUrl}/favicon-512.png`;

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
