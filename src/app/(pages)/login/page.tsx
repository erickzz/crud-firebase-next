'use client';

import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '../../context/auth-context';
import logar from '@/app/firebase/auth/logar';
import classes from './login.module.css';

const Login = () => {
  const router = useRouter();

  const ctx = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    logar(email, senha);
    setEmail('');
    setSenha('');
    console.log(ctx.isLogged);
  };

  useEffect(() => {
    if (ctx.isLogged) {
      router.push('/users');
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.containerLogin}>
        <form onSubmit={formSubmitHandler} className={classes.formLogin}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSenha(e.target.value)
            }
          />
          <button className={classes.button} type="submit">
            Logar
          </button>
        </form>

        <div className={classes.containerCadastro}>
          <p>Não possui login? Cadastre-se</p>
          <button
            className={classes.button}
            onClick={() => router.push('/cadastro')}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
