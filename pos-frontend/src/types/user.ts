export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'cashier' | 'user';
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
