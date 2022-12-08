// @ts-check
import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import { AuthProvider } from '../src/context/AuthContext';


import '../src/styles/globals.css';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (/** @type {JSX.IntrinsicAttributes & Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "src" | "srcSet" | "ref" | "width" | "height" | "loading" | "style"> & { src: any; width?: string | number | undefined; height?: string | number | undefined; layout?: "fixed" | "fill" | "intrinsic" | "responsive" | undefined; loader?: NextImage.ImageLoader | undefined; quality?: string | number | undefined; priority?: boolean | undefined; loading?: "lazy" | "eager" | undefined; lazyBoundary?: string | undefined; placeholder?: ("blur" | "empty") | undefined; blurDataURL?: string | undefined; unoptimized?: boolean | undefined; objectFit?: import("csstype").Property.ObjectFit | undefined; objectPosition?: import("csstype").Property.ObjectPosition<string | number> | undefined; onLoadingComplete?: ((result: { naturalWidth: number; 
    // Allow Storybook to handle Next's <Image> component
    naturalHeight: number; }) => void) | undefined; }} */ props) => <OriginalNextImage {...props} unoptimized />,
});



export const decorators = [
  (Story) => (
    <AuthProvider>
      <Story />
    </AuthProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
