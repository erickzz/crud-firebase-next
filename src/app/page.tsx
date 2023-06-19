'use client';

import { useState } from 'react';
import classes from './page.module.css';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase/config';
import deslogar from './firebase/auth/logout';

const Home = () => {
  const [logado, setLogado] = useState<boolean>(false);

  const router = useRouter();

  const navegarCadastro = () => {
    router.push('/login');
  };

  const auth = getAuth(app);
  const user = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogado(true);
      console.log(user.uid);
    }
  });

  const deslogar = () => {
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
        <p className={classes.logado}>{logado ? 'Logado.' : 'Não Logado'}</p>
        {logado ? <button onClick={deslogar}>Deslogar</button> : null}
      </div>
    </>
  );
};

export default Home;
