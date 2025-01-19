'use client';
import { redirect } from 'next/navigation';
import { setCookie } from 'nookies';
import { createContext, ReactNode, useState } from 'react';

import signInRequest from '../../services/Auth';

type User = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};
type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

type AuthProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    const { token } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, //1 hour
    });

    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
