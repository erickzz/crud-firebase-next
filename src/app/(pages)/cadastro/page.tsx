'use client';

import { useState } from 'react';
import '../login/login.css';
import { useRouter } from 'next/navigation';
import cadastrar from '@/app/firebase/auth/cadastrar';

const Cadastro = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    cadastrar(email, senha);
    console.log(email, senha);
    router.push('/login');
  };

  const navegarParaLogin = () => {
    router.push('login');
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
        <button type="submit">Cadastrar</button>
      </form>

      <button className="botaoCadastro" onClick={navegarParaLogin}>
        Voltar
      </button>
    </div>
  );
};

export default Cadastro;
