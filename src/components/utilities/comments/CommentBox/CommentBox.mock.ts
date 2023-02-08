import { ICommentBox } from './index';

const base: ICommentBox = {
  userId: 1,
  avatar: '',
  username: 'maguyva',
  entityId: '4',
  entitySlug: 'article',
  totalComments: 100,
  entityFirebaseId: 'firebaseId',
};

export const mockCommentBoxProps = {
  base,
};
