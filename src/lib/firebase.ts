import { initializeApp } from 'firebase/app';
// import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  DocumentData,
} from 'firebase/firestore';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  // updateProfile,
  // updatePassword,
  // reauthenticateWithCredential,
  signOut
} from 'firebase/auth';

import config from 'src/utils/database';

const firebaseApp = initializeApp(config);

export const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// connectAuthEmulator(auth, 'http://localhost:9099')

// let analytics: Analytics;

// if (firebaseApp.name && typeof window !== 'undefined') {
//   analytics = getAnalytics(firebaseApp);
// }



type FirebaseUserType = User

export {
  auth,
  // analytics,
  // logEvent,
  getDocs,
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  db,
  Timestamp,
  onSnapshot,
  query, 
  where,
  orderBy, 
  limit,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
  export type { FirebaseUserType };
  export type { DocumentData };
export default firebaseApp;
