'use client';

import { useState, useContext } from 'react';
import './login.css';
import logar from '@/app/firebase/auth/logar';
import logout from '@/app/firebase/auth/logout';
import { useRouter } from 'next/navigation';
import AuthContext from './context/auth-context';

const Login = () => {
  const router = useRouter();

  const ctx = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const formSubmitHandler = (e: React.FormEvent) => {
    console.log(ctx.isLogged);
    e.preventDefault();
    logar(email, senha);
    setEmail('');
    setSenha('');
  };

  return (
    <div className="containerLogin">
      <h2>Logado: {ctx.isLogged ? 'Sim' : 'Não'}</h2>
      {ctx.isLogged && (
        <button className="buttonDeslogar" onClick={logout}>
          Deslogar
        </button>
      )}
      <form onSubmit={formSubmitHandler} className="formLogin">
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
        <button className="button" type="submit">
          Logar
        </button>
      </form>

      <div className="loginCadastro">
        <p>Não possui login? Cadastre-se</p>
        <button className="button" onClick={() => router.push('/cadastro')}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Login;
