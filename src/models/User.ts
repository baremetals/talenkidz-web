
export default class User {
  constructor(
    public id: string,
    public email: string,
    public username: string,
    public fullName: string,
    public avatar: string,
    public backgroundImg: string,
    public userType: string,
    public orgId: string,
    public slug: string,
    public orgName: string,
    public logo: string,
    public fullProfile: boolean
  ) {}
}

export interface AuthState {
  user: User| null;
  authenticated: boolean;
  loading: boolean;
}
