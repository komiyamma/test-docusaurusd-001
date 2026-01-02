import React from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type {WrapperProps} from '@docusaurus/types';
import { ArticleJsonLd, BreadcrumbJsonLd } from '../../components/SEO/StructuredData';
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): JSX.Element {
  const { content } = props as any;
  const { metadata } = content || {};
  
  // Note: useSidebarBreadcrumbs must be called at the top level.
  // It relies on DocsSidebarProvider which should be present in DocPage.
  const breadcrumbs = useSidebarBreadcrumbs();

  const { title, description, date, lastUpdated, permalink, authors } = metadata || {};
  
  // Format breadcrumbs for JSON-LD
  // breadcrumbs can be null if no sidebar
  const breadcrumbList = breadcrumbs
    ? breadcrumbs.map(item => ({
        name: item.label,
        url: item.href || '#',
      }))
    : [];

  // Add the current page as the last item if not present (sometimes breadcrumbs include it, sometimes not)
  // Usually sidebar breadcrumbs exclude the current page? No, usually they *include* it or end at parent.
  // Let's check Docusaurus behavior. Usually breadcrumbs are parents.
  // User example has the current page as the last item "position: 4".
  
  // If `breadcrumbs` doesn't include current page, add it.
  // Actually, let's just use what `useSidebarBreadcrumbs` gives + current page if needed.
  // If `breadcrumbs` is null/empty, we can't do much.

  if (breadcrumbList.length > 0 && breadcrumbList[breadcrumbList.length - 1].url !== permalink) {
      // Check partial match or just append current page?
      // Usually breadcrumbs are just the path to the item.
      // Let's just append the current item title.
      breadcrumbList.push({ name: title, url: permalink });
  }

  return (
    <>
      <DocItem {...props} />
      {metadata && (
        <>
            <ArticleJsonLd 
                title={title}
                description={description}
                date={date}
                lastUpdated={lastUpdated}
                permalink={permalink}
                author={authors?.[0]?.name}
            />
            {breadcrumbList.length > 0 && (
                <BreadcrumbJsonLd breadcrumbs={breadcrumbList} />
            )}
        </>
      )}
    </>
  );
}
