export interface User {
  id: number;
  email: string;
  name: string;
  profile_image: string;
}

export interface AuthState {
  access_token: string | null;
  loading: boolean;
  error: string | null;
  user: User | null;
}
