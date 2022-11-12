export type onlineLocationType = {
  '@type': string;
  url: string;
};

export type locationType = {
  '@type': string;
  name: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
};

export type bothLocationType = [onlineLocationType, locationType];
