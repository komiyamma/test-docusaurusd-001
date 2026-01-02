import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Helper to sanitize and serialize JSON-LD
const JsonLd = ({ data }: { data: Record<string, any> }) => (
  <Head>
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  </Head>
);

export const WebSiteJsonLd = () => {
  const { siteConfig } = useDocusaurusContext();
  const { url, title, tagline } = siteConfig;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${url}/#website`,
    name: title,
    inLanguage: 'ja',
    url: url,
    description: tagline,
    // potentialAction omitted for now as requested/discussed
  };

  return <JsonLd data={data} />;
};

export const ArticleJsonLd = ({
  title,
  description,
  date,
  lastUpdated,
  permalink,
  author,
}: {
  title: string;
  description?: string;
  date?: string;
  lastUpdated?: string;
  permalink: string;
  author?: string;
}) => {
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = siteConfig.url;
  const fullUrl = `${siteUrl}${permalink}`;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'ja',
    headline: title,
    url: fullUrl,
    mainEntityOfPage: fullUrl,
    about: { '@id': `${fullUrl}#id` },
    author: {
      '@type': 'Person',
      name: author || siteConfig.organizationName,
      // url: can be added if author profile exists
    },
    datePublished: date,
    dateModified: lastUpdated || date, // Fallback to published date
    description: description,
  };

  // Remove undefined fields
  Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);

  return <JsonLd data={data} />;
};

export const BreadcrumbJsonLd = ({
  breadcrumbs,
}: {
  breadcrumbs: Array<{ name: string; url: string }>;
}) => {
  const { siteConfig } = useDocusaurusContext();
  const siteUrl = siteConfig.url;

  const itemListElement = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
  }));

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return <JsonLd data={data} />;
};
