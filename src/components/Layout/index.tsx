import React, { ReactNode } from 'react';
import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from './NavBar';
import Footer from './Footer';

type LayoutProps = {
    children?: ReactNode
    title: string
    metaDescription?: string
    canonicalUrl?: string
    image?: string
}

const Layout = ({
    children,
    title,
    image,
    metaDescription,
    canonicalUrl,
}: LayoutProps) => {

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta name="robots" content="max-image-preview:large" />
                {metaDescription && (
                    <meta name='description' content={metaDescription} />
                )}
                {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}

                {/* open-graph meta */}
                <meta property='og:title' content={title} />
                {metaDescription && (<meta property='og:description' content={metaDescription} />)}                
                {image && (<meta property='og:image' content={image} />)}

                

                {/* twitter card meta */}
                <meta name='twitter:card' content="summary" />
                <meta name='twitter:title' content={title} />
                {metaDescription && <meta name='twitter:description' content={metaDescription} />}
                {}
                {image && (<meta name='twitter:image' content={image} />)}
                
            </Head>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
