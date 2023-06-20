'use client';

import { useState } from 'react';
import './login.css';
import logar from '@/app/firebase/auth/logar';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    logar(email, senha);
    router.push('/');
  };

  return (
    <div className="containerLogin">
      <h2>Logado: Não</h2>
      <form onSubmit={formSubmitHandler} className="formLogin">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
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
