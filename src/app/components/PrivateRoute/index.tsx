'use client';

import { redirect } from 'next/navigation';
import { parseCookies } from 'nookies';
import { ReactNode, useEffect } from 'react';

type PrivateRouteProps = {
  children: ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const cookies = parseCookies();
  const token = cookies['nextauth.token'];

  // useEffect(() => {
  //   if (!!token) {
  //     redirect('/login');
  //   }
  // }, [token]);

  return (
    <>
      {!!token && null}
      {!token && children}
    </>
  );
}
