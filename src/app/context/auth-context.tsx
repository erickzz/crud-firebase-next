'use client';

import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '@/app/firebase/config';

const defaultContext = { isLogged: false };

const AuthContext = createContext(defaultContext);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const auth = getAuth(app);
    //const userAuth = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        //console.log(user.uid);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged: isLogged }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
