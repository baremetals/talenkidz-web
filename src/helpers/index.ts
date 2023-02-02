import axios from 'axios';
import { ComponentLikesLikes } from 'generated/graphql';
import { TBookMark } from 'src/types';


export const addToMailingList = async (email: string) => {
  return axios.post('/api/sendgrid', {
    data: {
      email,
    },
  });
};

export type ILike = {
    userId: string;
};

type contents = {
  totalComments?: number;
  firebaseId?: string;
  likes?: ComponentLikesLikes[] | ILike;
};

export const updateStrapiEntity = async (entityName: string, entityId: string, contents: contents) => {
  return axios.post('/api/entity/update', {
    data: {
      entity: entityName,
      id: entityId,
      contents: contents
    },
  });
};

export const fetchStrapiUser = async () => {
  return axios.get('/api/user/me');
};


export const updateStrapiUserBookMarks = async (bookmarklist: TBookMark[]) => {
  return axios.post('/api/user/bookmark', {
    data: bookmarklist,
  });
};
