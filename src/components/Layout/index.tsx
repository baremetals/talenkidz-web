import React, { ReactNode } from 'react';
import Head from "next/head";
import dynamic from "next/dynamic";

type LayoutProps = {
    children?: ReactNode
    title: string
    metaDescription?: string
    canonicalUrl?: string
}

const Layout = ({
    children,
    title,
    metaDescription,
    canonicalUrl,
}: LayoutProps) => {

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <meta property='og:title' content='My page title' />
                {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}
                {metaDescription && (
                <meta name='description' content={metaDescription} />
                )}
            </Head>
            {children}
        </div>
    );
};

export default Layout;