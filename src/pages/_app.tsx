import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../app/store';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import nprogress from 'nprogress';
import Router from 'next/router';

import { useApollo } from 'src/hooks/apolloClient';
import { darkTheme } from 'styles/theme';

import 'styles/globals.css';
import GoogleAnalytics from 'components/Layout/Google';
import { pageview } from 'src/lib/ga';
import { AuthProvider } from 'src/features/auth/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  const startLoading = () => {
    if (typeof window !== 'undefined') {
      nprogress.start();
    }
  };
  const stopLoading = () => {
    if (typeof window !== 'undefined') {
      nprogress.done();
    }
  };

  const apolloClient = useApollo(pageProps.initialApolloState);
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    nprogress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeComplete', handleRouteChange);

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <GoogleAnalytics />
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={darkTheme}>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}
export default MyApp;
