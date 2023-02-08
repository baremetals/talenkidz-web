import React, { ReactNode } from 'react';
import Head from "next/head";
import dynamic from "next/dynamic";
import axios from 'axios';
import NavBar from './NavBar';
import AuthModal from 'components/utilities/Modal';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';
import {
  openSelector,
} from 'src/features/modal/selectors';
import { useAppSelector } from 'src/app/hooks';


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
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(openSelector);

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-unused-vars, no-async-promise-executor
    const _promise = new Promise(async function (resolve, reject) {
      const r = await axios.post('/api/policy', {
        data: { flag: 'getCookie' },
      });

      if (r.data.name === 'no cookie') {
        dispatch(openModal('POLICY_CONSENT'));
        
      } else {
        // console.log(r.data.policyOptions);
        resolve('Stuff worked!');
        // reject(Error("It broke"));
      }
    });
  }

  // const handleModal = useCallback(
  //   (type: string) => {
  //     if (type == 'terms') {
  //       dispatch(openModal('TERMS_MODAL'));
  //     } else {
  //       dispatch(openModal('LOGIN_FORM'));
  //     }
  //   },
  //   [dispatch]
  // );

  //  const structuredData = {
  //    '@context': 'https://schema.org',
  //    '@type': 'WebSite',
  //    url: 'https://www.talentkids.io',
  //  };
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
        {/* <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </Head>
      <NavBar />
      {children}
      <DynamicFooter />
      {isOpen && (
          <AuthModal />
        )}
    </div>
  );
};

export default Layout;
