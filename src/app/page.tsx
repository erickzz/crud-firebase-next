'use client';

import { useState, useContext } from 'react';
import classes from './page.module.css';
import { useRouter } from 'next/navigation';
import deslogar from './firebase/auth/logout';
import AuthContext from '@/context/auth-context';

const Home = () => {
  const ctx = useContext(AuthContext);

  const router = useRouter();

  const navegarCadastro = () => {
    router.push('/login');
  };

  const deslogarHandler = () => {
    deslogar();
  };

  return (
    <>
      <div className="navbar">
        <button onClick={navegarCadastro}>Entrar</button>
      </div>
      <div className={classes.container}>
        <p>
          Aplicação teste com o intuito de realizar um CRUD utilizando o
          Firebase
        </p>
        <p className={classes.logado}>
          {ctx.isLogged ? 'Logado.' : 'Não Logado'}
        </p>
        {ctx.isLogged ? (
          <button onClick={deslogarHandler}>Deslogar</button>
        ) : null}
      </div>
    </>
  );
};

export default Home;
