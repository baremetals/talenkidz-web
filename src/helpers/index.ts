import axios from 'axios';
import { ComponentLikesLikes, Maybe } from 'generated/graphql';


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

