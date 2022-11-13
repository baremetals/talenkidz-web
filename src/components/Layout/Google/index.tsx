import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy='afterInteractive'
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {
         `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          console.log('${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}')
          
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
         ` 
        }
      </Script>
    </>
  );
};

export default GoogleAnalytics;

// {
//   `
//         consolelog('fever')
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){dataLayer.push(arguments);}
//         gtag('js', new Date());

//         gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID});
//                 `}
