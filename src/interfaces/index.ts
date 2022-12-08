import { FirebaseUserType } from 'src/lib/firebase';

export interface User {
  id?: string;
  firebaseUserId?: string;
  username?: string;
  fullName?: string;
  avatar?: string;
  backgroundImg?: string;
  userType?: string;
  bio?: string;
  mailinglist?: boolean;
  membership?: string;
  firebasePassword?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  gender?: string;
  pronoun?: string;
  createdAt?: string;
  updatedAt?: string;
  organisation?: [Object];
}

export interface AuthState {
  user: User | null;
  firebaseUser: FirebaseUserType| null;
  authenticated: boolean;
  loading: boolean;
  // error?: string;
}