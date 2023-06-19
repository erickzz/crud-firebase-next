'use client';

import { useState } from 'react';
import './login.css';
import Link from 'next/link';
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
        <button type="submit">Logar</button>
      </form>

      <p>Não possui login? Cadastre-se</p>
      <Link href="/cadastro">
        <button className="botaoCadastro">Cadastrar</button>
      </Link>
    </div>
  );
};

export default Login;
