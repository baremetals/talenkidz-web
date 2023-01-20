export const pageview = (url: string) => {
    if (window !== undefined) {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
            page_path: url
        });
    }
}

type eventType = {
    action: string;
    params: string
}


export const pageEvent = ({ action, params}: eventType) => {
    if (window !== undefined) {
      window.gtag('event', action, params);
    }
}
