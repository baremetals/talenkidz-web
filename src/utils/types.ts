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

export type FileType = {
  lastModified: any;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
} | null

export type FormProps = {
  title: string;
  description: string;
  category: string;
  body: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  listImage: FileType;
  name: string;
  street: string;
  town: string;
  postCode: string;
  id: string;
  linkButtonText: string;
  link: string;
  price: number;
  venue: string;
};
