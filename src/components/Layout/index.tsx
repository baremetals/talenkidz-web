import React, { ReactNode } from 'react';
import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from './NavBar';


const DynamicFooter = dynamic(() => import('./Footer'), {
  ssr: false,
});

type LayoutProps = {
  children?: ReactNode;
  title?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  type?: string;
  pageUrl?: string;
  data?: string;
  keywords?: string;
  author?: string;
};


const Layout = ({
  children,
  title = `Talentkids | Discover events and activities for kids`,
  image,
  imageHeight,
  imageWidth,
  pageUrl,
  type,
  data,
  metaDescription = `Welcome to Talentkids`,
  canonicalUrl,
  keywords,
  author,
}: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="max-image-preview:large" />
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        {keywords && <meta name="keywords" content={keywords}></meta>}
        {author && <meta name="author" content={author}></meta>}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* open-graph meta */}
        <meta property="og:title" content={title} key="title" />
        {metaDescription && (
          <meta property="og:description" content={metaDescription} />
        )}
        {image && <meta property="og:image" content={image} />}
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
        <meta property="og:type" content={type} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={pageUrl} />

        {/* twitter card meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        {metaDescription && (
          <meta name="twitter:description" content={metaDescription} />
        )}
        {}
        {image && <meta name="twitter:image" content={image} />}

        <script
          key="structured-data"
          type="application/ld+json"
          // dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          dangerouslySetInnerHTML={{ __html: data as string }}
        />
      </Head>
      <NavBar />
      {children}
      <DynamicFooter />
    </div>
  );
};

export default Layout;
