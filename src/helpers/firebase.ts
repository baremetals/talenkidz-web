import { TNotifications } from 'src/types';
import { updateStrapiEntity } from '.';
import {
  addDoc,
  collection,
  db,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  DocumentData,
} from '../lib/firebase';


type IComment = {
  userId: number;
  username: string;
  avatar: string;
  entityStrapiId: string;
  entitySlug: string;
  body: string;
};

export const addToFirebaseArticle = async (
  articleSlug: string,
  articleId: string,
  totalComments: number,
  data: IComment
) => {
  return addDoc(collection(db, 'articles'), {
    articleSlug,
    articleId,
    createdAt: Timestamp.fromDate(new Date()),
    updatedAt: Timestamp.fromDate(new Date()),
  }).then(async (res) => {
    const article_id = res.id;
    // await addToFirebaseComment(article_id, data);
    // await updateStrapiEntity('articles', articleId, {
    //   firebaseId: article_id,
    //   totalComments: totalComments + 1,
    // });

    const commentPromise = addToFirebaseComment(article_id, data);
    const updateStrapiPromise = updateStrapiEntity('articles', articleId, {
      firebaseId: article_id,
      totalComments: totalComments + 1,
    });

    await Promise.all([
      commentPromise,
      updateStrapiPromise,
    ]);
    // return 'success'
  });
};

export const addToFirebaseComment = async (
  entityFirebaseId: string,
  data: IComment
) => {
  return addDoc(collection(db, 'comments'), {
    ...data,
    entityFirebaseId,
    createdAt: Timestamp.fromDate(new Date()),
    updatedAt: Timestamp.fromDate(new Date()),
  });
};

export const getFirebaseComments = async (entityFirebaseId: string) => {
  const q = query(
    collection(db, 'comments'),
    where('entityFirebaseId', '==', entityFirebaseId),
    orderBy('createdAt', 'desc'),
    limit(4)
  );
  const comments: DocumentData[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data());
    comments.push(doc.data());
  });

  return comments;
};

export const commentsListener = async (entityFirebaseId: string) => {
  const q = query(
    collection(db, 'comments'),
    where('entityFirebaseId', '==', entityFirebaseId),
    orderBy('createdAt', 'desc'),
    limit(4)
  );
  const comms: DocumentData[] = [];
  // console.log(entityFirebaseId);
  return onSnapshot(q, (querySnapshot) => {
    // const comms: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data().entityFirebaseId)
      return comms.push(doc.data());
    });
    // console.log('checking to see how many items it brings: ', comms)
    return comms;
    // return comms
  });

  // console.log('Current comms: ', testing);
  // return unsubscribe();
};

export const updateAComment = async (docId: string, body: string) => {
  const commentRef = doc(db, 'comments', docId);

  await updateDoc(commentRef, {
    body,
    updatedAt: Timestamp.fromDate(new Date()),
  });
};

export const deleteAComment = async (docId: string) => {
  await deleteDoc(doc(db, 'comments', docId));
};

export const createFirebaseNotification = async (
  data: TNotifications
) => {
  return addDoc(collection(db, 'notifications'), {
    ...data,
    read: false,
    emailNotificationsOn: true,
    appNotificationsOn: true,
    createdAt: Timestamp.fromDate(new Date()),
  });
};

export const updateNotification = async (docId: string) => {
  const notificationRef = doc(db, 'notifications', docId);
  await updateDoc(notificationRef, {
    read: true,
    updatedAt: Timestamp.fromDate(new Date()),
  });
};

export const deleteNotification = async (docId: string) => {
  await deleteDoc(doc(db, 'notifications', docId));
};
