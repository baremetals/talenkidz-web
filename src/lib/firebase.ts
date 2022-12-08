import { initializeApp } from 'firebase/app';
// import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  signOut
} from 'firebase/auth';

import config from 'src/utils/database';

const firebaseApp = initializeApp(config);

export const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
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
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
  export type { FirebaseUserType };
export default firebaseApp;
