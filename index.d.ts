/* eslint-disable no-unused-vars */
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
